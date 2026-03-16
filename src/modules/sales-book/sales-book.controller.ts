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
import { SalesBookService } from './sales-book.service';

@ApiTags('Sales Book')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('sales-book')
export class SalesBookController {
  constructor(private readonly salesBookService: SalesBookService) {}

  @Get()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Consultar libro de ventas con filtros opcionales' })
  @ApiResponse({ status: 200, description: 'Registros del libro de ventas' })
  findAll(
    @Query('fecha_desde') fechaDesde?: string,
    @Query('fecha_hasta') fechaHasta?: string,
    @Query('metodo_pago') metodoPago?: string,
  ) {
    return this.salesBookService.findAll({
      fecha_desde: fechaDesde,
      fecha_hasta: fechaHasta,
      metodo_pago: metodoPago,
    });
  }
}
