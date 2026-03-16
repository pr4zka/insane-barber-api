import { PromotionsService } from './promotions.service';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionsController {
    private readonly promotionsService;
    constructor(promotionsService: PromotionsService);
    findAll(): Promise<any>;
    create(dto: CreatePromotionDto): Promise<any>;
    update(id: number, dto: UpdatePromotionDto): Promise<any>;
}
