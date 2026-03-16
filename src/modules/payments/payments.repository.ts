import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.pago.findMany({
      include: {
        turno: {
          include: {
            cliente: true,
            servicio: true,
          },
        },
        promocion: true,
        descuento: true,
      },
    });
  }

  async findById(id: number) {
    return this.prisma.pago.findUnique({
      where: { id },
      include: {
        turno: {
          include: {
            cliente: true,
            servicio: true,
          },
        },
        promocion: true,
        descuento: true,
      },
    });
  }

  async findPending() {
    return this.prisma.pago.findMany({
      where: { estado: 'pendiente' },
      include: {
        turno: true,
      },
    });
  }

  async create(data: CreatePaymentDto) {
    return this.prisma.$transaction(async (tx) => {
      // Validar que haya caja abierta
      const cajaAbierta = await tx.caja.findFirst({
        where: { estado: 'abierta' },
      });

      if (!cajaAbierta) {
        throw new BadRequestException(
          'No se puede registrar el cobro porque no hay caja abierta. Vaya a la seccion "Caja" y abra la caja del dia antes de cobrar.',
        );
      }

      // Validar que el turno exista y esté atendido
      const turno = await tx.turno.findUnique({
        where: { id: data.turnoId },
        include: { servicio: true, cliente: true },
      });

      if (!turno) {
        throw new BadRequestException(
          'El turno seleccionado no existe. Verifique e intente nuevamente.',
        );
      }

      if (turno.estado === 'cobrado') {
        throw new BadRequestException(
          `El turno de ${turno.cliente?.nombre ?? 'este cliente'} ya fue cobrado anteriormente.`,
        );
      }

      if (turno.estado !== 'atendido') {
        throw new BadRequestException(
          `Solo se pueden cobrar turnos con estado "atendido". El turno de ${turno.cliente?.nombre ?? 'este cliente'} está en estado "${turno.estado}". Primero marque el turno como atendido desde la Agenda.`,
        );
      }

      // No se puede aplicar promoción y descuento al mismo tiempo
      if (data.promocionId && data.descuentoId) {
        throw new BadRequestException(
          'No se puede aplicar una promoción y un descuento al mismo tiempo. Seleccione solo uno.',
        );
      }

      let montoFinal = data.monto;
      let montoOriginal: number | null = null;
      let porcentajeAplicado: number | null = null;
      let promocionId: number | null = null;
      let descuentoId: number | null = null;

      // Aplicar promoción
      if (data.promocionId) {
        const promocion = await tx.promocion.findUnique({
          where: { id: data.promocionId },
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

        montoOriginal = data.monto;
        porcentajeAplicado = Number(promocion.porcentaje);
        montoFinal = Math.round(data.monto * (1 - porcentajeAplicado / 100));
        promocionId = promocion.id;
      }

      // Aplicar descuento
      if (data.descuentoId) {
        const descuento = await tx.descuento.findUnique({
          where: { id: data.descuentoId },
        });

        if (!descuento) {
          throw new BadRequestException('El descuento seleccionado no existe.');
        }

        if (!descuento.estado) {
          throw new BadRequestException('El descuento seleccionado no está activo.');
        }

        montoOriginal = data.monto;
        porcentajeAplicado = Number(descuento.porcentaje);
        montoFinal = Math.round(data.monto * (1 - porcentajeAplicado / 100));
        descuentoId = descuento.id;
      }

      // Crear pago
      const pago = await tx.pago.create({
        data: {
          turnoId: data.turnoId,
          metodoPago: data.metodoPago,
          monto: montoFinal,
          montoOriginal: montoOriginal,
          promocionId: promocionId,
          descuentoId: descuentoId,
          porcentajeAplicado: porcentajeAplicado,
        },
      });

      // Marcar turno como cobrado
      await tx.turno.update({
        where: { id: data.turnoId },
        data: { estado: 'cobrado' },
      });

      // Registrar movimiento en caja
      const conceptoParts = [turno.servicio?.nombre ?? 'Pago de servicio'];
      if (porcentajeAplicado) {
        conceptoParts.push(`(${porcentajeAplicado}% ${promocionId ? 'promo' : 'desc'})`);
      }

      await tx.movimientoCaja.create({
        data: {
          cajaId: cajaAbierta.id,
          tipo: 'ingreso',
          concepto: conceptoParts.join(' '),
          monto: montoFinal,
        },
      });

      // Registrar en libro de ventas
      await tx.libroVentas.create({
        data: {
          pagoId: pago.id,
          concepto: conceptoParts.join(' '),
          monto: montoFinal,
          metodoPago: data.metodoPago,
        },
      });

      return pago;
    });
  }

  async findAllDeliveryNotes() {
    return this.prisma.notaRemisionVenta.findMany({
      include: { turno: { include: { cliente: true, servicio: true, barbero: true } } },
      orderBy: { fecha: 'desc' },
    });
  }

  async createDeliveryNote(turnoId: number, observacion: string) {
    return this.prisma.notaRemisionVenta.create({
      data: { turnoId, observacion },
      include: { turno: { include: { cliente: true, servicio: true, barbero: true } } },
    });
  }

  async findByDpagoRef(reference: string) {
    return this.prisma.pago.findFirst({
      where: { dpagoRef: reference },
      include: {
        turno: {
          include: {
            cliente: true,
            servicio: true,
          },
        },
      },
    });
  }
}
