import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SalesBookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters?: {
    fecha_desde?: string;
    fecha_hasta?: string;
    metodo_pago?: string;
  }) {
    const where: any = {};

    if (filters?.fecha_desde || filters?.fecha_hasta) {
      where.fecha = {};
      if (filters.fecha_desde) {
        where.fecha.gte = new Date(filters.fecha_desde);
      }
      if (filters.fecha_hasta) {
        where.fecha.lte = new Date(filters.fecha_hasta);
      }
    }

    if (filters?.metodo_pago) {
      where.metodoPago = filters.metodo_pago;
    }

    return this.prisma.libroVentas.findMany({
      where,
      include: {
        pago: true,
      },
      orderBy: {
        fecha: 'desc',
      },
    });
  }
}
