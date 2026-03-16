import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ProveedorModel = runtime.Types.Result.DefaultSelection<Prisma.$ProveedorPayload>;
export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null;
    _avg: ProveedorAvgAggregateOutputType | null;
    _sum: ProveedorSumAggregateOutputType | null;
    _min: ProveedorMinAggregateOutputType | null;
    _max: ProveedorMaxAggregateOutputType | null;
};
export type ProveedorAvgAggregateOutputType = {
    id: number | null;
};
export type ProveedorSumAggregateOutputType = {
    id: number | null;
};
export type ProveedorMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    ruc: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
    estado: boolean | null;
};
export type ProveedorMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    ruc: string | null;
    telefono: string | null;
    email: string | null;
    direccion: string | null;
    estado: boolean | null;
};
export type ProveedorCountAggregateOutputType = {
    id: number;
    nombre: number;
    ruc: number;
    telefono: number;
    email: number;
    direccion: number;
    estado: number;
    _all: number;
};
export type ProveedorAvgAggregateInputType = {
    id?: true;
};
export type ProveedorSumAggregateInputType = {
    id?: true;
};
export type ProveedorMinAggregateInputType = {
    id?: true;
    nombre?: true;
    ruc?: true;
    telefono?: true;
    email?: true;
    direccion?: true;
    estado?: true;
};
export type ProveedorMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    ruc?: true;
    telefono?: true;
    email?: true;
    direccion?: true;
    estado?: true;
};
export type ProveedorCountAggregateInputType = {
    id?: true;
    nombre?: true;
    ruc?: true;
    telefono?: true;
    email?: true;
    direccion?: true;
    estado?: true;
    _all?: true;
};
export type ProveedorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProveedorWhereInput;
    orderBy?: Prisma.ProveedorOrderByWithRelationInput | Prisma.ProveedorOrderByWithRelationInput[];
    cursor?: Prisma.ProveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProveedorCountAggregateInputType;
    _avg?: ProveedorAvgAggregateInputType;
    _sum?: ProveedorSumAggregateInputType;
    _min?: ProveedorMinAggregateInputType;
    _max?: ProveedorMaxAggregateInputType;
};
export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
    [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProveedor[P]> : Prisma.GetScalarType<T[P], AggregateProveedor[P]>;
};
export type ProveedorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProveedorWhereInput;
    orderBy?: Prisma.ProveedorOrderByWithAggregationInput | Prisma.ProveedorOrderByWithAggregationInput[];
    by: Prisma.ProveedorScalarFieldEnum[] | Prisma.ProveedorScalarFieldEnum;
    having?: Prisma.ProveedorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProveedorCountAggregateInputType | true;
    _avg?: ProveedorAvgAggregateInputType;
    _sum?: ProveedorSumAggregateInputType;
    _min?: ProveedorMinAggregateInputType;
    _max?: ProveedorMaxAggregateInputType;
};
export type ProveedorGroupByOutputType = {
    id: number;
    nombre: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    estado: boolean;
    _count: ProveedorCountAggregateOutputType | null;
    _avg: ProveedorAvgAggregateOutputType | null;
    _sum: ProveedorSumAggregateOutputType | null;
    _min: ProveedorMinAggregateOutputType | null;
    _max: ProveedorMaxAggregateOutputType | null;
};
type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProveedorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProveedorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProveedorGroupByOutputType[P]>;
}>>;
export type ProveedorWhereInput = {
    AND?: Prisma.ProveedorWhereInput | Prisma.ProveedorWhereInput[];
    OR?: Prisma.ProveedorWhereInput[];
    NOT?: Prisma.ProveedorWhereInput | Prisma.ProveedorWhereInput[];
    id?: Prisma.IntFilter<"Proveedor"> | number;
    nombre?: Prisma.StringFilter<"Proveedor"> | string;
    ruc?: Prisma.StringFilter<"Proveedor"> | string;
    telefono?: Prisma.StringFilter<"Proveedor"> | string;
    email?: Prisma.StringFilter<"Proveedor"> | string;
    direccion?: Prisma.StringFilter<"Proveedor"> | string;
    estado?: Prisma.BoolFilter<"Proveedor"> | boolean;
    ordenesCompra?: Prisma.OrdenCompraListRelationFilter;
};
export type ProveedorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ruc?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    ordenesCompra?: Prisma.OrdenCompraOrderByRelationAggregateInput;
};
export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ProveedorWhereInput | Prisma.ProveedorWhereInput[];
    OR?: Prisma.ProveedorWhereInput[];
    NOT?: Prisma.ProveedorWhereInput | Prisma.ProveedorWhereInput[];
    nombre?: Prisma.StringFilter<"Proveedor"> | string;
    ruc?: Prisma.StringFilter<"Proveedor"> | string;
    telefono?: Prisma.StringFilter<"Proveedor"> | string;
    email?: Prisma.StringFilter<"Proveedor"> | string;
    direccion?: Prisma.StringFilter<"Proveedor"> | string;
    estado?: Prisma.BoolFilter<"Proveedor"> | boolean;
    ordenesCompra?: Prisma.OrdenCompraListRelationFilter;
}, "id">;
export type ProveedorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ruc?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.ProveedorCountOrderByAggregateInput;
    _avg?: Prisma.ProveedorAvgOrderByAggregateInput;
    _max?: Prisma.ProveedorMaxOrderByAggregateInput;
    _min?: Prisma.ProveedorMinOrderByAggregateInput;
    _sum?: Prisma.ProveedorSumOrderByAggregateInput;
};
export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProveedorScalarWhereWithAggregatesInput | Prisma.ProveedorScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProveedorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProveedorScalarWhereWithAggregatesInput | Prisma.ProveedorScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Proveedor"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Proveedor"> | string;
    ruc?: Prisma.StringWithAggregatesFilter<"Proveedor"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Proveedor"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Proveedor"> | string;
    direccion?: Prisma.StringWithAggregatesFilter<"Proveedor"> | string;
    estado?: Prisma.BoolWithAggregatesFilter<"Proveedor"> | boolean;
};
export type ProveedorCreateInput = {
    nombre: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    estado?: boolean;
    ordenesCompra?: Prisma.OrdenCompraCreateNestedManyWithoutProveedorInput;
};
export type ProveedorUncheckedCreateInput = {
    id?: number;
    nombre: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    estado?: boolean;
    ordenesCompra?: Prisma.OrdenCompraUncheckedCreateNestedManyWithoutProveedorInput;
};
export type ProveedorUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ruc?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenesCompra?: Prisma.OrdenCompraUpdateManyWithoutProveedorNestedInput;
};
export type ProveedorUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ruc?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenesCompra?: Prisma.OrdenCompraUncheckedUpdateManyWithoutProveedorNestedInput;
};
export type ProveedorCreateManyInput = {
    id?: number;
    nombre: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    estado?: boolean;
};
export type ProveedorUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ruc?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProveedorUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ruc?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProveedorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ruc?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ProveedorAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProveedorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ruc?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ProveedorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ruc?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ProveedorSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ProveedorScalarRelationFilter = {
    is?: Prisma.ProveedorWhereInput;
    isNot?: Prisma.ProveedorWhereInput;
};
export type ProveedorCreateNestedOneWithoutOrdenesCompraInput = {
    create?: Prisma.XOR<Prisma.ProveedorCreateWithoutOrdenesCompraInput, Prisma.ProveedorUncheckedCreateWithoutOrdenesCompraInput>;
    connectOrCreate?: Prisma.ProveedorCreateOrConnectWithoutOrdenesCompraInput;
    connect?: Prisma.ProveedorWhereUniqueInput;
};
export type ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput = {
    create?: Prisma.XOR<Prisma.ProveedorCreateWithoutOrdenesCompraInput, Prisma.ProveedorUncheckedCreateWithoutOrdenesCompraInput>;
    connectOrCreate?: Prisma.ProveedorCreateOrConnectWithoutOrdenesCompraInput;
    upsert?: Prisma.ProveedorUpsertWithoutOrdenesCompraInput;
    connect?: Prisma.ProveedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProveedorUpdateToOneWithWhereWithoutOrdenesCompraInput, Prisma.ProveedorUpdateWithoutOrdenesCompraInput>, Prisma.ProveedorUncheckedUpdateWithoutOrdenesCompraInput>;
};
export type ProveedorCreateWithoutOrdenesCompraInput = {
    nombre: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    estado?: boolean;
};
export type ProveedorUncheckedCreateWithoutOrdenesCompraInput = {
    id?: number;
    nombre: string;
    ruc: string;
    telefono: string;
    email: string;
    direccion: string;
    estado?: boolean;
};
export type ProveedorCreateOrConnectWithoutOrdenesCompraInput = {
    where: Prisma.ProveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProveedorCreateWithoutOrdenesCompraInput, Prisma.ProveedorUncheckedCreateWithoutOrdenesCompraInput>;
};
export type ProveedorUpsertWithoutOrdenesCompraInput = {
    update: Prisma.XOR<Prisma.ProveedorUpdateWithoutOrdenesCompraInput, Prisma.ProveedorUncheckedUpdateWithoutOrdenesCompraInput>;
    create: Prisma.XOR<Prisma.ProveedorCreateWithoutOrdenesCompraInput, Prisma.ProveedorUncheckedCreateWithoutOrdenesCompraInput>;
    where?: Prisma.ProveedorWhereInput;
};
export type ProveedorUpdateToOneWithWhereWithoutOrdenesCompraInput = {
    where?: Prisma.ProveedorWhereInput;
    data: Prisma.XOR<Prisma.ProveedorUpdateWithoutOrdenesCompraInput, Prisma.ProveedorUncheckedUpdateWithoutOrdenesCompraInput>;
};
export type ProveedorUpdateWithoutOrdenesCompraInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ruc?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProveedorUncheckedUpdateWithoutOrdenesCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    ruc?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ProveedorCountOutputType = {
    ordenesCompra: number;
};
export type ProveedorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenesCompra?: boolean | ProveedorCountOutputTypeCountOrdenesCompraArgs;
};
export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorCountOutputTypeSelect<ExtArgs> | null;
};
export type ProveedorCountOutputTypeCountOrdenesCompraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdenCompraWhereInput;
};
export type ProveedorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    ruc?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
    estado?: boolean;
    ordenesCompra?: boolean | Prisma.Proveedor$ordenesCompraArgs<ExtArgs>;
    _count?: boolean | Prisma.ProveedorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proveedor"]>;
export type ProveedorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    ruc?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["proveedor"]>;
export type ProveedorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    ruc?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["proveedor"]>;
export type ProveedorSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    ruc?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccion?: boolean;
    estado?: boolean;
};
export type ProveedorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "ruc" | "telefono" | "email" | "direccion" | "estado", ExtArgs["result"]["proveedor"]>;
export type ProveedorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenesCompra?: boolean | Prisma.Proveedor$ordenesCompraArgs<ExtArgs>;
    _count?: boolean | Prisma.ProveedorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProveedorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProveedorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProveedorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Proveedor";
    objects: {
        ordenesCompra: Prisma.$OrdenCompraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        ruc: string;
        telefono: string;
        email: string;
        direccion: string;
        estado: boolean;
    }, ExtArgs["result"]["proveedor"]>;
    composites: {};
};
export type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProveedorPayload, S>;
export type ProveedorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProveedorCountAggregateInputType | true;
};
export interface ProveedorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'];
        meta: {
            name: 'Proveedor';
        };
    };
    findUnique<T extends ProveedorFindUniqueArgs>(args: Prisma.SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProveedorFindFirstArgs>(args?: Prisma.SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProveedorFindManyArgs>(args?: Prisma.SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProveedorCreateArgs>(args: Prisma.SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProveedorCreateManyArgs>(args?: Prisma.SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProveedorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProveedorDeleteArgs>(args: Prisma.SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProveedorUpdateArgs>(args: Prisma.SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProveedorUpdateManyArgs>(args: Prisma.SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProveedorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProveedorUpsertArgs>(args: Prisma.SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProveedorCountArgs>(args?: Prisma.Subset<T, ProveedorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProveedorCountAggregateOutputType> : number>;
    aggregate<T extends ProveedorAggregateArgs>(args: Prisma.Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>;
    groupBy<T extends ProveedorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProveedorGroupByArgs['orderBy'];
    } : {
        orderBy?: ProveedorGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProveedorFieldRefs;
}
export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenesCompra<T extends Prisma.Proveedor$ordenesCompraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Proveedor$ordenesCompraArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProveedorFieldRefs {
    readonly id: Prisma.FieldRef<"Proveedor", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Proveedor", 'String'>;
    readonly ruc: Prisma.FieldRef<"Proveedor", 'String'>;
    readonly telefono: Prisma.FieldRef<"Proveedor", 'String'>;
    readonly email: Prisma.FieldRef<"Proveedor", 'String'>;
    readonly direccion: Prisma.FieldRef<"Proveedor", 'String'>;
    readonly estado: Prisma.FieldRef<"Proveedor", 'Boolean'>;
}
export type ProveedorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where: Prisma.ProveedorWhereUniqueInput;
};
export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where: Prisma.ProveedorWhereUniqueInput;
};
export type ProveedorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where?: Prisma.ProveedorWhereInput;
    orderBy?: Prisma.ProveedorOrderByWithRelationInput | Prisma.ProveedorOrderByWithRelationInput[];
    cursor?: Prisma.ProveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
export type ProveedorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where?: Prisma.ProveedorWhereInput;
    orderBy?: Prisma.ProveedorOrderByWithRelationInput | Prisma.ProveedorOrderByWithRelationInput[];
    cursor?: Prisma.ProveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
export type ProveedorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where?: Prisma.ProveedorWhereInput;
    orderBy?: Prisma.ProveedorOrderByWithRelationInput | Prisma.ProveedorOrderByWithRelationInput[];
    cursor?: Prisma.ProveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
export type ProveedorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProveedorCreateInput, Prisma.ProveedorUncheckedCreateInput>;
};
export type ProveedorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProveedorCreateManyInput | Prisma.ProveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProveedorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    data: Prisma.ProveedorCreateManyInput | Prisma.ProveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProveedorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProveedorUpdateInput, Prisma.ProveedorUncheckedUpdateInput>;
    where: Prisma.ProveedorWhereUniqueInput;
};
export type ProveedorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProveedorUpdateManyMutationInput, Prisma.ProveedorUncheckedUpdateManyInput>;
    where?: Prisma.ProveedorWhereInput;
    limit?: number;
};
export type ProveedorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProveedorUpdateManyMutationInput, Prisma.ProveedorUncheckedUpdateManyInput>;
    where?: Prisma.ProveedorWhereInput;
    limit?: number;
};
export type ProveedorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where: Prisma.ProveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProveedorCreateInput, Prisma.ProveedorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProveedorUpdateInput, Prisma.ProveedorUncheckedUpdateInput>;
};
export type ProveedorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
    where: Prisma.ProveedorWhereUniqueInput;
};
export type ProveedorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProveedorWhereInput;
    limit?: number;
};
export type Proveedor$ordenesCompraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.OrdenCompraWhereInput;
    orderBy?: Prisma.OrdenCompraOrderByWithRelationInput | Prisma.OrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.OrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdenCompraScalarFieldEnum | Prisma.OrdenCompraScalarFieldEnum[];
};
export type ProveedorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorSelect<ExtArgs> | null;
    omit?: Prisma.ProveedorOmit<ExtArgs> | null;
    include?: Prisma.ProveedorInclude<ExtArgs> | null;
};
export {};
