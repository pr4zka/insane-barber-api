import { PrismaService } from '../../prisma/prisma.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
export declare class BudgetsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(dto: CreateBudgetDto): Promise<any>;
}
