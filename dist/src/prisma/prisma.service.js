"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("../../generated/prisma/client");
let PrismaService = class PrismaService {
    constructor() {
        this.pool = new pg_1.Pool({
            connectionString: process.env.DATABASE_URL,
        });
        const adapter = new adapter_pg_1.PrismaPg(this.pool);
        this._client = new client_1.PrismaClient({ adapter });
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
    $transaction(fn) {
        return this._client.$transaction(fn);
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map