import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';
export declare class BarbersController {
    private readonly barbersService;
    constructor(barbersService: BarbersService);
    findAll(): Promise<any>;
    create(dto: CreateBarberDto): Promise<any>;
}
