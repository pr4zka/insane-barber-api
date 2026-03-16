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
    return this.prisma.descuento.create({
      data,
    });
  }
}
