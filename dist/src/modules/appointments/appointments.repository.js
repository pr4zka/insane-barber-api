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
exports.AppointmentsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let AppointmentsRepository = class AppointmentsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.turno.findMany({
            include: {
                cliente: true,
                barbero: true,
                servicio: true,
                pago: true,
            },
        });
    }
    async findById(id) {
        return this.prisma.turno.findUnique({
            where: { id },
            include: {
                cliente: true,
                barbero: true,
                servicio: true,
                pago: true,
            },
        });
    }
    async create(data) {
        return this.prisma.turno.create({
            data: {
                clienteId: data.clienteId,
                barberoId: data.barberoId,
                servicioId: data.servicioId,
                fecha: new Date(data.fecha),
                hora: data.hora,
                observacion: data.observacion,
            },
        });
    }
    async update(id, data) {
        return this.prisma.turno.update({
            where: { id },
            data,
        });
    }
    async confirm(id) {
        return this.prisma.turno.update({
            where: { id },
            data: { estado: 'confirmado' },
        });
    }
    async cancel(id) {
        return this.prisma.turno.update({
            where: { id },
            data: { estado: 'cancelado' },
        });
    }
    async reschedule(id, data) {
        return this.prisma.turno.update({
            where: { id },
            data: {
                fecha: new Date(data.fecha),
                hora: data.hora,
            },
        });
    }
};
exports.AppointmentsRepository = AppointmentsRepository;
exports.AppointmentsRepository = AppointmentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppointmentsRepository);
//# sourceMappingURL=appointments.repository.js.map