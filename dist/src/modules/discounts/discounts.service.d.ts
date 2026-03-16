import { DiscountsRepository } from './discounts.repository';
import { CreateDiscountDto } from './dto/create-discount.dto';
export declare class DiscountsService {
    private readonly discountsRepository;
    constructor(discountsRepository: DiscountsRepository);
    findAll(): Promise<any>;
    create(data: CreateDiscountDto): Promise<any>;
}
