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
exports.CreatePurchaseNoteDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePurchaseNoteDto {
}
exports.CreatePurchaseNoteDto = CreatePurchaseNoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la orden de compra', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePurchaseNoteDto.prototype, "ordenCompraId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo: credito o debito', example: 'credito' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePurchaseNoteDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto en guaranies', example: 50000 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreatePurchaseNoteDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Motivo de la nota', example: 'Devolucion de productos defectuosos' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreatePurchaseNoteDto.prototype, "motivo", void 0);
//# sourceMappingURL=create-purchase-note.dto.js.map