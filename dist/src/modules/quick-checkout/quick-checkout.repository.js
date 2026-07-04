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
exports.QuickCheckoutRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let QuickCheckoutRepository = class QuickCheckoutRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(usuarioId, dto) {
        return this.prisma.$transaction(async (tx) => {
            const cajaAbierta = await tx.caja.findFirst({
                where: { estado: 'abierta' },
            });
            if (!cajaAbierta) {
                throw new common_1.BadRequestException('No se puede registrar el cobro porque no hay caja abierta. Pedile a un administrador o recepcionista que abra la caja del dia antes de cobrar.');
            }
            const barbero = await tx.barbero.findUnique({
                where: { usuarioId },
            });
            if (!barbero) {
                throw new common_1.BadRequestException('Tu usuario no esta vinculado a un perfil de barbero. Pedile a un administrador que te enlace desde la seccion Barberos.');
            }
            if (dto.promocionId && dto.descuentoId) {
                throw new common_1.BadRequestException('No se puede aplicar una promoción y un descuento al mismo tiempo. Seleccione solo uno.');
            }
            const servicios = await tx.servicio.findMany({
                where: { id: { in: dto.servicioIds } },
            });
            if (servicios.length !== dto.servicioIds.length) {
                throw new common_1.BadRequestException('Uno o mas servicios seleccionados no existen. Actualice la pantalla e intente nuevamente.');
            }
            if (servicios.some((s) => !s.estado)) {
                throw new common_1.BadRequestException('Uno o mas servicios seleccionados ya no estan activos. Actualice la pantalla e intente nuevamente.');
            }
            const esCorte = (nombre) => nombre.toLowerCase().includes('corte');
            const incluyeCorte = servicios.some((s) => esCorte(s.nombre));
            const nombresServicios = dto.servicioIds.map((id) => servicios.find((s) => s.id === id).nombre);
            if (dto.otroServicio?.trim()) {
                nombresServicios.push(dto.otroServicio.trim());
            }
            const observacion = nombresServicios.join(' + ');
            let cliente;
            if (dto.clienteId) {
                const existente = await tx.cliente.findUnique({
                    where: { id: dto.clienteId },
                });
                if (!existente) {
                    throw new common_1.BadRequestException('El cliente seleccionado no existe. Actualice la pantalla e intente nuevamente.');
                }
                cliente = await tx.cliente.update({
                    where: { id: dto.clienteId },
                    data: {
                        nombre: dto.clienteNombre,
                        telefono: dto.clienteTelefono,
                        email: dto.clienteEmail ?? null,
                    },
                });
            }
            else {
                cliente = await tx.cliente.findFirst({
                    where: { telefono: dto.clienteTelefono },
                });
                if (!cliente) {
                    cliente = await tx.cliente.create({
                        data: {
                            nombre: dto.clienteNombre,
                            telefono: dto.clienteTelefono,
                            email: dto.clienteEmail ?? null,
                        },
                    });
                }
            }
            let montoFinal = dto.precioTotal;
            let montoOriginal = null;
            let porcentajeAplicado = null;
            let promocionId = null;
            let descuentoId = null;
            if (dto.promocionId) {
                const promocion = await tx.promocion.findUnique({
                    where: { id: dto.promocionId },
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
                montoOriginal = dto.precioTotal;
                if (promocion.tipo === 'monto_fijo') {
                    montoFinal = Math.max(0, dto.precioTotal - Number(promocion.monto ?? 0));
                }
                else {
                    porcentajeAplicado = Number(promocion.porcentaje);
                    montoFinal = Math.round(dto.precioTotal * (1 - porcentajeAplicado / 100));
                }
                promocionId = promocion.id;
            }
            if (dto.descuentoId) {
                const descuento = await tx.descuento.findUnique({
                    where: { id: dto.descuentoId },
                });
                if (!descuento) {
                    throw new common_1.BadRequestException('El descuento seleccionado no existe.');
                }
                if (!descuento.estado) {
                    throw new common_1.BadRequestException('El descuento seleccionado no está activo.');
                }
                montoOriginal = dto.precioTotal;
                if (descuento.tipo === 'monto_fijo') {
                    montoFinal = Math.max(0, dto.precioTotal - Number(descuento.monto ?? 0));
                }
                else {
                    porcentajeAplicado = Number(descuento.porcentaje);
                    montoFinal = Math.round(dto.precioTotal * (1 - porcentajeAplicado / 100));
                }
                descuentoId = descuento.id;
            }
            let fidelidadGratisAplicada = false;
            if (!promocionId &&
                !descuentoId &&
                incluyeCorte &&
                cliente.cortesFidelidad > 0 &&
                cliente.cortesFidelidad % 4 === 0) {
                montoOriginal = dto.precioTotal;
                porcentajeAplicado = 100;
                montoFinal = 0;
                fidelidadGratisAplicada = true;
            }
            let fecha;
            let hora;
            if (dto.fecha && dto.hora) {
                fecha = new Date(`${dto.fecha}T00:00:00.000Z`);
                hora = dto.hora;
            }
            else {
                const ahora = new Date();
                const yyyy = ahora.getFullYear();
                const mm = String(ahora.getMonth() + 1).padStart(2, '0');
                const dd = String(ahora.getDate()).padStart(2, '0');
                fecha = new Date(`${yyyy}-${mm}-${dd}T00:00:00.000Z`);
                hora = `${String(ahora.getHours()).padStart(2, '0')}:${String(ahora.getMinutes()).padStart(2, '0')}`;
            }
            const turno = await tx.turno.create({
                data: {
                    clienteId: cliente.id,
                    barberoId: barbero.id,
                    servicioId: dto.servicioIds[0],
                    fecha,
                    hora,
                    estado: 'cobrado',
                    observacion,
                },
            });
            const pago = await tx.pago.create({
                data: {
                    turnoId: turno.id,
                    metodoPago: dto.metodoPago,
                    monto: montoFinal,
                    montoOriginal,
                    promocionId,
                    descuentoId,
                    porcentajeAplicado,
                },
            });
            const conceptoParts = [observacion || 'Pago de servicio'];
            if (fidelidadGratisAplicada) {
                conceptoParts.push('(fidelidad 4 cortes: gratis)');
            }
            else if (porcentajeAplicado) {
                conceptoParts.push(`(${porcentajeAplicado}% ${promocionId ? 'promo' : 'desc'})`);
            }
            else if (montoOriginal !== null && montoOriginal > montoFinal) {
                const descGs = montoOriginal - montoFinal;
                conceptoParts.push(`(-${descGs} ${promocionId ? 'promo' : 'desc'})`);
            }
            const concepto = conceptoParts.join(' ');
            await tx.movimientoCaja.create({
                data: {
                    cajaId: cajaAbierta.id,
                    tipo: 'ingreso',
                    concepto,
                    monto: montoFinal,
                },
            });
            await tx.libroVentas.create({
                data: {
                    pagoId: pago.id,
                    concepto,
                    monto: montoFinal,
                    metodoPago: dto.metodoPago,
                },
            });
            let clienteFinal = cliente;
            if (incluyeCorte) {
                clienteFinal = await tx.cliente.update({
                    where: { id: cliente.id },
                    data: { cortesFidelidad: { increment: 1 } },
                });
            }
            const c = clienteFinal.cortesFidelidad;
            const progreso = c === 0 ? 0 : ((c - 1) % 4) + 1;
            return {
                turno,
                pago,
                cliente: clienteFinal,
                fidelidad: {
                    cortesFidelidad: c,
                    progreso,
                    meta: 4,
                    completoEsteCiclo: progreso === 4,
                    incluyoCorteEnEsteTurno: incluyeCorte,
                    gratisAplicado: fidelidadGratisAplicada,
                },
            };
        });
    }
};
exports.QuickCheckoutRepository = QuickCheckoutRepository;
exports.QuickCheckoutRepository = QuickCheckoutRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], QuickCheckoutRepository);
//# sourceMappingURL=quick-checkout.repository.js.map