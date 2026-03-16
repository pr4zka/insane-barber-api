import { BudgetsRepository } from './budgets.repository';
import { CreateBudgetDto } from './dto/create-budget.dto';
export declare class BudgetsService {
    private readonly budgetsRepository;
    constructor(budgetsRepository: BudgetsRepository);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(dto: CreateBudgetDto): Promise<any>;
    generatePdf(id: number): Promise<any>;
}
