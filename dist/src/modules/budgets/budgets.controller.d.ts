import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
export declare class BudgetsController {
    private readonly budgetsService;
    constructor(budgetsService: BudgetsService);
    findAll(): Promise<any>;
    create(dto: CreateBudgetDto): Promise<any>;
    findById(id: number): Promise<any>;
    generatePdf(id: number): Promise<any>;
}
