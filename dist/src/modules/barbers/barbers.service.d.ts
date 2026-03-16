import { BarbersRepository } from './barbers.repository';
import { CreateBarberDto } from './dto/create-barber.dto';
export declare class BarbersService {
    private readonly barbersRepository;
    constructor(barbersRepository: BarbersRepository);
    findAll(): Promise<any>;
    create(dto: CreateBarberDto): Promise<any>;
}
