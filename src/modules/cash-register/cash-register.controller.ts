import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CashRegisterService } from './cash-register.service';
import { OpenRegisterDto } from './dto/open-register.dto';
import { CloseRegisterDto } from './dto/close-register.dto';
import { CreateMovementDto } from './dto/create-movement.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';

@ApiTags('Cash Register')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller()
export class CashRegisterController {
  constructor(private readonly cashRegisterService: CashRegisterService) {}

  @Get('cash-register/current')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Obtener caja registradora actual' })
  @ApiResponse({ status: 200, description: 'Estado actual de la caja' })
  async getCurrent() {
    return this.cashRegisterService.getCurrent();
  }

  @Post('cash-register/open')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Abrir caja registradora' })
  @ApiResponse({ status: 201, description: 'Caja abierta exitosamente' })
  async open(
    @CurrentUser('sub') usuarioId: number,
    @Body() dto: OpenRegisterDto,
  ) {
    return this.cashRegisterService.open(usuarioId, dto);
  }

  @Post('cash-register/close')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Cerrar caja registradora' })
  @ApiResponse({ status: 201, description: 'Caja cerrada exitosamente' })
  async close(@Body() dto: CloseRegisterDto) {
    return this.cashRegisterService.close(dto);
  }

  @Get('cash-register/collections')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Obtener recaudaciones de la caja' })
  @ApiResponse({ status: 200, description: 'Lista de recaudaciones' })
  async getCollections() {
    return this.cashRegisterService.getCollections();
  }

  @Post('cash-movements')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Crear un movimiento de caja' })
  @ApiResponse({ status: 201, description: 'Movimiento creado exitosamente' })
  async createMovement(@Body() dto: CreateMovementDto) {
    return this.cashRegisterService.createMovement(dto);
  }

  @Get('cash-movements')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Listar movimientos de caja' })
  @ApiResponse({ status: 200, description: 'Lista de movimientos de caja' })
  async getMovements() {
    return this.cashRegisterService.getMovements();
  }
}
