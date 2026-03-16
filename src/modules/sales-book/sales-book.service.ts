import { Injectable } from '@nestjs/common';
import { SalesBookRepository } from './sales-book.repository';

@Injectable()
export class SalesBookService {
  constructor(private readonly salesBookRepository: SalesBookRepository) {}

  async findAll(filters?: {
    fecha_desde?: string;
    fecha_hasta?: string;
    metodo_pago?: string;
  }) {
    return this.salesBookRepository.findAll(filters);
  }
}
