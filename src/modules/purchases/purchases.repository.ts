import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { CreatePurchaseNoteDto } from './dto/create-purchase-note.dto';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';

@Injectable()
export class PurchasesRepository {
  constructor(private readonly prisma: PrismaService) {}

  // ── Proveedores ──

  async findAllSuppliers() {
    return this.prisma.proveedor.findMany({ orderBy: { nombre: 'asc' } });
  }

  async findSupplierById(id: number) {
    return this.prisma.proveedor.findUnique({ where: { id } });
  }

  async createSupplier(data: CreateSupplierDto) {
    return this.prisma.proveedor.create({
      data: {
        nombre: data.nombre,
        ruc: data.ruc,
        telefono: data.telefono,
        email: data.email ?? '',
        direccion: data.direccion ?? '',
        estado: data.estado ?? true,
      },
    });
  }

  async updateSupplier(id: number, data: Partial<CreateSupplierDto>) {
    return this.prisma.proveedor.update({ where: { id }, data });
  }

  // ── Órdenes de Compra ──

  private readonly orderIncludes = {
    proveedor: true,
    detalles: { include: { insumo: true } },
    libroCompras: true,
    notaRemision: true,
    notasCD: true,
    ajustes: true,
  };

  async findAllOrders() {
    return this.prisma.ordenCompra.findMany({
      include: this.orderIncludes,
      orderBy: { fecha: 'desc' },
    });
  }

  async findOrderById(id: number) {
    return this.prisma.ordenCompra.findUnique({
      where: { id },
      include: this.orderIncludes,
    });
  }

  async createOrder(dto: CreatePurchaseOrderDto) {
    return this.prisma.$transaction(async (tx) => {
      const detallesData = dto.detalles.map((d) => ({
        insumoId: d.insumoId,
        cantidad: d.cantidad,
        precioUnitario: d.precioUnitario,
        subtotal: d.cantidad * d.precioUnitario,
      }));

      const total = detallesData.reduce((sum, d) => sum + d.subtotal, 0);

      return tx.ordenCompra.create({
        data: {
          proveedorId: dto.proveedorId,
          observacion: dto.observacion ?? '',
          total,
          detalles: { create: detallesData },
        },
        include: this.orderIncludes,
      });
    });
  }

  async approveOrder(id: number) {
    return this.prisma.ordenCompra.update({
      where: { id },
      data: { estado: 'aprobada' },
      include: this.orderIncludes,
    });
  }

  async cancelOrder(id: number) {
    return this.prisma.ordenCompra.update({
      where: { id },
      data: { estado: 'cancelada' },
      include: this.orderIncludes,
    });
  }

  async receiveOrder(id: number) {
    return this.prisma.$transaction(async (tx) => {
      const orden = await tx.ordenCompra.findUnique({
        where: { id },
        include: { proveedor: true, detalles: { include: { insumo: true } } },
      });

      if (!orden) throw new Error('Orden no encontrada');

      // Actualizar stock de insumos
      for (const detalle of orden.detalles) {
        await tx.insumo.update({
          where: { id: detalle.insumoId },
          data: {
            stock: {
              increment: detalle.cantidad,
            },
          },
        });
      }

      // Registrar en Libro de Compras
      await tx.libroCompras.create({
        data: {
          ordenCompraId: id,
          concepto: `Compra a ${orden.proveedor.nombre}`,
          monto: orden.total,
          proveedor: orden.proveedor.nombre,
        },
      });

      // Crear Nota de Remisión
      await tx.notaRemision.create({
        data: {
          ordenCompraId: id,
          observacion: `Recepcion de mercaderia - OC #${id}`,
        },
      });

      // Marcar como recibida
      return tx.ordenCompra.update({
        where: { id },
        data: { estado: 'recibida' },
        include: {
          proveedor: true,
          detalles: { include: { insumo: true } },
          libroCompras: true,
          notaRemision: true,
          notasCD: true,
          ajustes: true,
        },
      });
    });
  }

  // ── Libro de Compras ──

  async findAllLibroCompras() {
    return this.prisma.libroCompras.findMany({
      include: { ordenCompra: { include: { proveedor: true } } },
      orderBy: { fecha: 'desc' },
    });
  }

  // ── Notas de Remisión ──

  async findAllNotasRemision() {
    return this.prisma.notaRemision.findMany({
      include: { ordenCompra: { include: { proveedor: true, detalles: { include: { insumo: true } } } } },
      orderBy: { fecha: 'desc' },
    });
  }

  // ── Notas C/D Compras ──

  async findAllNotasCD() {
    return this.prisma.notaCDCompra.findMany({
      include: { ordenCompra: { include: { proveedor: true } } },
      orderBy: { fecha: 'desc' },
    });
  }

  async createNotaCD(dto: CreatePurchaseNoteDto) {
    return this.prisma.notaCDCompra.create({
      data: {
        ordenCompraId: dto.ordenCompraId,
        tipo: dto.tipo,
        monto: dto.monto,
        motivo: dto.motivo,
      },
      include: { ordenCompra: { include: { proveedor: true } } },
    });
  }

  async annulNotaCD(id: number) {
    return this.prisma.notaCDCompra.update({
      where: { id },
      data: { estado: 'anulada' },
    });
  }

  // ── Ajustes de Compra ──

  async findAllAdjustments() {
    return this.prisma.ajusteCompra.findMany({
      include: { ordenCompra: { include: { proveedor: true } } },
      orderBy: { fecha: 'desc' },
    });
  }

  async createAdjustment(dto: CreateAdjustmentDto) {
    return this.prisma.ajusteCompra.create({
      data: {
        ordenCompraId: dto.ordenCompraId,
        tipo: dto.tipo,
        descripcion: dto.descripcion,
        montoAnterior: dto.montoAnterior,
        montoNuevo: dto.montoNuevo,
      },
      include: { ordenCompra: { include: { proveedor: true } } },
    });
  }
}
