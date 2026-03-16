import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BudgetsService } from './budgets.service';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Budgets')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('budgets')
export class BudgetsController {
  constructor(private readonly budgetsService: BudgetsService) {}

  @Get()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Listar todos los presupuestos' })
  @ApiResponse({ status: 200, description: 'Lista de presupuestos' })
  async findAll() {
    return this.budgetsService.findAll();
  }

  @Post()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Crear un nuevo presupuesto' })
  @ApiResponse({ status: 201, description: 'Presupuesto creado exitosamente' })
  async create(@Body() dto: CreateBudgetDto) {
    return this.budgetsService.create(dto);
  }

  @Get(':id')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Obtener un presupuesto por ID' })
  @ApiResponse({ status: 200, description: 'Detalle del presupuesto' })
  async findById(@Param('id', ParseIntPipe) id: number) {
    return this.budgetsService.findById(id);
  }

  @Get(':id/pdf')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Generar PDF de un presupuesto' })
  @ApiResponse({ status: 200, description: 'PDF del presupuesto generado' })
  async generatePdf(@Param('id', ParseIntPipe) id: number) {
    return this.budgetsService.generatePdf(id);
  }
}
