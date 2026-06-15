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
exports.UpdateLibroComprasDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdateLibroComprasDto {
}
exports.UpdateLibroComprasDto = UpdateLibroComprasDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Categoria de la compra (key)', example: 'cosmeticos' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "categoria", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Detalle libre de la compra', example: 'Tinturas y decolorante' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "detalle", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tipo de comprobante', example: 'factura' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "tipoComprobante", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Numero de comprobante', example: '001-001-0001234' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "nroComprobante", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Timbrado SET', example: '12345678' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "timbrado", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Condicion de compra', example: 'contado' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "condicion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'RUC del proveedor', example: '80012345-6' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateLibroComprasDto.prototype, "rucProveedor", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Tasa de IVA (10, 5 o 0 para exento)', example: 10 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateLibroComprasDto.prototype, "tasaIva", void 0);
//# sourceMappingURL=update-libro-compras.dto.js.map