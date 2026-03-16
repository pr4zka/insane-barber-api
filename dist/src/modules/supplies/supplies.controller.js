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
exports.SuppliesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const supplies_service_1 = require("./supplies.service");
const create_supply_dto_1 = require("./dto/create-supply.dto");
const update_supply_dto_1 = require("./dto/update-supply.dto");
const create_supply_usage_dto_1 = require("./dto/create-supply-usage.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let SuppliesController = class SuppliesController {
    constructor(suppliesService) {
        this.suppliesService = suppliesService;
    }
    async findAll() {
        return this.suppliesService.findAll();
    }
    async create(dto) {
        return this.suppliesService.create(dto);
    }
    async update(id, dto) {
        return this.suppliesService.update(id, dto);
    }
    async registerUsage(dto) {
        return this.suppliesService.registerUsage(dto);
    }
    async getUsageByTurno(turnoId) {
        return this.suppliesService.getUsageByTurno(turnoId);
    }
};
exports.SuppliesController = SuppliesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('administrador', 'barbero'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los insumos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de insumos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SuppliesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo insumo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Insumo creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supply_dto_1.CreateSupplyDto]),
    __metadata("design:returntype", Promise)
], SuppliesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un insumo existente' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Insumo actualizado exitosamente' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_supply_dto_1.UpdateSupplyDto]),
    __metadata("design:returntype", Promise)
], SuppliesController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('usage'),
    (0, roles_decorator_1.Roles)('administrador', 'barbero'),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar uso de un insumo' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Uso de insumo registrado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supply_usage_dto_1.CreateSupplyUsageDto]),
    __metadata("design:returntype", Promise)
], SuppliesController.prototype, "registerUsage", null);
__decorate([
    (0, common_1.Get)('usage'),
    (0, roles_decorator_1.Roles)('administrador', 'barbero'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener uso de insumos por turno' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de uso de insumos del turno' }),
    __param(0, (0, common_1.Query)('turnoId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SuppliesController.prototype, "getUsageByTurno", null);
exports.SuppliesController = SuppliesController = __decorate([
    (0, swagger_1.ApiTags)('Supplies'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('supplies'),
    __metadata("design:paramtypes", [supplies_service_1.SuppliesService])
], SuppliesController);
//# sourceMappingURL=supplies.controller.js.map