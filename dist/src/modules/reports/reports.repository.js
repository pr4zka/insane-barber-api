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
exports.ReportsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ReportsRepository = class ReportsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async dailyIncome(fechaDesde, fechaHasta) {
        const pagos = await this.prisma.pago.groupBy({
            by: ['fecha'],
            where: {
                estado: 'completado',
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            _sum: {
                monto: true,
            },
            _count: {
                id: true,
            },
            orderBy: {
                fecha: 'asc',
            },
        });
        return pagos.map((p) => ({
            fecha: p.fecha,
            totalMonto: p._sum.monto,
            cantidadPagos: p._count.id,
        }));
    }
    async monthlyIncome(fechaDesde, fechaHasta) {
        const pagos = await this.prisma.pago.findMany({
            where: {
                estado: 'completado',
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            select: {
                fecha: true,
                monto: true,
            },
        });
        const grouped = new Map();
        for (const pago of pagos) {
            const key = `${pago.fecha.getFullYear()}-${String(pago.fecha.getMonth() + 1).padStart(2, '0')}`;
            const existing = grouped.get(key) || {
                totalMonto: 0,
                cantidadPagos: 0,
            };
            existing.totalMonto += Number(pago.monto);
            existing.cantidadPagos += 1;
            grouped.set(key, existing);
        }
        return Array.from(grouped.entries())
            .map(([mes, data]) => ({
            mes,
            ...data,
        }))
            .sort((a, b) => a.mes.localeCompare(b.mes));
    }
    async appointments(fechaDesde, fechaHasta, barberoId) {
        const where = {
            fecha: {
                gte: new Date(fechaDesde),
                lte: new Date(fechaHasta),
            },
        };
        if (barberoId) {
            where.barberoId = barberoId;
        }
        const turnos = await this.prisma.turno.groupBy({
            by: ['barberoId'],
            where,
            _count: {
                id: true,
            },
        });
        const results = [];
        for (const grupo of turnos) {
            const barbero = await this.prisma.barbero.findUnique({
                where: { id: grupo.barberoId },
            });
            const atendidos = await this.prisma.turno.count({
                where: {
                    ...where,
                    barberoId: grupo.barberoId,
                    estado: 'cobrado',
                },
            });
            const cancelados = await this.prisma.turno.count({
                where: {
                    ...where,
                    barberoId: grupo.barberoId,
                    estado: 'cancelado',
                },
            });
            results.push({
                barberoId: grupo.barberoId,
                barberoNombre: barbero?.nombre ?? 'Desconocido',
                total: grupo._count.id,
                atendidos,
                cancelados,
            });
        }
        return results;
    }
    async services(fechaDesde, fechaHasta) {
        const turnos = await this.prisma.turno.groupBy({
            by: ['servicioId'],
            where: {
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            _count: {
                id: true,
            },
        });
        const results = [];
        for (const grupo of turnos) {
            const servicio = await this.prisma.servicio.findUnique({
                where: { id: grupo.servicioId },
            });
            const pagos = await this.prisma.pago.aggregate({
                where: {
                    turno: {
                        servicioId: grupo.servicioId,
                        fecha: {
                            gte: new Date(fechaDesde),
                            lte: new Date(fechaHasta),
                        },
                    },
                    estado: 'completado',
                },
                _sum: {
                    monto: true,
                },
            });
            results.push({
                servicioId: grupo.servicioId,
                servicioNombre: servicio?.nombre ?? 'Desconocido',
                cantidadTurnos: grupo._count.id,
                ingresos: pagos._sum.monto ?? 0,
            });
        }
        return results;
    }
    async complaints(fechaDesde, fechaHasta) {
        return this.prisma.reclamo.findMany({
            where: {
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            include: {
                cliente: true,
            },
            orderBy: {
                fecha: 'desc',
            },
        });
    }
    async salesBook(fechaDesde, fechaHasta) {
        const aggregate = await this.prisma.libroVentas.aggregate({
            where: {
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            _sum: {
                monto: true,
            },
            _count: {
                id: true,
            },
        });
        const entries = await this.prisma.libroVentas.findMany({
            where: {
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            include: {
                pago: true,
            },
            orderBy: {
                fecha: 'desc',
            },
        });
        return {
            totalMonto: aggregate._sum.monto ?? 0,
            cantidadRegistros: aggregate._count.id,
            registros: entries,
        };
    }
    async supplies(fechaDesde, fechaHasta) {
        const aggregate = await this.prisma.insumoUtilizado.groupBy({
            by: ['insumoId'],
            where: {
                fecha: {
                    gte: new Date(fechaDesde),
                    lte: new Date(fechaHasta),
                },
            },
            _sum: {
                cantidad: true,
            },
            _count: {
                id: true,
            },
        });
        const results = [];
        for (const grupo of aggregate) {
            const insumo = await this.prisma.insumo.findUnique({
                where: { id: grupo.insumoId },
            });
            results.push({
                insumoId: grupo.insumoId,
                insumoNombre: insumo?.nombre ?? 'Desconocido',
                cantidadUtilizada: grupo._sum.cantidad,
                vecesUtilizado: grupo._count.id,
            });
        }
        return results;
    }
};
exports.ReportsRepository = ReportsRepository;
exports.ReportsRepository = ReportsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsRepository);
//# sourceMappingURL=reports.repository.js.map