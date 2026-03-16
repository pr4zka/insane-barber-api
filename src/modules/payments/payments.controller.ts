import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateDpagoDto } from './dto/create-dpago.dto';

@ApiTags('Payments')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Listar todos los pagos' })
  @ApiResponse({ status: 200, description: 'Lista de pagos' })
  findAll() {
    return this.paymentsService.findAll();
  }

  @Post()
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Crear un nuevo pago' })
  @ApiResponse({ status: 201, description: 'Pago creado exitosamente' })
  create(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.create(dto);
  }

  @Get('pending')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Listar pagos pendientes' })
  @ApiResponse({ status: 200, description: 'Lista de pagos pendientes' })
  findPending() {
    return this.paymentsService.findPending();
  }

  @Get(':id/receipt')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Obtener recibo de un pago' })
  @ApiResponse({ status: 200, description: 'Recibo del pago' })
  getReceipt(@Param('id', ParseIntPipe) id: number) {
    return this.paymentsService.getReceipt(id);
  }

  @Post('dpago')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Crear pago via dPago' })
  @ApiResponse({ status: 201, description: 'Pago dPago creado exitosamente' })
  createDpago(@Body() dto: CreateDpagoDto) {
    return this.paymentsService.createDpago(dto);
  }

  @Post('dpago/link')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Generar link de pago dPago' })
  @ApiResponse({ status: 201, description: 'Link de pago generado exitosamente' })
  generateDpagoLink(@Body() dto: CreateDpagoDto) {
    return this.paymentsService.generateDpagoLink(dto);
  }

  @Get('delivery-notes')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Listar notas de remision de venta' })
  async findAllDeliveryNotes() {
    return this.paymentsService.findAllDeliveryNotes();
  }

  @Post('delivery-notes')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Crear nota de remision de venta' })
  async createDeliveryNote(@Body() body: { turnoId: number; observacion?: string }) {
    return this.paymentsService.createDeliveryNote(body.turnoId, body.observacion ?? '');
  }

  @Get('dpago/:reference')
  @Roles('administrador', 'recepcionista')
  @ApiOperation({ summary: 'Buscar pago por referencia dPago' })
  @ApiResponse({ status: 200, description: 'Pago encontrado por referencia' })
  findByDpagoRef(@Param('reference') reference: string) {
    return this.paymentsService.findByDpagoRef(reference);
  }
}
