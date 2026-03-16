import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Complaints')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('complaints')
export class ComplaintsController {
  constructor(private readonly complaintsService: ComplaintsService) {}

  @Get()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Listar todas las quejas' })
  @ApiResponse({ status: 200, description: 'Lista de quejas' })
  findAll() {
    return this.complaintsService.findAll();
  }

  @Post()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Crear una nueva queja' })
  @ApiResponse({ status: 201, description: 'Queja creada exitosamente' })
  create(@Body() dto: CreateComplaintDto) {
    return this.complaintsService.create(dto);
  }

  @Patch(':id')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Actualizar una queja existente' })
  @ApiResponse({ status: 200, description: 'Queja actualizada exitosamente' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateComplaintDto,
  ) {
    return this.complaintsService.update(id, dto);
  }

  @Get(':id/follow-ups')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Obtener seguimientos de una queja' })
  @ApiResponse({ status: 200, description: 'Lista de seguimientos de la queja' })
  getFollowUps(@Param('id', ParseIntPipe) id: number) {
    return this.complaintsService.getFollowUps(id);
  }

  @Post(':id/follow-ups')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Agregar seguimiento a una queja' })
  @ApiResponse({ status: 201, description: 'Seguimiento creado exitosamente' })
  createFollowUp(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CreateFollowUpDto,
  ) {
    return this.complaintsService.createFollowUp(id, dto);
  }
}
