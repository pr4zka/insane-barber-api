import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';

@Injectable()
export class ComplaintsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.reclamo.findMany({
      include: {
        cliente: true,
        seguimientos: {
          orderBy: { fecha: 'desc' },
        },
      },
    });
  }

  async findById(id: number) {
    return this.prisma.reclamo.findUnique({
      where: { id },
      include: {
        cliente: true,
        seguimientos: {
          orderBy: { fecha: 'desc' },
        },
      },
    });
  }

  async create(data: CreateComplaintDto) {
    return this.prisma.reclamo.create({
      data,
    });
  }

  async update(id: number, data: UpdateComplaintDto) {
    return this.prisma.reclamo.update({
      where: { id },
      data,
    });
  }

  async getFollowUps(reclamoId: number) {
    return this.prisma.seguimientoReclamo.findMany({
      where: { reclamoId },
    });
  }

  async createFollowUp(reclamoId: number, data: CreateFollowUpDto) {
    return this.prisma.$transaction(async (tx) => {
      const seguimiento = await tx.seguimientoReclamo.create({
        data: {
          reclamoId,
          comentario: data.comentario,
          estadoNuevo: data.estadoNuevo,
        },
      });

      await tx.reclamo.update({
        where: { id: reclamoId },
        data: { estado: data.estadoNuevo },
      });

      return seguimiento;
    });
  }
}
