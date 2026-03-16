import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.cliente.findMany();
  }

  async findById(id: number) {
    return this.prisma.cliente.findUnique({ where: { id } });
  }

  async create(data: CreateClientDto) {
    return this.prisma.cliente.create({ data });
  }

  async update(id: number, data: UpdateClientDto) {
    return this.prisma.cliente.update({ where: { id }, data });
  }
}
