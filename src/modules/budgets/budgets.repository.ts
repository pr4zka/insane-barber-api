import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Injectable()
export class BudgetsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.presupuesto.findMany({
      include: {
        cliente: true,
        detalles: {
          include: {
            servicio: true,
          },
        },
      },
      orderBy: { fecha: 'desc' },
    });
  }

  async findById(id: number) {
    return this.prisma.presupuesto.findUnique({
      where: { id },
      include: {
        cliente: true,
        detalles: {
          include: {
            servicio: true,
          },
        },
      },
    });
  }

  async create(dto: CreateBudgetDto) {
    return this.prisma.$transaction(async (tx) => {
      const detallesData = dto.detalles.map((d) => ({
        servicioId: d.servicioId,
        cantidad: d.cantidad,
        precioUnitario: d.precioUnitario,
        subtotal: d.cantidad * d.precioUnitario,
      }));

      const total = detallesData.reduce((sum, d) => sum + d.subtotal, 0);

      const presupuesto = await tx.presupuesto.create({
        data: {
          clienteId: dto.clienteId,
          observacion: dto.observacion ?? '',
          total,
          detalles: {
            create: detallesData,
          },
        },
        include: {
          cliente: true,
          detalles: {
            include: {
              servicio: true,
            },
          },
        },
      });

      return presupuesto;
    });
  }
}
