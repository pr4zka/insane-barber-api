import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PublicService } from './public.service';
import { CreatePublicTurnoDto } from './dto/create-public-turno.dto';

// Endpoints PUBLICOS (sin auth) para la landing: reserva de turnos online.
@ApiTags('Public')
@Controller('public')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @Get('horarios')
  @ApiOperation({ summary: 'Horarios disponibles para una fecha (publico)' })
  @ApiResponse({ status: 200, description: 'Lista de slots con disponibilidad' })
  getHorarios(@Query('fecha') fecha: string) {
    return this.publicService.getHorarios(fecha);
  }

  @Post('turnos')
  @ApiOperation({
    summary: 'Solicitar un turno desde la web (publico)',
    description:
      'Registra automaticamente al cliente (si no existe) y agenda un turno en estado "pendiente".',
  })
  @ApiResponse({ status: 201, description: 'Turno solicitado' })
  crearTurno(@Body() dto: CreatePublicTurnoDto) {
    return this.publicService.crearTurno(dto);
  }
}
