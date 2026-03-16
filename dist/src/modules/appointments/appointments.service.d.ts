import { AppointmentsRepository } from './appointments.repository';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class AppointmentsService {
    private readonly appointmentsRepository;
    private readonly prisma;
    constructor(appointmentsRepository: AppointmentsRepository, prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: CreateAppointmentDto): Promise<any>;
    update(id: number, data: UpdateAppointmentDto): Promise<any>;
    confirm(id: number): Promise<any>;
    cancel(id: number): Promise<any>;
    reschedule(id: number, data: {
        fecha: string;
        hora: string;
    }): Promise<any>;
}
