import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { CreatePurchaseNoteDto } from './dto/create-purchase-note.dto';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
export declare class PurchasesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllSuppliers(): Promise<any>;
    findSupplierById(id: number): Promise<any>;
    createSupplier(data: CreateSupplierDto): Promise<any>;
    updateSupplier(id: number, data: Partial<CreateSupplierDto>): Promise<any>;
    private readonly orderIncludes;
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
