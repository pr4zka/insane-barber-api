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
exports.BudgetsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BudgetsRepository = class BudgetsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.presupuesto.findMany({
            include: {
                cliente: true,
                detalles: {
                    include: {
                        servicio: true,
                    },
                },
            },
            orderBy: { fecha: 'desc' },
        });
    }
    async findById(id) {
        return this.prisma.presupuesto.findUnique({
            where: { id },
            include: {
                cliente: true,
                detalles: {
                    include: {
                        servicio: true,
                    },
                },
            },
        });
    }
    async create(dto) {
        return this.prisma.$transaction(async (tx) => {
            const detallesData = dto.detalles.map((d) => ({
                servicioId: d.servicioId,
                cantidad: d.cantidad,
                precioUnitario: d.precioUnitario,
                subtotal: d.cantidad * d.precioUnitario,
            }));
            const total = detallesData.reduce((sum, d) => sum + d.subtotal, 0);
            const presupuesto = await tx.presupuesto.create({
                data: {
                    clienteId: dto.clienteId,
                    observacion: dto.observacion ?? '',
                    total,
                    detalles: {
                        create: detallesData,
                    },
                },
                include: {
                    cliente: true,
                    detalles: {
                        include: {
                            servicio: true,
                        },
                    },
                },
            });
            return presupuesto;
        });
    }
};
exports.BudgetsRepository = BudgetsRepository;
exports.BudgetsRepository = BudgetsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BudgetsRepository);
//# sourceMappingURL=budgets.repository.js.map