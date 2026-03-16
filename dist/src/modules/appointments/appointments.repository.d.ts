import { PrismaService } from '../../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
