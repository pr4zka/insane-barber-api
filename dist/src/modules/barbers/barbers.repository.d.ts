import { PrismaService } from '../../prisma/prisma.service';
import { CreateBarberDto } from './dto/create-barber.dto';
export declare class BarbersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    create(data: CreateBarberDto): Promise<any>;
}
