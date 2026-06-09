import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { CreatePurchaseOrderDto } from './dto/create-purchase-order.dto';
import { CreatePurchaseNoteDto } from './dto/create-purchase-note.dto';
import { CreateAdjustmentDto } from './dto/create-adjustment.dto';
import { UpdateLibroComprasDto } from './dto/update-libro-compras.dto';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { categoriaLabel, calcularIva } from './categorias-compra';

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
          categoria: dto.categoria ?? 'otros',
          detalle: dto.detalle ?? '',
          tipoComprobante: dto.tipoComprobante ?? 'factura',
          nroComprobante: dto.nroComprobante ?? '',
          timbrado: dto.timbrado ?? '',
          condicion: dto.condicion ?? 'contado',
          tasaIva: dto.tasaIva ?? 10,
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

      // Registrar en Libro de Compras (el concepto es la etiqueta de la categoria)
      const iva = calcularIva(Number(orden.total), orden.tasaIva);
      await tx.libroCompras.create({
        data: {
          ordenCompraId: id,
          concepto: categoriaLabel(orden.categoria),
          categoria: orden.categoria,
          detalle: orden.detalle,
          monto: orden.total,
          proveedor: orden.proveedor.nombre,
          rucProveedor: orden.proveedor.ruc,
          tipoComprobante: orden.tipoComprobante,
          nroComprobante: orden.nroComprobante,
          timbrado: orden.timbrado,
          condicion: orden.condicion,
          tasaIva: orden.tasaIva,
          gravado10: iva.gravado10,
          iva10: iva.iva10,
          gravado5: iva.gravado5,
          iva5: iva.iva5,
          exento: iva.exento,
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

  async findLibroComprasById(id: number) {
    return this.prisma.libroCompras.findUnique({ where: { id } });
  }

  // Gasto / servicio directo (sin orden de compra ni movimiento de stock).
  async createExpense(dto: CreateExpenseDto) {
    const categoria = dto.categoria ?? 'otros';
    const tasaIva = dto.tasaIva ?? 10;
    const iva = calcularIva(dto.monto, tasaIva);

    return this.prisma.libroCompras.create({
      data: {
        concepto: categoriaLabel(categoria),
        categoria,
        detalle: dto.detalle ?? '',
        monto: dto.monto,
        proveedor: dto.proveedor,
        rucProveedor: dto.rucProveedor ?? '',
        tipoComprobante: dto.tipoComprobante ?? 'factura',
        nroComprobante: dto.nroComprobante ?? '',
        timbrado: dto.timbrado ?? '',
        condicion: dto.condicion ?? 'contado',
        tasaIva,
        gravado10: iva.gravado10,
        iva10: iva.iva10,
        gravado5: iva.gravado5,
        iva5: iva.iva5,
        exento: iva.exento,
        ...(dto.fecha ? { fecha: new Date(dto.fecha) } : {}),
      },
      include: { ordenCompra: { include: { proveedor: true } } },
    });
  }

  async updateLibroCompras(id: number, dto: UpdateLibroComprasDto) {
    const actual = await this.prisma.libroCompras.findUnique({ where: { id } });
    const categoria = dto.categoria ?? actual?.categoria ?? 'otros';
    const tasaIva = dto.tasaIva ?? actual?.tasaIva ?? 10;

    // Recalcular IVA si cambia la tasa (el monto no se edita aca).
    const iva =
      dto.tasaIva !== undefined && actual
        ? calcularIva(Number(actual.monto), tasaIva)
        : null;

    return this.prisma.libroCompras.update({
      where: { id },
      data: {
        categoria,
        concepto: categoriaLabel(categoria),
        tasaIva,
        ...(dto.detalle !== undefined ? { detalle: dto.detalle } : {}),
        ...(dto.tipoComprobante !== undefined ? { tipoComprobante: dto.tipoComprobante } : {}),
        ...(dto.nroComprobante !== undefined ? { nroComprobante: dto.nroComprobante } : {}),
        ...(dto.timbrado !== undefined ? { timbrado: dto.timbrado } : {}),
        ...(dto.condicion !== undefined ? { condicion: dto.condicion } : {}),
        ...(dto.rucProveedor !== undefined ? { rucProveedor: dto.rucProveedor } : {}),
        ...(iva
          ? {
              gravado10: iva.gravado10,
              iva10: iva.iva10,
              gravado5: iva.gravado5,
              iva5: iva.iva5,
              exento: iva.exento,
            }
          : {}),
      },
      include: { ordenCompra: { include: { proveedor: true } } },
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
