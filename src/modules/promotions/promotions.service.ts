import { Injectable } from '@nestjs/common';
import { PromotionsRepository } from './promotions.repository';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';

@Injectable()
export class PromotionsService {
  constructor(private readonly promotionsRepository: PromotionsRepository) {}

  async findAll() {
    return this.promotionsRepository.findAll();
  }

  async create(data: CreatePromotionDto) {
    return this.promotionsRepository.create(data);
  }

  async update(id: number, data: UpdatePromotionDto) {
    return this.promotionsRepository.update(id, data);
  }
}
