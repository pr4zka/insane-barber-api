import { PrismaService } from '../../prisma/prisma.service';
import { CreatePublicTurnoDto } from './dto/create-public-turno.dto';
export declare class PublicService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly OPEN_MIN;
    private readonly CLOSE_MIN;
    private readonly DURACION_MIN;
    private buildSlots;
    private parseFecha;
    getHorarios(fechaISO: string): Promise<{
        hora: string;
        disponible: boolean;
    }[]>;
    private soloDigitos;
    private mismoTelefono;
    private buscarClienteExistente;
    crearTurno(dto: CreatePublicTurnoDto): Promise<{
        ok: boolean;
        id: any;
        fecha: string;
        hora: any;
        estado: any;
        mensaje: string;
    }>;
}
