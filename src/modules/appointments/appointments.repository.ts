import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';

@Injectable()
export class AppointmentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.turno.findMany({
      include: {
        cliente: true,
        barbero: true,
        servicio: true,
        pago: true,
      },
    });
  }

  async findById(id: number) {
    return this.prisma.turno.findUnique({
      where: { id },
      include: {
        cliente: true,
        barbero: true,
        servicio: true,
        pago: true,
      },
    });
  }

  async create(data: CreateAppointmentDto) {
    return this.prisma.turno.create({
      data: {
        clienteId: data.clienteId,
        barberoId: data.barberoId,
        servicioId: data.servicioId,
        fecha: new Date(data.fecha),
        hora: data.hora,
        observacion: data.observacion,
      },
    });
  }

  async update(id: number, data: UpdateAppointmentDto) {
    return this.prisma.turno.update({
      where: { id },
      data,
    });
  }

  async confirm(id: number) {
    return this.prisma.turno.update({
      where: { id },
      data: { estado: 'confirmado' },
    });
  }

  async cancel(id: number) {
    return this.prisma.turno.update({
      where: { id },
      data: { estado: 'cancelado' },
    });
  }

  async reschedule(id: number, data: { fecha: string; hora: string }) {
    return this.prisma.turno.update({
      where: { id },
      data: {
        fecha: new Date(data.fecha),
        hora: data.hora,
      },
    });
  }
}
