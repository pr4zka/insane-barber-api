import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type NotaRemisionVentaModel = runtime.Types.Result.DefaultSelection<Prisma.$NotaRemisionVentaPayload>;
export type AggregateNotaRemisionVenta = {
    _count: NotaRemisionVentaCountAggregateOutputType | null;
    _avg: NotaRemisionVentaAvgAggregateOutputType | null;
    _sum: NotaRemisionVentaSumAggregateOutputType | null;
    _min: NotaRemisionVentaMinAggregateOutputType | null;
    _max: NotaRemisionVentaMaxAggregateOutputType | null;
};
export type NotaRemisionVentaAvgAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
};
export type NotaRemisionVentaSumAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
};
export type NotaRemisionVentaMinAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    fecha: Date | null;
    observacion: string | null;
};
export type NotaRemisionVentaMaxAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    fecha: Date | null;
    observacion: string | null;
};
export type NotaRemisionVentaCountAggregateOutputType = {
    id: number;
    turnoId: number;
    fecha: number;
    observacion: number;
    _all: number;
};
export type NotaRemisionVentaAvgAggregateInputType = {
    id?: true;
    turnoId?: true;
};
export type NotaRemisionVentaSumAggregateInputType = {
    id?: true;
    turnoId?: true;
};
export type NotaRemisionVentaMinAggregateInputType = {
    id?: true;
    turnoId?: true;
    fecha?: true;
    observacion?: true;
};
export type NotaRemisionVentaMaxAggregateInputType = {
    id?: true;
    turnoId?: true;
    fecha?: true;
    observacion?: true;
};
export type NotaRemisionVentaCountAggregateInputType = {
    id?: true;
    turnoId?: true;
    fecha?: true;
    observacion?: true;
    _all?: true;
};
export type NotaRemisionVentaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaRemisionVentaWhereInput;
    orderBy?: Prisma.NotaRemisionVentaOrderByWithRelationInput | Prisma.NotaRemisionVentaOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotaRemisionVentaCountAggregateInputType;
    _avg?: NotaRemisionVentaAvgAggregateInputType;
    _sum?: NotaRemisionVentaSumAggregateInputType;
    _min?: NotaRemisionVentaMinAggregateInputType;
    _max?: NotaRemisionVentaMaxAggregateInputType;
};
export type GetNotaRemisionVentaAggregateType<T extends NotaRemisionVentaAggregateArgs> = {
    [P in keyof T & keyof AggregateNotaRemisionVenta]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotaRemisionVenta[P]> : Prisma.GetScalarType<T[P], AggregateNotaRemisionVenta[P]>;
};
export type NotaRemisionVentaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaRemisionVentaWhereInput;
    orderBy?: Prisma.NotaRemisionVentaOrderByWithAggregationInput | Prisma.NotaRemisionVentaOrderByWithAggregationInput[];
    by: Prisma.NotaRemisionVentaScalarFieldEnum[] | Prisma.NotaRemisionVentaScalarFieldEnum;
    having?: Prisma.NotaRemisionVentaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotaRemisionVentaCountAggregateInputType | true;
    _avg?: NotaRemisionVentaAvgAggregateInputType;
    _sum?: NotaRemisionVentaSumAggregateInputType;
    _min?: NotaRemisionVentaMinAggregateInputType;
    _max?: NotaRemisionVentaMaxAggregateInputType;
};
export type NotaRemisionVentaGroupByOutputType = {
    id: number;
    turnoId: number;
    fecha: Date;
    observacion: string;
    _count: NotaRemisionVentaCountAggregateOutputType | null;
    _avg: NotaRemisionVentaAvgAggregateOutputType | null;
    _sum: NotaRemisionVentaSumAggregateOutputType | null;
    _min: NotaRemisionVentaMinAggregateOutputType | null;
    _max: NotaRemisionVentaMaxAggregateOutputType | null;
};
type GetNotaRemisionVentaGroupByPayload<T extends NotaRemisionVentaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotaRemisionVentaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotaRemisionVentaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotaRemisionVentaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotaRemisionVentaGroupByOutputType[P]>;
}>>;
export type NotaRemisionVentaWhereInput = {
    AND?: Prisma.NotaRemisionVentaWhereInput | Prisma.NotaRemisionVentaWhereInput[];
    OR?: Prisma.NotaRemisionVentaWhereInput[];
    NOT?: Prisma.NotaRemisionVentaWhereInput | Prisma.NotaRemisionVentaWhereInput[];
    id?: Prisma.IntFilter<"NotaRemisionVenta"> | number;
    turnoId?: Prisma.IntFilter<"NotaRemisionVenta"> | number;
    fecha?: Prisma.DateTimeFilter<"NotaRemisionVenta"> | Date | string;
    observacion?: Prisma.StringFilter<"NotaRemisionVenta"> | string;
    turno?: Prisma.XOR<Prisma.TurnoScalarRelationFilter, Prisma.TurnoWhereInput>;
};
export type NotaRemisionVentaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    turno?: Prisma.TurnoOrderByWithRelationInput;
};
export type NotaRemisionVentaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    turnoId?: number;
    AND?: Prisma.NotaRemisionVentaWhereInput | Prisma.NotaRemisionVentaWhereInput[];
    OR?: Prisma.NotaRemisionVentaWhereInput[];
    NOT?: Prisma.NotaRemisionVentaWhereInput | Prisma.NotaRemisionVentaWhereInput[];
    fecha?: Prisma.DateTimeFilter<"NotaRemisionVenta"> | Date | string;
    observacion?: Prisma.StringFilter<"NotaRemisionVenta"> | string;
    turno?: Prisma.XOR<Prisma.TurnoScalarRelationFilter, Prisma.TurnoWhereInput>;
}, "id" | "turnoId">;
export type NotaRemisionVentaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    _count?: Prisma.NotaRemisionVentaCountOrderByAggregateInput;
    _avg?: Prisma.NotaRemisionVentaAvgOrderByAggregateInput;
    _max?: Prisma.NotaRemisionVentaMaxOrderByAggregateInput;
    _min?: Prisma.NotaRemisionVentaMinOrderByAggregateInput;
    _sum?: Prisma.NotaRemisionVentaSumOrderByAggregateInput;
};
export type NotaRemisionVentaScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotaRemisionVentaScalarWhereWithAggregatesInput | Prisma.NotaRemisionVentaScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotaRemisionVentaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotaRemisionVentaScalarWhereWithAggregatesInput | Prisma.NotaRemisionVentaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"NotaRemisionVenta"> | number;
    turnoId?: Prisma.IntWithAggregatesFilter<"NotaRemisionVenta"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"NotaRemisionVenta"> | Date | string;
    observacion?: Prisma.StringWithAggregatesFilter<"NotaRemisionVenta"> | string;
};
export type NotaRemisionVentaCreateInput = {
    fecha?: Date | string;
    observacion?: string;
    turno: Prisma.TurnoCreateNestedOneWithoutNotaRemisionVentaInput;
};
export type NotaRemisionVentaUncheckedCreateInput = {
    id?: number;
    turnoId: number;
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionVentaUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutNotaRemisionVentaNestedInput;
};
export type NotaRemisionVentaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionVentaCreateManyInput = {
    id?: number;
    turnoId: number;
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionVentaUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionVentaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionVentaNullableScalarRelationFilter = {
    is?: Prisma.NotaRemisionVentaWhereInput | null;
    isNot?: Prisma.NotaRemisionVentaWhereInput | null;
};
export type NotaRemisionVentaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type NotaRemisionVentaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
};
export type NotaRemisionVentaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type NotaRemisionVentaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type NotaRemisionVentaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
};
export type NotaRemisionVentaCreateNestedOneWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionVentaCreateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.NotaRemisionVentaCreateOrConnectWithoutTurnoInput;
    connect?: Prisma.NotaRemisionVentaWhereUniqueInput;
};
export type NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionVentaCreateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.NotaRemisionVentaCreateOrConnectWithoutTurnoInput;
    connect?: Prisma.NotaRemisionVentaWhereUniqueInput;
};
export type NotaRemisionVentaUpdateOneWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionVentaCreateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.NotaRemisionVentaCreateOrConnectWithoutTurnoInput;
    upsert?: Prisma.NotaRemisionVentaUpsertWithoutTurnoInput;
    disconnect?: Prisma.NotaRemisionVentaWhereInput | boolean;
    delete?: Prisma.NotaRemisionVentaWhereInput | boolean;
    connect?: Prisma.NotaRemisionVentaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotaRemisionVentaUpdateToOneWithWhereWithoutTurnoInput, Prisma.NotaRemisionVentaUpdateWithoutTurnoInput>, Prisma.NotaRemisionVentaUncheckedUpdateWithoutTurnoInput>;
};
export type NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.NotaRemisionVentaCreateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.NotaRemisionVentaCreateOrConnectWithoutTurnoInput;
    upsert?: Prisma.NotaRemisionVentaUpsertWithoutTurnoInput;
    disconnect?: Prisma.NotaRemisionVentaWhereInput | boolean;
    delete?: Prisma.NotaRemisionVentaWhereInput | boolean;
    connect?: Prisma.NotaRemisionVentaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.NotaRemisionVentaUpdateToOneWithWhereWithoutTurnoInput, Prisma.NotaRemisionVentaUpdateWithoutTurnoInput>, Prisma.NotaRemisionVentaUncheckedUpdateWithoutTurnoInput>;
};
export type NotaRemisionVentaCreateWithoutTurnoInput = {
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionVentaUncheckedCreateWithoutTurnoInput = {
    id?: number;
    fecha?: Date | string;
    observacion?: string;
};
export type NotaRemisionVentaCreateOrConnectWithoutTurnoInput = {
    where: Prisma.NotaRemisionVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaRemisionVentaCreateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedCreateWithoutTurnoInput>;
};
export type NotaRemisionVentaUpsertWithoutTurnoInput = {
    update: Prisma.XOR<Prisma.NotaRemisionVentaUpdateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedUpdateWithoutTurnoInput>;
    create: Prisma.XOR<Prisma.NotaRemisionVentaCreateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedCreateWithoutTurnoInput>;
    where?: Prisma.NotaRemisionVentaWhereInput;
};
export type NotaRemisionVentaUpdateToOneWithWhereWithoutTurnoInput = {
    where?: Prisma.NotaRemisionVentaWhereInput;
    data: Prisma.XOR<Prisma.NotaRemisionVentaUpdateWithoutTurnoInput, Prisma.NotaRemisionVentaUncheckedUpdateWithoutTurnoInput>;
};
export type NotaRemisionVentaUpdateWithoutTurnoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionVentaUncheckedUpdateWithoutTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type NotaRemisionVentaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaRemisionVenta"]>;
export type NotaRemisionVentaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaRemisionVenta"]>;
export type NotaRemisionVentaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaRemisionVenta"]>;
export type NotaRemisionVentaSelectScalar = {
    id?: boolean;
    turnoId?: boolean;
    fecha?: boolean;
    observacion?: boolean;
};
export type NotaRemisionVentaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "turnoId" | "fecha" | "observacion", ExtArgs["result"]["notaRemisionVenta"]>;
export type NotaRemisionVentaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
};
export type NotaRemisionVentaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
};
export type NotaRemisionVentaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
};
export type $NotaRemisionVentaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotaRemisionVenta";
    objects: {
        turno: Prisma.$TurnoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        turnoId: number;
        fecha: Date;
        observacion: string;
    }, ExtArgs["result"]["notaRemisionVenta"]>;
    composites: {};
};
export type NotaRemisionVentaGetPayload<S extends boolean | null | undefined | NotaRemisionVentaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload, S>;
export type NotaRemisionVentaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotaRemisionVentaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotaRemisionVentaCountAggregateInputType | true;
};
export interface NotaRemisionVentaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotaRemisionVenta'];
        meta: {
            name: 'NotaRemisionVenta';
        };
    };
    findUnique<T extends NotaRemisionVentaFindUniqueArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotaRemisionVentaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotaRemisionVentaFindFirstArgs>(args?: Prisma.SelectSubset<T, NotaRemisionVentaFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotaRemisionVentaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotaRemisionVentaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotaRemisionVentaFindManyArgs>(args?: Prisma.SelectSubset<T, NotaRemisionVentaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotaRemisionVentaCreateArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaCreateArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotaRemisionVentaCreateManyArgs>(args?: Prisma.SelectSubset<T, NotaRemisionVentaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotaRemisionVentaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotaRemisionVentaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotaRemisionVentaDeleteArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaDeleteArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotaRemisionVentaUpdateArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaUpdateArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotaRemisionVentaDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotaRemisionVentaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotaRemisionVentaUpdateManyArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotaRemisionVentaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotaRemisionVentaUpsertArgs>(args: Prisma.SelectSubset<T, NotaRemisionVentaUpsertArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotaRemisionVentaCountArgs>(args?: Prisma.Subset<T, NotaRemisionVentaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotaRemisionVentaCountAggregateOutputType> : number>;
    aggregate<T extends NotaRemisionVentaAggregateArgs>(args: Prisma.Subset<T, NotaRemisionVentaAggregateArgs>): Prisma.PrismaPromise<GetNotaRemisionVentaAggregateType<T>>;
    groupBy<T extends NotaRemisionVentaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotaRemisionVentaGroupByArgs['orderBy'];
    } : {
        orderBy?: NotaRemisionVentaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotaRemisionVentaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaRemisionVentaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotaRemisionVentaFieldRefs;
}
export interface Prisma__NotaRemisionVentaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    turno<T extends Prisma.TurnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TurnoDefaultArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotaRemisionVentaFieldRefs {
    readonly id: Prisma.FieldRef<"NotaRemisionVenta", 'Int'>;
    readonly turnoId: Prisma.FieldRef<"NotaRemisionVenta", 'Int'>;
    readonly fecha: Prisma.FieldRef<"NotaRemisionVenta", 'DateTime'>;
    readonly observacion: Prisma.FieldRef<"NotaRemisionVenta", 'String'>;
}
export type NotaRemisionVentaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionVentaWhereUniqueInput;
};
export type NotaRemisionVentaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionVentaWhereUniqueInput;
};
export type NotaRemisionVentaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionVentaWhereInput;
    orderBy?: Prisma.NotaRemisionVentaOrderByWithRelationInput | Prisma.NotaRemisionVentaOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaRemisionVentaScalarFieldEnum | Prisma.NotaRemisionVentaScalarFieldEnum[];
};
export type NotaRemisionVentaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionVentaWhereInput;
    orderBy?: Prisma.NotaRemisionVentaOrderByWithRelationInput | Prisma.NotaRemisionVentaOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaRemisionVentaScalarFieldEnum | Prisma.NotaRemisionVentaScalarFieldEnum[];
};
export type NotaRemisionVentaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionVentaWhereInput;
    orderBy?: Prisma.NotaRemisionVentaOrderByWithRelationInput | Prisma.NotaRemisionVentaOrderByWithRelationInput[];
    cursor?: Prisma.NotaRemisionVentaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaRemisionVentaScalarFieldEnum | Prisma.NotaRemisionVentaScalarFieldEnum[];
};
export type NotaRemisionVentaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaRemisionVentaCreateInput, Prisma.NotaRemisionVentaUncheckedCreateInput>;
};
export type NotaRemisionVentaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotaRemisionVentaCreateManyInput | Prisma.NotaRemisionVentaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotaRemisionVentaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    data: Prisma.NotaRemisionVentaCreateManyInput | Prisma.NotaRemisionVentaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotaRemisionVentaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotaRemisionVentaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaRemisionVentaUpdateInput, Prisma.NotaRemisionVentaUncheckedUpdateInput>;
    where: Prisma.NotaRemisionVentaWhereUniqueInput;
};
export type NotaRemisionVentaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotaRemisionVentaUpdateManyMutationInput, Prisma.NotaRemisionVentaUncheckedUpdateManyInput>;
    where?: Prisma.NotaRemisionVentaWhereInput;
    limit?: number;
};
export type NotaRemisionVentaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaRemisionVentaUpdateManyMutationInput, Prisma.NotaRemisionVentaUncheckedUpdateManyInput>;
    where?: Prisma.NotaRemisionVentaWhereInput;
    limit?: number;
    include?: Prisma.NotaRemisionVentaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotaRemisionVentaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionVentaWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaRemisionVentaCreateInput, Prisma.NotaRemisionVentaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotaRemisionVentaUpdateInput, Prisma.NotaRemisionVentaUncheckedUpdateInput>;
};
export type NotaRemisionVentaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where: Prisma.NotaRemisionVentaWhereUniqueInput;
};
export type NotaRemisionVentaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaRemisionVentaWhereInput;
    limit?: number;
};
export type NotaRemisionVentaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
};
export {};
