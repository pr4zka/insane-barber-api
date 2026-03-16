import { PurchasesRepository } from './purchases.repository';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { CreatePurchaseNoteDto } from './dto/create-purchase-note.dto';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
export declare class PurchasesService {
    private readonly repository;
    constructor(repository: PurchasesRepository);
    findAllSuppliers(): Promise<any>;
    findSupplierById(id: number): Promise<any>;
    createSupplier(dto: CreateSupplierDto): Promise<any>;
    updateSupplier(id: number, dto: Partial<CreateSupplierDto>): Promise<any>;
    findAllOrders(): Promise<any>;
    findOrderById(id: number): Promise<any>;
    createOrder(dto: CreatePurchaseOrderDto): Promise<any>;
    approveOrder(id: number): Promise<any>;
    cancelOrder(id: number): Promise<any>;
    receiveOrder(id: number): Promise<any>;
    findAllLibroCompras(): Promise<any>;
    findAllNotasRemision(): Promise<any>;
    findAllNotasCD(): Promise<any>;
    createNotaCD(dto: CreatePurchaseNoteDto): Promise<any>;
    annulNotaCD(id: number): Promise<any>;
    findAllAdjustments(): Promise<any>;
    createAdjustment(dto: CreateAdjustmentDto): Promise<any>;
}
