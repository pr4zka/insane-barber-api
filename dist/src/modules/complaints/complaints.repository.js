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
exports.ComplaintsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ComplaintsRepository = class ComplaintsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.reclamo.findMany({
            include: {
                cliente: true,
                seguimientos: {
                    orderBy: { fecha: 'desc' },
                },
            },
        });
    }
    async findById(id) {
        return this.prisma.reclamo.findUnique({
            where: { id },
            include: {
                cliente: true,
                seguimientos: {
                    orderBy: { fecha: 'desc' },
                },
            },
        });
    }
    async create(data) {
        return this.prisma.reclamo.create({
            data,
        });
    }
    async update(id, data) {
        return this.prisma.reclamo.update({
            where: { id },
            data,
        });
    }
    async getFollowUps(reclamoId) {
        return this.prisma.seguimientoReclamo.findMany({
            where: { reclamoId },
        });
    }
    async createFollowUp(reclamoId, data) {
        return this.prisma.$transaction(async (tx) => {
            const seguimiento = await tx.seguimientoReclamo.create({
                data: {
                    reclamoId,
                    comentario: data.comentario,
                    estadoNuevo: data.estadoNuevo,
                },
            });
            await tx.reclamo.update({
                where: { id: reclamoId },
                data: { estado: data.estadoNuevo },
            });
            return seguimiento;
        });
    }
};
exports.ComplaintsRepository = ComplaintsRepository;
exports.ComplaintsRepository = ComplaintsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ComplaintsRepository);
//# sourceMappingURL=complaints.repository.js.map