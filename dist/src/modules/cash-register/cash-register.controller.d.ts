import { CashRegisterService } from './cash-register.service';
import { OpenRegisterDto } from './dto/open-register.dto';
import { CloseRegisterDto } from './dto/close-register.dto';
import { CreateMovementDto } from './dto/create-movement.dto';
export declare class CashRegisterController {
    private readonly cashRegisterService;
    constructor(cashRegisterService: CashRegisterService);
    getCurrent(): Promise<any>;
    open(usuarioId: number, dto: OpenRegisterDto): Promise<any>;
    close(dto: CloseRegisterDto): Promise<any>;
    getCollections(): Promise<any>;
    createMovement(dto: CreateMovementDto): Promise<any>;
    getMovements(): Promise<any>;
}
