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
exports.BarbersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const barbers_service_1 = require("./barbers.service");
const create_barber_dto_1 = require("./dto/create-barber.dto");
let BarbersController = class BarbersController {
    constructor(barbersService) {
        this.barbersService = barbersService;
    }
    findAll() {
        return this.barbersService.findAll();
    }
    create(dto) {
        return this.barbersService.create(dto);
    }
};
exports.BarbersController = BarbersController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('administrador', 'recepcionista', 'barbero'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todos los barberos' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de barberos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear un nuevo barbero' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Barbero creado exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_barber_dto_1.CreateBarberDto]),
    __metadata("design:returntype", void 0)
], BarbersController.prototype, "create", null);
exports.BarbersController = BarbersController = __decorate([
    (0, swagger_1.ApiTags)('Barbers'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('barbers'),
    __metadata("design:paramtypes", [barbers_service_1.BarbersService])
], BarbersController);
//# sourceMappingURL=barbers.controller.js.map