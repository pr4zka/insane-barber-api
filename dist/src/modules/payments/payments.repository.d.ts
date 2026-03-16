import { PrismaService } from '../../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    findPending(): Promise<any>;
    create(data: CreatePaymentDto): Promise<any>;
    findAllDeliveryNotes(): Promise<any>;
    createDeliveryNote(turnoId: number, observacion: string): Promise<any>;
    findByDpagoRef(reference: string): Promise<any>;
}
