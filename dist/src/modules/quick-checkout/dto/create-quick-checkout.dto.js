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
exports.CreateQuickCheckoutDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateQuickCheckoutDto {
}
exports.CreateQuickCheckoutDto = CreateQuickCheckoutDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'ID de un cliente ya existente (elegido del buscador). Si se envia, se actualiza ese cliente con clienteNombre/clienteTelefono/clienteEmail en vez de buscar/crear por telefono.',
        example: 12,
    }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQuickCheckoutDto.prototype, "clienteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre y apellido del cliente', example: 'Juan Perez' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "clienteNombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Telefono del cliente. Si ya existe un cliente con este telefono, se reutiliza.',
        example: '0981234567',
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "clienteTelefono", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Email del cliente (opcional)', example: 'juan@email.com' }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "clienteEmail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'IDs de servicios del catalogo marcados, en el orden del catalogo (asc por id). El primero se usa como servicio principal del turno.',
        example: [1, 4],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsInt)({ each: true }),
    __metadata("design:type", Array)
], CreateQuickCheckoutDto.prototype, "servicioIds", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Texto libre del checkbox "Otro"', example: 'Diseño de barba' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(200),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "otroServicio", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Fecha del turno (YYYY-MM-DD). Si no se envia, se usa la fecha actual del servidor.', example: '2026-07-03' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Hora del turno (HH:mm). Si no se envia, se usa la hora actual del servidor.', example: '17:24' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Precio total a cobrar en guaranies', example: 90000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateQuickCheckoutDto.prototype, "precioTotal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metodo de pago', example: 'efectivo' }),
    (0, class_validator_1.IsIn)(['efectivo', 'dpago']),
    __metadata("design:type", String)
], CreateQuickCheckoutDto.prototype, "metodoPago", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID de plataforma Dpago (solo si metodoPago=dpago)', example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQuickCheckoutDto.prototype, "platformId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID de la promocion a aplicar', example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQuickCheckoutDto.prototype, "promocionId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID del descuento a aplicar', example: 1 }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateQuickCheckoutDto.prototype, "descuentoId", void 0);
//# sourceMappingURL=create-quick-checkout.dto.js.map