import {
  Controller, Get, Post, Patch, Param, Body, ParseIntPipe, UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PurchasesService } from './purchases.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { CreatePurchaseNoteDto } from './dto/create-purchase-note.dto';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';

@ApiTags('Purchases')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('purchases')
export class PurchasesController {
  constructor(private readonly service: PurchasesService) {}

  // ── Proveedores ──

  @Get('suppliers')
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar todos los proveedores' })
  async findAllSuppliers() {
    return this.service.findAllSuppliers();
  }

  @Get('suppliers/:id')
  @Roles('administrador')
  @ApiOperation({ summary: 'Obtener proveedor por ID' })
  async findSupplierById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findSupplierById(id);
  }

  @Post('suppliers')
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear proveedor' })
  @ApiResponse({ status: 201, description: 'Proveedor creado' })
  async createSupplier(@Body() dto: CreateSupplierDto) {
    return this.service.createSupplier(dto);
  }

  @Patch('suppliers/:id')
  @Roles('administrador')
  @ApiOperation({ summary: 'Actualizar proveedor' })
  async updateSupplier(@Param('id', ParseIntPipe) id: number, @Body() dto: Partial<CreateSupplierDto>) {
    return this.service.updateSupplier(id, dto);
  }

  // ── Órdenes de Compra ──

  @Get('orders')
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar ordenes de compra' })
  async findAllOrders() {
    return this.service.findAllOrders();
  }

  @Get('orders/:id')
  @Roles('administrador')
  @ApiOperation({ summary: 'Obtener orden de compra por ID' })
  async findOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOrderById(id);
  }

  @Post('orders')
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear orden de compra' })
  @ApiResponse({ status: 201, description: 'Orden creada' })
  async createOrder(@Body() dto: CreatePurchaseOrderDto) {
    return this.service.createOrder(dto);
  }

  @Patch('orders/:id/approve')
  @Roles('administrador')
  @ApiOperation({ summary: 'Aprobar orden de compra' })
  async approveOrder(@Param('id', ParseIntPipe) id: number) {
    return this.service.approveOrder(id);
  }

  @Patch('orders/:id/cancel')
  @Roles('administrador')
  @ApiOperation({ summary: 'Cancelar orden de compra' })
  async cancelOrder(@Param('id', ParseIntPipe) id: number) {
    return this.service.cancelOrder(id);
  }

  @Patch('orders/:id/receive')
  @Roles('administrador')
  @ApiOperation({ summary: 'Recibir orden de compra (actualiza stock, crea libro y nota remision)' })
  async receiveOrder(@Param('id', ParseIntPipe) id: number) {
    return this.service.receiveOrder(id);
  }

  // ── Libro de Compras ──

  @Get('ledger')
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar libro de compras' })
  async findAllLibroCompras() {
    return this.service.findAllLibroCompras();
  }

  // ── Notas de Remisión ──

  @Get('delivery-notes')
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar notas de remision' })
  async findAllNotasRemision() {
    return this.service.findAllNotasRemision();
  }

  // ── Notas C/D Compras ──

  @Get('notes')
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar notas C/D de compras' })
  async findAllNotasCD() {
    return this.service.findAllNotasCD();
  }

  @Post('notes')
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear nota C/D de compra' })
  @ApiResponse({ status: 201, description: 'Nota creada' })
  async createNotaCD(@Body() dto: CreatePurchaseNoteDto) {
    return this.service.createNotaCD(dto);
  }

  @Patch('notes/:id/annul')
  @Roles('administrador')
  @ApiOperation({ summary: 'Anular nota C/D de compra' })
  async annulNotaCD(@Param('id', ParseIntPipe) id: number) {
    return this.service.annulNotaCD(id);
  }

  // ── Ajustes de Compra ──

  @Get('adjustments')
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar ajustes de compra' })
  async findAllAdjustments() {
    return this.service.findAllAdjustments();
  }

  @Post('adjustments')
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear ajuste de compra' })
  @ApiResponse({ status: 201, description: 'Ajuste creado' })
  async createAdjustment(@Body() dto: CreateAdjustmentDto) {
    return this.service.createAdjustment(dto);
  }
}
