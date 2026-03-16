import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    findAll(): Promise<any>;
    create(dto: CreateClientDto): Promise<any>;
    update(id: number, dto: UpdateClientDto): Promise<any>;
}
