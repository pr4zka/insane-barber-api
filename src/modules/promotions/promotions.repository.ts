import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Injectable()
export class PromotionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.promocion.findMany();
  }

  async create(data: CreatePromotionDto) {
    const tipo = data.tipo ?? 'porcentaje';
    return this.prisma.promocion.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        tipo,
        porcentaje: tipo === 'porcentaje' ? data.porcentaje : null,
        monto: tipo === 'monto_fijo' ? data.monto : null,
        fechaInicio: new Date(data.fechaInicio),
        fechaFin: new Date(data.fechaFin),
        estado: data.estado,
      },
    });
  }

  async update(id: number, data: UpdatePromotionDto) {
    const updateData: any = { ...data };

    if (data.fechaInicio) {
      updateData.fechaInicio = new Date(data.fechaInicio);
    }
    if (data.fechaFin) {
      updateData.fechaFin = new Date(data.fechaFin);
    }

    // Si se cambia el tipo, limpiar el campo que no corresponde
    if (data.tipo === 'monto_fijo') {
      updateData.porcentaje = null;
    } else if (data.tipo === 'porcentaje') {
      updateData.monto = null;
    }

    return this.prisma.promocion.update({
      where: { id },
      data: updateData,
    });
  }
}
