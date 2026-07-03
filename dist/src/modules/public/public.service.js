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
        this.OPEN = 9;
        this.CLOSE = 20;
    }
    buildSlots() {
        const slots = [];
        for (let h = this.OPEN; h < this.CLOSE; h++) {
            for (const m of ['00', '30']) {
                slots.push(`${String(h).padStart(2, '0')}:${m}`);
            }
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
        const totalBarberos = Math.max(await this.prisma.barbero.count({ where: { estado: true } }), 1);
        const turnos = await this.prisma.turno.findMany({
            where: { fecha, estado: { not: 'cancelado' } },
            select: { hora: true },
        });
        const ocupadosPorHora = {};
        for (const t of turnos) {
            ocupadosPorHora[t.hora] = (ocupadosPorHora[t.hora] || 0) + 1;
        }
        return this.buildSlots().map((hora) => ({
            hora,
            disponible: (ocupadosPorHora[hora] || 0) < totalBarberos,
        }));
    }
    async crearTurno(dto) {
        const fecha = this.parseFecha(dto.fecha);
        let cliente = await this.prisma.cliente.findFirst({
            where: { email: dto.correo },
        });
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
            const ocupado = await this.prisma.turno.findFirst({
                where: {
                    barberoId,
                    fecha,
                    hora: dto.hora,
                    estado: { not: 'cancelado' },
                },
            });
            if (ocupado) {
                throw new common_1.ConflictException('Ese barbero no esta disponible en ese horario. Probá otro.');
            }
        }
        else {
            const barberos = await this.prisma.barbero.findMany({
                where: { estado: true },
                orderBy: { id: 'asc' },
            });
            if (!barberos.length) {
                throw new common_1.BadRequestException('No hay barberos disponibles.');
            }
            const ocupados = await this.prisma.turno.findMany({
                where: { fecha, hora: dto.hora, estado: { not: 'cancelado' } },
                select: { barberoId: true },
            });
            const ocupadosSet = new Set(ocupados.map((o) => o.barberoId));
            const libre = barberos.find((b) => !ocupadosSet.has(b.id));
            if (!libre) {
                throw new common_1.ConflictException('No hay disponibilidad en ese horario. Elegí otro, por favor.');
            }
            barberoId = libre.id;
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