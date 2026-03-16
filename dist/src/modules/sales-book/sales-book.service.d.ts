import { SalesBookRepository } from './sales-book.repository';
export declare class SalesBookService {
    private readonly salesBookRepository;
    constructor(salesBookRepository: SalesBookRepository);
    findAll(filters?: {
        fecha_desde?: string;
        fecha_hasta?: string;
        metodo_pago?: string;
    }): Promise<any>;
}
