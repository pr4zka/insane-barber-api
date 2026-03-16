import { PrismaService } from '../../prisma/prisma.service';
export declare class ReportsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    dailyIncome(fechaDesde: string, fechaHasta: string): Promise<any>;
    monthlyIncome(fechaDesde: string, fechaHasta: string): Promise<{
        totalMonto: number;
        cantidadPagos: number;
        mes: string;
    }[]>;
    appointments(fechaDesde: string, fechaHasta: string, barberoId?: number): Promise<any[]>;
    services(fechaDesde: string, fechaHasta: string): Promise<any[]>;
    complaints(fechaDesde: string, fechaHasta: string): Promise<any>;
    salesBook(fechaDesde: string, fechaHasta: string): Promise<{
        totalMonto: any;
        cantidadRegistros: any;
        registros: any;
    }>;
    supplies(fechaDesde: string, fechaHasta: string): Promise<any[]>;
}
