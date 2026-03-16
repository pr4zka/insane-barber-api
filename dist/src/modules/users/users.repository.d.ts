import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    create(data: CreateUserDto): Promise<any>;
}
