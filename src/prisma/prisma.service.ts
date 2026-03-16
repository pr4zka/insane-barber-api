import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private pool: Pool;
  private _client: any;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
    const adapter = new PrismaPg(this.pool);
    this._client = new PrismaClient({ adapter });
  }

  async onModuleInit() {
    await this._client.$connect();
  }

  async onModuleDestroy() {
    await this._client.$disconnect();
    await this.pool.end();
  }

  get rol() {
    return this._client.rol;
  }
  get usuario() {
    return this._client.usuario;
  }
  get cliente() {
    return this._client.cliente;
  }
  get barbero() {
    return this._client.barbero;
  }
  get servicio() {
    return this._client.servicio;
  }
  get turno() {
    return this._client.turno;
  }
  get promocion() {
    return this._client.promocion;
  }
  get descuento() {
    return this._client.descuento;
  }
  get reclamo() {
    return this._client.reclamo;
  }
  get seguimientoReclamo() {
    return this._client.seguimientoReclamo;
  }
  get presupuesto() {
    return this._client.presupuesto;
  }
  get detallePresupuesto() {
    return this._client.detallePresupuesto;
  }
  get insumo() {
    return this._client.insumo;
  }
  get insumoUtilizado() {
    return this._client.insumoUtilizado;
  }
  get caja() {
    return this._client.caja;
  }
  get movimientoCaja() {
    return this._client.movimientoCaja;
  }
  get pago() {
    return this._client.pago;
  }
  get notaCreditoDebito() {
    return this._client.notaCreditoDebito;
  }
  get libroVentas() {
    return this._client.libroVentas;
  }

  get proveedor() {
    return this._client.proveedor;
  }
  get ordenCompra() {
    return this._client.ordenCompra;
  }
  get detalleOrdenCompra() {
    return this._client.detalleOrdenCompra;
  }
  get libroCompras() {
    return this._client.libroCompras;
  }
  get notaRemision() {
    return this._client.notaRemision;
  }
  get notaCDCompra() {
    return this._client.notaCDCompra;
  }
  get ajusteCompra() {
    return this._client.ajusteCompra;
  }
  get notaRemisionVenta() {
    return this._client.notaRemisionVenta;
  }

  $transaction(fn: Parameters<typeof this._client.$transaction>[0]) {
    return this._client.$transaction(fn as any);
  }
}
