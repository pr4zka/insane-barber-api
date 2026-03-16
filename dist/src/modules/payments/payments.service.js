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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const payments_repository_1 = require("./payments.repository");
let PaymentsService = class PaymentsService {
    constructor(paymentsRepository) {
        this.paymentsRepository = paymentsRepository;
    }
    async findAll() {
        return this.paymentsRepository.findAll();
    }
    async findById(id) {
        const payment = await this.paymentsRepository.findById(id);
        if (!payment) {
            throw new common_1.NotFoundException(`No se encontró el pago #${id}. Es posible que haya sido eliminado.`);
        }
        return payment;
    }
    async findPending() {
        return this.paymentsRepository.findPending();
    }
    async create(dto) {
        return this.paymentsRepository.create(dto);
    }
    async createDpago(dto) {
        return this.paymentsRepository.create({
            turnoId: dto.turnoId,
            metodoPago: 'dpago',
            monto: dto.monto,
            promocionId: dto.promocionId,
            descuentoId: dto.descuentoId,
        });
    }
    async generateDpagoLink(dto) {
        const reference = `DPAGO-${Date.now()}-${dto.platformId}`;
        return {
            link: `https://dpago.example.com/pay/${reference}`,
            reference,
            monto: dto.monto,
            platformId: dto.platformId,
        };
    }
    async findAllDeliveryNotes() {
        return this.paymentsRepository.findAllDeliveryNotes();
    }
    async createDeliveryNote(turnoId, observacion) {
        return this.paymentsRepository.createDeliveryNote(turnoId, observacion);
    }
    async findByDpagoRef(reference) {
        const payment = await this.paymentsRepository.findByDpagoRef(reference);
        if (!payment) {
            throw new common_1.NotFoundException(`No se encontró ningun pago con la referencia Dpago "${reference}".`);
        }
        return payment;
    }
    async getReceipt(id) {
        const payment = await this.findById(id);
        return {
            ...payment,
            receiptGenerated: true,
            message: 'Recibo generado correctamente',
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [payments_repository_1.PaymentsRepository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map