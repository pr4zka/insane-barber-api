import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DescuentoModel = runtime.Types.Result.DefaultSelection<Prisma.$DescuentoPayload>;
export type AggregateDescuento = {
    _count: DescuentoCountAggregateOutputType | null;
    _avg: DescuentoAvgAggregateOutputType | null;
    _sum: DescuentoSumAggregateOutputType | null;
    _min: DescuentoMinAggregateOutputType | null;
    _max: DescuentoMaxAggregateOutputType | null;
};
export type DescuentoAvgAggregateOutputType = {
    id: number | null;
    porcentaje: runtime.Decimal | null;
};
export type DescuentoSumAggregateOutputType = {
    id: number | null;
    porcentaje: runtime.Decimal | null;
};
export type DescuentoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    porcentaje: runtime.Decimal | null;
    estado: boolean | null;
};
export type DescuentoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    porcentaje: runtime.Decimal | null;
    estado: boolean | null;
};
export type DescuentoCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    porcentaje: number;
    estado: number;
    _all: number;
};
export type DescuentoAvgAggregateInputType = {
    id?: true;
    porcentaje?: true;
};
export type DescuentoSumAggregateInputType = {
    id?: true;
    porcentaje?: true;
};
export type DescuentoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentaje?: true;
    estado?: true;
};
export type DescuentoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentaje?: true;
    estado?: true;
};
export type DescuentoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentaje?: true;
    estado?: true;
    _all?: true;
};
export type DescuentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DescuentoWhereInput;
    orderBy?: Prisma.DescuentoOrderByWithRelationInput | Prisma.DescuentoOrderByWithRelationInput[];
    cursor?: Prisma.DescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DescuentoCountAggregateInputType;
    _avg?: DescuentoAvgAggregateInputType;
    _sum?: DescuentoSumAggregateInputType;
    _min?: DescuentoMinAggregateInputType;
    _max?: DescuentoMaxAggregateInputType;
};
export type GetDescuentoAggregateType<T extends DescuentoAggregateArgs> = {
    [P in keyof T & keyof AggregateDescuento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDescuento[P]> : Prisma.GetScalarType<T[P], AggregateDescuento[P]>;
};
export type DescuentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DescuentoWhereInput;
    orderBy?: Prisma.DescuentoOrderByWithAggregationInput | Prisma.DescuentoOrderByWithAggregationInput[];
    by: Prisma.DescuentoScalarFieldEnum[] | Prisma.DescuentoScalarFieldEnum;
    having?: Prisma.DescuentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DescuentoCountAggregateInputType | true;
    _avg?: DescuentoAvgAggregateInputType;
    _sum?: DescuentoSumAggregateInputType;
    _min?: DescuentoMinAggregateInputType;
    _max?: DescuentoMaxAggregateInputType;
};
export type DescuentoGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal;
    estado: boolean;
    _count: DescuentoCountAggregateOutputType | null;
    _avg: DescuentoAvgAggregateOutputType | null;
    _sum: DescuentoSumAggregateOutputType | null;
    _min: DescuentoMinAggregateOutputType | null;
    _max: DescuentoMaxAggregateOutputType | null;
};
type GetDescuentoGroupByPayload<T extends DescuentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DescuentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DescuentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DescuentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DescuentoGroupByOutputType[P]>;
}>>;
export type DescuentoWhereInput = {
    AND?: Prisma.DescuentoWhereInput | Prisma.DescuentoWhereInput[];
    OR?: Prisma.DescuentoWhereInput[];
    NOT?: Prisma.DescuentoWhereInput | Prisma.DescuentoWhereInput[];
    id?: Prisma.IntFilter<"Descuento"> | number;
    nombre?: Prisma.StringFilter<"Descuento"> | string;
    descripcion?: Prisma.StringFilter<"Descuento"> | string;
    porcentaje?: Prisma.DecimalFilter<"Descuento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"Descuento"> | boolean;
    pagos?: Prisma.PagoListRelationFilter;
};
export type DescuentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pagos?: Prisma.PagoOrderByRelationAggregateInput;
};
export type DescuentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DescuentoWhereInput | Prisma.DescuentoWhereInput[];
    OR?: Prisma.DescuentoWhereInput[];
    NOT?: Prisma.DescuentoWhereInput | Prisma.DescuentoWhereInput[];
    nombre?: Prisma.StringFilter<"Descuento"> | string;
    descripcion?: Prisma.StringFilter<"Descuento"> | string;
    porcentaje?: Prisma.DecimalFilter<"Descuento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"Descuento"> | boolean;
    pagos?: Prisma.PagoListRelationFilter;
}, "id">;
export type DescuentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.DescuentoCountOrderByAggregateInput;
    _avg?: Prisma.DescuentoAvgOrderByAggregateInput;
    _max?: Prisma.DescuentoMaxOrderByAggregateInput;
    _min?: Prisma.DescuentoMinOrderByAggregateInput;
    _sum?: Prisma.DescuentoSumOrderByAggregateInput;
};
export type DescuentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.DescuentoScalarWhereWithAggregatesInput | Prisma.DescuentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.DescuentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DescuentoScalarWhereWithAggregatesInput | Prisma.DescuentoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Descuento"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Descuento"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"Descuento"> | string;
    porcentaje?: Prisma.DecimalWithAggregatesFilter<"Descuento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolWithAggregatesFilter<"Descuento"> | boolean;
};
export type DescuentoCreateInput = {
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    pagos?: Prisma.PagoCreateNestedManyWithoutDescuentoInput;
};
export type DescuentoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    pagos?: Prisma.PagoUncheckedCreateNestedManyWithoutDescuentoInput;
};
export type DescuentoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pagos?: Prisma.PagoUpdateManyWithoutDescuentoNestedInput;
};
export type DescuentoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pagos?: Prisma.PagoUncheckedUpdateManyWithoutDescuentoNestedInput;
};
export type DescuentoCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
};
export type DescuentoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type DescuentoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type DescuentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type DescuentoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type DescuentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type DescuentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type DescuentoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type DescuentoNullableScalarRelationFilter = {
    is?: Prisma.DescuentoWhereInput | null;
    isNot?: Prisma.DescuentoWhereInput | null;
};
export type DescuentoCreateNestedOneWithoutPagosInput = {
    create?: Prisma.XOR<Prisma.DescuentoCreateWithoutPagosInput, Prisma.DescuentoUncheckedCreateWithoutPagosInput>;
    connectOrCreate?: Prisma.DescuentoCreateOrConnectWithoutPagosInput;
    connect?: Prisma.DescuentoWhereUniqueInput;
};
export type DescuentoUpdateOneWithoutPagosNestedInput = {
    create?: Prisma.XOR<Prisma.DescuentoCreateWithoutPagosInput, Prisma.DescuentoUncheckedCreateWithoutPagosInput>;
    connectOrCreate?: Prisma.DescuentoCreateOrConnectWithoutPagosInput;
    upsert?: Prisma.DescuentoUpsertWithoutPagosInput;
    disconnect?: Prisma.DescuentoWhereInput | boolean;
    delete?: Prisma.DescuentoWhereInput | boolean;
    connect?: Prisma.DescuentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DescuentoUpdateToOneWithWhereWithoutPagosInput, Prisma.DescuentoUpdateWithoutPagosInput>, Prisma.DescuentoUncheckedUpdateWithoutPagosInput>;
};
export type DescuentoCreateWithoutPagosInput = {
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
};
export type DescuentoUncheckedCreateWithoutPagosInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
};
export type DescuentoCreateOrConnectWithoutPagosInput = {
    where: Prisma.DescuentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DescuentoCreateWithoutPagosInput, Prisma.DescuentoUncheckedCreateWithoutPagosInput>;
};
export type DescuentoUpsertWithoutPagosInput = {
    update: Prisma.XOR<Prisma.DescuentoUpdateWithoutPagosInput, Prisma.DescuentoUncheckedUpdateWithoutPagosInput>;
    create: Prisma.XOR<Prisma.DescuentoCreateWithoutPagosInput, Prisma.DescuentoUncheckedCreateWithoutPagosInput>;
    where?: Prisma.DescuentoWhereInput;
};
export type DescuentoUpdateToOneWithWhereWithoutPagosInput = {
    where?: Prisma.DescuentoWhereInput;
    data: Prisma.XOR<Prisma.DescuentoUpdateWithoutPagosInput, Prisma.DescuentoUncheckedUpdateWithoutPagosInput>;
};
export type DescuentoUpdateWithoutPagosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type DescuentoUncheckedUpdateWithoutPagosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type DescuentoCountOutputType = {
    pagos: number;
};
export type DescuentoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pagos?: boolean | DescuentoCountOutputTypeCountPagosArgs;
};
export type DescuentoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoCountOutputTypeSelect<ExtArgs> | null;
};
export type DescuentoCountOutputTypeCountPagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
};
export type DescuentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    estado?: boolean;
    pagos?: boolean | Prisma.Descuento$pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.DescuentoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["descuento"]>;
export type DescuentoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["descuento"]>;
export type DescuentoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["descuento"]>;
export type DescuentoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    estado?: boolean;
};
export type DescuentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "porcentaje" | "estado", ExtArgs["result"]["descuento"]>;
export type DescuentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pagos?: boolean | Prisma.Descuento$pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.DescuentoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DescuentoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DescuentoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DescuentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Descuento";
    objects: {
        pagos: Prisma.$PagoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string;
        porcentaje: runtime.Decimal;
        estado: boolean;
    }, ExtArgs["result"]["descuento"]>;
    composites: {};
};
export type DescuentoGetPayload<S extends boolean | null | undefined | DescuentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DescuentoPayload, S>;
export type DescuentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DescuentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DescuentoCountAggregateInputType | true;
};
export interface DescuentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Descuento'];
        meta: {
            name: 'Descuento';
        };
    };
    findUnique<T extends DescuentoFindUniqueArgs>(args: Prisma.SelectSubset<T, DescuentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DescuentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DescuentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DescuentoFindFirstArgs>(args?: Prisma.SelectSubset<T, DescuentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DescuentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DescuentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DescuentoFindManyArgs>(args?: Prisma.SelectSubset<T, DescuentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DescuentoCreateArgs>(args: Prisma.SelectSubset<T, DescuentoCreateArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DescuentoCreateManyArgs>(args?: Prisma.SelectSubset<T, DescuentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DescuentoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DescuentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DescuentoDeleteArgs>(args: Prisma.SelectSubset<T, DescuentoDeleteArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DescuentoUpdateArgs>(args: Prisma.SelectSubset<T, DescuentoUpdateArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DescuentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, DescuentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DescuentoUpdateManyArgs>(args: Prisma.SelectSubset<T, DescuentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DescuentoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DescuentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DescuentoUpsertArgs>(args: Prisma.SelectSubset<T, DescuentoUpsertArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DescuentoCountArgs>(args?: Prisma.Subset<T, DescuentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DescuentoCountAggregateOutputType> : number>;
    aggregate<T extends DescuentoAggregateArgs>(args: Prisma.Subset<T, DescuentoAggregateArgs>): Prisma.PrismaPromise<GetDescuentoAggregateType<T>>;
    groupBy<T extends DescuentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DescuentoGroupByArgs['orderBy'];
    } : {
        orderBy?: DescuentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DescuentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDescuentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DescuentoFieldRefs;
}
export interface Prisma__DescuentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pagos<T extends Prisma.Descuento$pagosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Descuento$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DescuentoFieldRefs {
    readonly id: Prisma.FieldRef<"Descuento", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Descuento", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Descuento", 'String'>;
    readonly porcentaje: Prisma.FieldRef<"Descuento", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"Descuento", 'Boolean'>;
}
export type DescuentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where: Prisma.DescuentoWhereUniqueInput;
};
export type DescuentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where: Prisma.DescuentoWhereUniqueInput;
};
export type DescuentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where?: Prisma.DescuentoWhereInput;
    orderBy?: Prisma.DescuentoOrderByWithRelationInput | Prisma.DescuentoOrderByWithRelationInput[];
    cursor?: Prisma.DescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DescuentoScalarFieldEnum | Prisma.DescuentoScalarFieldEnum[];
};
export type DescuentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where?: Prisma.DescuentoWhereInput;
    orderBy?: Prisma.DescuentoOrderByWithRelationInput | Prisma.DescuentoOrderByWithRelationInput[];
    cursor?: Prisma.DescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DescuentoScalarFieldEnum | Prisma.DescuentoScalarFieldEnum[];
};
export type DescuentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where?: Prisma.DescuentoWhereInput;
    orderBy?: Prisma.DescuentoOrderByWithRelationInput | Prisma.DescuentoOrderByWithRelationInput[];
    cursor?: Prisma.DescuentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DescuentoScalarFieldEnum | Prisma.DescuentoScalarFieldEnum[];
};
export type DescuentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DescuentoCreateInput, Prisma.DescuentoUncheckedCreateInput>;
};
export type DescuentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DescuentoCreateManyInput | Prisma.DescuentoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DescuentoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    data: Prisma.DescuentoCreateManyInput | Prisma.DescuentoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DescuentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DescuentoUpdateInput, Prisma.DescuentoUncheckedUpdateInput>;
    where: Prisma.DescuentoWhereUniqueInput;
};
export type DescuentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DescuentoUpdateManyMutationInput, Prisma.DescuentoUncheckedUpdateManyInput>;
    where?: Prisma.DescuentoWhereInput;
    limit?: number;
};
export type DescuentoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DescuentoUpdateManyMutationInput, Prisma.DescuentoUncheckedUpdateManyInput>;
    where?: Prisma.DescuentoWhereInput;
    limit?: number;
};
export type DescuentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where: Prisma.DescuentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DescuentoCreateInput, Prisma.DescuentoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DescuentoUpdateInput, Prisma.DescuentoUncheckedUpdateInput>;
};
export type DescuentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where: Prisma.DescuentoWhereUniqueInput;
};
export type DescuentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DescuentoWhereInput;
    limit?: number;
};
export type Descuento$pagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type DescuentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
};
export {};
