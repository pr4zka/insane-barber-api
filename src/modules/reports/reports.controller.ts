import {
  Controller,
  Get,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ReportsService } from './reports.service';

@ApiTags('Reports')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('daily-income')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte de ingresos diarios' })
  @ApiResponse({ status: 200, description: 'Datos de ingresos diarios' })
  dailyIncome(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
  ) {
    return this.reportsService.dailyIncome(fechaDesde, fechaHasta);
  }

  @Get('monthly-income')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte de ingresos mensuales' })
  @ApiResponse({ status: 200, description: 'Datos de ingresos mensuales' })
  monthlyIncome(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
  ) {
    return this.reportsService.monthlyIncome(fechaDesde, fechaHasta);
  }

  @Get('appointments')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte de citas por rango de fechas' })
  @ApiResponse({ status: 200, description: 'Datos de citas' })
  appointments(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
    @Query('barberoId') barberoId?: string,
  ) {
    return this.reportsService.appointments(
      fechaDesde,
      fechaHasta,
      barberoId ? Number(barberoId) : undefined,
    );
  }

  @Get('services')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte de servicios realizados' })
  @ApiResponse({ status: 200, description: 'Datos de servicios' })
  services(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
  ) {
    return this.reportsService.services(fechaDesde, fechaHasta);
  }

  @Get('complaints')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte de quejas recibidas' })
  @ApiResponse({ status: 200, description: 'Datos de quejas' })
  complaints(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
  ) {
    return this.reportsService.complaints(fechaDesde, fechaHasta);
  }

  @Get('sales-book')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte del libro de ventas' })
  @ApiResponse({ status: 200, description: 'Datos del libro de ventas' })
  salesBook(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
  ) {
    return this.reportsService.salesBook(fechaDesde, fechaHasta);
  }

  @Get('supplies')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reporte de insumos utilizados' })
  @ApiResponse({ status: 200, description: 'Datos de uso de insumos' })
  supplies(
    @Query('fecha_desde') fechaDesde: string,
    @Query('fecha_hasta') fechaHasta: string,
  ) {
    return this.reportsService.supplies(fechaDesde, fechaHasta);
  }
}
