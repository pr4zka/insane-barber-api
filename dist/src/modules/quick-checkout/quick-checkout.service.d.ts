import { QuickCheckoutRepository } from './quick-checkout.repository';
import { CreateQuickCheckoutDto } from './dto/create-quick-checkout.dto';
export declare class QuickCheckoutService {
    private readonly quickCheckoutRepository;
    constructor(quickCheckoutRepository: QuickCheckoutRepository);
    create(usuarioId: number, dto: CreateQuickCheckoutDto): Promise<any>;
}
