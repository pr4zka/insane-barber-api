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
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const purchases_repository_1 = require("./purchases.repository");
let PurchasesService = class PurchasesService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAllSuppliers() {
        return this.repository.findAllSuppliers();
    }
    async findSupplierById(id) {
        const supplier = await this.repository.findSupplierById(id);
        if (!supplier)
            throw new common_1.NotFoundException(`Proveedor #${id} no encontrado.`);
        return supplier;
    }
    async createSupplier(dto) {
        return this.repository.createSupplier(dto);
    }
    async updateSupplier(id, dto) {
        await this.findSupplierById(id);
        return this.repository.updateSupplier(id, dto);
    }
    async findAllOrders() {
        return this.repository.findAllOrders();
    }
    async findOrderById(id) {
        const order = await this.repository.findOrderById(id);
        if (!order)
            throw new common_1.NotFoundException(`Orden de compra #${id} no encontrada.`);
        return order;
    }
    async createOrder(dto) {
        return this.repository.createOrder(dto);
    }
    async approveOrder(id) {
        const order = await this.findOrderById(id);
        if (order.estado !== 'pendiente') {
            throw new common_1.BadRequestException(`Solo se pueden aprobar ordenes en estado "pendiente". Esta orden esta en estado "${order.estado}".`);
        }
        return this.repository.approveOrder(id);
    }
    async cancelOrder(id) {
        const order = await this.findOrderById(id);
        if (order.estado === 'recibida') {
            throw new common_1.BadRequestException('No se puede cancelar una orden ya recibida.');
        }
        return this.repository.cancelOrder(id);
    }
    async receiveOrder(id) {
        const order = await this.findOrderById(id);
        if (order.estado !== 'aprobada') {
            throw new common_1.BadRequestException(`Solo se pueden recibir ordenes aprobadas. Esta orden esta en estado "${order.estado}".`);
        }
        return this.repository.receiveOrder(id);
    }
    async findAllLibroCompras() {
        return this.repository.findAllLibroCompras();
    }
    async findAllNotasRemision() {
        return this.repository.findAllNotasRemision();
    }
    async findAllNotasCD() {
        return this.repository.findAllNotasCD();
    }
    async createNotaCD(dto) {
        const order = await this.findOrderById(dto.ordenCompraId);
        if (order.estado !== 'recibida') {
            throw new common_1.BadRequestException('Solo se pueden emitir notas sobre ordenes recibidas.');
        }
        return this.repository.createNotaCD(dto);
    }
    async annulNotaCD(id) {
        return this.repository.annulNotaCD(id);
    }
    async findAllAdjustments() {
        return this.repository.findAllAdjustments();
    }
    async createAdjustment(dto) {
        const order = await this.findOrderById(dto.ordenCompraId);
        if (order.estado !== 'recibida') {
            throw new common_1.BadRequestException('Solo se pueden registrar ajustes sobre ordenes recibidas.');
        }
        return this.repository.createAdjustment(dto);
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [purchases_repository_1.PurchasesRepository])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map