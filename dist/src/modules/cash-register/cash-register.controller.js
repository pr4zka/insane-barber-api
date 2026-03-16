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
exports.CashRegisterController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cash_register_service_1 = require("./cash-register.service");
const open_register_dto_1 = require("./dto/open-register.dto");
const close_register_dto_1 = require("./dto/close-register.dto");
const create_movement_dto_1 = require("./dto/create-movement.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
let CashRegisterController = class CashRegisterController {
    constructor(cashRegisterService) {
        this.cashRegisterService = cashRegisterService;
    }
    async getCurrent() {
        return this.cashRegisterService.getCurrent();
    }
    async open(usuarioId, dto) {
        return this.cashRegisterService.open(usuarioId, dto);
    }
    async close(dto) {
        return this.cashRegisterService.close(dto);
    }
    async getCollections() {
        return this.cashRegisterService.getCollections();
    }
    async createMovement(dto) {
        return this.cashRegisterService.createMovement(dto);
    }
    async getMovements() {
        return this.cashRegisterService.getMovements();
    }
};
exports.CashRegisterController = CashRegisterController;
__decorate([
    (0, common_1.Get)('cash-register/current'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener caja registradora actual' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Estado actual de la caja' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CashRegisterController.prototype, "getCurrent", null);
__decorate([
    (0, common_1.Post)('cash-register/open'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Abrir caja registradora' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Caja abierta exitosamente' }),
    __param(0, (0, current_user_decorator_1.CurrentUser)('sub')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, open_register_dto_1.OpenRegisterDto]),
    __metadata("design:returntype", Promise)
], CashRegisterController.prototype, "open", null);
__decorate([
    (0, common_1.Post)('cash-register/close'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Cerrar caja registradora' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Caja cerrada exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [close_register_dto_1.CloseRegisterDto]),
    __metadata("design:returntype", Promise)
], CashRegisterController.prototype, "close", null);
__decorate([
    (0, common_1.Get)('cash-register/collections'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener recaudaciones de la caja' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de recaudaciones' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CashRegisterController.prototype, "getCollections", null);
__decorate([
    (0, common_1.Post)('cash-movements'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un movimiento de caja' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Movimiento creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_movement_dto_1.CreateMovementDto]),
    __metadata("design:returntype", Promise)
], CashRegisterController.prototype, "createMovement", null);
__decorate([
    (0, common_1.Get)('cash-movements'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar movimientos de caja' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de movimientos de caja' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CashRegisterController.prototype, "getMovements", null);
exports.CashRegisterController = CashRegisterController = __decorate([
    (0, swagger_1.ApiTags)('Cash Register'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [cash_register_service_1.CashRegisterService])
], CashRegisterController);
//# sourceMappingURL=cash-register.controller.js.map