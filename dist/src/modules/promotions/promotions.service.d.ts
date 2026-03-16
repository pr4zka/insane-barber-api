import { PromotionsRepository } from './promotions.repository';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { UpdatePromotionDto } from './dto/update-promotion.dto';
export declare class PromotionsService {
    private readonly promotionsRepository;
    constructor(promotionsRepository: PromotionsRepository);
    findAll(): Promise<any>;
    create(data: CreatePromotionDto): Promise<any>;
    update(id: number, data: UpdatePromotionDto): Promise<any>;
}
