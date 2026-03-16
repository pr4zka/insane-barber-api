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
exports.SuppliesService = void 0;
const common_1 = require("@nestjs/common");
const supplies_repository_1 = require("./supplies.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
let SuppliesService = class SuppliesService {
    constructor(suppliesRepository, prisma) {
        this.suppliesRepository = suppliesRepository;
        this.prisma = prisma;
    }
    async findAll() {
        return this.suppliesRepository.findAll();
    }
    async create(dto) {
        return this.suppliesRepository.create(dto);
    }
    async update(id, dto) {
        const insumo = await this.prisma.insumo.findUnique({ where: { id } });
        if (!insumo) {
            throw new common_1.NotFoundException(`El insumo #${id} no existe.`);
        }
        return this.suppliesRepository.update(id, dto);
    }
    async registerUsage(dto) {
        const insumo = await this.prisma.insumo.findUnique({
            where: { id: dto.insumoId },
        });
        if (!insumo) {
            throw new common_1.NotFoundException(`El insumo #${dto.insumoId} no existe.`);
        }
        if (Number(insumo.stock) < dto.cantidad) {
            throw new common_1.BadRequestException(`Stock insuficiente del insumo "${insumo.nombre}". Stock disponible: ${insumo.stock} ${insumo.unidad}. Cantidad solicitada: ${dto.cantidad} ${insumo.unidad}.`);
        }
        return this.suppliesRepository.registerUsage(dto);
    }
    async getUsageByTurno(turnoId) {
        return this.suppliesRepository.getUsageByTurno(turnoId);
    }
};
exports.SuppliesService = SuppliesService;
exports.SuppliesService = SuppliesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [supplies_repository_1.SuppliesRepository,
        prisma_service_1.PrismaService])
], SuppliesService);
//# sourceMappingURL=supplies.service.js.map