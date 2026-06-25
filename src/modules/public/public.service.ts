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

  // Horario de atencion: 09:00 a 19:30 cada 30 min.
  private readonly OPEN = 9;
  private readonly CLOSE = 20;

  private buildSlots(): string[] {
    const slots: string[] = [];
    for (let h = this.OPEN; h < this.CLOSE; h++) {
      for (const m of ['00', '30']) {
        slots.push(`${String(h).padStart(2, '0')}:${m}`);
      }
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

  /** Devuelve los slots del dia marcando disponibilidad segun barberos libres. */
  async getHorarios(fechaISO: string) {
    const fecha = this.parseFecha(fechaISO);

    const totalBarberos = Math.max(
      await this.prisma.barbero.count({ where: { estado: true } }),
      1,
    );

    const turnos = await this.prisma.turno.findMany({
      where: { fecha, estado: { not: 'cancelado' } },
      select: { hora: true },
    });

    const ocupadosPorHora: Record<string, number> = {};
    for (const t of turnos) {
      ocupadosPorHora[t.hora] = (ocupadosPorHora[t.hora] || 0) + 1;
    }

    return this.buildSlots().map((hora) => ({
      hora,
      disponible: (ocupadosPorHora[hora] || 0) < totalBarberos,
    }));
  }

  /** Crea (o reutiliza) el cliente y agenda un turno en estado "pendiente". */
  async crearTurno(dto: CreatePublicTurnoDto) {
    const fecha = this.parseFecha(dto.fecha);

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

    // 3) Barbero: el indicado (si esta libre) o el primer barbero libre en ese slot.
    let barberoId = dto.barberoId;
    if (barberoId) {
      const ocupado = await this.prisma.turno.findFirst({
        where: {
          barberoId,
          fecha,
          hora: dto.hora,
          estado: { not: 'cancelado' },
        },
      });
      if (ocupado) {
        throw new ConflictException(
          'Ese barbero no esta disponible en ese horario. Probá otro.',
        );
      }
    } else {
      const barberos = await this.prisma.barbero.findMany({
        where: { estado: true },
        orderBy: { id: 'asc' },
      });
      if (!barberos.length) {
        throw new BadRequestException('No hay barberos disponibles.');
      }
      const ocupados = await this.prisma.turno.findMany({
        where: { fecha, hora: dto.hora, estado: { not: 'cancelado' } },
        select: { barberoId: true },
      });
      const ocupadosSet = new Set(ocupados.map((o) => o.barberoId));
      const libre = barberos.find((b) => !ocupadosSet.has(b.id));
      if (!libre) {
        throw new ConflictException(
          'No hay disponibilidad en ese horario. Elegí otro, por favor.',
        );
      }
      barberoId = libre.id;
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
