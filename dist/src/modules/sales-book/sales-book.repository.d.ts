import { PrismaService } from '../../prisma/prisma.service';
export declare class SalesBookRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: {
        fecha_desde?: string;
        fecha_hasta?: string;
        metodo_pago?: string;
    }): Promise<any>;
}
