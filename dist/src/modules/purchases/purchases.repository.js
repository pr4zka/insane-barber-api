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
exports.PurchasesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PurchasesRepository = class PurchasesRepository {
    constructor(prisma) {
        this.prisma = prisma;
        this.orderIncludes = {
            proveedor: true,
            detalles: { include: { insumo: true } },
            libroCompras: true,
            notaRemision: true,
            notasCD: true,
            ajustes: true,
        };
    }
    async findAllSuppliers() {
        return this.prisma.proveedor.findMany({ orderBy: { nombre: 'asc' } });
    }
    async findSupplierById(id) {
        return this.prisma.proveedor.findUnique({ where: { id } });
    }
    async createSupplier(data) {
        return this.prisma.proveedor.create({
            data: {
                nombre: data.nombre,
                ruc: data.ruc,
                telefono: data.telefono,
                email: data.email ?? '',
                direccion: data.direccion ?? '',
                estado: data.estado ?? true,
            },
        });
    }
    async updateSupplier(id, data) {
        return this.prisma.proveedor.update({ where: { id }, data });
    }
    async findAllOrders() {
        return this.prisma.ordenCompra.findMany({
            include: this.orderIncludes,
            orderBy: { fecha: 'desc' },
        });
    }
    async findOrderById(id) {
        return this.prisma.ordenCompra.findUnique({
            where: { id },
            include: this.orderIncludes,
        });
    }
    async createOrder(dto) {
        return this.prisma.$transaction(async (tx) => {
            const detallesData = dto.detalles.map((d) => ({
                insumoId: d.insumoId,
                cantidad: d.cantidad,
                precioUnitario: d.precioUnitario,
                subtotal: d.cantidad * d.precioUnitario,
            }));
            const total = detallesData.reduce((sum, d) => sum + d.subtotal, 0);
            return tx.ordenCompra.create({
                data: {
                    proveedorId: dto.proveedorId,
                    observacion: dto.observacion ?? '',
                    total,
                    detalles: { create: detallesData },
                },
                include: this.orderIncludes,
            });
        });
    }
    async approveOrder(id) {
        return this.prisma.ordenCompra.update({
            where: { id },
            data: { estado: 'aprobada' },
            include: this.orderIncludes,
        });
    }
    async cancelOrder(id) {
        return this.prisma.ordenCompra.update({
            where: { id },
            data: { estado: 'cancelada' },
            include: this.orderIncludes,
        });
    }
    async receiveOrder(id) {
        return this.prisma.$transaction(async (tx) => {
            const orden = await tx.ordenCompra.findUnique({
                where: { id },
                include: { proveedor: true, detalles: { include: { insumo: true } } },
            });
            if (!orden)
                throw new Error('Orden no encontrada');
            for (const detalle of orden.detalles) {
                await tx.insumo.update({
                    where: { id: detalle.insumoId },
                    data: {
                        stock: {
                            increment: detalle.cantidad,
                        },
                    },
                });
            }
            await tx.libroCompras.create({
                data: {
                    ordenCompraId: id,
                    concepto: `Compra a ${orden.proveedor.nombre}`,
                    monto: orden.total,
                    proveedor: orden.proveedor.nombre,
                },
            });
            await tx.notaRemision.create({
                data: {
                    ordenCompraId: id,
                    observacion: `Recepcion de mercaderia - OC #${id}`,
                },
            });
            return tx.ordenCompra.update({
                where: { id },
                data: { estado: 'recibida' },
                include: {
                    proveedor: true,
                    detalles: { include: { insumo: true } },
                    libroCompras: true,
                    notaRemision: true,
                    notasCD: true,
                    ajustes: true,
                },
            });
        });
    }
    async findAllLibroCompras() {
        return this.prisma.libroCompras.findMany({
            include: { ordenCompra: { include: { proveedor: true } } },
            orderBy: { fecha: 'desc' },
        });
    }
    async findAllNotasRemision() {
        return this.prisma.notaRemision.findMany({
            include: { ordenCompra: { include: { proveedor: true, detalles: { include: { insumo: true } } } } },
            orderBy: { fecha: 'desc' },
        });
    }
    async findAllNotasCD() {
        return this.prisma.notaCDCompra.findMany({
            include: { ordenCompra: { include: { proveedor: true } } },
            orderBy: { fecha: 'desc' },
        });
    }
    async createNotaCD(dto) {
        return this.prisma.notaCDCompra.create({
            data: {
                ordenCompraId: dto.ordenCompraId,
                tipo: dto.tipo,
                monto: dto.monto,
                motivo: dto.motivo,
            },
            include: { ordenCompra: { include: { proveedor: true } } },
        });
    }
    async annulNotaCD(id) {
        return this.prisma.notaCDCompra.update({
            where: { id },
            data: { estado: 'anulada' },
        });
    }
    async findAllAdjustments() {
        return this.prisma.ajusteCompra.findMany({
            include: { ordenCompra: { include: { proveedor: true } } },
            orderBy: { fecha: 'desc' },
        });
    }
    async createAdjustment(dto) {
        return this.prisma.ajusteCompra.create({
            data: {
                ordenCompraId: dto.ordenCompraId,
                tipo: dto.tipo,
                descripcion: dto.descripcion,
                montoAnterior: dto.montoAnterior,
                montoNuevo: dto.montoNuevo,
            },
            include: { ordenCompra: { include: { proveedor: true } } },
        });
    }
};
exports.PurchasesRepository = PurchasesRepository;
exports.PurchasesRepository = PurchasesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchasesRepository);
//# sourceMappingURL=purchases.repository.js.map