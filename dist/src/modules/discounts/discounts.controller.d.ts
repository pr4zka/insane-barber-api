import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
export declare class DiscountsController {
    private readonly discountsService;
    constructor(discountsService: DiscountsService);
    findAll(): Promise<any>;
    create(dto: CreateDiscountDto): Promise<any>;
}
