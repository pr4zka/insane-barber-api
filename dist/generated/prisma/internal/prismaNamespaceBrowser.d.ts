import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Rol: "Rol";
    readonly Usuario: "Usuario";
    readonly Cliente: "Cliente";
    readonly Barbero: "Barbero";
    readonly Servicio: "Servicio";
    readonly Turno: "Turno";
    readonly Promocion: "Promocion";
    readonly Descuento: "Descuento";
    readonly Reclamo: "Reclamo";
    readonly SeguimientoReclamo: "SeguimientoReclamo";
    readonly Presupuesto: "Presupuesto";
    readonly DetallePresupuesto: "DetallePresupuesto";
    readonly Insumo: "Insumo";
    readonly InsumoUtilizado: "InsumoUtilizado";
    readonly Caja: "Caja";
    readonly MovimientoCaja: "MovimientoCaja";
    readonly Pago: "Pago";
    readonly NotaCreditoDebito: "NotaCreditoDebito";
    readonly LibroVentas: "LibroVentas";
    readonly NotaRemisionVenta: "NotaRemisionVenta";
    readonly Proveedor: "Proveedor";
    readonly OrdenCompra: "OrdenCompra";
    readonly DetalleOrdenCompra: "DetalleOrdenCompra";
    readonly LibroCompras: "LibroCompras";
    readonly NotaRemision: "NotaRemision";
    readonly NotaCDCompra: "NotaCDCompra";
    readonly AjusteCompra: "AjusteCompra";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const RolScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
};
export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly email: "email";
    readonly password: "password";
    readonly rolId: "rolId";
    readonly estado: "estado";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly fechaRegistro: "fechaRegistro";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const BarberoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly telefono: "telefono";
    readonly especialidad: "especialidad";
    readonly estado: "estado";
    readonly usuarioId: "usuarioId";
};
export type BarberoScalarFieldEnum = (typeof BarberoScalarFieldEnum)[keyof typeof BarberoScalarFieldEnum];
export declare const ServicioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly precio: "precio";
    readonly duracionMin: "duracionMin";
    readonly estado: "estado";
};
export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum];
export declare const TurnoScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly barberoId: "barberoId";
    readonly servicioId: "servicioId";
    readonly fecha: "fecha";
    readonly hora: "hora";
    readonly estado: "estado";
    readonly observacion: "observacion";
};
export type TurnoScalarFieldEnum = (typeof TurnoScalarFieldEnum)[keyof typeof TurnoScalarFieldEnum];
export declare const PromocionScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly porcentaje: "porcentaje";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
};
export type PromocionScalarFieldEnum = (typeof PromocionScalarFieldEnum)[keyof typeof PromocionScalarFieldEnum];
export declare const DescuentoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly porcentaje: "porcentaje";
    readonly estado: "estado";
};
export type DescuentoScalarFieldEnum = (typeof DescuentoScalarFieldEnum)[keyof typeof DescuentoScalarFieldEnum];
export declare const ReclamoScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly descripcion: "descripcion";
    readonly fecha: "fecha";
    readonly estado: "estado";
};
export type ReclamoScalarFieldEnum = (typeof ReclamoScalarFieldEnum)[keyof typeof ReclamoScalarFieldEnum];
export declare const SeguimientoReclamoScalarFieldEnum: {
    readonly id: "id";
    readonly reclamoId: "reclamoId";
    readonly comentario: "comentario";
    readonly estadoAnterior: "estadoAnterior";
    readonly estadoNuevo: "estadoNuevo";
    readonly fecha: "fecha";
};
export type SeguimientoReclamoScalarFieldEnum = (typeof SeguimientoReclamoScalarFieldEnum)[keyof typeof SeguimientoReclamoScalarFieldEnum];
export declare const PresupuestoScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly fecha: "fecha";
    readonly total: "total";
    readonly estado: "estado";
    readonly observacion: "observacion";
};
export type PresupuestoScalarFieldEnum = (typeof PresupuestoScalarFieldEnum)[keyof typeof PresupuestoScalarFieldEnum];
export declare const DetallePresupuestoScalarFieldEnum: {
    readonly id: "id";
    readonly presupuestoId: "presupuestoId";
    readonly servicioId: "servicioId";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly subtotal: "subtotal";
};
export type DetallePresupuestoScalarFieldEnum = (typeof DetallePresupuestoScalarFieldEnum)[keyof typeof DetallePresupuestoScalarFieldEnum];
export declare const InsumoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly unidad: "unidad";
    readonly stock: "stock";
    readonly estado: "estado";
};
export type InsumoScalarFieldEnum = (typeof InsumoScalarFieldEnum)[keyof typeof InsumoScalarFieldEnum];
export declare const InsumoUtilizadoScalarFieldEnum: {
    readonly id: "id";
    readonly turnoId: "turnoId";
    readonly insumoId: "insumoId";
    readonly cantidad: "cantidad";
    readonly fecha: "fecha";
};
export type InsumoUtilizadoScalarFieldEnum = (typeof InsumoUtilizadoScalarFieldEnum)[keyof typeof InsumoUtilizadoScalarFieldEnum];
export declare const CajaScalarFieldEnum: {
    readonly id: "id";
    readonly usuarioId: "usuarioId";
    readonly fechaApertura: "fechaApertura";
    readonly fechaCierre: "fechaCierre";
    readonly montoInicial: "montoInicial";
    readonly montoFinal: "montoFinal";
    readonly estado: "estado";
};
export type CajaScalarFieldEnum = (typeof CajaScalarFieldEnum)[keyof typeof CajaScalarFieldEnum];
export declare const MovimientoCajaScalarFieldEnum: {
    readonly id: "id";
    readonly cajaId: "cajaId";
    readonly tipo: "tipo";
    readonly concepto: "concepto";
    readonly monto: "monto";
    readonly fecha: "fecha";
};
export type MovimientoCajaScalarFieldEnum = (typeof MovimientoCajaScalarFieldEnum)[keyof typeof MovimientoCajaScalarFieldEnum];
export declare const PagoScalarFieldEnum: {
    readonly id: "id";
    readonly turnoId: "turnoId";
    readonly metodoPago: "metodoPago";
    readonly monto: "monto";
    readonly montoOriginal: "montoOriginal";
    readonly promocionId: "promocionId";
    readonly descuentoId: "descuentoId";
    readonly porcentajeAplicado: "porcentajeAplicado";
    readonly dpagoRef: "dpagoRef";
    readonly estado: "estado";
    readonly fecha: "fecha";
};
export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum];
export declare const NotaCreditoDebitoScalarFieldEnum: {
    readonly id: "id";
    readonly pagoId: "pagoId";
    readonly tipo: "tipo";
    readonly monto: "monto";
    readonly motivo: "motivo";
    readonly estado: "estado";
    readonly fecha: "fecha";
};
export type NotaCreditoDebitoScalarFieldEnum = (typeof NotaCreditoDebitoScalarFieldEnum)[keyof typeof NotaCreditoDebitoScalarFieldEnum];
export declare const LibroVentasScalarFieldEnum: {
    readonly id: "id";
    readonly pagoId: "pagoId";
    readonly fecha: "fecha";
    readonly concepto: "concepto";
    readonly monto: "monto";
    readonly metodoPago: "metodoPago";
};
export type LibroVentasScalarFieldEnum = (typeof LibroVentasScalarFieldEnum)[keyof typeof LibroVentasScalarFieldEnum];
export declare const NotaRemisionVentaScalarFieldEnum: {
    readonly id: "id";
    readonly turnoId: "turnoId";
    readonly fecha: "fecha";
    readonly observacion: "observacion";
};
export type NotaRemisionVentaScalarFieldEnum = (typeof NotaRemisionVentaScalarFieldEnum)[keyof typeof NotaRemisionVentaScalarFieldEnum];
export declare const ProveedorScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly ruc: "ruc";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccion: "direccion";
    readonly estado: "estado";
};
export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum];
export declare const OrdenCompraScalarFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly fecha: "fecha";
    readonly estado: "estado";
    readonly total: "total";
    readonly observacion: "observacion";
};
export type OrdenCompraScalarFieldEnum = (typeof OrdenCompraScalarFieldEnum)[keyof typeof OrdenCompraScalarFieldEnum];
export declare const DetalleOrdenCompraScalarFieldEnum: {
    readonly id: "id";
    readonly ordenCompraId: "ordenCompraId";
    readonly insumoId: "insumoId";
    readonly cantidad: "cantidad";
    readonly precioUnitario: "precioUnitario";
    readonly subtotal: "subtotal";
};
export type DetalleOrdenCompraScalarFieldEnum = (typeof DetalleOrdenCompraScalarFieldEnum)[keyof typeof DetalleOrdenCompraScalarFieldEnum];
export declare const LibroComprasScalarFieldEnum: {
    readonly id: "id";
    readonly ordenCompraId: "ordenCompraId";
    readonly fecha: "fecha";
    readonly concepto: "concepto";
    readonly monto: "monto";
    readonly proveedor: "proveedor";
};
export type LibroComprasScalarFieldEnum = (typeof LibroComprasScalarFieldEnum)[keyof typeof LibroComprasScalarFieldEnum];
export declare const NotaRemisionScalarFieldEnum: {
    readonly id: "id";
    readonly ordenCompraId: "ordenCompraId";
    readonly fecha: "fecha";
    readonly observacion: "observacion";
};
export type NotaRemisionScalarFieldEnum = (typeof NotaRemisionScalarFieldEnum)[keyof typeof NotaRemisionScalarFieldEnum];
export declare const NotaCDCompraScalarFieldEnum: {
    readonly id: "id";
    readonly ordenCompraId: "ordenCompraId";
    readonly tipo: "tipo";
    readonly monto: "monto";
    readonly motivo: "motivo";
    readonly estado: "estado";
    readonly fecha: "fecha";
};
export type NotaCDCompraScalarFieldEnum = (typeof NotaCDCompraScalarFieldEnum)[keyof typeof NotaCDCompraScalarFieldEnum];
export declare const AjusteCompraScalarFieldEnum: {
    readonly id: "id";
    readonly ordenCompraId: "ordenCompraId";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly montoAnterior: "montoAnterior";
    readonly montoNuevo: "montoNuevo";
    readonly fecha: "fecha";
};
export type AjusteCompraScalarFieldEnum = (typeof AjusteCompraScalarFieldEnum)[keyof typeof AjusteCompraScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
