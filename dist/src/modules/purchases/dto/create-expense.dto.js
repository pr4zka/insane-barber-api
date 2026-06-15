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
exports.CreateExpenseDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateExpenseDto {
}
exports.CreateExpenseDto = CreateExpenseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Proveedor / prestador', example: 'Tapiceria Lopez' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "proveedor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto total en guaranies (IVA incluido)', example: 350000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateExpenseDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Categoria de la compra (key)', example: 'equipos' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detalle libre', example: 'Tapizado de sofa de espera' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "detalle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fecha del gasto (ISO). Por defecto hoy.', example: '2026-06-08' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tipo de comprobante', example: 'factura' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "tipoComprobante", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Numero de comprobante', example: '001-001-0001234' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "nroComprobante", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timbrado SET', example: '12345678' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "timbrado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Condicion de compra', example: 'contado' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "condicion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'RUC del proveedor', example: '80012345-6' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateExpenseDto.prototype, "rucProveedor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tasa de IVA (10, 5 o 0 para exento)', example: 10 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateExpenseDto.prototype, "tasaIva", void 0);
//# sourceMappingURL=create-expense.dto.js.map