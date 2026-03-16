import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';

@ApiTags('Barbers')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('barbers')
export class BarbersController {
  constructor(private readonly barbersService: BarbersService) {}

  @Get()
  @Roles('administrador', 'recepcionista', 'barbero')
  @ApiOperation({ summary: 'Listar todos los barberos' })
  @ApiResponse({ status: 200, description: 'Lista de barberos' })
  findAll() {
    return this.barbersService.findAll();
  }

  @Post()
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear un nuevo barbero' })
  @ApiResponse({ status: 201, description: 'Barbero creado exitosamente' })
  create(@Body() dto: CreateBarberDto) {
    return this.barbersService.create(dto);
  }
}
