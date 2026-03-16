import { ReportsRepository } from './reports.repository';
export declare class ReportsService {
    private readonly reportsRepository;
    constructor(reportsRepository: ReportsRepository);
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
