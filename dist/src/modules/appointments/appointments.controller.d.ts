import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    findAll(): Promise<any>;
    create(dto: CreateAppointmentDto): Promise<any>;
    update(id: number, dto: UpdateAppointmentDto): Promise<any>;
    confirm(id: number): Promise<any>;
    cancel(id: number): Promise<any>;
    reschedule(id: number, body: {
        fecha: string;
        hora: string;
    }): Promise<any>;
}
