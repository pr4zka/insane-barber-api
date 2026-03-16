import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    dailyIncome(fechaDesde: string, fechaHasta: string): Promise<any>;
    monthlyIncome(fechaDesde: string, fechaHasta: string): Promise<{
        totalMonto: number;
        cantidadPagos: number;
        mes: string;
    }[]>;
    appointments(fechaDesde: string, fechaHasta: string, barberoId?: string): Promise<any[]>;
    services(fechaDesde: string, fechaHasta: string): Promise<any[]>;
    complaints(fechaDesde: string, fechaHasta: string): Promise<any>;
    salesBook(fechaDesde: string, fechaHasta: string): Promise<{
        totalMonto: any;
        cantidadRegistros: any;
        registros: any;
    }>;
    supplies(fechaDesde: string, fechaHasta: string): Promise<any[]>;
}
