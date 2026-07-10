"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PublicService = class PublicService {
    constructor(prisma) {
        this.prisma = prisma;
        this.OPEN_MIN = 18 * 60;
        this.CLOSE_MIN = 24 * 60;
        this.DURACION_MIN = 45;
    }
    buildSlots() {
        const slots = [];
        for (let start = this.OPEN_MIN; start + this.DURACION_MIN <= this.CLOSE_MIN; start += this.DURACION_MIN) {
            const h = Math.floor(start / 60);
            const m = start % 60;
            slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
        }
        return slots;
    }
    parseFecha(fechaISO) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaISO || '')) {
            throw new common_1.BadRequestException('Fecha invalida. Usá formato YYYY-MM-DD.');
        }
        const fecha = new Date(`${fechaISO}T00:00:00.000Z`);
        if (isNaN(fecha.getTime())) {
            throw new common_1.BadRequestException('Fecha invalida.');
        }
        return fecha;
    }
    async getHorarios(fechaISO) {
        const fecha = this.parseFecha(fechaISO);
        const turnos = await this.prisma.turno.findMany({
            where: { fecha, estado: { not: 'cancelado' } },
            select: { hora: true },
        });
        const ocupados = new Set(turnos.map((t) => t.hora));
        return this.buildSlots().map((hora) => ({
            hora,
            disponible: !ocupados.has(hora),
        }));
    }
    soloDigitos(tel) {
        return (tel || '').replace(/\D/g, '');
    }
    mismoTelefono(rawA, digitosB) {
        const a = this.soloDigitos(rawA);
        if (a.length < 8 || digitosB.length < 8)
            return a !== '' && a === digitosB;
        return a.slice(-8) === digitosB.slice(-8);
    }
    async buscarClienteExistente(correo, numero) {
        const correoNorm = (correo || '').trim();
        const telDigitos = this.soloDigitos(numero);
        if (correoNorm) {
            const porEmail = await this.prisma.cliente.findFirst({
                where: { email: { equals: correoNorm, mode: 'insensitive' } },
            });
            if (porEmail)
                return porEmail;
        }
        if (telDigitos.length >= 8) {
            const candidatos = await this.prisma.cliente.findMany({
                where: { telefono: { not: '' } },
                select: { id: true, telefono: true },
            });
            const match = candidatos.find((c) => this.mismoTelefono(c.telefono, telDigitos));
            if (match) {
                return this.prisma.cliente.findUnique({ where: { id: match.id } });
            }
        }
        return null;
    }
    async crearTurno(dto) {
        const fecha = this.parseFecha(dto.fecha);
        if (!this.buildSlots().includes(dto.hora)) {
            throw new common_1.BadRequestException('Ese horario no es válido. Elegí uno de la agenda.');
        }
        const yaReservado = await this.prisma.turno.findFirst({
            where: { fecha, hora: dto.hora, estado: { not: 'cancelado' } },
        });
        if (yaReservado) {
            throw new common_1.ConflictException('Ese horario ya fue reservado. Elegí otro, por favor.');
        }
        let cliente = await this.buscarClienteExistente(dto.correo, dto.numero);
        if (!cliente) {
            cliente = await this.prisma.cliente.create({
                data: {
                    nombre: dto.nombre,
                    email: dto.correo,
                    telefono: dto.numero,
                },
            });
        }
        let servicioId = dto.servicioId;
        if (!servicioId) {
            const servicio = await this.prisma.servicio.findFirst({
                where: { estado: true },
                orderBy: { id: 'asc' },
            });
            if (!servicio) {
                throw new common_1.BadRequestException('No hay servicios disponibles.');
            }
            servicioId = servicio.id;
        }
        let barberoId = dto.barberoId;
        if (barberoId) {
            const barbero = await this.prisma.barbero.findFirst({
                where: { id: barberoId, estado: true },
            });
            if (!barbero) {
                throw new common_1.BadRequestException('El barbero indicado no está disponible.');
            }
        }
        else {
            const barbero = await this.prisma.barbero.findFirst({
                where: { estado: true },
                orderBy: { id: 'asc' },
            });
            if (!barbero) {
                throw new common_1.BadRequestException('No hay barberos disponibles.');
            }
            barberoId = barbero.id;
        }
        const turno = await this.prisma.turno.create({
            data: {
                clienteId: cliente.id,
                barberoId,
                servicioId,
                fecha,
                hora: dto.hora,
                estado: 'pendiente',
                observacion: 'Reserva web',
            },
        });
        return {
            ok: true,
            id: turno.id,
            fecha: dto.fecha,
            hora: turno.hora,
            estado: turno.estado,
            mensaje: 'Turno solicitado. Te contactaremos para confirmar.',
        };
    }
};
exports.PublicService = PublicService;
exports.PublicService = PublicService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicService);
//# sourceMappingURL=public.service.js.map