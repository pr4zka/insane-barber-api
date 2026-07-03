import { PrismaService } from '../../prisma/prisma.service';
import { CreateQuickCheckoutDto } from './dto/create-quick-checkout.dto';
export declare class QuickCheckoutRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(usuarioId: number, dto: CreateQuickCheckoutDto): Promise<any>;
}
