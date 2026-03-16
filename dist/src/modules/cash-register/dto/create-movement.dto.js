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
exports.CreateMovementDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateMovementDto {
}
exports.CreateMovementDto = CreateMovementDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de movimiento', example: 'ingreso', enum: ['ingreso', 'egreso'] }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['ingreso', 'egreso']),
    __metadata("design:type", String)
], CreateMovementDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Concepto del movimiento', example: 'Pago de servicio de corte' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateMovementDto.prototype, "concepto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto del movimiento en guaranies', example: 35000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateMovementDto.prototype, "monto", void 0);
//# sourceMappingURL=create-movement.dto.js.map