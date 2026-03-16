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
exports.CashRegisterRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CashRegisterRepository = class CashRegisterRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findCurrent() {
        return this.prisma.caja.findFirst({
            where: { estado: 'abierta' },
            include: {
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        email: true,
                    },
                },
                movimientos: {
                    orderBy: { fecha: 'desc' },
                },
            },
        });
    }
    async open(usuarioId, dto) {
        const existing = await this.prisma.caja.findFirst({
            where: { estado: 'abierta' },
        });
        if (existing) {
            return null;
        }
        return this.prisma.caja.create({
            data: {
                usuarioId,
                montoInicial: dto.montoInicial,
                estado: 'abierta',
            },
            include: {
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        email: true,
                    },
                },
            },
        });
    }
    async close(id, dto) {
        return this.prisma.caja.update({
            where: { id },
            data: {
                montoFinal: dto.montoFinal,
                fechaCierre: new Date(),
                estado: 'cerrada',
            },
            include: {
                usuario: {
                    select: {
                        id: true,
                        nombre: true,
                        email: true,
                    },
                },
                movimientos: true,
            },
        });
    }
    async getMovements(cajaId) {
        return this.prisma.movimientoCaja.findMany({
            where: { cajaId },
            orderBy: { fecha: 'desc' },
        });
    }
    async createMovement(cajaId, dto) {
        return this.prisma.movimientoCaja.create({
            data: {
                cajaId,
                tipo: dto.tipo,
                concepto: dto.concepto,
                monto: dto.monto,
            },
        });
    }
    async getCollections() {
        const collections = await this.prisma.pago.groupBy({
            by: ['metodoPago', 'fecha'],
            _sum: {
                monto: true,
            },
            _count: {
                id: true,
            },
            orderBy: {
                fecha: 'desc',
            },
        });
        return collections.map((c) => ({
            metodoPago: c.metodoPago,
            fecha: c.fecha,
            total: c._sum.monto,
            cantidad: c._count.id,
        }));
    }
};
exports.CashRegisterRepository = CashRegisterRepository;
exports.CashRegisterRepository = CashRegisterRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashRegisterRepository);
//# sourceMappingURL=cash-register.repository.js.map