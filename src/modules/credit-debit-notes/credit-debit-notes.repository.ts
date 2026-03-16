import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class CreditDebitNotesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.notaCreditoDebito.findMany({
      include: {
        pago: {
          include: {
            turno: true,
          },
        },
      },
    });
  }

  async create(data: CreateNoteDto) {
    return this.prisma.$transaction(async (tx) => {
      // Validar que el pago exista
      const pago = await tx.pago.findUnique({
        where: { id: data.pagoId },
      });

      if (!pago) {
        throw new BadRequestException(
          `El pago #${data.pagoId} no existe. Seleccione un pago valido.`,
        );
      }

      // Validar que haya caja abierta
      const cajaAbierta = await tx.caja.findFirst({
        where: { estado: 'abierta' },
      });

      if (!cajaAbierta) {
        throw new BadRequestException(
          'No se puede emitir una nota de credito/debito porque no hay caja abierta. Abra la caja primero desde la seccion "Caja".',
        );
      }

      // Validar monto
      if (data.tipo === 'credito' && data.monto > Number(pago.monto)) {
        throw new BadRequestException(
          `El monto de la nota de credito (${data.monto}) no puede ser mayor al monto del pago original (${pago.monto}).`,
        );
      }

      const nota = await tx.notaCreditoDebito.create({
        data: {
          pagoId: data.pagoId,
          tipo: data.tipo,
          monto: data.monto,
          motivo: data.motivo,
        },
      });

      const tipoMovimiento = data.tipo === 'credito' ? 'egreso' : 'ingreso';

      await tx.movimientoCaja.create({
        data: {
          cajaId: cajaAbierta.id,
          tipo: tipoMovimiento,
          concepto: `Nota de ${data.tipo}: ${data.motivo}`,
          monto: data.monto,
        },
      });

      return nota;
    });
  }
}
