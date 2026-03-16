import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get rol(): Prisma.RolDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get usuario(): Prisma.UsuarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cliente(): Prisma.ClienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get barbero(): Prisma.BarberoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get servicio(): Prisma.ServicioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get turno(): Prisma.TurnoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get promocion(): Prisma.PromocionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get descuento(): Prisma.DescuentoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get reclamo(): Prisma.ReclamoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get seguimientoReclamo(): Prisma.SeguimientoReclamoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get presupuesto(): Prisma.PresupuestoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get detallePresupuesto(): Prisma.DetallePresupuestoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get insumo(): Prisma.InsumoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get insumoUtilizado(): Prisma.InsumoUtilizadoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get caja(): Prisma.CajaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get movimientoCaja(): Prisma.MovimientoCajaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pago(): Prisma.PagoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notaCreditoDebito(): Prisma.NotaCreditoDebitoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get libroVentas(): Prisma.LibroVentasDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notaRemisionVenta(): Prisma.NotaRemisionVentaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get proveedor(): Prisma.ProveedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ordenCompra(): Prisma.OrdenCompraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get detalleOrdenCompra(): Prisma.DetalleOrdenCompraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get libroCompras(): Prisma.LibroComprasDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notaRemision(): Prisma.NotaRemisionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notaCDCompra(): Prisma.NotaCDCompraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ajusteCompra(): Prisma.AjusteCompraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
