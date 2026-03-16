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
exports.BudgetsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const budgets_service_1 = require("./budgets.service");
const create_budget_dto_1 = require("./dto/create-budget.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
let BudgetsController = class BudgetsController {
    constructor(budgetsService) {
        this.budgetsService = budgetsService;
    }
    async findAll() {
        return this.budgetsService.findAll();
    }
    async create(dto) {
        return this.budgetsService.create(dto);
    }
    async findById(id) {
        return this.budgetsService.findById(id);
    }
    async generatePdf(id) {
        return this.budgetsService.generatePdf(id);
    }
};
exports.BudgetsController = BudgetsController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los presupuestos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de presupuestos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo presupuesto' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Presupuesto creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_budget_dto_1.CreateBudgetDto]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un presupuesto por ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Detalle del presupuesto' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(':id/pdf'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Generar PDF de un presupuesto' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'PDF del presupuesto generado' }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BudgetsController.prototype, "generatePdf", null);
exports.BudgetsController = BudgetsController = __decorate([
    (0, swagger_1.ApiTags)('Budgets'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('budgets'),
    __metadata("design:paramtypes", [budgets_service_1.BudgetsService])
], BudgetsController);
//# sourceMappingURL=budgets.controller.js.map