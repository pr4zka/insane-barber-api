import { PrismaService } from '../../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: CreateServiceDto): Promise<any>;
    update(id: number, data: UpdateServiceDto): Promise<any>;
    remove(id: number): Promise<any>;
}
