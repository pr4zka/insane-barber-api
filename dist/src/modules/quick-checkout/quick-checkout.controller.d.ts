import { QuickCheckoutService } from './quick-checkout.service';
import { CreateQuickCheckoutDto } from './dto/create-quick-checkout.dto';
export declare class QuickCheckoutController {
    private readonly quickCheckoutService;
    constructor(quickCheckoutService: QuickCheckoutService);
    create(usuarioId: number, dto: CreateQuickCheckoutDto): Promise<any>;
}
