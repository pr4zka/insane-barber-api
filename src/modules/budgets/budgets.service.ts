import { Injectable, NotFoundException } from '@nestjs/common';
import { BudgetsRepository } from './budgets.repository';
import { CreateBudgetDto } from './dto/create-budget.dto';

@Injectable()
export class BudgetsService {
  constructor(private readonly budgetsRepository: BudgetsRepository) {}

  async findAll() {
    return this.budgetsRepository.findAll();
  }

  async findById(id: number) {
    const budget = await this.budgetsRepository.findById(id);
    if (!budget) {
      throw new NotFoundException(
        `El presupuesto #${id} no existe o fue eliminado.`,
      );
    }
    return budget;
  }

  async create(dto: CreateBudgetDto) {
    return this.budgetsRepository.create(dto);
  }

  async generatePdf(id: number) {
    const budget = await this.findById(id);
    return budget;
  }
}
