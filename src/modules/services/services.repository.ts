import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.servicio.findMany();
  }

  async findById(id: number) {
    return this.prisma.servicio.findUnique({ where: { id } });
  }

  async create(data: CreateServiceDto) {
    return this.prisma.servicio.create({ data });
  }

  async update(id: number, data: UpdateServiceDto) {
    return this.prisma.servicio.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.servicio.update({
      where: { id },
      data: { estado: false },
    });
  }
}
