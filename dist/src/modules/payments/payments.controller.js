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
exports.PaymentsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const payments_service_1 = require("./payments.service");
const create_payment_dto_1 = require("./dto/create-payment.dto");
const create_dpago_dto_1 = require("./dto/create-dpago.dto");
let PaymentsController = class PaymentsController {
    constructor(paymentsService) {
        this.paymentsService = paymentsService;
    }
    findAll() {
        return this.paymentsService.findAll();
    }
    create(dto) {
        return this.paymentsService.create(dto);
    }
    findPending() {
        return this.paymentsService.findPending();
    }
    getReceipt(id) {
        return this.paymentsService.getReceipt(id);
    }
    createDpago(dto) {
        return this.paymentsService.createDpago(dto);
    }
    generateDpagoLink(dto) {
        return this.paymentsService.generateDpagoLink(dto);
    }
    async findAllDeliveryNotes() {
        return this.paymentsService.findAllDeliveryNotes();
    }
    async createDeliveryNote(body) {
        return this.paymentsService.createDeliveryNote(body.turnoId, body.observacion ?? '');
    }
    findByDpagoRef(reference) {
        return this.paymentsService.findByDpagoRef(reference);
    }
};
exports.PaymentsController = PaymentsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los pagos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pagos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo pago' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pago creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_payment_dto_1.CreatePaymentDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('pending'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar pagos pendientes' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de pagos pendientes' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findPending", null);
__decorate([
    (0, common_1.Get)(':id/receipt'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener recibo de un pago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Recibo del pago' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "getReceipt", null);
__decorate([
    (0, common_1.Post)('dpago'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear pago via dPago' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Pago dPago creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dpago_dto_1.CreateDpagoDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "createDpago", null);
__decorate([
    (0, common_1.Post)('dpago/link'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Generar link de pago dPago' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Link de pago generado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dpago_dto_1.CreateDpagoDto]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "generateDpagoLink", null);
__decorate([
    (0, common_1.Get)('delivery-notes'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar notas de remision de venta' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "findAllDeliveryNotes", null);
__decorate([
    (0, common_1.Post)('delivery-notes'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear nota de remision de venta' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PaymentsController.prototype, "createDeliveryNote", null);
__decorate([
    (0, common_1.Get)('dpago/:reference'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar pago por referencia dPago' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pago encontrado por referencia' }),
    __param(0, (0, common_1.Param)('reference')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PaymentsController.prototype, "findByDpagoRef", null);
exports.PaymentsController = PaymentsController = __decorate([
    (0, swagger_1.ApiTags)('Payments'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('payments'),
    __metadata("design:paramtypes", [payments_service_1.PaymentsService])
], PaymentsController);
//# sourceMappingURL=payments.controller.js.map