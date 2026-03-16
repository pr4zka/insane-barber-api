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
exports.SuppliesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SuppliesRepository = class SuppliesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.insumo.findMany({
            orderBy: { id: 'desc' },
        });
    }
    async create(dto) {
        return this.prisma.insumo.create({
            data: {
                nombre: dto.nombre,
                descripcion: dto.descripcion,
                unidad: dto.unidad,
                stock: dto.stock,
                estado: dto.estado ?? true,
            },
        });
    }
    async update(id, dto) {
        return this.prisma.insumo.update({
            where: { id },
            data: dto,
        });
    }
    async registerUsage(dto) {
        return this.prisma.$transaction(async (tx) => {
            const usage = await tx.insumoUtilizado.create({
                data: {
                    turnoId: dto.turnoId,
                    insumoId: dto.insumoId,
                    cantidad: dto.cantidad,
                },
                include: {
                    insumo: true,
                    turno: true,
                },
            });
            await tx.insumo.update({
                where: { id: dto.insumoId },
                data: {
                    stock: {
                        decrement: dto.cantidad,
                    },
                },
            });
            return usage;
        });
    }
    async getUsageByTurno(turnoId) {
        return this.prisma.insumoUtilizado.findMany({
            where: { turnoId },
            include: {
                insumo: true,
            },
            orderBy: { fecha: 'desc' },
        });
    }
};
exports.SuppliesRepository = SuppliesRepository;
exports.SuppliesRepository = SuppliesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SuppliesRepository);
//# sourceMappingURL=supplies.repository.js.map