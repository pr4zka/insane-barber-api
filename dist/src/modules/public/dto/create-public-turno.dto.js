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
exports.CreatePublicTurnoDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePublicTurnoDto {
}
exports.CreatePublicTurnoDto = CreatePublicTurnoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del cliente', example: 'Juan Perez' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(2),
    __metadata("design:type", String)
], CreatePublicTurnoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Correo del cliente', example: 'juan@mail.com' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreatePublicTurnoDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Telefono del cliente', example: '+595 981 123 456' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreatePublicTurnoDto.prototype, "numero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha del turno (YYYY-MM-DD)', example: '2026-07-01' }),
    (0, class_validator_1.Matches)(/^\d{4}-\d{2}-\d{2}$/, { message: 'fecha debe tener formato YYYY-MM-DD' }),
    __metadata("design:type", String)
], CreatePublicTurnoDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hora del turno (HH:mm)', example: '10:30' }),
    (0, class_validator_1.Matches)(/^\d{2}:\d{2}$/, { message: 'hora debe tener formato HH:mm' }),
    __metadata("design:type", String)
], CreatePublicTurnoDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID de servicio (opcional)', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePublicTurnoDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID de barbero (opcional)', example: 1 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreatePublicTurnoDto.prototype, "barberoId", void 0);
//# sourceMappingURL=create-public-turno.dto.js.map