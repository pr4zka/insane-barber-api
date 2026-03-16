import { CashRegisterRepository } from './cash-register.repository';
import { OpenRegisterDto } from './dto/open-register.dto';
import { CloseRegisterDto } from './dto/close-register.dto';
import { CreateMovementDto } from './dto/create-movement.dto';
export declare class CashRegisterService {
    private readonly cashRegisterRepository;
    constructor(cashRegisterRepository: CashRegisterRepository);
    getCurrent(): Promise<any>;
    open(usuarioId: number, dto: OpenRegisterDto): Promise<any>;
    close(dto: CloseRegisterDto): Promise<any>;
    getMovements(): Promise<any>;
    createMovement(dto: CreateMovementDto): Promise<any>;
    getCollections(): Promise<any>;
}
