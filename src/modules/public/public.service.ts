import {
  Injectable,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePublicTurnoDto } from './dto/create-public-turno.dto';

@Injectable()
export class PublicService {
  constructor(private readonly prisma: PrismaService) {}

  // Horario de atencion: 18:00 a 00:00 (medianoche). Cada corte dura 45 min,
  // asi que los turnos arrancan 18:00, 18:45, 19:30 ... y el ultimo (23:15)
  // termina justo a las 00:00. Un horario = un turno (no se reserva 2 veces).
  private readonly OPEN_MIN = 18 * 60; // 18:00
  private readonly CLOSE_MIN = 24 * 60; // 00:00
  private readonly DURACION_MIN = 45; // duracion de cada corte

  private buildSlots(): string[] {
    const slots: string[] = [];
    for (
      let start = this.OPEN_MIN;
      start + this.DURACION_MIN <= this.CLOSE_MIN;
      start += this.DURACION_MIN
    ) {
      const h = Math.floor(start / 60);
      const m = start % 60;
      slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
    }
    return slots;
  }

  private parseFecha(fechaISO: string): Date {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaISO || '')) {
      throw new BadRequestException('Fecha invalida. Usá formato YYYY-MM-DD.');
    }
    const fecha = new Date(`${fechaISO}T00:00:00.000Z`);
    if (isNaN(fecha.getTime())) {
      throw new BadRequestException('Fecha invalida.');
    }
    return fecha;
  }

  /**
   * Devuelve los slots del dia marcando disponibilidad.
   * Un horario con un turno activo (no cancelado) queda NO disponible:
   * no se puede volver a reservar un lugar ya reservado.
   */
  async getHorarios(fechaISO: string) {
    const fecha = this.parseFecha(fechaISO);

    const turnos = await this.prisma.turno.findMany({
      where: { fecha, estado: { not: 'cancelado' } },
      select: { hora: true },
    });

    const ocupados = new Set(turnos.map((t) => t.hora));

    return this.buildSlots().map((hora) => ({
      hora,
      disponible: !ocupados.has(hora),
    }));
  }

  /** Crea (o reutiliza) el cliente y agenda un turno en estado "pendiente". */
  async crearTurno(dto: CreatePublicTurnoDto) {
    const fecha = this.parseFecha(dto.fecha);

    // 0) La hora debe ser un slot valido de la agenda (18:00–00:00, cada 45').
    if (!this.buildSlots().includes(dto.hora)) {
      throw new BadRequestException(
        'Ese horario no es válido. Elegí uno de la agenda.',
      );
    }

    // 0.b) El lugar ya reservado NO se puede reservar de nuevo.
    const yaReservado = await this.prisma.turno.findFirst({
      where: { fecha, hora: dto.hora, estado: { not: 'cancelado' } },
    });
    if (yaReservado) {
      throw new ConflictException(
        'Ese horario ya fue reservado. Elegí otro, por favor.',
      );
    }

    // 1) Cliente: reutilizar por email, o crear.
    let cliente = await this.prisma.cliente.findFirst({
      where: { email: dto.correo },
    });
    if (!cliente) {
      cliente = await this.prisma.cliente.create({
        data: {
          nombre: dto.nombre,
          email: dto.correo,
          telefono: dto.numero,
        },
      });
    }

    // 2) Servicio: el indicado o el primero activo.
    let servicioId = dto.servicioId;
    if (!servicioId) {
      const servicio = await this.prisma.servicio.findFirst({
        where: { estado: true },
        orderBy: { id: 'asc' },
      });
      if (!servicio) {
        throw new BadRequestException('No hay servicios disponibles.');
      }
      servicioId = servicio.id;
    }

    // 3) Barbero: el indicado (si esta activo) o el primer barbero activo.
    // El slot ya se validó como libre arriba, asi que cualquier barbero sirve.
    let barberoId = dto.barberoId;
    if (barberoId) {
      const barbero = await this.prisma.barbero.findFirst({
        where: { id: barberoId, estado: true },
      });
      if (!barbero) {
        throw new BadRequestException('El barbero indicado no está disponible.');
      }
    } else {
      const barbero = await this.prisma.barbero.findFirst({
        where: { estado: true },
        orderBy: { id: 'asc' },
      });
      if (!barbero) {
        throw new BadRequestException('No hay barberos disponibles.');
      }
      barberoId = barbero.id;
    }

    // 4) Crear turno pendiente.
    const turno = await this.prisma.turno.create({
      data: {
        clienteId: cliente.id,
        barberoId,
        servicioId,
        fecha,
        hora: dto.hora,
        estado: 'pendiente',
        observacion: 'Reserva web',
      },
    });

    return {
      ok: true,
      id: turno.id,
      fecha: dto.fecha,
      hora: turno.hora,
      estado: turno.estado,
      mensaje: 'Turno solicitado. Te contactaremos para confirmar.',
    };
  }
}
