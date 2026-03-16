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
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { UpdateAppointmentDto } from './dto/update-appointment.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Appointments')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  @Roles('administrador', 'recepcionista', 'barbero')
  @ApiOperation({ summary: 'Listar todas las citas' })
  @ApiResponse({ status: 200, description: 'Lista de citas' })
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Post()
  @Roles('administrador', 'recepcionista', 'barbero')
  @ApiOperation({ summary: 'Crear una nueva cita' })
  @ApiResponse({ status: 201, description: 'Cita creada exitosamente' })
  create(@Body() dto: CreateAppointmentDto) {
    return this.appointmentsService.create(dto);
  }

  @Patch(':id')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Actualizar una cita existente' })
  @ApiResponse({ status: 200, description: 'Cita actualizada exitosamente' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(id, dto);
  }

  @Patch(':id/confirm')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Confirmar una cita' })
  @ApiResponse({ status: 200, description: 'Cita confirmada exitosamente' })
  confirm(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.confirm(id);
  }

  @Patch(':id/cancel')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Cancelar una cita' })
  @ApiResponse({ status: 200, description: 'Cita cancelada exitosamente' })
  cancel(@Param('id', ParseIntPipe) id: number) {
    return this.appointmentsService.cancel(id);
  }

  @Patch(':id/reschedule')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Reagendar una cita' })
  @ApiResponse({ status: 200, description: 'Cita reagendada exitosamente' })
  reschedule(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { fecha: string; hora: string },
  ) {
    return this.appointmentsService.reschedule(id, body);
  }
}
