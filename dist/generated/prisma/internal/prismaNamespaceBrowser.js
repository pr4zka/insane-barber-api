"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.AjusteCompraScalarFieldEnum = exports.NotaCDCompraScalarFieldEnum = exports.NotaRemisionScalarFieldEnum = exports.LibroComprasScalarFieldEnum = exports.DetalleOrdenCompraScalarFieldEnum = exports.OrdenCompraScalarFieldEnum = exports.ProveedorScalarFieldEnum = exports.NotaRemisionVentaScalarFieldEnum = exports.LibroVentasScalarFieldEnum = exports.NotaCreditoDebitoScalarFieldEnum = exports.PagoScalarFieldEnum = exports.MovimientoCajaScalarFieldEnum = exports.CajaScalarFieldEnum = exports.InsumoUtilizadoScalarFieldEnum = exports.InsumoScalarFieldEnum = exports.DetallePresupuestoScalarFieldEnum = exports.PresupuestoScalarFieldEnum = exports.SeguimientoReclamoScalarFieldEnum = exports.ReclamoScalarFieldEnum = exports.DescuentoScalarFieldEnum = exports.PromocionScalarFieldEnum = exports.TurnoScalarFieldEnum = exports.ServicioScalarFieldEnum = exports.BarberoScalarFieldEnum = exports.ClienteScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.RolScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Rol: 'Rol',
    Usuario: 'Usuario',
    Cliente: 'Cliente',
    Barbero: 'Barbero',
    Servicio: 'Servicio',
    Turno: 'Turno',
    Promocion: 'Promocion',
    Descuento: 'Descuento',
    Reclamo: 'Reclamo',
    SeguimientoReclamo: 'SeguimientoReclamo',
    Presupuesto: 'Presupuesto',
    DetallePresupuesto: 'DetallePresupuesto',
    Insumo: 'Insumo',
    InsumoUtilizado: 'InsumoUtilizado',
    Caja: 'Caja',
    MovimientoCaja: 'MovimientoCaja',
    Pago: 'Pago',
    NotaCreditoDebito: 'NotaCreditoDebito',
    LibroVentas: 'LibroVentas',
    NotaRemisionVenta: 'NotaRemisionVenta',
    Proveedor: 'Proveedor',
    OrdenCompra: 'OrdenCompra',
    DetalleOrdenCompra: 'DetalleOrdenCompra',
    LibroCompras: 'LibroCompras',
    NotaRemision: 'NotaRemision',
    NotaCDCompra: 'NotaCDCompra',
    AjusteCompra: 'AjusteCompra'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.RolScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre'
};
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    email: 'email',
    password: 'password',
    rolId: 'rolId',
    estado: 'estado'
};
exports.ClienteScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono',
    email: 'email',
    fechaRegistro: 'fechaRegistro'
};
exports.BarberoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    telefono: 'telefono',
    especialidad: 'especialidad',
    estado: 'estado',
    usuarioId: 'usuarioId'
};
exports.ServicioScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    duracionMin: 'duracionMin',
    estado: 'estado'
};
exports.TurnoScalarFieldEnum = {
    id: 'id',
    clienteId: 'clienteId',
    barberoId: 'barberoId',
    servicioId: 'servicioId',
    fecha: 'fecha',
    hora: 'hora',
    estado: 'estado',
    observacion: 'observacion'
};
exports.PromocionScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    porcentaje: 'porcentaje',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    estado: 'estado'
};
exports.DescuentoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    porcentaje: 'porcentaje',
    estado: 'estado'
};
exports.ReclamoScalarFieldEnum = {
    id: 'id',
    clienteId: 'clienteId',
    descripcion: 'descripcion',
    fecha: 'fecha',
    estado: 'estado'
};
exports.SeguimientoReclamoScalarFieldEnum = {
    id: 'id',
    reclamoId: 'reclamoId',
    comentario: 'comentario',
    estadoAnterior: 'estadoAnterior',
    estadoNuevo: 'estadoNuevo',
    fecha: 'fecha'
};
exports.PresupuestoScalarFieldEnum = {
    id: 'id',
    clienteId: 'clienteId',
    fecha: 'fecha',
    total: 'total',
    estado: 'estado',
    observacion: 'observacion'
};
exports.DetallePresupuestoScalarFieldEnum = {
    id: 'id',
    presupuestoId: 'presupuestoId',
    servicioId: 'servicioId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    subtotal: 'subtotal'
};
exports.InsumoScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    unidad: 'unidad',
    stock: 'stock',
    estado: 'estado'
};
exports.InsumoUtilizadoScalarFieldEnum = {
    id: 'id',
    turnoId: 'turnoId',
    insumoId: 'insumoId',
    cantidad: 'cantidad',
    fecha: 'fecha'
};
exports.CajaScalarFieldEnum = {
    id: 'id',
    usuarioId: 'usuarioId',
    fechaApertura: 'fechaApertura',
    fechaCierre: 'fechaCierre',
    montoInicial: 'montoInicial',
    montoFinal: 'montoFinal',
    estado: 'estado'
};
exports.MovimientoCajaScalarFieldEnum = {
    id: 'id',
    cajaId: 'cajaId',
    tipo: 'tipo',
    concepto: 'concepto',
    monto: 'monto',
    fecha: 'fecha'
};
exports.PagoScalarFieldEnum = {
    id: 'id',
    turnoId: 'turnoId',
    metodoPago: 'metodoPago',
    monto: 'monto',
    montoOriginal: 'montoOriginal',
    promocionId: 'promocionId',
    descuentoId: 'descuentoId',
    porcentajeAplicado: 'porcentajeAplicado',
    dpagoRef: 'dpagoRef',
    estado: 'estado',
    fecha: 'fecha'
};
exports.NotaCreditoDebitoScalarFieldEnum = {
    id: 'id',
    pagoId: 'pagoId',
    tipo: 'tipo',
    monto: 'monto',
    motivo: 'motivo',
    estado: 'estado',
    fecha: 'fecha'
};
exports.LibroVentasScalarFieldEnum = {
    id: 'id',
    pagoId: 'pagoId',
    fecha: 'fecha',
    concepto: 'concepto',
    monto: 'monto',
    metodoPago: 'metodoPago'
};
exports.NotaRemisionVentaScalarFieldEnum = {
    id: 'id',
    turnoId: 'turnoId',
    fecha: 'fecha',
    observacion: 'observacion'
};
exports.ProveedorScalarFieldEnum = {
    id: 'id',
    nombre: 'nombre',
    ruc: 'ruc',
    telefono: 'telefono',
    email: 'email',
    direccion: 'direccion',
    estado: 'estado'
};
exports.OrdenCompraScalarFieldEnum = {
    id: 'id',
    proveedorId: 'proveedorId',
    fecha: 'fecha',
    estado: 'estado',
    total: 'total',
    observacion: 'observacion'
};
exports.DetalleOrdenCompraScalarFieldEnum = {
    id: 'id',
    ordenCompraId: 'ordenCompraId',
    insumoId: 'insumoId',
    cantidad: 'cantidad',
    precioUnitario: 'precioUnitario',
    subtotal: 'subtotal'
};
exports.LibroComprasScalarFieldEnum = {
    id: 'id',
    ordenCompraId: 'ordenCompraId',
    fecha: 'fecha',
    concepto: 'concepto',
    monto: 'monto',
    proveedor: 'proveedor'
};
exports.NotaRemisionScalarFieldEnum = {
    id: 'id',
    ordenCompraId: 'ordenCompraId',
    fecha: 'fecha',
    observacion: 'observacion'
};
exports.NotaCDCompraScalarFieldEnum = {
    id: 'id',
    ordenCompraId: 'ordenCompraId',
    tipo: 'tipo',
    monto: 'monto',
    motivo: 'motivo',
    estado: 'estado',
    fecha: 'fecha'
};
exports.AjusteCompraScalarFieldEnum = {
    id: 'id',
    ordenCompraId: 'ordenCompraId',
    tipo: 'tipo',
    descripcion: 'descripcion',
    montoAnterior: 'montoAnterior',
    montoNuevo: 'montoNuevo',
    fecha: 'fecha'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map