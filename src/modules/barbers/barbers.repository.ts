import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBarberDto } from './dto/create-barber.dto';

@Injectable()
export class BarbersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.barbero.findMany();
  }

  async create(data: CreateBarberDto) {
    return this.prisma.barbero.create({ data });
  }
}
