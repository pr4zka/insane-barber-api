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
exports.UpdatePromotionDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UpdatePromotionDto {
}
exports.UpdatePromotionDto = UpdatePromotionDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Nombre de la promocion', example: 'Promo Verano' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Descripcion de la promocion', example: 'Descuento especial en cortes durante el verano' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Porcentaje de descuento', example: 20 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UpdatePromotionDto.prototype, "porcentaje", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fecha de inicio (YYYY-MM-DD)', example: '2026-01-01' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionDto.prototype, "fechaInicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fecha de fin (YYYY-MM-DD)', example: '2026-03-31' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdatePromotionDto.prototype, "fechaFin", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estado activo/inactivo de la promocion', example: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdatePromotionDto.prototype, "estado", void 0);
//# sourceMappingURL=update-promotion.dto.js.map