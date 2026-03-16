import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<any>;
    create(dto: CreateServiceDto): Promise<any>;
    update(id: number, dto: UpdateServiceDto): Promise<any>;
    remove(id: number): Promise<any>;
}
