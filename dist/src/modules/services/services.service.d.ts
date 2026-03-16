import { ServicesRepository } from './services.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesService {
    private readonly servicesRepository;
    constructor(servicesRepository: ServicesRepository);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(dto: CreateServiceDto): Promise<any>;
    update(id: number, dto: UpdateServiceDto): Promise<any>;
    remove(id: number): Promise<any>;
}
