import { SuppliesRepository } from './supplies.repository';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { CreateSupplyUsageDto } from './dto/create-supply-usage.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class SuppliesService {
    private readonly suppliesRepository;
    private readonly prisma;
    constructor(suppliesRepository: SuppliesRepository, prisma: PrismaService);
    findAll(): Promise<any>;
    create(dto: CreateSupplyDto): Promise<any>;
    update(id: number, dto: UpdateSupplyDto): Promise<any>;
    registerUsage(dto: CreateSupplyUsageDto): Promise<any>;
    getUsageByTurno(turnoId: number): Promise<any>;
}
