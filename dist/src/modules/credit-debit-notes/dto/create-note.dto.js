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
exports.CreateNoteDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateNoteDto {
}
exports.CreateNoteDto = CreateNoteDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del pago asociado', example: 1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateNoteDto.prototype, "pagoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de nota', example: 'credito', enum: ['credito', 'debito'] }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['credito', 'debito']),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "tipo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto de la nota en guaranies', example: 10000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateNoteDto.prototype, "monto", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Motivo de la nota', example: 'Devolucion por servicio no realizado' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateNoteDto.prototype, "motivo", void 0);
//# sourceMappingURL=create-note.dto.js.map