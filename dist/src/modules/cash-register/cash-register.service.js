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
exports.CashRegisterService = void 0;
const common_1 = require("@nestjs/common");
const cash_register_repository_1 = require("./cash-register.repository");
let CashRegisterService = class CashRegisterService {
    constructor(cashRegisterRepository) {
        this.cashRegisterRepository = cashRegisterRepository;
    }
    async getCurrent() {
        return this.cashRegisterRepository.findCurrent();
    }
    async open(usuarioId, dto) {
        const current = await this.cashRegisterRepository.findCurrent();
        if (current) {
            throw new common_1.BadRequestException('Ya hay una caja abierta. Debe cerrar la caja actual antes de abrir una nueva.');
        }
        return this.cashRegisterRepository.open(usuarioId, dto);
    }
    async close(dto) {
        const current = await this.cashRegisterRepository.findCurrent();
        if (!current) {
            throw new common_1.BadRequestException('No hay ninguna caja abierta para cerrar. Primero debe abrir una caja.');
        }
        return this.cashRegisterRepository.close(current.id, dto);
    }
    async getMovements() {
        const current = await this.cashRegisterRepository.findCurrent();
        if (!current) {
            return [];
        }
        return this.cashRegisterRepository.getMovements(current.id);
    }
    async createMovement(dto) {
        const current = await this.cashRegisterRepository.findCurrent();
        if (!current) {
            throw new common_1.BadRequestException('No se puede registrar un movimiento porque no hay caja abierta. Abra la caja primero desde la seccion "Caja".');
        }
        return this.cashRegisterRepository.createMovement(current.id, dto);
    }
    async getCollections() {
        return this.cashRegisterRepository.getCollections();
    }
};
exports.CashRegisterService = CashRegisterService;
exports.CashRegisterService = CashRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cash_register_repository_1.CashRegisterRepository])
], CashRegisterService);
//# sourceMappingURL=cash-register.service.js.map