import { PrismaService } from '../../prisma/prisma.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
export declare class DiscountsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    create(data: CreateDiscountDto): Promise<any>;
}
