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
exports.CreditDebitNotesRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let CreditDebitNotesRepository = class CreditDebitNotesRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.notaCreditoDebito.findMany({
            include: {
                pago: {
                    include: {
                        turno: true,
                    },
                },
            },
        });
    }
    async create(data) {
        return this.prisma.$transaction(async (tx) => {
            const pago = await tx.pago.findUnique({
                where: { id: data.pagoId },
            });
            if (!pago) {
                throw new common_1.BadRequestException(`El pago #${data.pagoId} no existe. Seleccione un pago valido.`);
            }
            const cajaAbierta = await tx.caja.findFirst({
                where: { estado: 'abierta' },
            });
            if (!cajaAbierta) {
                throw new common_1.BadRequestException('No se puede emitir una nota de credito/debito porque no hay caja abierta. Abra la caja primero desde la seccion "Caja".');
            }
            if (data.tipo === 'credito' && data.monto > Number(pago.monto)) {
                throw new common_1.BadRequestException(`El monto de la nota de credito (${data.monto}) no puede ser mayor al monto del pago original (${pago.monto}).`);
            }
            const nota = await tx.notaCreditoDebito.create({
                data: {
                    pagoId: data.pagoId,
                    tipo: data.tipo,
                    monto: data.monto,
                    motivo: data.motivo,
                },
            });
            const tipoMovimiento = data.tipo === 'credito' ? 'egreso' : 'ingreso';
            await tx.movimientoCaja.create({
                data: {
                    cajaId: cajaAbierta.id,
                    tipo: tipoMovimiento,
                    concepto: `Nota de ${data.tipo}: ${data.motivo}`,
                    monto: data.monto,
                },
            });
            return nota;
        });
    }
};
exports.CreditDebitNotesRepository = CreditDebitNotesRepository;
exports.CreditDebitNotesRepository = CreditDebitNotesRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreditDebitNotesRepository);
//# sourceMappingURL=credit-debit-notes.repository.js.map