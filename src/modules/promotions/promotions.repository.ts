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
    return this.prisma.promocion.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        porcentaje: data.porcentaje,
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

    return this.prisma.promocion.update({
      where: { id },
      data: updateData,
    });
  }
}
