import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type NotaRemisionModel = runtime.Types.Result.DefaultSelection<Prisma.$NotaRemisionPayload>;
export type AggregateNotaRemision = {
    _count: NotaRemisionCountAggregateOutputType | null;
    _avg: NotaRemisionAvgAggregateOutputType | null;
    _sum: NotaRemisionSumAggregateOutputType | null;
    _min: NotaRemisionMinAggregateOutputType | null;
    _max: NotaRemisionMaxAggregateOutputType | null;
};
export type NotaRemisionAvgAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
};
export type NotaRemisionSumAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
};
export type NotaRemisionMinAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    fecha: Date | null;
    observacion: string | null;
};
export type NotaRemisionMaxAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    fecha: Date | null;
    observacion: string | null;
};
export type NotaRemisionCountAggregateOutputType = {
    id: number;
    ordenCompraId: number;
    fecha: number;
    observacion: number;
    _all: number;
};
export type NotaRemisionAvgAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
};
export type NotaRemisionSumAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
};
export type NotaRemisionMinAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    fecha?: true;
    observacion?: true;
};
export type NotaRemisionMaxAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    fecha?: true;
    observacion?: true;
};
export type NotaRemisionCountAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    fecha?: true;
    observacion?: true;
    _all?: true;
};
export type NotaRemisionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaRemisionWhereInput;
    orderBy?: Prisma.NotaRemisionOrderByWithRelationInput | Prisma.NotaRemisionOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotaRemisionCountAggregateInputType;
    _avg?: NotaRemisionAvgAggregateInputType;
    _sum?: NotaRemisionSumAggregateInputType;
    _min?: NotaRemisionMinAggregateInputType;
    _max?: NotaRemisionMaxAggregateInputType;
};
export type GetNotaRemisionAggregateType<T extends NotaRemisionAggregateArgs> = {
    [P in keyof T & keyof AggregateNotaRemision]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotaRemision[P]> : Prisma.GetScalarType<T[P], AggregateNotaRemision[P]>;
};
export type NotaRemisionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaRemisionWhereInput;
    orderBy?: Prisma.NotaRemisionOrderByWithAggregationInput | Prisma.NotaRemisionOrderByWithAggregationInput[];
    by: Prisma.NotaRemisionScalarFieldEnum[] | Prisma.NotaRemisionScalarFieldEnum;
    having?: Prisma.NotaRemisionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotaRemisionCountAggregateInputType | true;
    _avg?: NotaRemisionAvgAggregateInputType;
    _sum?: NotaRemisionSumAggregateInputType;
    _min?: NotaRemisionMinAggregateInputType;
    _max?: NotaRemisionMaxAggregateInputType;
};
export type NotaRemisionGroupByOutputType = {
    id: number;
    ordenCompraId: number;
    fecha: Date;
    observacion: string;
    _count: NotaRemisionCountAggregateOutputType | null;
    _avg: NotaRemisionAvgAggregateOutputType | null;
    _sum: NotaRemisionSumAggregateOutputType | null;
    _min: NotaRemisionMinAggregateOutputType | null;
    _max: NotaRemisionMaxAggregateOutputType | null;
};
type GetNotaRemisionGroupByPayload<T extends NotaRemisionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotaRemisionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotaRemisionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotaRemisionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotaRemisionGroupByOutputType[P]>;
}>>;
export type NotaRemisionWhereInput = {
    AND?: Prisma.NotaRemisionWhereInput | Prisma.NotaRemisionWhereInput[];
    OR?: Prisma.NotaRemisionWhereInput[];
    NOT?: Prisma.NotaRemisionWhereInput | Prisma.NotaRemisionWhereInput[];
    id?: Prisma.IntFilter<"NotaRemision"> | number;
    ordenCompraId?: Prisma.IntFilter<"NotaRemision"> | number;
    fecha?: Prisma.DateTimeFilter<"NotaRemision"> | Date | string;
    observacion?: Prisma.StringFilter<"NotaRemision"> | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
};
export type NotaRemisionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    ordenCompra?: Prisma.OrdenCompraOrderByWithRelationInput;
};
export type NotaRemisionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    ordenCompraId?: number;
    AND?: Prisma.NotaRemisionWhereInput | Prisma.NotaRemisionWhereInput[];
    OR?: Prisma.NotaRemisionWhereInput[];
    NOT?: Prisma.NotaRemisionWhereInput | Prisma.NotaRemisionWhereInput[];
    fecha?: Prisma.DateTimeFilter<"NotaRemision"> | Date | string;
    observacion?: Prisma.StringFilter<"NotaRemision"> | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
}, "id" | "ordenCompraId">;
export type NotaRemisionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    _count?: Prisma.NotaRemisionCountOrderByAggregateInput;
    _avg?: Prisma.NotaRemisionAvgOrderByAggregateInput;
    _max?: Prisma.NotaRemisionMaxOrderByAggregateInput;
    _min?: Prisma.NotaRemisionMinOrderByAggregateInput;
    _sum?: Prisma.NotaRemisionSumOrderByAggregateInput;
};
export type NotaRemisionScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotaRemisionScalarWhereWithAggregatesInput | Prisma.NotaRemisionScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotaRemisionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotaRemisionScalarWhereWithAggregatesInput | Prisma.NotaRemisionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"NotaRemision"> | number;
    ordenCompraId?: Prisma.IntWithAggregatesFilter<"NotaRemision"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"NotaRemision"> | Date | string;
    observacion?: Prisma.StringWithAggregatesFilter<"NotaRemision"> | string;
};
export type NotaRemisionCreateInput = {
    fecha?: Date | string;
    observacion?: string;
    ordenCompra: Prisma.OrdenCompraCreateNestedOneWithoutNotaRemisionInput;
};
export type NotaRemisionUncheckedCreateInput = {
    id?: number;
    ordenCompraId: number;
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    ordenCompra?: Prisma.OrdenCompraUpdateOneRequiredWithoutNotaRemisionNestedInput;
};
export type NotaRemisionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionCreateManyInput = {
    id?: number;
    ordenCompraId: number;
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionNullableScalarRelationFilter = {
    is?: Prisma.NotaRemisionWhereInput | null;
    isNot?: Prisma.NotaRemisionWhereInput | null;
};
export type NotaRemisionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type NotaRemisionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
};
export type NotaRemisionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type NotaRemisionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type NotaRemisionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
};
export type NotaRemisionCreateNestedOneWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionCreateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.NotaRemisionCreateOrConnectWithoutOrdenCompraInput;
    connect?: Prisma.NotaRemisionWhereUniqueInput;
};
export type NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionCreateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.NotaRemisionCreateOrConnectWithoutOrdenCompraInput;
    connect?: Prisma.NotaRemisionWhereUniqueInput;
};
export type NotaRemisionUpdateOneWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionCreateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.NotaRemisionCreateOrConnectWithoutOrdenCompraInput;
    upsert?: Prisma.NotaRemisionUpsertWithoutOrdenCompraInput;
    disconnect?: Prisma.NotaRemisionWhereInput | boolean;
    delete?: Prisma.NotaRemisionWhereInput | boolean;
    connect?: Prisma.NotaRemisionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotaRemisionUpdateToOneWithWhereWithoutOrdenCompraInput, Prisma.NotaRemisionUpdateWithoutOrdenCompraInput>, Prisma.NotaRemisionUncheckedUpdateWithoutOrdenCompraInput>;
};
export type NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionCreateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedCreateWithoutOrdenCompraInput>;
    connectOrCreate?: Prisma.NotaRemisionCreateOrConnectWithoutOrdenCompraInput;
    upsert?: Prisma.NotaRemisionUpsertWithoutOrdenCompraInput;
    disconnect?: Prisma.NotaRemisionWhereInput | boolean;
    delete?: Prisma.NotaRemisionWhereInput | boolean;
    connect?: Prisma.NotaRemisionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotaRemisionUpdateToOneWithWhereWithoutOrdenCompraInput, Prisma.NotaRemisionUpdateWithoutOrdenCompraInput>, Prisma.NotaRemisionUncheckedUpdateWithoutOrdenCompraInput>;
};
export type NotaRemisionCreateWithoutOrdenCompraInput = {
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionUncheckedCreateWithoutOrdenCompraInput = {
    id?: number;
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionCreateOrConnectWithoutOrdenCompraInput = {
    where: Prisma.NotaRemisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaRemisionCreateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedCreateWithoutOrdenCompraInput>;
};
export type NotaRemisionUpsertWithoutOrdenCompraInput = {
    update: Prisma.XOR<Prisma.NotaRemisionUpdateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedUpdateWithoutOrdenCompraInput>;
    create: Prisma.XOR<Prisma.NotaRemisionCreateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedCreateWithoutOrdenCompraInput>;
    where?: Prisma.NotaRemisionWhereInput;
};
export type NotaRemisionUpdateToOneWithWhereWithoutOrdenCompraInput = {
    where?: Prisma.NotaRemisionWhereInput;
    data: Prisma.XOR<Prisma.NotaRemisionUpdateWithoutOrdenCompraInput, Prisma.NotaRemisionUncheckedUpdateWithoutOrdenCompraInput>;
};
export type NotaRemisionUpdateWithoutOrdenCompraInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionUncheckedUpdateWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaRemision"]>;
export type NotaRemisionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaRemision"]>;
export type NotaRemisionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaRemision"]>;
export type NotaRemisionSelectScalar = {
    id?: boolean;
    ordenCompraId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
};
export type NotaRemisionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordenCompraId" | "fecha" | "observacion", ExtArgs["result"]["notaRemision"]>;
export type NotaRemisionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type NotaRemisionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type NotaRemisionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type $NotaRemisionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotaRemision";
    objects: {
        ordenCompra: Prisma.$OrdenCompraPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ordenCompraId: number;
        fecha: Date;
        observacion: string;
    }, ExtArgs["result"]["notaRemision"]>;
    composites: {};
};
export type NotaRemisionGetPayload<S extends boolean | null | undefined | NotaRemisionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload, S>;
export type NotaRemisionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotaRemisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotaRemisionCountAggregateInputType | true;
};
export interface NotaRemisionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotaRemision'];
        meta: {
            name: 'NotaRemision';
        };
    };
    findUnique<T extends NotaRemisionFindUniqueArgs>(args: Prisma.SelectSubset<T, NotaRemisionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotaRemisionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotaRemisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotaRemisionFindFirstArgs>(args?: Prisma.SelectSubset<T, NotaRemisionFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotaRemisionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotaRemisionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotaRemisionFindManyArgs>(args?: Prisma.SelectSubset<T, NotaRemisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotaRemisionCreateArgs>(args: Prisma.SelectSubset<T, NotaRemisionCreateArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotaRemisionCreateManyArgs>(args?: Prisma.SelectSubset<T, NotaRemisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotaRemisionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotaRemisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotaRemisionDeleteArgs>(args: Prisma.SelectSubset<T, NotaRemisionDeleteArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotaRemisionUpdateArgs>(args: Prisma.SelectSubset<T, NotaRemisionUpdateArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotaRemisionDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotaRemisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotaRemisionUpdateManyArgs>(args: Prisma.SelectSubset<T, NotaRemisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotaRemisionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotaRemisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotaRemisionUpsertArgs>(args: Prisma.SelectSubset<T, NotaRemisionUpsertArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotaRemisionCountArgs>(args?: Prisma.Subset<T, NotaRemisionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotaRemisionCountAggregateOutputType> : number>;
    aggregate<T extends NotaRemisionAggregateArgs>(args: Prisma.Subset<T, NotaRemisionAggregateArgs>): Prisma.PrismaPromise<GetNotaRemisionAggregateType<T>>;
    groupBy<T extends NotaRemisionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotaRemisionGroupByArgs['orderBy'];
    } : {
        orderBy?: NotaRemisionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotaRemisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaRemisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotaRemisionFieldRefs;
}
export interface Prisma__NotaRemisionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenCompra<T extends Prisma.OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompraDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotaRemisionFieldRefs {
    readonly id: Prisma.FieldRef<"NotaRemision", 'Int'>;
    readonly ordenCompraId: Prisma.FieldRef<"NotaRemision", 'Int'>;
    readonly fecha: Prisma.FieldRef<"NotaRemision", 'DateTime'>;
    readonly observacion: Prisma.FieldRef<"NotaRemision", 'String'>;
}
export type NotaRemisionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionWhereUniqueInput;
};
export type NotaRemisionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionWhereUniqueInput;
};
export type NotaRemisionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionWhereInput;
    orderBy?: Prisma.NotaRemisionOrderByWithRelationInput | Prisma.NotaRemisionOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaRemisionScalarFieldEnum | Prisma.NotaRemisionScalarFieldEnum[];
};
export type NotaRemisionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionWhereInput;
    orderBy?: Prisma.NotaRemisionOrderByWithRelationInput | Prisma.NotaRemisionOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaRemisionScalarFieldEnum | Prisma.NotaRemisionScalarFieldEnum[];
};
export type NotaRemisionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionWhereInput;
    orderBy?: Prisma.NotaRemisionOrderByWithRelationInput | Prisma.NotaRemisionOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaRemisionScalarFieldEnum | Prisma.NotaRemisionScalarFieldEnum[];
};
export type NotaRemisionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaRemisionCreateInput, Prisma.NotaRemisionUncheckedCreateInput>;
};
export type NotaRemisionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotaRemisionCreateManyInput | Prisma.NotaRemisionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotaRemisionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    data: Prisma.NotaRemisionCreateManyInput | Prisma.NotaRemisionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotaRemisionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotaRemisionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaRemisionUpdateInput, Prisma.NotaRemisionUncheckedUpdateInput>;
    where: Prisma.NotaRemisionWhereUniqueInput;
};
export type NotaRemisionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotaRemisionUpdateManyMutationInput, Prisma.NotaRemisionUncheckedUpdateManyInput>;
    where?: Prisma.NotaRemisionWhereInput;
    limit?: number;
};
export type NotaRemisionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaRemisionUpdateManyMutationInput, Prisma.NotaRemisionUncheckedUpdateManyInput>;
    where?: Prisma.NotaRemisionWhereInput;
    limit?: number;
    include?: Prisma.NotaRemisionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotaRemisionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaRemisionCreateInput, Prisma.NotaRemisionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotaRemisionUpdateInput, Prisma.NotaRemisionUncheckedUpdateInput>;
};
export type NotaRemisionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionWhereUniqueInput;
};
export type NotaRemisionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaRemisionWhereInput;
    limit?: number;
};
export type NotaRemisionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
};
export {};
