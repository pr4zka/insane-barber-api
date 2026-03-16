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
exports.ReportsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const reports_service_1 = require("./reports.service");
let ReportsController = class ReportsController {
    constructor(reportsService) {
        this.reportsService = reportsService;
    }
    dailyIncome(fechaDesde, fechaHasta) {
        return this.reportsService.dailyIncome(fechaDesde, fechaHasta);
    }
    monthlyIncome(fechaDesde, fechaHasta) {
        return this.reportsService.monthlyIncome(fechaDesde, fechaHasta);
    }
    appointments(fechaDesde, fechaHasta, barberoId) {
        return this.reportsService.appointments(fechaDesde, fechaHasta, barberoId ? Number(barberoId) : undefined);
    }
    services(fechaDesde, fechaHasta) {
        return this.reportsService.services(fechaDesde, fechaHasta);
    }
    complaints(fechaDesde, fechaHasta) {
        return this.reportsService.complaints(fechaDesde, fechaHasta);
    }
    salesBook(fechaDesde, fechaHasta) {
        return this.reportsService.salesBook(fechaDesde, fechaHasta);
    }
    supplies(fechaDesde, fechaHasta) {
        return this.reportsService.supplies(fechaDesde, fechaHasta);
    }
};
exports.ReportsController = ReportsController;
__decorate([
    (0, common_1.Get)('daily-income'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de ingresos diarios' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos de ingresos diarios' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "dailyIncome", null);
__decorate([
    (0, common_1.Get)('monthly-income'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de ingresos mensuales' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos de ingresos mensuales' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "monthlyIncome", null);
__decorate([
    (0, common_1.Get)('appointments'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de citas por rango de fechas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos de citas' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __param(2, (0, common_1.Query)('barberoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "appointments", null);
__decorate([
    (0, common_1.Get)('services'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de servicios realizados' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos de servicios' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "services", null);
__decorate([
    (0, common_1.Get)('complaints'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de quejas recibidas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos de quejas' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "complaints", null);
__decorate([
    (0, common_1.Get)('sales-book'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte del libro de ventas' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos del libro de ventas' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "salesBook", null);
__decorate([
    (0, common_1.Get)('supplies'),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de insumos utilizados' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos de uso de insumos' }),
    __param(0, (0, common_1.Query)('fecha_desde')),
    __param(1, (0, common_1.Query)('fecha_hasta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ReportsController.prototype, "supplies", null);
exports.ReportsController = ReportsController = __decorate([
    (0, swagger_1.ApiTags)('Reports'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('reports'),
    __metadata("design:paramtypes", [reports_service_1.ReportsService])
], ReportsController);
//# sourceMappingURL=reports.controller.js.map