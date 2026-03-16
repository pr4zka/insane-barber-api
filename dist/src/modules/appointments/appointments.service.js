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
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
const appointments_repository_1 = require("./appointments.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
let AppointmentsService = class AppointmentsService {
    constructor(appointmentsRepository, prisma) {
        this.appointmentsRepository = appointmentsRepository;
        this.prisma = prisma;
    }
    async findAll() {
        return this.appointmentsRepository.findAll();
    }
    async findById(id) {
        const turno = await this.appointmentsRepository.findById(id);
        if (!turno) {
            throw new common_1.NotFoundException(`No se encontró el turno #${id}.`);
        }
        return turno;
    }
    async create(data) {
        const existing = await this.prisma.turno.findFirst({
            where: {
                barberoId: data.barberoId,
                fecha: new Date(data.fecha),
                hora: data.hora,
                estado: { not: 'cancelado' },
            },
        });
        if (existing) {
            throw new common_1.ConflictException(`El barbero ya tiene un turno agendado para la fecha ${data.fecha} a las ${data.hora}. Seleccione otro horario o barbero.`);
        }
        return this.appointmentsRepository.create(data);
    }
    async update(id, data) {
        await this.findById(id);
        return this.appointmentsRepository.update(id, data);
    }
    async confirm(id) {
        const turno = await this.findById(id);
        if (turno.estado !== 'pendiente') {
            throw new common_1.BadRequestException(`Solo se pueden confirmar turnos en estado "pendiente". Este turno está en estado "${turno.estado}".`);
        }
        return this.appointmentsRepository.confirm(id);
    }
    async cancel(id) {
        const turno = await this.findById(id);
        if (turno.estado === 'cancelado') {
            throw new common_1.BadRequestException('Este turno ya fue cancelado.');
        }
        if (turno.estado === 'cobrado') {
            throw new common_1.BadRequestException('No se puede cancelar un turno que ya fue cobrado.');
        }
        return this.appointmentsRepository.cancel(id);
    }
    async reschedule(id, data) {
        const turno = await this.findById(id);
        if (turno.estado === 'cancelado' || turno.estado === 'cobrado') {
            throw new common_1.BadRequestException(`No se puede reagendar un turno en estado "${turno.estado}".`);
        }
        return this.appointmentsRepository.reschedule(id, data);
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [appointments_repository_1.AppointmentsRepository,
        prisma_service_1.PrismaService])
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map