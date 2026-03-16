import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { CreateSupplyUsageDto } from './dto/create-supply-usage.dto';

@Injectable()
export class SuppliesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.insumo.findMany({
      orderBy: { id: 'desc' },
    });
  }

  async create(dto: CreateSupplyDto) {
    return this.prisma.insumo.create({
      data: {
        nombre: dto.nombre,
        descripcion: dto.descripcion,
        unidad: dto.unidad,
        stock: dto.stock,
        estado: dto.estado ?? true,
      },
    });
  }

  async update(id: number, dto: UpdateSupplyDto) {
    return this.prisma.insumo.update({
      where: { id },
      data: dto,
    });
  }

  async registerUsage(dto: CreateSupplyUsageDto) {
    return this.prisma.$transaction(async (tx) => {
      const usage = await tx.insumoUtilizado.create({
        data: {
          turnoId: dto.turnoId,
          insumoId: dto.insumoId,
          cantidad: dto.cantidad,
        },
        include: {
          insumo: true,
          turno: true,
        },
      });

      await tx.insumo.update({
        where: { id: dto.insumoId },
        data: {
          stock: {
            decrement: dto.cantidad,
          },
        },
      });

      return usage;
    });
  }

  async getUsageByTurno(turnoId: number) {
    return this.prisma.insumoUtilizado.findMany({
      where: { turnoId },
      include: {
        insumo: true,
      },
      orderBy: { fecha: 'desc' },
    });
  }
}
