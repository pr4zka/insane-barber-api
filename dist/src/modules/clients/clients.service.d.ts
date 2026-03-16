import { ClientsRepository } from './clients.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsService {
    private readonly clientsRepository;
    constructor(clientsRepository: ClientsRepository);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(dto: CreateClientDto): Promise<any>;
    update(id: number, dto: UpdateClientDto): Promise<any>;
}
