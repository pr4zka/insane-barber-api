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
exports.CreateSupplyDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateSupplyDto {
}
exports.CreateSupplyDto = CreateSupplyDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del insumo', example: 'Gel para cabello' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplyDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripcion del insumo', example: 'Gel fijador extra fuerte 500ml' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplyDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unidad de medida', example: 'unidad' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSupplyDto.prototype, "unidad", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Stock disponible', example: 50 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateSupplyDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Estado activo/inactivo del insumo', example: true }),
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateSupplyDto.prototype, "estado", void 0);
//# sourceMappingURL=create-supply.dto.js.map