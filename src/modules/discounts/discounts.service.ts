import { Injectable } from '@nestjs/common';
import { DiscountsRepository } from './discounts.repository';
import { CreateDiscountDto } from './dto/create-discount.dto';

@Injectable()
export class DiscountsService {
  constructor(private readonly discountsRepository: DiscountsRepository) {}

  async findAll() {
    return this.discountsRepository.findAll();
  }

  async create(data: CreateDiscountDto) {
    return this.discountsRepository.create(data);
  }
}
