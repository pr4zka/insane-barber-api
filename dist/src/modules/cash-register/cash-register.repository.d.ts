import { PrismaService } from '../../prisma/prisma.service';
import { OpenRegisterDto } from './dto/open-register.dto';
import { CloseRegisterDto } from './dto/close-register.dto';
import { CreateMovementDto } from './dto/create-movement.dto';
export declare class CashRegisterRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findCurrent(): Promise<any>;
    open(usuarioId: number, dto: OpenRegisterDto): Promise<any>;
    close(id: number, dto: CloseRegisterDto): Promise<any>;
    getMovements(cajaId: number): Promise<any>;
    createMovement(cajaId: number, dto: CreateMovementDto): Promise<any>;
    getCollections(): Promise<any>;
}
