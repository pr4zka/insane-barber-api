import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { CreateSupplyUsageDto } from './dto/create-supply-usage.dto';
export declare class SuppliesRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    create(dto: CreateSupplyDto): Promise<any>;
    update(id: number, dto: UpdateSupplyDto): Promise<any>;
    registerUsage(dto: CreateSupplyUsageDto): Promise<any>;
    getUsageByTurno(turnoId: number): Promise<any>;
}
