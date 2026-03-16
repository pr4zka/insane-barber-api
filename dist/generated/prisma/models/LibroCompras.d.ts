import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LibroComprasModel = runtime.Types.Result.DefaultSelection<Prisma.$LibroComprasPayload>;
export type AggregateLibroCompras = {
    _count: LibroComprasCountAggregateOutputType | null;
    _avg: LibroComprasAvgAggregateOutputType | null;
    _sum: LibroComprasSumAggregateOutputType | null;
    _min: LibroComprasMinAggregateOutputType | null;
    _max: LibroComprasMaxAggregateOutputType | null;
};
export type LibroComprasAvgAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    monto: runtime.Decimal | null;
};
export type LibroComprasSumAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    monto: runtime.Decimal | null;
};
export type LibroComprasMinAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    fecha: Date | null;
    concepto: string | null;
    monto: runtime.Decimal | null;
    proveedor: string | null;
};
export type LibroComprasMaxAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    fecha: Date | null;
    concepto: string | null;
    monto: runtime.Decimal | null;
    proveedor: string | null;
};
export type LibroComprasCountAggregateOutputType = {
    id: number;
    ordenCompraId: number;
    fecha: number;
    concepto: number;
    monto: number;
    proveedor: number;
    _all: number;
};
export type LibroComprasAvgAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    monto?: true;
};
export type LibroComprasSumAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    monto?: true;
};
export type LibroComprasMinAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    fecha?: true;
    concepto?: true;
    monto?: true;
    proveedor?: true;
};
export type LibroComprasMaxAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    fecha?: true;
    concepto?: true;
    monto?: true;
    proveedor?: true;
};
export type LibroComprasCountAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    fecha?: true;
    concepto?: true;
    monto?: true;
    proveedor?: true;
    _all?: true;
};
export type LibroComprasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroComprasWhereInput;
    orderBy?: Prisma.LibroComprasOrderByWithRelationInput | Prisma.LibroComprasOrderByWithRelationInput[];
    cursor?: Prisma.LibroComprasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LibroComprasCountAggregateInputType;
    _avg?: LibroComprasAvgAggregateInputType;
    _sum?: LibroComprasSumAggregateInputType;
    _min?: LibroComprasMinAggregateInputType;
    _max?: LibroComprasMaxAggregateInputType;
};
export type GetLibroComprasAggregateType<T extends LibroComprasAggregateArgs> = {
    [P in keyof T & keyof AggregateLibroCompras]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLibroCompras[P]> : Prisma.GetScalarType<T[P], AggregateLibroCompras[P]>;
};
export type LibroComprasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroComprasWhereInput;
    orderBy?: Prisma.LibroComprasOrderByWithAggregationInput | Prisma.LibroComprasOrderByWithAggregationInput[];
    by: Prisma.LibroComprasScalarFieldEnum[] | Prisma.LibroComprasScalarFieldEnum;
    having?: Prisma.LibroComprasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LibroComprasCountAggregateInputType | true;
    _avg?: LibroComprasAvgAggregateInputType;
    _sum?: LibroComprasSumAggregateInputType;
    _min?: LibroComprasMinAggregateInputType;
    _max?: LibroComprasMaxAggregateInputType;
};
export type LibroComprasGroupByOutputType = {
    id: number;
    ordenCompraId: number;
    fecha: Date;
    concepto: string;
    monto: runtime.Decimal;
    proveedor: string;
    _count: LibroComprasCountAggregateOutputType | null;
    _avg: LibroComprasAvgAggregateOutputType | null;
    _sum: LibroComprasSumAggregateOutputType | null;
    _min: LibroComprasMinAggregateOutputType | null;
    _max: LibroComprasMaxAggregateOutputType | null;
};
type GetLibroComprasGroupByPayload<T extends LibroComprasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LibroComprasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LibroComprasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LibroComprasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LibroComprasGroupByOutputType[P]>;
}>>;
export type LibroComprasWhereInput = {
    AND?: Prisma.LibroComprasWhereInput | Prisma.LibroComprasWhereInput[];
    OR?: Prisma.LibroComprasWhereInput[];
    NOT?: Prisma.LibroComprasWhereInput | Prisma.LibroComprasWhereInput[];
    id?: Prisma.IntFilter<"LibroCompras"> | number;
    ordenCompraId?: Prisma.IntFilter<"LibroCompras"> | number;
    fecha?: Prisma.DateTimeFilter<"LibroCompras"> | Date | string;
    concepto?: Prisma.StringFilter<"LibroCompras"> | string;
    monto?: Prisma.DecimalFilter<"LibroCompras"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFilter<"LibroCompras"> | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
};
export type LibroComprasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    ordenCompra?: Prisma.OrdenCompraOrderByWithRelationInput;
};
export type LibroComprasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    ordenCompraId?: number;
    AND?: Prisma.LibroComprasWhereInput | Prisma.LibroComprasWhereInput[];
    OR?: Prisma.LibroComprasWhereInput[];
    NOT?: Prisma.LibroComprasWhereInput | Prisma.LibroComprasWhereInput[];
    fecha?: Prisma.DateTimeFilter<"LibroCompras"> | Date | string;
    concepto?: Prisma.StringFilter<"LibroCompras"> | string;
    monto?: Prisma.DecimalFilter<"LibroCompras"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFilter<"LibroCompras"> | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
}, "id" | "ordenCompraId">;
export type LibroComprasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
    _count?: Prisma.LibroComprasCountOrderByAggregateInput;
    _avg?: Prisma.LibroComprasAvgOrderByAggregateInput;
    _max?: Prisma.LibroComprasMaxOrderByAggregateInput;
    _min?: Prisma.LibroComprasMinOrderByAggregateInput;
    _sum?: Prisma.LibroComprasSumOrderByAggregateInput;
};
export type LibroComprasScalarWhereWithAggregatesInput = {
    AND?: Prisma.LibroComprasScalarWhereWithAggregatesInput | Prisma.LibroComprasScalarWhereWithAggregatesInput[];
    OR?: Prisma.LibroComprasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LibroComprasScalarWhereWithAggregatesInput | Prisma.LibroComprasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LibroCompras"> | number;
    ordenCompraId?: Prisma.IntWithAggregatesFilter<"LibroCompras"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"LibroCompras"> | Date | string;
    concepto?: Prisma.StringWithAggregatesFilter<"LibroCompras"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"LibroCompras"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringWithAggregatesFilter<"LibroCompras"> | string;
};
export type LibroComprasCreateInput = {
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor: string;
    ordenCompra: Prisma.OrdenCompraCreateNestedOneWithoutLibroComprasInput;
};
export type LibroComprasUncheckedCreateInput = {
    id?: number;
    ordenCompraId: number;
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor: string;
};
export type LibroComprasUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
    ordenCompra?: Prisma.OrdenCompraUpdateOneRequiredWithoutLibroComprasNestedInput;
};
export type LibroComprasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroComprasCreateManyInput = {
    id?: number;
    ordenCompraId: number;
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor: string;
};
export type LibroComprasUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroComprasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroComprasNullableScalarRelationFilter = {
    is?: Prisma.LibroComprasWhereInput | null;
    isNot?: Prisma.LibroComprasWhereInput | null;
};
export type LibroComprasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
};
export type LibroComprasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type LibroComprasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
};
export type LibroComprasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    proveedor?: Prisma.SortOrder;
};
export type LibroComprasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type LibroComprasCreateNestedOneWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.LibroComprasCreateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.LibroComprasCreateOrConnectWithoutOrdenCompraInput;
    connect?: Prisma.LibroComprasWhereUniqueInput;
};
export type LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.LibroComprasCreateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.LibroComprasCreateOrConnectWithoutOrdenCompraInput;
    connect?: Prisma.LibroComprasWhereUniqueInput;
};
export type LibroComprasUpdateOneWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.LibroComprasCreateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.LibroComprasCreateOrConnectWithoutOrdenCompraInput;
    upsert?: Prisma.LibroComprasUpsertWithoutOrdenCompraInput;
    disconnect?: Prisma.LibroComprasWhereInput | boolean;
    delete?: Prisma.LibroComprasWhereInput | boolean;
    connect?: Prisma.LibroComprasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LibroComprasUpdateToOneWithWhereWithoutOrdenCompraInput, Prisma.LibroComprasUpdateWithoutOrdenCompraInput>, Prisma.LibroComprasUncheckedUpdateWithoutOrdenCompraInput>;
};
export type LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.LibroComprasCreateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.LibroComprasCreateOrConnectWithoutOrdenCompraInput;
    upsert?: Prisma.LibroComprasUpsertWithoutOrdenCompraInput;
    disconnect?: Prisma.LibroComprasWhereInput | boolean;
    delete?: Prisma.LibroComprasWhereInput | boolean;
    connect?: Prisma.LibroComprasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LibroComprasUpdateToOneWithWhereWithoutOrdenCompraInput, Prisma.LibroComprasUpdateWithoutOrdenCompraInput>, Prisma.LibroComprasUncheckedUpdateWithoutOrdenCompraInput>;
};
export type LibroComprasCreateWithoutOrdenCompraInput = {
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor: string;
};
export type LibroComprasUncheckedCreateWithoutOrdenCompraInput = {
    id?: number;
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor: string;
};
export type LibroComprasCreateOrConnectWithoutOrdenCompraInput = {
    where: Prisma.LibroComprasWhereUniqueInput;
    create: Prisma.XOR<Prisma.LibroComprasCreateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedCreateWithoutOrdenCompraInput>;
};
export type LibroComprasUpsertWithoutOrdenCompraInput = {
    update: Prisma.XOR<Prisma.LibroComprasUpdateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedUpdateWithoutOrdenCompraInput>;
    create: Prisma.XOR<Prisma.LibroComprasCreateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedCreateWithoutOrdenCompraInput>;
    where?: Prisma.LibroComprasWhereInput;
};
export type LibroComprasUpdateToOneWithWhereWithoutOrdenCompraInput = {
    where?: Prisma.LibroComprasWhereInput;
    data: Prisma.XOR<Prisma.LibroComprasUpdateWithoutOrdenCompraInput, Prisma.LibroComprasUncheckedUpdateWithoutOrdenCompraInput>;
};
export type LibroComprasUpdateWithoutOrdenCompraInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroComprasUncheckedUpdateWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    proveedor?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroComprasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    proveedor?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["libroCompras"]>;
export type LibroComprasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    proveedor?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["libroCompras"]>;
export type LibroComprasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    proveedor?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["libroCompras"]>;
export type LibroComprasSelectScalar = {
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    proveedor?: boolean;
};
export type LibroComprasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordenCompraId" | "fecha" | "concepto" | "monto" | "proveedor", ExtArgs["result"]["libroCompras"]>;
export type LibroComprasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type LibroComprasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type LibroComprasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type $LibroComprasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LibroCompras";
    objects: {
        ordenCompra: Prisma.$OrdenCompraPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ordenCompraId: number;
        fecha: Date;
        concepto: string;
        monto: runtime.Decimal;
        proveedor: string;
    }, ExtArgs["result"]["libroCompras"]>;
    composites: {};
};
export type LibroComprasGetPayload<S extends boolean | null | undefined | LibroComprasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload, S>;
export type LibroComprasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LibroComprasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LibroComprasCountAggregateInputType | true;
};
export interface LibroComprasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LibroCompras'];
        meta: {
            name: 'LibroCompras';
        };
    };
    findUnique<T extends LibroComprasFindUniqueArgs>(args: Prisma.SelectSubset<T, LibroComprasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LibroComprasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LibroComprasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LibroComprasFindFirstArgs>(args?: Prisma.SelectSubset<T, LibroComprasFindFirstArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LibroComprasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LibroComprasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LibroComprasFindManyArgs>(args?: Prisma.SelectSubset<T, LibroComprasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LibroComprasCreateArgs>(args: Prisma.SelectSubset<T, LibroComprasCreateArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LibroComprasCreateManyArgs>(args?: Prisma.SelectSubset<T, LibroComprasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LibroComprasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LibroComprasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LibroComprasDeleteArgs>(args: Prisma.SelectSubset<T, LibroComprasDeleteArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LibroComprasUpdateArgs>(args: Prisma.SelectSubset<T, LibroComprasUpdateArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LibroComprasDeleteManyArgs>(args?: Prisma.SelectSubset<T, LibroComprasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LibroComprasUpdateManyArgs>(args: Prisma.SelectSubset<T, LibroComprasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LibroComprasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LibroComprasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LibroComprasUpsertArgs>(args: Prisma.SelectSubset<T, LibroComprasUpsertArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LibroComprasCountArgs>(args?: Prisma.Subset<T, LibroComprasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LibroComprasCountAggregateOutputType> : number>;
    aggregate<T extends LibroComprasAggregateArgs>(args: Prisma.Subset<T, LibroComprasAggregateArgs>): Prisma.PrismaPromise<GetLibroComprasAggregateType<T>>;
    groupBy<T extends LibroComprasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LibroComprasGroupByArgs['orderBy'];
    } : {
        orderBy?: LibroComprasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LibroComprasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroComprasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LibroComprasFieldRefs;
}
export interface Prisma__LibroComprasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenCompra<T extends Prisma.OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompraDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LibroComprasFieldRefs {
    readonly id: Prisma.FieldRef<"LibroCompras", 'Int'>;
    readonly ordenCompraId: Prisma.FieldRef<"LibroCompras", 'Int'>;
    readonly fecha: Prisma.FieldRef<"LibroCompras", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"LibroCompras", 'String'>;
    readonly monto: Prisma.FieldRef<"LibroCompras", 'Decimal'>;
    readonly proveedor: Prisma.FieldRef<"LibroCompras", 'String'>;
}
export type LibroComprasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where: Prisma.LibroComprasWhereUniqueInput;
};
export type LibroComprasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where: Prisma.LibroComprasWhereUniqueInput;
};
export type LibroComprasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where?: Prisma.LibroComprasWhereInput;
    orderBy?: Prisma.LibroComprasOrderByWithRelationInput | Prisma.LibroComprasOrderByWithRelationInput[];
    cursor?: Prisma.LibroComprasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroComprasScalarFieldEnum | Prisma.LibroComprasScalarFieldEnum[];
};
export type LibroComprasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where?: Prisma.LibroComprasWhereInput;
    orderBy?: Prisma.LibroComprasOrderByWithRelationInput | Prisma.LibroComprasOrderByWithRelationInput[];
    cursor?: Prisma.LibroComprasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroComprasScalarFieldEnum | Prisma.LibroComprasScalarFieldEnum[];
};
export type LibroComprasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where?: Prisma.LibroComprasWhereInput;
    orderBy?: Prisma.LibroComprasOrderByWithRelationInput | Prisma.LibroComprasOrderByWithRelationInput[];
    cursor?: Prisma.LibroComprasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroComprasScalarFieldEnum | Prisma.LibroComprasScalarFieldEnum[];
};
export type LibroComprasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroComprasCreateInput, Prisma.LibroComprasUncheckedCreateInput>;
};
export type LibroComprasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LibroComprasCreateManyInput | Prisma.LibroComprasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LibroComprasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    data: Prisma.LibroComprasCreateManyInput | Prisma.LibroComprasCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LibroComprasIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LibroComprasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroComprasUpdateInput, Prisma.LibroComprasUncheckedUpdateInput>;
    where: Prisma.LibroComprasWhereUniqueInput;
};
export type LibroComprasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LibroComprasUpdateManyMutationInput, Prisma.LibroComprasUncheckedUpdateManyInput>;
    where?: Prisma.LibroComprasWhereInput;
    limit?: number;
};
export type LibroComprasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroComprasUpdateManyMutationInput, Prisma.LibroComprasUncheckedUpdateManyInput>;
    where?: Prisma.LibroComprasWhereInput;
    limit?: number;
    include?: Prisma.LibroComprasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LibroComprasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where: Prisma.LibroComprasWhereUniqueInput;
    create: Prisma.XOR<Prisma.LibroComprasCreateInput, Prisma.LibroComprasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LibroComprasUpdateInput, Prisma.LibroComprasUncheckedUpdateInput>;
};
export type LibroComprasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where: Prisma.LibroComprasWhereUniqueInput;
};
export type LibroComprasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroComprasWhereInput;
    limit?: number;
};
export type LibroComprasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
};
export {};
