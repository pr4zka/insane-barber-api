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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const reports_repository_1 = require("./reports.repository");
let ReportsService = class ReportsService {
    constructor(reportsRepository) {
        this.reportsRepository = reportsRepository;
    }
    async dailyIncome(fechaDesde, fechaHasta) {
        return this.reportsRepository.dailyIncome(fechaDesde, fechaHasta);
    }
    async monthlyIncome(fechaDesde, fechaHasta) {
        return this.reportsRepository.monthlyIncome(fechaDesde, fechaHasta);
    }
    async appointments(fechaDesde, fechaHasta, barberoId) {
        return this.reportsRepository.appointments(fechaDesde, fechaHasta, barberoId);
    }
    async services(fechaDesde, fechaHasta) {
        return this.reportsRepository.services(fechaDesde, fechaHasta);
    }
    async complaints(fechaDesde, fechaHasta) {
        return this.reportsRepository.complaints(fechaDesde, fechaHasta);
    }
    async salesBook(fechaDesde, fechaHasta) {
        return this.reportsRepository.salesBook(fechaDesde, fechaHasta);
    }
    async supplies(fechaDesde, fechaHasta) {
        return this.reportsRepository.supplies(fechaDesde, fechaHasta);
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [reports_repository_1.ReportsRepository])
], ReportsService);
//# sourceMappingURL=reports.service.js.map