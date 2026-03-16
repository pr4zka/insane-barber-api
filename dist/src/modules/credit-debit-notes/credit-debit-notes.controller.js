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
exports.CreditDebitNotesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const roles_guard_1 = require("../../common/guards/roles.guard");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const credit_debit_notes_service_1 = require("./credit-debit-notes.service");
const create_note_dto_1 = require("./dto/create-note.dto");
let CreditDebitNotesController = class CreditDebitNotesController {
    constructor(creditDebitNotesService) {
        this.creditDebitNotesService = creditDebitNotesService;
    }
    findAll() {
        return this.creditDebitNotesService.findAll();
    }
    create(dto) {
        return this.creditDebitNotesService.create(dto);
    }
};
exports.CreditDebitNotesController = CreditDebitNotesController;
__decorate([
    (0, common_1.Get)(),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Listar todas las notas de credito/debito' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Lista de notas de credito/debito' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CreditDebitNotesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)('administrador'),
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nota de credito o debito' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Nota creada exitosamente' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_note_dto_1.CreateNoteDto]),
    __metadata("design:returntype", void 0)
], CreditDebitNotesController.prototype, "create", null);
exports.CreditDebitNotesController = CreditDebitNotesController = __decorate([
    (0, swagger_1.ApiTags)('Credit Debit Notes'),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('credit-debit-notes'),
    __metadata("design:paramtypes", [credit_debit_notes_service_1.CreditDebitNotesService])
], CreditDebitNotesController);
//# sourceMappingURL=credit-debit-notes.controller.js.map