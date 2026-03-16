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
exports.PaymentsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let PaymentsRepository = class PaymentsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.pago.findMany({
            include: {
                turno: {
                    include: {
                        cliente: true,
                        servicio: true,
                    },
                },
                promocion: true,
                descuento: true,
            },
        });
    }
    async findById(id) {
        return this.prisma.pago.findUnique({
            where: { id },
            include: {
                turno: {
                    include: {
                        cliente: true,
                        servicio: true,
                    },
                },
                promocion: true,
                descuento: true,
            },
        });
    }
    async findPending() {
        return this.prisma.pago.findMany({
            where: { estado: 'pendiente' },
            include: {
                turno: true,
            },
        });
    }
    async create(data) {
        return this.prisma.$transaction(async (tx) => {
            const cajaAbierta = await tx.caja.findFirst({
                where: { estado: 'abierta' },
            });
            if (!cajaAbierta) {
                throw new common_1.BadRequestException('No se puede registrar el cobro porque no hay caja abierta. Vaya a la seccion "Caja" y abra la caja del dia antes de cobrar.');
            }
            const turno = await tx.turno.findUnique({
                where: { id: data.turnoId },
                include: { servicio: true, cliente: true },
            });
            if (!turno) {
                throw new common_1.BadRequestException('El turno seleccionado no existe. Verifique e intente nuevamente.');
            }
            if (turno.estado === 'cobrado') {
                throw new common_1.BadRequestException(`El turno de ${turno.cliente?.nombre ?? 'este cliente'} ya fue cobrado anteriormente.`);
            }
            if (turno.estado !== 'atendido') {
                throw new common_1.BadRequestException(`Solo se pueden cobrar turnos con estado "atendido". El turno de ${turno.cliente?.nombre ?? 'este cliente'} está en estado "${turno.estado}". Primero marque el turno como atendido desde la Agenda.`);
            }
            if (data.promocionId && data.descuentoId) {
                throw new common_1.BadRequestException('No se puede aplicar una promoción y un descuento al mismo tiempo. Seleccione solo uno.');
            }
            let montoFinal = data.monto;
            let montoOriginal = null;
            let porcentajeAplicado = null;
            let promocionId = null;
            let descuentoId = null;
            if (data.promocionId) {
                const promocion = await tx.promocion.findUnique({
                    where: { id: data.promocionId },
                });
                if (!promocion) {
                    throw new common_1.BadRequestException('La promoción seleccionada no existe.');
                }
                if (!promocion.estado) {
                    throw new common_1.BadRequestException('La promoción seleccionada no está activa.');
                }
                const hoy = new Date();
                if (hoy < promocion.fechaInicio || hoy > promocion.fechaFin) {
                    throw new common_1.BadRequestException('La promoción seleccionada no está vigente en la fecha actual.');
                }
                montoOriginal = data.monto;
                porcentajeAplicado = Number(promocion.porcentaje);
                montoFinal = Math.round(data.monto * (1 - porcentajeAplicado / 100));
                promocionId = promocion.id;
            }
            if (data.descuentoId) {
                const descuento = await tx.descuento.findUnique({
                    where: { id: data.descuentoId },
                });
                if (!descuento) {
                    throw new common_1.BadRequestException('El descuento seleccionado no existe.');
                }
                if (!descuento.estado) {
                    throw new common_1.BadRequestException('El descuento seleccionado no está activo.');
                }
                montoOriginal = data.monto;
                porcentajeAplicado = Number(descuento.porcentaje);
                montoFinal = Math.round(data.monto * (1 - porcentajeAplicado / 100));
                descuentoId = descuento.id;
            }
            const pago = await tx.pago.create({
                data: {
                    turnoId: data.turnoId,
                    metodoPago: data.metodoPago,
                    monto: montoFinal,
                    montoOriginal: montoOriginal,
                    promocionId: promocionId,
                    descuentoId: descuentoId,
                    porcentajeAplicado: porcentajeAplicado,
                },
            });
            await tx.turno.update({
                where: { id: data.turnoId },
                data: { estado: 'cobrado' },
            });
            const conceptoParts = [turno.servicio?.nombre ?? 'Pago de servicio'];
            if (porcentajeAplicado) {
                conceptoParts.push(`(${porcentajeAplicado}% ${promocionId ? 'promo' : 'desc'})`);
            }
            await tx.movimientoCaja.create({
                data: {
                    cajaId: cajaAbierta.id,
                    tipo: 'ingreso',
                    concepto: conceptoParts.join(' '),
                    monto: montoFinal,
                },
            });
            await tx.libroVentas.create({
                data: {
                    pagoId: pago.id,
                    concepto: conceptoParts.join(' '),
                    monto: montoFinal,
                    metodoPago: data.metodoPago,
                },
            });
            return pago;
        });
    }
    async findAllDeliveryNotes() {
        return this.prisma.notaRemisionVenta.findMany({
            include: { turno: { include: { cliente: true, servicio: true, barbero: true } } },
            orderBy: { fecha: 'desc' },
        });
    }
    async createDeliveryNote(turnoId, observacion) {
        return this.prisma.notaRemisionVenta.create({
            data: { turnoId, observacion },
            include: { turno: { include: { cliente: true, servicio: true, barbero: true } } },
        });
    }
    async findByDpagoRef(reference) {
        return this.prisma.pago.findFirst({
            where: { dpagoRef: reference },
            include: {
                turno: {
                    include: {
                        cliente: true,
                        servicio: true,
                    },
                },
            },
        });
    }
};
exports.PaymentsRepository = PaymentsRepository;
exports.PaymentsRepository = PaymentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsRepository);
//# sourceMappingURL=payments.repository.js.map