import { PrismaService } from '../../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: CreateClientDto): Promise<any>;
    update(id: number, data: UpdateClientDto): Promise<any>;
}
