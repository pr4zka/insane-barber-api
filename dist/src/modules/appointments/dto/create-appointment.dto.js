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
exports.CreateAppointmentDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateAppointmentDto {
}
exports.CreateAppointmentDto = CreateAppointmentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del cliente', example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "clienteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del barbero', example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "barberoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio', example: 1 }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateAppointmentDto.prototype, "servicioId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de la cita (YYYY-MM-DD)', example: '2026-03-20' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Hora de la cita (HH:mm)', example: '10:30' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Observacion adicional', example: 'Prefiere corte con tijera' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAppointmentDto.prototype, "observacion", void 0);
//# sourceMappingURL=create-appointment.dto.js.map