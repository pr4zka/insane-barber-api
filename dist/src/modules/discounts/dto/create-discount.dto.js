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
exports.CreateDiscountDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateDiscountDto {
}
exports.CreateDiscountDto = CreateDiscountDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del descuento', example: 'Descuento cliente frecuente' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripcion del descuento', example: 'Descuento para clientes con mas de 10 visitas' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDiscountDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Porcentaje de descuento', example: 15 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateDiscountDto.prototype, "porcentaje", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estado activo/inactivo del descuento', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateDiscountDto.prototype, "estado", void 0);
//# sourceMappingURL=create-discount.dto.js.map