import { Injectable } from '@nestjs/common';
import { QuickCheckoutRepository } from './quick-checkout.repository';
import { CreateQuickCheckoutDto } from './dto/create-quick-checkout.dto';

@Injectable()
export class QuickCheckoutService {
  constructor(private readonly quickCheckoutRepository: QuickCheckoutRepository) {}

  async create(usuarioId: number, dto: CreateQuickCheckoutDto) {
    return this.quickCheckoutRepository.create(usuarioId, dto);
  }
}
