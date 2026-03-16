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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchasesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const purchases_service_1 = require("./purchases.service");
const create_supplier_dto_1 = require("./dto/create-supplier.dto");
const create_purchase_order_dto_1 = require("./dto/create-purchase-order.dto");
const create_purchase_note_dto_1 = require("./dto/create-purchase-note.dto");
const create_adjustment_dto_1 = require("./dto/create-adjustment.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let PurchasesController = class PurchasesController {
    constructor(service) {
        this.service = service;
    }
    async findAllSuppliers() {
        return this.service.findAllSuppliers();
    }
    async findSupplierById(id) {
        return this.service.findSupplierById(id);
    }
    async createSupplier(dto) {
        return this.service.createSupplier(dto);
    }
    async updateSupplier(id, dto) {
        return this.service.updateSupplier(id, dto);
    }
    async findAllOrders() {
        return this.service.findAllOrders();
    }
    async findOrderById(id) {
        return this.service.findOrderById(id);
    }
    async createOrder(dto) {
        return this.service.createOrder(dto);
    }
    async approveOrder(id) {
        return this.service.approveOrder(id);
    }
    async cancelOrder(id) {
        return this.service.cancelOrder(id);
    }
    async receiveOrder(id) {
        return this.service.receiveOrder(id);
    }
    async findAllLibroCompras() {
        return this.service.findAllLibroCompras();
    }
    async findAllNotasRemision() {
        return this.service.findAllNotasRemision();
    }
    async findAllNotasCD() {
        return this.service.findAllNotasCD();
    }
    async createNotaCD(dto) {
        return this.service.createNotaCD(dto);
    }
    async annulNotaCD(id) {
        return this.service.annulNotaCD(id);
    }
    async findAllAdjustments() {
        return this.service.findAllAdjustments();
    }
    async createAdjustment(dto) {
        return this.service.createAdjustment(dto);
    }
};
exports.PurchasesController = PurchasesController;
__decorate([
    (0, common_1.Get)('suppliers'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los proveedores' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAllSuppliers", null);
__decorate([
    (0, common_1.Get)('suppliers/:id'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener proveedor por ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findSupplierById", null);
__decorate([
    (0, common_1.Post)('suppliers'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear proveedor' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Proveedor creado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supplier_dto_1.CreateSupplierDto]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "createSupplier", null);
__decorate([
    (0, common_1.Patch)('suppliers/:id'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar proveedor' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "updateSupplier", null);
__decorate([
    (0, common_1.Get)('orders'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar ordenes de compra' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAllOrders", null);
__decorate([
    (0, common_1.Get)('orders/:id'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener orden de compra por ID' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findOrderById", null);
__decorate([
    (0, common_1.Post)('orders'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear orden de compra' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Orden creada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_order_dto_1.CreatePurchaseOrderDto]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Patch)('orders/:id/approve'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Aprobar orden de compra' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "approveOrder", null);
__decorate([
    (0, common_1.Patch)('orders/:id/cancel'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Cancelar orden de compra' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "cancelOrder", null);
__decorate([
    (0, common_1.Patch)('orders/:id/receive'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Recibir orden de compra (actualiza stock, crea libro y nota remision)' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "receiveOrder", null);
__decorate([
    (0, common_1.Get)('ledger'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar libro de compras' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAllLibroCompras", null);
__decorate([
    (0, common_1.Get)('delivery-notes'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar notas de remision' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAllNotasRemision", null);
__decorate([
    (0, common_1.Get)('notes'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar notas C/D de compras' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAllNotasCD", null);
__decorate([
    (0, common_1.Post)('notes'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear nota C/D de compra' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Nota creada' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_purchase_note_dto_1.CreatePurchaseNoteDto]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "createNotaCD", null);
__decorate([
    (0, common_1.Patch)('notes/:id/annul'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Anular nota C/D de compra' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "annulNotaCD", null);
__decorate([
    (0, common_1.Get)('adjustments'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar ajustes de compra' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "findAllAdjustments", null);
__decorate([
    (0, common_1.Post)('adjustments'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear ajuste de compra' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Ajuste creado' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_adjustment_dto_1.CreateAdjustmentDto]),
    __metadata("design:returntype", Promise)
], PurchasesController.prototype, "createAdjustment", null);
exports.PurchasesController = PurchasesController = __decorate([
    (0, swagger_1.ApiTags)('Purchases'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('purchases'),
    __metadata("design:paramtypes", [purchases_service_1.PurchasesService])
], PurchasesController);
//# sourceMappingURL=purchases.controller.js.map