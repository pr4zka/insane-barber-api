import {
  Injectable,
  ConflictException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AppointmentsRepository } from './appointments.repository';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AppointmentsService {
  constructor(
    private readonly appointmentsRepository: AppointmentsRepository,
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    return this.appointmentsRepository.findAll();
  }

  async findById(id: number) {
    const turno = await this.appointmentsRepository.findById(id);
    if (!turno) {
      throw new NotFoundException(`No se encontró el turno #${id}.`);
    }
    return turno;
  }

  async create(data: CreateAppointmentDto) {
    const existing = await this.prisma.turno.findFirst({
      where: {
        barberoId: data.barberoId,
        fecha: new Date(data.fecha),
        hora: data.hora,
        estado: { not: 'cancelado' },
      },
    });

    if (existing) {
      throw new ConflictException(
        `El barbero ya tiene un turno agendado para la fecha ${data.fecha} a las ${data.hora}. Seleccione otro horario o barbero.`,
      );
    }

    return this.appointmentsRepository.create(data);
  }

  async update(id: number, data: UpdateAppointmentDto) {
    await this.findById(id);
    return this.appointmentsRepository.update(id, data);
  }

  async confirm(id: number) {
    const turno = await this.findById(id);
    if (turno.estado !== 'pendiente') {
      throw new BadRequestException(
        `Solo se pueden confirmar turnos en estado "pendiente". Este turno está en estado "${turno.estado}".`,
      );
    }
    return this.appointmentsRepository.confirm(id);
  }

  async cancel(id: number) {
    const turno = await this.findById(id);
    if (turno.estado === 'cancelado') {
      throw new BadRequestException('Este turno ya fue cancelado.');
    }
    if (turno.estado === 'cobrado') {
      throw new BadRequestException(
        'No se puede cancelar un turno que ya fue cobrado.',
      );
    }
    return this.appointmentsRepository.cancel(id);
  }

  async reschedule(id: number, data: { fecha: string; hora: string }) {
    const turno = await this.findById(id);
    if (turno.estado === 'cancelado' || turno.estado === 'cobrado') {
      throw new BadRequestException(
        `No se puede reagendar un turno en estado "${turno.estado}".`,
      );
    }
    return this.appointmentsRepository.reschedule(id, data);
  }
}
