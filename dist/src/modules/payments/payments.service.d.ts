import { PaymentsRepository } from './payments.repository';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateDpagoDto } from './dto/create-dpago.dto';
export declare class PaymentsService {
    private readonly paymentsRepository;
    constructor(paymentsRepository: PaymentsRepository);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    findPending(): Promise<any>;
    create(dto: CreatePaymentDto): Promise<any>;
    createDpago(dto: CreateDpagoDto): Promise<any>;
    generateDpagoLink(dto: CreateDpagoDto): Promise<{
        link: string;
        reference: string;
        monto: number;
        platformId: number;
    }>;
    findAllDeliveryNotes(): Promise<any>;
    createDeliveryNote(turnoId: number, observacion: string): Promise<any>;
    findByDpagoRef(reference: string): Promise<any>;
    getReceipt(id: number): Promise<any>;
}
