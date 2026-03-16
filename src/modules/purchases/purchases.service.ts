import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PurchasesRepository } from './purchases.repository';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { CreatePurchaseNoteDto } from './dto/create-purchase-note.dto';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';

@Injectable()
export class PurchasesService {
  constructor(private readonly repository: PurchasesRepository) {}

  // ── Proveedores ──

  async findAllSuppliers() {
    return this.repository.findAllSuppliers();
  }

  async findSupplierById(id: number) {
    const supplier = await this.repository.findSupplierById(id);
    if (!supplier) throw new NotFoundException(`Proveedor #${id} no encontrado.`);
    return supplier;
  }

  async createSupplier(dto: CreateSupplierDto) {
    return this.repository.createSupplier(dto);
  }

  async updateSupplier(id: number, dto: Partial<CreateSupplierDto>) {
    await this.findSupplierById(id);
    return this.repository.updateSupplier(id, dto);
  }

  // ── Órdenes de Compra ──

  async findAllOrders() {
    return this.repository.findAllOrders();
  }

  async findOrderById(id: number) {
    const order = await this.repository.findOrderById(id);
    if (!order) throw new NotFoundException(`Orden de compra #${id} no encontrada.`);
    return order;
  }

  async createOrder(dto: CreatePurchaseOrderDto) {
    return this.repository.createOrder(dto);
  }

  async approveOrder(id: number) {
    const order = await this.findOrderById(id);
    if (order.estado !== 'pendiente') {
      throw new BadRequestException(`Solo se pueden aprobar ordenes en estado "pendiente". Esta orden esta en estado "${order.estado}".`);
    }
    return this.repository.approveOrder(id);
  }

  async cancelOrder(id: number) {
    const order = await this.findOrderById(id);
    if (order.estado === 'recibida') {
      throw new BadRequestException('No se puede cancelar una orden ya recibida.');
    }
    return this.repository.cancelOrder(id);
  }

  async receiveOrder(id: number) {
    const order = await this.findOrderById(id);
    if (order.estado !== 'aprobada') {
      throw new BadRequestException(`Solo se pueden recibir ordenes aprobadas. Esta orden esta en estado "${order.estado}".`);
    }
    return this.repository.receiveOrder(id);
  }

  // ── Libro de Compras ──

  async findAllLibroCompras() {
    return this.repository.findAllLibroCompras();
  }

  // ── Notas de Remisión ──

  async findAllNotasRemision() {
    return this.repository.findAllNotasRemision();
  }

  // ── Notas C/D Compras ──

  async findAllNotasCD() {
    return this.repository.findAllNotasCD();
  }

  async createNotaCD(dto: CreatePurchaseNoteDto) {
    const order = await this.findOrderById(dto.ordenCompraId);
    if (order.estado !== 'recibida') {
      throw new BadRequestException('Solo se pueden emitir notas sobre ordenes recibidas.');
    }
    return this.repository.createNotaCD(dto);
  }

  async annulNotaCD(id: number) {
    return this.repository.annulNotaCD(id);
  }

  // ── Ajustes de Compra ──

  async findAllAdjustments() {
    return this.repository.findAllAdjustments();
  }

  async createAdjustment(dto: CreateAdjustmentDto) {
    const order = await this.findOrderById(dto.ordenCompraId);
    if (order.estado !== 'recibida') {
      throw new BadRequestException('Solo se pueden registrar ajustes sobre ordenes recibidas.');
    }
    return this.repository.createAdjustment(dto);
  }
}
