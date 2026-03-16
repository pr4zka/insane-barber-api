import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SuppliesService } from './supplies.service';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { CreateSupplyUsageDto } from './dto/create-supply-usage.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Supplies')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('supplies')
export class SuppliesController {
  constructor(private readonly suppliesService: SuppliesService) {}

  @Get()
  @Roles('administrador', 'barbero')
  @ApiOperation({ summary: 'Listar todos los insumos' })
  @ApiResponse({ status: 200, description: 'Lista de insumos' })
  async findAll() {
    return this.suppliesService.findAll();
  }

  @Post()
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear un nuevo insumo' })
  @ApiResponse({ status: 201, description: 'Insumo creado exitosamente' })
  async create(@Body() dto: CreateSupplyDto) {
    return this.suppliesService.create(dto);
  }

  @Patch(':id')
  @Roles('administrador')
  @ApiOperation({ summary: 'Actualizar un insumo existente' })
  @ApiResponse({ status: 200, description: 'Insumo actualizado exitosamente' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSupplyDto,
  ) {
    return this.suppliesService.update(id, dto);
  }

  @Post('usage')
  @Roles('administrador', 'barbero')
  @ApiOperation({ summary: 'Registrar uso de un insumo' })
  @ApiResponse({ status: 201, description: 'Uso de insumo registrado exitosamente' })
  async registerUsage(@Body() dto: CreateSupplyUsageDto) {
    return this.suppliesService.registerUsage(dto);
  }

  @Get('usage')
  @Roles('administrador', 'barbero')
  @ApiOperation({ summary: 'Obtener uso de insumos por turno' })
  @ApiResponse({ status: 200, description: 'Lista de uso de insumos del turno' })
  async getUsageByTurno(@Query('turnoId', ParseIntPipe) turnoId: number) {
    return this.suppliesService.getUsageByTurno(turnoId);
  }
}
