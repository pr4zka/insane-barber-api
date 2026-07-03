import { PublicService } from './public.service';
import { CreatePublicTurnoDto } from './dto/create-public-turno.dto';
export declare class PublicController {
    private readonly publicService;
    constructor(publicService: PublicService);
    getHorarios(fecha: string): Promise<{
        hora: string;
        disponible: boolean;
    }[]>;
    crearTurno(dto: CreatePublicTurnoDto): Promise<{
        ok: boolean;
        id: any;
        fecha: string;
        hora: any;
        estado: any;
        mensaje: string;
    }>;
}
