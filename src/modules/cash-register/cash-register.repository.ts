import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OpenRegisterDto } from './dto/open-register.dto';
import { CloseRegisterDto } from './dto/close-register.dto';
import { CreateMovementDto } from './dto/create-movement.dto';

@Injectable()
export class CashRegisterRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findCurrent() {
    return this.prisma.caja.findFirst({
      where: { estado: 'abierta' },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          },
        },
        movimientos: {
          orderBy: { fecha: 'desc' },
        },
      },
    });
  }

  async open(usuarioId: number, dto: OpenRegisterDto) {
    const existing = await this.prisma.caja.findFirst({
      where: { estado: 'abierta' },
    });

    if (existing) {
      return null;
    }

    return this.prisma.caja.create({
      data: {
        usuarioId,
        montoInicial: dto.montoInicial,
        estado: 'abierta',
      },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          },
        },
      },
    });
  }

  async close(id: number, dto: CloseRegisterDto) {
    return this.prisma.caja.update({
      where: { id },
      data: {
        montoFinal: dto.montoFinal,
        fechaCierre: new Date(),
        estado: 'cerrada',
      },
      include: {
        usuario: {
          select: {
            id: true,
            nombre: true,
            email: true,
          },
        },
        movimientos: true,
      },
    });
  }

  async getMovements(cajaId: number) {
    return this.prisma.movimientoCaja.findMany({
      where: { cajaId },
      orderBy: { fecha: 'desc' },
    });
  }

  async createMovement(cajaId: number, dto: CreateMovementDto) {
    return this.prisma.movimientoCaja.create({
      data: {
        cajaId,
        tipo: dto.tipo,
        concepto: dto.concepto,
        monto: dto.monto,
      },
    });
  }

  async getCollections() {
    const collections = await this.prisma.pago.groupBy({
      by: ['metodoPago', 'fecha'],
      _sum: {
        monto: true,
      },
      _count: {
        id: true,
      },
      orderBy: {
        fecha: 'desc',
      },
    });

    return collections.map((c) => ({
      metodoPago: c.metodoPago,
      fecha: c.fecha,
      total: c._sum.monto,
      cantidad: c._count.id,
    }));
  }
}
