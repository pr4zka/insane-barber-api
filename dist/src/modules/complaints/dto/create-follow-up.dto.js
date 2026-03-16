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
exports.CreateFollowUpDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateFollowUpDto {
}
exports.CreateFollowUpDto = CreateFollowUpDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Comentario del seguimiento', example: 'Se contacto al cliente para resolver el problema' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFollowUpDto.prototype, "comentario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nuevo estado de la queja', example: 'en_proceso' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateFollowUpDto.prototype, "estadoNuevo", void 0);
//# sourceMappingURL=create-follow-up.dto.js.map