import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "rol" | "usuario" | "cliente" | "barbero" | "servicio" | "turno" | "promocion" | "descuento" | "reclamo" | "seguimientoReclamo" | "presupuesto" | "detallePresupuesto" | "insumo" | "insumoUtilizado" | "caja" | "movimientoCaja" | "pago" | "notaCreditoDebito" | "libroVentas" | "notaRemisionVenta" | "proveedor" | "ordenCompra" | "detalleOrdenCompra" | "libroCompras" | "notaRemision" | "notaCDCompra" | "ajusteCompra";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Rol: {
            payload: Prisma.$RolPayload<ExtArgs>;
            fields: Prisma.RolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>;
                };
                findFirst: {
                    args: Prisma.RolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>;
                };
                findMany: {
                    args: Prisma.RolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>[];
                };
                create: {
                    args: Prisma.RolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>;
                };
                createMany: {
                    args: Prisma.RolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RolCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>[];
                };
                delete: {
                    args: Prisma.RolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>;
                };
                update: {
                    args: Prisma.RolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>;
                };
                deleteMany: {
                    args: Prisma.RolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RolUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>[];
                };
                upsert: {
                    args: Prisma.RolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RolPayload>;
                };
                aggregate: {
                    args: Prisma.RolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRol>;
                };
                groupBy: {
                    args: Prisma.RolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolCountAggregateOutputType> | number;
                };
            };
        };
        Usuario: {
            payload: Prisma.$UsuarioPayload<ExtArgs>;
            fields: Prisma.UsuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UsuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findFirst: {
                    args: Prisma.UsuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                findMany: {
                    args: Prisma.UsuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                create: {
                    args: Prisma.UsuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                createMany: {
                    args: Prisma.UsuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                delete: {
                    args: Prisma.UsuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                update: {
                    args: Prisma.UsuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.UsuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UsuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>[];
                };
                upsert: {
                    args: Prisma.UsuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UsuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.UsuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UsuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        Cliente: {
            payload: Prisma.$ClientePayload<ExtArgs>;
            fields: Prisma.ClienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ClienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findFirst: {
                    args: Prisma.ClienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                findMany: {
                    args: Prisma.ClienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                create: {
                    args: Prisma.ClienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                createMany: {
                    args: Prisma.ClienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                delete: {
                    args: Prisma.ClienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                update: {
                    args: Prisma.ClienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                deleteMany: {
                    args: Prisma.ClienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ClienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>[];
                };
                upsert: {
                    args: Prisma.ClienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ClientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.ClienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ClienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        Barbero: {
            payload: Prisma.$BarberoPayload<ExtArgs>;
            fields: Prisma.BarberoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BarberoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BarberoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                findFirst: {
                    args: Prisma.BarberoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BarberoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                findMany: {
                    args: Prisma.BarberoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>[];
                };
                create: {
                    args: Prisma.BarberoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                createMany: {
                    args: Prisma.BarberoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BarberoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>[];
                };
                delete: {
                    args: Prisma.BarberoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                update: {
                    args: Prisma.BarberoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                deleteMany: {
                    args: Prisma.BarberoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BarberoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BarberoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>[];
                };
                upsert: {
                    args: Prisma.BarberoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BarberoPayload>;
                };
                aggregate: {
                    args: Prisma.BarberoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBarbero>;
                };
                groupBy: {
                    args: Prisma.BarberoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BarberoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BarberoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BarberoCountAggregateOutputType> | number;
                };
            };
        };
        Servicio: {
            payload: Prisma.$ServicioPayload<ExtArgs>;
            fields: Prisma.ServicioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ServicioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                findFirst: {
                    args: Prisma.ServicioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                findMany: {
                    args: Prisma.ServicioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>[];
                };
                create: {
                    args: Prisma.ServicioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                createMany: {
                    args: Prisma.ServicioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>[];
                };
                delete: {
                    args: Prisma.ServicioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                update: {
                    args: Prisma.ServicioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                deleteMany: {
                    args: Prisma.ServicioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ServicioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>[];
                };
                upsert: {
                    args: Prisma.ServicioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ServicioPayload>;
                };
                aggregate: {
                    args: Prisma.ServicioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateServicio>;
                };
                groupBy: {
                    args: Prisma.ServicioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ServicioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ServicioCountAggregateOutputType> | number;
                };
            };
        };
        Turno: {
            payload: Prisma.$TurnoPayload<ExtArgs>;
            fields: Prisma.TurnoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TurnoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TurnoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>;
                };
                findFirst: {
                    args: Prisma.TurnoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TurnoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>;
                };
                findMany: {
                    args: Prisma.TurnoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>[];
                };
                create: {
                    args: Prisma.TurnoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>;
                };
                createMany: {
                    args: Prisma.TurnoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TurnoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>[];
                };
                delete: {
                    args: Prisma.TurnoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>;
                };
                update: {
                    args: Prisma.TurnoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>;
                };
                deleteMany: {
                    args: Prisma.TurnoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TurnoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TurnoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>[];
                };
                upsert: {
                    args: Prisma.TurnoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TurnoPayload>;
                };
                aggregate: {
                    args: Prisma.TurnoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTurno>;
                };
                groupBy: {
                    args: Prisma.TurnoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TurnoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TurnoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TurnoCountAggregateOutputType> | number;
                };
            };
        };
        Promocion: {
            payload: Prisma.$PromocionPayload<ExtArgs>;
            fields: Prisma.PromocionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PromocionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PromocionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>;
                };
                findFirst: {
                    args: Prisma.PromocionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PromocionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>;
                };
                findMany: {
                    args: Prisma.PromocionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>[];
                };
                create: {
                    args: Prisma.PromocionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>;
                };
                createMany: {
                    args: Prisma.PromocionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PromocionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>[];
                };
                delete: {
                    args: Prisma.PromocionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>;
                };
                update: {
                    args: Prisma.PromocionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>;
                };
                deleteMany: {
                    args: Prisma.PromocionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PromocionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PromocionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>[];
                };
                upsert: {
                    args: Prisma.PromocionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PromocionPayload>;
                };
                aggregate: {
                    args: Prisma.PromocionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromocion>;
                };
                groupBy: {
                    args: Prisma.PromocionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromocionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PromocionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromocionCountAggregateOutputType> | number;
                };
            };
        };
        Descuento: {
            payload: Prisma.$DescuentoPayload<ExtArgs>;
            fields: Prisma.DescuentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DescuentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DescuentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                findFirst: {
                    args: Prisma.DescuentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DescuentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                findMany: {
                    args: Prisma.DescuentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>[];
                };
                create: {
                    args: Prisma.DescuentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                createMany: {
                    args: Prisma.DescuentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DescuentoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>[];
                };
                delete: {
                    args: Prisma.DescuentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                update: {
                    args: Prisma.DescuentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                deleteMany: {
                    args: Prisma.DescuentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DescuentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DescuentoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>[];
                };
                upsert: {
                    args: Prisma.DescuentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DescuentoPayload>;
                };
                aggregate: {
                    args: Prisma.DescuentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDescuento>;
                };
                groupBy: {
                    args: Prisma.DescuentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DescuentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DescuentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DescuentoCountAggregateOutputType> | number;
                };
            };
        };
        Reclamo: {
            payload: Prisma.$ReclamoPayload<ExtArgs>;
            fields: Prisma.ReclamoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReclamoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReclamoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>;
                };
                findFirst: {
                    args: Prisma.ReclamoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReclamoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>;
                };
                findMany: {
                    args: Prisma.ReclamoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>[];
                };
                create: {
                    args: Prisma.ReclamoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>;
                };
                createMany: {
                    args: Prisma.ReclamoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReclamoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>[];
                };
                delete: {
                    args: Prisma.ReclamoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>;
                };
                update: {
                    args: Prisma.ReclamoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>;
                };
                deleteMany: {
                    args: Prisma.ReclamoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReclamoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReclamoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>[];
                };
                upsert: {
                    args: Prisma.ReclamoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReclamoPayload>;
                };
                aggregate: {
                    args: Prisma.ReclamoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReclamo>;
                };
                groupBy: {
                    args: Prisma.ReclamoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReclamoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReclamoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReclamoCountAggregateOutputType> | number;
                };
            };
        };
        SeguimientoReclamo: {
            payload: Prisma.$SeguimientoReclamoPayload<ExtArgs>;
            fields: Prisma.SeguimientoReclamoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SeguimientoReclamoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SeguimientoReclamoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>;
                };
                findFirst: {
                    args: Prisma.SeguimientoReclamoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SeguimientoReclamoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>;
                };
                findMany: {
                    args: Prisma.SeguimientoReclamoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>[];
                };
                create: {
                    args: Prisma.SeguimientoReclamoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>;
                };
                createMany: {
                    args: Prisma.SeguimientoReclamoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SeguimientoReclamoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>[];
                };
                delete: {
                    args: Prisma.SeguimientoReclamoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>;
                };
                update: {
                    args: Prisma.SeguimientoReclamoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>;
                };
                deleteMany: {
                    args: Prisma.SeguimientoReclamoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SeguimientoReclamoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SeguimientoReclamoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>[];
                };
                upsert: {
                    args: Prisma.SeguimientoReclamoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SeguimientoReclamoPayload>;
                };
                aggregate: {
                    args: Prisma.SeguimientoReclamoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeguimientoReclamo>;
                };
                groupBy: {
                    args: Prisma.SeguimientoReclamoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeguimientoReclamoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SeguimientoReclamoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeguimientoReclamoCountAggregateOutputType> | number;
                };
            };
        };
        Presupuesto: {
            payload: Prisma.$PresupuestoPayload<ExtArgs>;
            fields: Prisma.PresupuestoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PresupuestoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PresupuestoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>;
                };
                findFirst: {
                    args: Prisma.PresupuestoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PresupuestoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>;
                };
                findMany: {
                    args: Prisma.PresupuestoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>[];
                };
                create: {
                    args: Prisma.PresupuestoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>;
                };
                createMany: {
                    args: Prisma.PresupuestoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PresupuestoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>[];
                };
                delete: {
                    args: Prisma.PresupuestoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>;
                };
                update: {
                    args: Prisma.PresupuestoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>;
                };
                deleteMany: {
                    args: Prisma.PresupuestoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PresupuestoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PresupuestoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>[];
                };
                upsert: {
                    args: Prisma.PresupuestoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PresupuestoPayload>;
                };
                aggregate: {
                    args: Prisma.PresupuestoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePresupuesto>;
                };
                groupBy: {
                    args: Prisma.PresupuestoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PresupuestoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PresupuestoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PresupuestoCountAggregateOutputType> | number;
                };
            };
        };
        DetallePresupuesto: {
            payload: Prisma.$DetallePresupuestoPayload<ExtArgs>;
            fields: Prisma.DetallePresupuestoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetallePresupuestoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetallePresupuestoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>;
                };
                findFirst: {
                    args: Prisma.DetallePresupuestoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetallePresupuestoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>;
                };
                findMany: {
                    args: Prisma.DetallePresupuestoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>[];
                };
                create: {
                    args: Prisma.DetallePresupuestoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>;
                };
                createMany: {
                    args: Prisma.DetallePresupuestoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetallePresupuestoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>[];
                };
                delete: {
                    args: Prisma.DetallePresupuestoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>;
                };
                update: {
                    args: Prisma.DetallePresupuestoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>;
                };
                deleteMany: {
                    args: Prisma.DetallePresupuestoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetallePresupuestoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetallePresupuestoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>[];
                };
                upsert: {
                    args: Prisma.DetallePresupuestoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetallePresupuestoPayload>;
                };
                aggregate: {
                    args: Prisma.DetallePresupuestoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetallePresupuesto>;
                };
                groupBy: {
                    args: Prisma.DetallePresupuestoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetallePresupuestoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetallePresupuestoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetallePresupuestoCountAggregateOutputType> | number;
                };
            };
        };
        Insumo: {
            payload: Prisma.$InsumoPayload<ExtArgs>;
            fields: Prisma.InsumoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InsumoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InsumoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>;
                };
                findFirst: {
                    args: Prisma.InsumoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InsumoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>;
                };
                findMany: {
                    args: Prisma.InsumoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>[];
                };
                create: {
                    args: Prisma.InsumoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>;
                };
                createMany: {
                    args: Prisma.InsumoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InsumoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>[];
                };
                delete: {
                    args: Prisma.InsumoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>;
                };
                update: {
                    args: Prisma.InsumoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>;
                };
                deleteMany: {
                    args: Prisma.InsumoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InsumoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InsumoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>[];
                };
                upsert: {
                    args: Prisma.InsumoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoPayload>;
                };
                aggregate: {
                    args: Prisma.InsumoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInsumo>;
                };
                groupBy: {
                    args: Prisma.InsumoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InsumoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InsumoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InsumoCountAggregateOutputType> | number;
                };
            };
        };
        InsumoUtilizado: {
            payload: Prisma.$InsumoUtilizadoPayload<ExtArgs>;
            fields: Prisma.InsumoUtilizadoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.InsumoUtilizadoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.InsumoUtilizadoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>;
                };
                findFirst: {
                    args: Prisma.InsumoUtilizadoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.InsumoUtilizadoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>;
                };
                findMany: {
                    args: Prisma.InsumoUtilizadoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>[];
                };
                create: {
                    args: Prisma.InsumoUtilizadoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>;
                };
                createMany: {
                    args: Prisma.InsumoUtilizadoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.InsumoUtilizadoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>[];
                };
                delete: {
                    args: Prisma.InsumoUtilizadoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>;
                };
                update: {
                    args: Prisma.InsumoUtilizadoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>;
                };
                deleteMany: {
                    args: Prisma.InsumoUtilizadoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.InsumoUtilizadoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.InsumoUtilizadoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>[];
                };
                upsert: {
                    args: Prisma.InsumoUtilizadoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$InsumoUtilizadoPayload>;
                };
                aggregate: {
                    args: Prisma.InsumoUtilizadoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInsumoUtilizado>;
                };
                groupBy: {
                    args: Prisma.InsumoUtilizadoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InsumoUtilizadoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.InsumoUtilizadoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InsumoUtilizadoCountAggregateOutputType> | number;
                };
            };
        };
        Caja: {
            payload: Prisma.$CajaPayload<ExtArgs>;
            fields: Prisma.CajaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CajaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CajaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                findFirst: {
                    args: Prisma.CajaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CajaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                findMany: {
                    args: Prisma.CajaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>[];
                };
                create: {
                    args: Prisma.CajaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                createMany: {
                    args: Prisma.CajaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CajaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>[];
                };
                delete: {
                    args: Prisma.CajaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                update: {
                    args: Prisma.CajaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                deleteMany: {
                    args: Prisma.CajaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CajaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CajaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>[];
                };
                upsert: {
                    args: Prisma.CajaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CajaPayload>;
                };
                aggregate: {
                    args: Prisma.CajaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCaja>;
                };
                groupBy: {
                    args: Prisma.CajaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CajaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CajaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CajaCountAggregateOutputType> | number;
                };
            };
        };
        MovimientoCaja: {
            payload: Prisma.$MovimientoCajaPayload<ExtArgs>;
            fields: Prisma.MovimientoCajaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MovimientoCajaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MovimientoCajaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>;
                };
                findFirst: {
                    args: Prisma.MovimientoCajaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MovimientoCajaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>;
                };
                findMany: {
                    args: Prisma.MovimientoCajaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>[];
                };
                create: {
                    args: Prisma.MovimientoCajaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>;
                };
                createMany: {
                    args: Prisma.MovimientoCajaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MovimientoCajaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>[];
                };
                delete: {
                    args: Prisma.MovimientoCajaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>;
                };
                update: {
                    args: Prisma.MovimientoCajaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>;
                };
                deleteMany: {
                    args: Prisma.MovimientoCajaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MovimientoCajaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MovimientoCajaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>[];
                };
                upsert: {
                    args: Prisma.MovimientoCajaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MovimientoCajaPayload>;
                };
                aggregate: {
                    args: Prisma.MovimientoCajaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovimientoCaja>;
                };
                groupBy: {
                    args: Prisma.MovimientoCajaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientoCajaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MovimientoCajaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientoCajaCountAggregateOutputType> | number;
                };
            };
        };
        Pago: {
            payload: Prisma.$PagoPayload<ExtArgs>;
            fields: Prisma.PagoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.PagoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                findFirst: {
                    args: Prisma.PagoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                findMany: {
                    args: Prisma.PagoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>[];
                };
                create: {
                    args: Prisma.PagoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                createMany: {
                    args: Prisma.PagoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.PagoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>[];
                };
                delete: {
                    args: Prisma.PagoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                update: {
                    args: Prisma.PagoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                deleteMany: {
                    args: Prisma.PagoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.PagoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.PagoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>[];
                };
                upsert: {
                    args: Prisma.PagoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$PagoPayload>;
                };
                aggregate: {
                    args: Prisma.PagoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePago>;
                };
                groupBy: {
                    args: Prisma.PagoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.PagoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoCountAggregateOutputType> | number;
                };
            };
        };
        NotaCreditoDebito: {
            payload: Prisma.$NotaCreditoDebitoPayload<ExtArgs>;
            fields: Prisma.NotaCreditoDebitoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotaCreditoDebitoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotaCreditoDebitoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>;
                };
                findFirst: {
                    args: Prisma.NotaCreditoDebitoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotaCreditoDebitoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>;
                };
                findMany: {
                    args: Prisma.NotaCreditoDebitoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>[];
                };
                create: {
                    args: Prisma.NotaCreditoDebitoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>;
                };
                createMany: {
                    args: Prisma.NotaCreditoDebitoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotaCreditoDebitoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>[];
                };
                delete: {
                    args: Prisma.NotaCreditoDebitoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>;
                };
                update: {
                    args: Prisma.NotaCreditoDebitoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>;
                };
                deleteMany: {
                    args: Prisma.NotaCreditoDebitoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotaCreditoDebitoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotaCreditoDebitoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>[];
                };
                upsert: {
                    args: Prisma.NotaCreditoDebitoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCreditoDebitoPayload>;
                };
                aggregate: {
                    args: Prisma.NotaCreditoDebitoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotaCreditoDebito>;
                };
                groupBy: {
                    args: Prisma.NotaCreditoDebitoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaCreditoDebitoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotaCreditoDebitoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaCreditoDebitoCountAggregateOutputType> | number;
                };
            };
        };
        LibroVentas: {
            payload: Prisma.$LibroVentasPayload<ExtArgs>;
            fields: Prisma.LibroVentasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LibroVentasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LibroVentasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>;
                };
                findFirst: {
                    args: Prisma.LibroVentasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LibroVentasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>;
                };
                findMany: {
                    args: Prisma.LibroVentasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>[];
                };
                create: {
                    args: Prisma.LibroVentasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>;
                };
                createMany: {
                    args: Prisma.LibroVentasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LibroVentasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>[];
                };
                delete: {
                    args: Prisma.LibroVentasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>;
                };
                update: {
                    args: Prisma.LibroVentasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>;
                };
                deleteMany: {
                    args: Prisma.LibroVentasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LibroVentasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LibroVentasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>[];
                };
                upsert: {
                    args: Prisma.LibroVentasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroVentasPayload>;
                };
                aggregate: {
                    args: Prisma.LibroVentasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLibroVentas>;
                };
                groupBy: {
                    args: Prisma.LibroVentasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LibroVentasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LibroVentasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LibroVentasCountAggregateOutputType> | number;
                };
            };
        };
        NotaRemisionVenta: {
            payload: Prisma.$NotaRemisionVentaPayload<ExtArgs>;
            fields: Prisma.NotaRemisionVentaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotaRemisionVentaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotaRemisionVentaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>;
                };
                findFirst: {
                    args: Prisma.NotaRemisionVentaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotaRemisionVentaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>;
                };
                findMany: {
                    args: Prisma.NotaRemisionVentaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>[];
                };
                create: {
                    args: Prisma.NotaRemisionVentaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>;
                };
                createMany: {
                    args: Prisma.NotaRemisionVentaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotaRemisionVentaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>[];
                };
                delete: {
                    args: Prisma.NotaRemisionVentaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>;
                };
                update: {
                    args: Prisma.NotaRemisionVentaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>;
                };
                deleteMany: {
                    args: Prisma.NotaRemisionVentaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotaRemisionVentaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotaRemisionVentaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>[];
                };
                upsert: {
                    args: Prisma.NotaRemisionVentaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionVentaPayload>;
                };
                aggregate: {
                    args: Prisma.NotaRemisionVentaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotaRemisionVenta>;
                };
                groupBy: {
                    args: Prisma.NotaRemisionVentaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaRemisionVentaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotaRemisionVentaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaRemisionVentaCountAggregateOutputType> | number;
                };
            };
        };
        Proveedor: {
            payload: Prisma.$ProveedorPayload<ExtArgs>;
            fields: Prisma.ProveedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProveedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                findFirst: {
                    args: Prisma.ProveedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                findMany: {
                    args: Prisma.ProveedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>[];
                };
                create: {
                    args: Prisma.ProveedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                createMany: {
                    args: Prisma.ProveedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProveedorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>[];
                };
                delete: {
                    args: Prisma.ProveedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                update: {
                    args: Prisma.ProveedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                deleteMany: {
                    args: Prisma.ProveedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProveedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProveedorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>[];
                };
                upsert: {
                    args: Prisma.ProveedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProveedorPayload>;
                };
                aggregate: {
                    args: Prisma.ProveedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProveedor>;
                };
                groupBy: {
                    args: Prisma.ProveedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProveedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorCountAggregateOutputType> | number;
                };
            };
        };
        OrdenCompra: {
            payload: Prisma.$OrdenCompraPayload<ExtArgs>;
            fields: Prisma.OrdenCompraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrdenCompraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrdenCompraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>;
                };
                findFirst: {
                    args: Prisma.OrdenCompraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrdenCompraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>;
                };
                findMany: {
                    args: Prisma.OrdenCompraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[];
                };
                create: {
                    args: Prisma.OrdenCompraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>;
                };
                createMany: {
                    args: Prisma.OrdenCompraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrdenCompraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[];
                };
                delete: {
                    args: Prisma.OrdenCompraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>;
                };
                update: {
                    args: Prisma.OrdenCompraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>;
                };
                deleteMany: {
                    args: Prisma.OrdenCompraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrdenCompraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrdenCompraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>[];
                };
                upsert: {
                    args: Prisma.OrdenCompraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdenCompraPayload>;
                };
                aggregate: {
                    args: Prisma.OrdenCompraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrdenCompra>;
                };
                groupBy: {
                    args: Prisma.OrdenCompraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdenCompraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrdenCompraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdenCompraCountAggregateOutputType> | number;
                };
            };
        };
        DetalleOrdenCompra: {
            payload: Prisma.$DetalleOrdenCompraPayload<ExtArgs>;
            fields: Prisma.DetalleOrdenCompraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DetalleOrdenCompraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DetalleOrdenCompraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>;
                };
                findFirst: {
                    args: Prisma.DetalleOrdenCompraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DetalleOrdenCompraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>;
                };
                findMany: {
                    args: Prisma.DetalleOrdenCompraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>[];
                };
                create: {
                    args: Prisma.DetalleOrdenCompraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>;
                };
                createMany: {
                    args: Prisma.DetalleOrdenCompraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DetalleOrdenCompraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>[];
                };
                delete: {
                    args: Prisma.DetalleOrdenCompraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>;
                };
                update: {
                    args: Prisma.DetalleOrdenCompraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>;
                };
                deleteMany: {
                    args: Prisma.DetalleOrdenCompraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DetalleOrdenCompraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DetalleOrdenCompraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>[];
                };
                upsert: {
                    args: Prisma.DetalleOrdenCompraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DetalleOrdenCompraPayload>;
                };
                aggregate: {
                    args: Prisma.DetalleOrdenCompraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalleOrdenCompra>;
                };
                groupBy: {
                    args: Prisma.DetalleOrdenCompraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleOrdenCompraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DetalleOrdenCompraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DetalleOrdenCompraCountAggregateOutputType> | number;
                };
            };
        };
        LibroCompras: {
            payload: Prisma.$LibroComprasPayload<ExtArgs>;
            fields: Prisma.LibroComprasFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LibroComprasFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LibroComprasFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>;
                };
                findFirst: {
                    args: Prisma.LibroComprasFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LibroComprasFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>;
                };
                findMany: {
                    args: Prisma.LibroComprasFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>[];
                };
                create: {
                    args: Prisma.LibroComprasCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>;
                };
                createMany: {
                    args: Prisma.LibroComprasCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LibroComprasCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>[];
                };
                delete: {
                    args: Prisma.LibroComprasDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>;
                };
                update: {
                    args: Prisma.LibroComprasUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>;
                };
                deleteMany: {
                    args: Prisma.LibroComprasDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LibroComprasUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LibroComprasUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>[];
                };
                upsert: {
                    args: Prisma.LibroComprasUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LibroComprasPayload>;
                };
                aggregate: {
                    args: Prisma.LibroComprasAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLibroCompras>;
                };
                groupBy: {
                    args: Prisma.LibroComprasGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LibroComprasGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LibroComprasCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LibroComprasCountAggregateOutputType> | number;
                };
            };
        };
        NotaRemision: {
            payload: Prisma.$NotaRemisionPayload<ExtArgs>;
            fields: Prisma.NotaRemisionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotaRemisionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotaRemisionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>;
                };
                findFirst: {
                    args: Prisma.NotaRemisionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotaRemisionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>;
                };
                findMany: {
                    args: Prisma.NotaRemisionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>[];
                };
                create: {
                    args: Prisma.NotaRemisionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>;
                };
                createMany: {
                    args: Prisma.NotaRemisionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotaRemisionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>[];
                };
                delete: {
                    args: Prisma.NotaRemisionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>;
                };
                update: {
                    args: Prisma.NotaRemisionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>;
                };
                deleteMany: {
                    args: Prisma.NotaRemisionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotaRemisionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotaRemisionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>[];
                };
                upsert: {
                    args: Prisma.NotaRemisionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaRemisionPayload>;
                };
                aggregate: {
                    args: Prisma.NotaRemisionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotaRemision>;
                };
                groupBy: {
                    args: Prisma.NotaRemisionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaRemisionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotaRemisionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaRemisionCountAggregateOutputType> | number;
                };
            };
        };
        NotaCDCompra: {
            payload: Prisma.$NotaCDCompraPayload<ExtArgs>;
            fields: Prisma.NotaCDCompraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotaCDCompraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotaCDCompraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>;
                };
                findFirst: {
                    args: Prisma.NotaCDCompraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotaCDCompraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>;
                };
                findMany: {
                    args: Prisma.NotaCDCompraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>[];
                };
                create: {
                    args: Prisma.NotaCDCompraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>;
                };
                createMany: {
                    args: Prisma.NotaCDCompraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotaCDCompraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>[];
                };
                delete: {
                    args: Prisma.NotaCDCompraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>;
                };
                update: {
                    args: Prisma.NotaCDCompraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>;
                };
                deleteMany: {
                    args: Prisma.NotaCDCompraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotaCDCompraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotaCDCompraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>[];
                };
                upsert: {
                    args: Prisma.NotaCDCompraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotaCDCompraPayload>;
                };
                aggregate: {
                    args: Prisma.NotaCDCompraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotaCDCompra>;
                };
                groupBy: {
                    args: Prisma.NotaCDCompraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaCDCompraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotaCDCompraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotaCDCompraCountAggregateOutputType> | number;
                };
            };
        };
        AjusteCompra: {
            payload: Prisma.$AjusteCompraPayload<ExtArgs>;
            fields: Prisma.AjusteCompraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AjusteCompraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AjusteCompraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>;
                };
                findFirst: {
                    args: Prisma.AjusteCompraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AjusteCompraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>;
                };
                findMany: {
                    args: Prisma.AjusteCompraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>[];
                };
                create: {
                    args: Prisma.AjusteCompraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>;
                };
                createMany: {
                    args: Prisma.AjusteCompraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AjusteCompraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>[];
                };
                delete: {
                    args: Prisma.AjusteCompraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>;
                };
                update: {
                    args: Prisma.AjusteCompraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>;
                };
                deleteMany: {
                    args: Prisma.AjusteCompraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AjusteCompraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AjusteCompraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>[];
                };
                upsert: {
                    args: Prisma.AjusteCompraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AjusteCompraPayload>;
                };
                aggregate: {
                    args: Prisma.AjusteCompraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAjusteCompra>;
                };
                groupBy: {
                    args: Prisma.AjusteCompraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AjusteCompraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AjusteCompraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AjusteCompraCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    rol?: Prisma.RolOmit;
    usuario?: Prisma.UsuarioOmit;
    cliente?: Prisma.ClienteOmit;
    barbero?: Prisma.BarberoOmit;
    servicio?: Prisma.ServicioOmit;
    turno?: Prisma.TurnoOmit;
    promocion?: Prisma.PromocionOmit;
    descuento?: Prisma.DescuentoOmit;
    reclamo?: Prisma.ReclamoOmit;
    seguimientoReclamo?: Prisma.SeguimientoReclamoOmit;
    presupuesto?: Prisma.PresupuestoOmit;
    detallePresupuesto?: Prisma.DetallePresupuestoOmit;
    insumo?: Prisma.InsumoOmit;
    insumoUtilizado?: Prisma.InsumoUtilizadoOmit;
    caja?: Prisma.CajaOmit;
    movimientoCaja?: Prisma.MovimientoCajaOmit;
    pago?: Prisma.PagoOmit;
    notaCreditoDebito?: Prisma.NotaCreditoDebitoOmit;
    libroVentas?: Prisma.LibroVentasOmit;
    notaRemisionVenta?: Prisma.NotaRemisionVentaOmit;
    proveedor?: Prisma.ProveedorOmit;
    ordenCompra?: Prisma.OrdenCompraOmit;
    detalleOrdenCompra?: Prisma.DetalleOrdenCompraOmit;
    libroCompras?: Prisma.LibroComprasOmit;
    notaRemision?: Prisma.NotaRemisionOmit;
    notaCDCompra?: Prisma.NotaCDCompraOmit;
    ajusteCompra?: Prisma.AjusteCompraOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
