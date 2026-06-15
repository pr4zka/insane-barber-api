import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDiscountDto } from './dto/create-discount.dto';

@Injectable()
export class DiscountsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.descuento.findMany();
  }

  async create(data: CreateDiscountDto) {
    const tipo = data.tipo ?? 'porcentaje';
    return this.prisma.descuento.create({
      data: {
        nombre: data.nombre,
        descripcion: data.descripcion,
        tipo,
        porcentaje: tipo === 'porcentaje' ? data.porcentaje : null,
        monto: tipo === 'monto_fijo' ? data.monto : null,
        estado: data.estado,
      },
    });
  }
}
