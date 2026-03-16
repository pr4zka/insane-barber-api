import { Injectable } from '@nestjs/common';
import { ReportsRepository } from './reports.repository';

@Injectable()
export class ReportsService {
  constructor(private readonly reportsRepository: ReportsRepository) {}

  async dailyIncome(fechaDesde: string, fechaHasta: string) {
    return this.reportsRepository.dailyIncome(fechaDesde, fechaHasta);
  }

  async monthlyIncome(fechaDesde: string, fechaHasta: string) {
    return this.reportsRepository.monthlyIncome(fechaDesde, fechaHasta);
  }

  async appointments(
    fechaDesde: string,
    fechaHasta: string,
    barberoId?: number,
  ) {
    return this.reportsRepository.appointments(
      fechaDesde,
      fechaHasta,
      barberoId,
    );
  }

  async services(fechaDesde: string, fechaHasta: string) {
    return this.reportsRepository.services(fechaDesde, fechaHasta);
  }

  async complaints(fechaDesde: string, fechaHasta: string) {
    return this.reportsRepository.complaints(fechaDesde, fechaHasta);
  }

  async salesBook(fechaDesde: string, fechaHasta: string) {
    return this.reportsRepository.salesBook(fechaDesde, fechaHasta);
  }

  async supplies(fechaDesde: string, fechaHasta: string) {
    return this.reportsRepository.supplies(fechaDesde, fechaHasta);
  }
}
