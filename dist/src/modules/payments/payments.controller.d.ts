import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateDpagoDto } from './dto/create-dpago.dto';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    findAll(): Promise<any>;
    create(dto: CreatePaymentDto): Promise<any>;
    findPending(): Promise<any>;
    getReceipt(id: number): Promise<any>;
    createDpago(dto: CreateDpagoDto): Promise<any>;
    generateDpagoLink(dto: CreateDpagoDto): Promise<{
        link: string;
        reference: string;
        monto: number;
        platformId: number;
    }>;
    findAllDeliveryNotes(): Promise<any>;
    createDeliveryNote(body: {
        turnoId: number;
        observacion?: string;
    }): Promise<any>;
    findByDpagoRef(reference: string): Promise<any>;
}
