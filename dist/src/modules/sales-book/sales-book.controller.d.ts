import { SalesBookService } from './sales-book.service';
export declare class SalesBookController {
    private readonly salesBookService;
    constructor(salesBookService: SalesBookService);
    findAll(fechaDesde?: string, fechaHasta?: string, metodoPago?: string): Promise<any>;
}
