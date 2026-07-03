import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateQuickCheckoutDto } from './dto/create-quick-checkout.dto';

@Injectable()
export class QuickCheckoutRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(usuarioId: number, dto: CreateQuickCheckoutDto) {
    return this.prisma.$transaction(async (tx) => {
      // 1) Validar que haya caja abierta.
      const cajaAbierta = await tx.caja.findFirst({
        where: { estado: 'abierta' },
      });

      if (!cajaAbierta) {
        throw new BadRequestException(
          'No se puede registrar el cobro porque no hay caja abierta. Pedile a un administrador o recepcionista que abra la caja del dia antes de cobrar.',
        );
      }

      // 2) Resolver el barbero autenticado a partir del usuario del JWT.
      const barbero = await tx.barbero.findUnique({
        where: { usuarioId },
      });

      if (!barbero) {
        throw new BadRequestException(
          'Tu usuario no esta vinculado a un perfil de barbero. Pedile a un administrador que te enlace desde la seccion Barberos.',
        );
      }

      // 3) Validar los servicios marcados.
      if (dto.promocionId && dto.descuentoId) {
        throw new BadRequestException(
          'No se puede aplicar una promoción y un descuento al mismo tiempo. Seleccione solo uno.',
        );
      }

      const servicios = await tx.servicio.findMany({
        where: { id: { in: dto.servicioIds } },
      });

      if (servicios.length !== dto.servicioIds.length) {
        throw new BadRequestException(
          'Uno o mas servicios seleccionados no existen. Actualice la pantalla e intente nuevamente.',
        );
      }

      if (servicios.some((s) => !s.estado)) {
        throw new BadRequestException(
          'Uno o mas servicios seleccionados ya no estan activos. Actualice la pantalla e intente nuevamente.',
        );
      }

      // 4) Heuristica "es un corte": el catalogo de servicios es texto libre,
      // no hay un campo estructurado de "tipo de servicio", asi que se detecta
      // por nombre. Solo evalua los servicios del catalogo, no el texto libre
      // de "otroServicio" (no es confiable para esta heuristica).
      const esCorte = (nombre: string) => nombre.toLowerCase().includes('corte');
      const incluyeCorte = servicios.some((s) => esCorte(s.nombre));

      // 5) Nombres en el orden enviado (contrato: dto.servicioIds ya viene
      // ordenado por el catalogo) + observacion del turno.
      const nombresServicios = dto.servicioIds.map(
        (id) => servicios.find((s) => s.id === id)!.nombre,
      );
      if (dto.otroServicio?.trim()) {
        nombresServicios.push(dto.otroServicio.trim());
      }
      const observacion = nombresServicios.join(' + ');

      // 6) Cliente. Si el barbero eligio uno del buscador (clienteId), se
      // actualiza con los datos del formulario (permite corregir datos
      // viejos). Si no, se reutiliza por telefono o se crea uno nuevo, sin
      // sobreescribir nombre/email de un cliente ya existente (evita que un
      // typo del barbero corrompa un registro cargado por recepcion).
      let cliente;
      if (dto.clienteId) {
        const existente = await tx.cliente.findUnique({
          where: { id: dto.clienteId },
        });
        if (!existente) {
          throw new BadRequestException(
            'El cliente seleccionado no existe. Actualice la pantalla e intente nuevamente.',
          );
        }
        cliente = await tx.cliente.update({
          where: { id: dto.clienteId },
          data: {
            nombre: dto.clienteNombre,
            telefono: dto.clienteTelefono,
            email: dto.clienteEmail ?? null,
          },
        });
      } else {
        cliente = await tx.cliente.findFirst({
          where: { telefono: dto.clienteTelefono },
        });
        if (!cliente) {
          cliente = await tx.cliente.create({
            data: {
              nombre: dto.clienteNombre,
              telefono: dto.clienteTelefono,
              email: dto.clienteEmail ?? null,
            },
          });
        }
      }

      // 7) Aplicar promocion o descuento (mismo calculo que PaymentsRepository).
      let montoFinal = dto.precioTotal;
      let montoOriginal: number | null = null;
      let porcentajeAplicado: number | null = null;
      let promocionId: number | null = null;
      let descuentoId: number | null = null;

      if (dto.promocionId) {
        const promocion = await tx.promocion.findUnique({
          where: { id: dto.promocionId },
        });

        if (!promocion) {
          throw new BadRequestException('La promoción seleccionada no existe.');
        }
        if (!promocion.estado) {
          throw new BadRequestException('La promoción seleccionada no está activa.');
        }
        const hoy = new Date();
        if (hoy < promocion.fechaInicio || hoy > promocion.fechaFin) {
          throw new BadRequestException(
            'La promoción seleccionada no está vigente en la fecha actual.',
          );
        }

        montoOriginal = dto.precioTotal;
        if (promocion.tipo === 'monto_fijo') {
          montoFinal = Math.max(0, dto.precioTotal - Number(promocion.monto ?? 0));
        } else {
          porcentajeAplicado = Number(promocion.porcentaje);
          montoFinal = Math.round(dto.precioTotal * (1 - porcentajeAplicado / 100));
        }
        promocionId = promocion.id;
      }

      if (dto.descuentoId) {
        const descuento = await tx.descuento.findUnique({
          where: { id: dto.descuentoId },
        });

        if (!descuento) {
          throw new BadRequestException('El descuento seleccionado no existe.');
        }
        if (!descuento.estado) {
          throw new BadRequestException('El descuento seleccionado no está activo.');
        }

        montoOriginal = dto.precioTotal;
        if (descuento.tipo === 'monto_fijo') {
          montoFinal = Math.max(0, dto.precioTotal - Number(descuento.monto ?? 0));
        } else {
          porcentajeAplicado = Number(descuento.porcentaje);
          montoFinal = Math.round(dto.precioTotal * (1 - porcentajeAplicado / 100));
        }
        descuentoId = descuento.id;
      }

      // 8) Crear el turno ya "cobrado": es un walk-in que ya ocurrio, no una
      // reserva a futuro, asi que no pasa por pendiente/atendido ni corre el
      // chequeo de colision de horario (ese chequeo es para agendar a futuro).
      // Fecha/hora: se usan las que mande el barbero (por si carga el registro
      // un rato despues de terminar el corte); si no vienen, se calcula "ahora".
      let fecha: Date;
      let hora: string;
      if (dto.fecha && dto.hora) {
        fecha = new Date(`${dto.fecha}T00:00:00.000Z`);
        hora = dto.hora;
      } else {
        const ahora = new Date();
        const yyyy = ahora.getFullYear();
        const mm = String(ahora.getMonth() + 1).padStart(2, '0');
        const dd = String(ahora.getDate()).padStart(2, '0');
        fecha = new Date(`${yyyy}-${mm}-${dd}T00:00:00.000Z`);
        hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
      }

      const turno = await tx.turno.create({
        data: {
          clienteId: cliente.id,
          barberoId: barbero.id,
          servicioId: dto.servicioIds[0],
          fecha,
          hora,
          estado: 'cobrado',
          observacion,
        },
      });

      // 9) Crear pago.
      const pago = await tx.pago.create({
        data: {
          turnoId: turno.id,
          metodoPago: dto.metodoPago,
          monto: montoFinal,
          montoOriginal,
          promocionId,
          descuentoId,
          porcentajeAplicado,
        },
      });

      // 10) Movimiento de caja + libro de ventas (mismo patron que Payments).
      const conceptoParts = [observacion || 'Pago de servicio'];
      if (porcentajeAplicado) {
        conceptoParts.push(`(${porcentajeAplicado}% ${promocionId ? 'promo' : 'desc'})`);
      } else if (montoOriginal !== null && montoOriginal > montoFinal) {
        const descGs = montoOriginal - montoFinal;
        conceptoParts.push(`(-${descGs} ${promocionId ? 'promo' : 'desc'})`);
      }
      const concepto = conceptoParts.join(' ');

      await tx.movimientoCaja.create({
        data: {
          cajaId: cajaAbierta.id,
          tipo: 'ingreso',
          concepto,
          monto: montoFinal,
        },
      });

      await tx.libroVentas.create({
        data: {
          pagoId: pago.id,
          concepto,
          monto: montoFinal,
          metodoPago: dto.metodoPago,
        },
      });

      // 11) Contador de fidelidad "4 cortes": solo sube si el turno incluyo un corte.
      let clienteFinal = cliente;
      if (incluyeCorte) {
        clienteFinal = await tx.cliente.update({
          where: { id: cliente.id },
          data: { cortesFidelidad: { increment: 1 } },
        });
      }

      const c = clienteFinal.cortesFidelidad;
      const progreso = c === 0 ? 0 : ((c - 1) % 4) + 1;

      return {
        turno,
        pago,
        cliente: clienteFinal,
        fidelidad: {
          cortesFidelidad: c,
          progreso,
          meta: 4,
          completoEsteCiclo: progreso === 4,
          incluyoCorteEnEsteTurno: incluyeCorte,
        },
      };
    });
  }
}
