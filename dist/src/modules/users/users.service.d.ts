import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    findAll(): Promise<any>;
    create(dto: CreateUserDto): Promise<any>;
}
