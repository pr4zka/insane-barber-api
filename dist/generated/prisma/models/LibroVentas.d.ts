import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type LibroVentasModel = runtime.Types.Result.DefaultSelection<Prisma.$LibroVentasPayload>;
export type AggregateLibroVentas = {
    _count: LibroVentasCountAggregateOutputType | null;
    _avg: LibroVentasAvgAggregateOutputType | null;
    _sum: LibroVentasSumAggregateOutputType | null;
    _min: LibroVentasMinAggregateOutputType | null;
    _max: LibroVentasMaxAggregateOutputType | null;
};
export type LibroVentasAvgAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    monto: runtime.Decimal | null;
};
export type LibroVentasSumAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    monto: runtime.Decimal | null;
};
export type LibroVentasMinAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    fecha: Date | null;
    concepto: string | null;
    monto: runtime.Decimal | null;
    metodoPago: string | null;
};
export type LibroVentasMaxAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    fecha: Date | null;
    concepto: string | null;
    monto: runtime.Decimal | null;
    metodoPago: string | null;
};
export type LibroVentasCountAggregateOutputType = {
    id: number;
    pagoId: number;
    fecha: number;
    concepto: number;
    monto: number;
    metodoPago: number;
    _all: number;
};
export type LibroVentasAvgAggregateInputType = {
    id?: true;
    pagoId?: true;
    monto?: true;
};
export type LibroVentasSumAggregateInputType = {
    id?: true;
    pagoId?: true;
    monto?: true;
};
export type LibroVentasMinAggregateInputType = {
    id?: true;
    pagoId?: true;
    fecha?: true;
    concepto?: true;
    monto?: true;
    metodoPago?: true;
};
export type LibroVentasMaxAggregateInputType = {
    id?: true;
    pagoId?: true;
    fecha?: true;
    concepto?: true;
    monto?: true;
    metodoPago?: true;
};
export type LibroVentasCountAggregateInputType = {
    id?: true;
    pagoId?: true;
    fecha?: true;
    concepto?: true;
    monto?: true;
    metodoPago?: true;
    _all?: true;
};
export type LibroVentasAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroVentasWhereInput;
    orderBy?: Prisma.LibroVentasOrderByWithRelationInput | Prisma.LibroVentasOrderByWithRelationInput[];
    cursor?: Prisma.LibroVentasWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LibroVentasCountAggregateInputType;
    _avg?: LibroVentasAvgAggregateInputType;
    _sum?: LibroVentasSumAggregateInputType;
    _min?: LibroVentasMinAggregateInputType;
    _max?: LibroVentasMaxAggregateInputType;
};
export type GetLibroVentasAggregateType<T extends LibroVentasAggregateArgs> = {
    [P in keyof T & keyof AggregateLibroVentas]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLibroVentas[P]> : Prisma.GetScalarType<T[P], AggregateLibroVentas[P]>;
};
export type LibroVentasGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroVentasWhereInput;
    orderBy?: Prisma.LibroVentasOrderByWithAggregationInput | Prisma.LibroVentasOrderByWithAggregationInput[];
    by: Prisma.LibroVentasScalarFieldEnum[] | Prisma.LibroVentasScalarFieldEnum;
    having?: Prisma.LibroVentasScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LibroVentasCountAggregateInputType | true;
    _avg?: LibroVentasAvgAggregateInputType;
    _sum?: LibroVentasSumAggregateInputType;
    _min?: LibroVentasMinAggregateInputType;
    _max?: LibroVentasMaxAggregateInputType;
};
export type LibroVentasGroupByOutputType = {
    id: number;
    pagoId: number;
    fecha: Date;
    concepto: string;
    monto: runtime.Decimal;
    metodoPago: string;
    _count: LibroVentasCountAggregateOutputType | null;
    _avg: LibroVentasAvgAggregateOutputType | null;
    _sum: LibroVentasSumAggregateOutputType | null;
    _min: LibroVentasMinAggregateOutputType | null;
    _max: LibroVentasMaxAggregateOutputType | null;
};
type GetLibroVentasGroupByPayload<T extends LibroVentasGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LibroVentasGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LibroVentasGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LibroVentasGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LibroVentasGroupByOutputType[P]>;
}>>;
export type LibroVentasWhereInput = {
    AND?: Prisma.LibroVentasWhereInput | Prisma.LibroVentasWhereInput[];
    OR?: Prisma.LibroVentasWhereInput[];
    NOT?: Prisma.LibroVentasWhereInput | Prisma.LibroVentasWhereInput[];
    id?: Prisma.IntFilter<"LibroVentas"> | number;
    pagoId?: Prisma.IntFilter<"LibroVentas"> | number;
    fecha?: Prisma.DateTimeFilter<"LibroVentas"> | Date | string;
    concepto?: Prisma.StringFilter<"LibroVentas"> | string;
    monto?: Prisma.DecimalFilter<"LibroVentas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFilter<"LibroVentas"> | string;
    pago?: Prisma.XOR<Prisma.PagoScalarRelationFilter, Prisma.PagoWhereInput>;
};
export type LibroVentasOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    pago?: Prisma.PagoOrderByWithRelationInput;
};
export type LibroVentasWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    pagoId?: number;
    AND?: Prisma.LibroVentasWhereInput | Prisma.LibroVentasWhereInput[];
    OR?: Prisma.LibroVentasWhereInput[];
    NOT?: Prisma.LibroVentasWhereInput | Prisma.LibroVentasWhereInput[];
    fecha?: Prisma.DateTimeFilter<"LibroVentas"> | Date | string;
    concepto?: Prisma.StringFilter<"LibroVentas"> | string;
    monto?: Prisma.DecimalFilter<"LibroVentas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFilter<"LibroVentas"> | string;
    pago?: Prisma.XOR<Prisma.PagoScalarRelationFilter, Prisma.PagoWhereInput>;
}, "id" | "pagoId">;
export type LibroVentasOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    _count?: Prisma.LibroVentasCountOrderByAggregateInput;
    _avg?: Prisma.LibroVentasAvgOrderByAggregateInput;
    _max?: Prisma.LibroVentasMaxOrderByAggregateInput;
    _min?: Prisma.LibroVentasMinOrderByAggregateInput;
    _sum?: Prisma.LibroVentasSumOrderByAggregateInput;
};
export type LibroVentasScalarWhereWithAggregatesInput = {
    AND?: Prisma.LibroVentasScalarWhereWithAggregatesInput | Prisma.LibroVentasScalarWhereWithAggregatesInput[];
    OR?: Prisma.LibroVentasScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LibroVentasScalarWhereWithAggregatesInput | Prisma.LibroVentasScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"LibroVentas"> | number;
    pagoId?: Prisma.IntWithAggregatesFilter<"LibroVentas"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"LibroVentas"> | Date | string;
    concepto?: Prisma.StringWithAggregatesFilter<"LibroVentas"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"LibroVentas"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringWithAggregatesFilter<"LibroVentas"> | string;
};
export type LibroVentasCreateInput = {
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: string;
    pago: Prisma.PagoCreateNestedOneWithoutLibroVentaInput;
};
export type LibroVentasUncheckedCreateInput = {
    id?: number;
    pagoId: number;
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: string;
};
export type LibroVentasUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUpdateOneRequiredWithoutLibroVentaNestedInput;
};
export type LibroVentasUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pagoId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroVentasCreateManyInput = {
    id?: number;
    pagoId: number;
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: string;
};
export type LibroVentasUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroVentasUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pagoId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroVentasNullableScalarRelationFilter = {
    is?: Prisma.LibroVentasWhereInput | null;
    isNot?: Prisma.LibroVentasWhereInput | null;
};
export type LibroVentasCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
};
export type LibroVentasAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type LibroVentasMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
};
export type LibroVentasMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
};
export type LibroVentasSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type LibroVentasCreateNestedOneWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.LibroVentasCreateWithoutPagoInput, Prisma.LibroVentasUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.LibroVentasCreateOrConnectWithoutPagoInput;
    connect?: Prisma.LibroVentasWhereUniqueInput;
};
export type LibroVentasUncheckedCreateNestedOneWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.LibroVentasCreateWithoutPagoInput, Prisma.LibroVentasUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.LibroVentasCreateOrConnectWithoutPagoInput;
    connect?: Prisma.LibroVentasWhereUniqueInput;
};
export type LibroVentasUpdateOneWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.LibroVentasCreateWithoutPagoInput, Prisma.LibroVentasUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.LibroVentasCreateOrConnectWithoutPagoInput;
    upsert?: Prisma.LibroVentasUpsertWithoutPagoInput;
    disconnect?: Prisma.LibroVentasWhereInput | boolean;
    delete?: Prisma.LibroVentasWhereInput | boolean;
    connect?: Prisma.LibroVentasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LibroVentasUpdateToOneWithWhereWithoutPagoInput, Prisma.LibroVentasUpdateWithoutPagoInput>, Prisma.LibroVentasUncheckedUpdateWithoutPagoInput>;
};
export type LibroVentasUncheckedUpdateOneWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.LibroVentasCreateWithoutPagoInput, Prisma.LibroVentasUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.LibroVentasCreateOrConnectWithoutPagoInput;
    upsert?: Prisma.LibroVentasUpsertWithoutPagoInput;
    disconnect?: Prisma.LibroVentasWhereInput | boolean;
    delete?: Prisma.LibroVentasWhereInput | boolean;
    connect?: Prisma.LibroVentasWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.LibroVentasUpdateToOneWithWhereWithoutPagoInput, Prisma.LibroVentasUpdateWithoutPagoInput>, Prisma.LibroVentasUncheckedUpdateWithoutPagoInput>;
};
export type LibroVentasCreateWithoutPagoInput = {
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: string;
};
export type LibroVentasUncheckedCreateWithoutPagoInput = {
    id?: number;
    fecha?: Date | string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago: string;
};
export type LibroVentasCreateOrConnectWithoutPagoInput = {
    where: Prisma.LibroVentasWhereUniqueInput;
    create: Prisma.XOR<Prisma.LibroVentasCreateWithoutPagoInput, Prisma.LibroVentasUncheckedCreateWithoutPagoInput>;
};
export type LibroVentasUpsertWithoutPagoInput = {
    update: Prisma.XOR<Prisma.LibroVentasUpdateWithoutPagoInput, Prisma.LibroVentasUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.LibroVentasCreateWithoutPagoInput, Prisma.LibroVentasUncheckedCreateWithoutPagoInput>;
    where?: Prisma.LibroVentasWhereInput;
};
export type LibroVentasUpdateToOneWithWhereWithoutPagoInput = {
    where?: Prisma.LibroVentasWhereInput;
    data: Prisma.XOR<Prisma.LibroVentasUpdateWithoutPagoInput, Prisma.LibroVentasUncheckedUpdateWithoutPagoInput>;
};
export type LibroVentasUpdateWithoutPagoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroVentasUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type LibroVentasSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pagoId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["libroVentas"]>;
export type LibroVentasSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pagoId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["libroVentas"]>;
export type LibroVentasSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pagoId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["libroVentas"]>;
export type LibroVentasSelectScalar = {
    id?: boolean;
    pagoId?: boolean;
    fecha?: boolean;
    concepto?: boolean;
    monto?: boolean;
    metodoPago?: boolean;
};
export type LibroVentasOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pagoId" | "fecha" | "concepto" | "monto" | "metodoPago", ExtArgs["result"]["libroVentas"]>;
export type LibroVentasInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
};
export type LibroVentasIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
};
export type LibroVentasIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
};
export type $LibroVentasPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LibroVentas";
    objects: {
        pago: Prisma.$PagoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pagoId: number;
        fecha: Date;
        concepto: string;
        monto: runtime.Decimal;
        metodoPago: string;
    }, ExtArgs["result"]["libroVentas"]>;
    composites: {};
};
export type LibroVentasGetPayload<S extends boolean | null | undefined | LibroVentasDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload, S>;
export type LibroVentasCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LibroVentasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LibroVentasCountAggregateInputType | true;
};
export interface LibroVentasDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LibroVentas'];
        meta: {
            name: 'LibroVentas';
        };
    };
    findUnique<T extends LibroVentasFindUniqueArgs>(args: Prisma.SelectSubset<T, LibroVentasFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LibroVentasFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LibroVentasFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LibroVentasFindFirstArgs>(args?: Prisma.SelectSubset<T, LibroVentasFindFirstArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LibroVentasFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LibroVentasFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LibroVentasFindManyArgs>(args?: Prisma.SelectSubset<T, LibroVentasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LibroVentasCreateArgs>(args: Prisma.SelectSubset<T, LibroVentasCreateArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LibroVentasCreateManyArgs>(args?: Prisma.SelectSubset<T, LibroVentasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LibroVentasCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LibroVentasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LibroVentasDeleteArgs>(args: Prisma.SelectSubset<T, LibroVentasDeleteArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LibroVentasUpdateArgs>(args: Prisma.SelectSubset<T, LibroVentasUpdateArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LibroVentasDeleteManyArgs>(args?: Prisma.SelectSubset<T, LibroVentasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LibroVentasUpdateManyArgs>(args: Prisma.SelectSubset<T, LibroVentasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LibroVentasUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LibroVentasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LibroVentasUpsertArgs>(args: Prisma.SelectSubset<T, LibroVentasUpsertArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LibroVentasCountArgs>(args?: Prisma.Subset<T, LibroVentasCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LibroVentasCountAggregateOutputType> : number>;
    aggregate<T extends LibroVentasAggregateArgs>(args: Prisma.Subset<T, LibroVentasAggregateArgs>): Prisma.PrismaPromise<GetLibroVentasAggregateType<T>>;
    groupBy<T extends LibroVentasGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LibroVentasGroupByArgs['orderBy'];
    } : {
        orderBy?: LibroVentasGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LibroVentasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibroVentasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LibroVentasFieldRefs;
}
export interface Prisma__LibroVentasClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pago<T extends Prisma.PagoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PagoDefaultArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LibroVentasFieldRefs {
    readonly id: Prisma.FieldRef<"LibroVentas", 'Int'>;
    readonly pagoId: Prisma.FieldRef<"LibroVentas", 'Int'>;
    readonly fecha: Prisma.FieldRef<"LibroVentas", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"LibroVentas", 'String'>;
    readonly monto: Prisma.FieldRef<"LibroVentas", 'Decimal'>;
    readonly metodoPago: Prisma.FieldRef<"LibroVentas", 'String'>;
}
export type LibroVentasFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where: Prisma.LibroVentasWhereUniqueInput;
};
export type LibroVentasFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where: Prisma.LibroVentasWhereUniqueInput;
};
export type LibroVentasFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where?: Prisma.LibroVentasWhereInput;
    orderBy?: Prisma.LibroVentasOrderByWithRelationInput | Prisma.LibroVentasOrderByWithRelationInput[];
    cursor?: Prisma.LibroVentasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroVentasScalarFieldEnum | Prisma.LibroVentasScalarFieldEnum[];
};
export type LibroVentasFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where?: Prisma.LibroVentasWhereInput;
    orderBy?: Prisma.LibroVentasOrderByWithRelationInput | Prisma.LibroVentasOrderByWithRelationInput[];
    cursor?: Prisma.LibroVentasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroVentasScalarFieldEnum | Prisma.LibroVentasScalarFieldEnum[];
};
export type LibroVentasFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where?: Prisma.LibroVentasWhereInput;
    orderBy?: Prisma.LibroVentasOrderByWithRelationInput | Prisma.LibroVentasOrderByWithRelationInput[];
    cursor?: Prisma.LibroVentasWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LibroVentasScalarFieldEnum | Prisma.LibroVentasScalarFieldEnum[];
};
export type LibroVentasCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroVentasCreateInput, Prisma.LibroVentasUncheckedCreateInput>;
};
export type LibroVentasCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LibroVentasCreateManyInput | Prisma.LibroVentasCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LibroVentasCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    data: Prisma.LibroVentasCreateManyInput | Prisma.LibroVentasCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LibroVentasIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LibroVentasUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroVentasUpdateInput, Prisma.LibroVentasUncheckedUpdateInput>;
    where: Prisma.LibroVentasWhereUniqueInput;
};
export type LibroVentasUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LibroVentasUpdateManyMutationInput, Prisma.LibroVentasUncheckedUpdateManyInput>;
    where?: Prisma.LibroVentasWhereInput;
    limit?: number;
};
export type LibroVentasUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LibroVentasUpdateManyMutationInput, Prisma.LibroVentasUncheckedUpdateManyInput>;
    where?: Prisma.LibroVentasWhereInput;
    limit?: number;
    include?: Prisma.LibroVentasIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LibroVentasUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where: Prisma.LibroVentasWhereUniqueInput;
    create: Prisma.XOR<Prisma.LibroVentasCreateInput, Prisma.LibroVentasUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LibroVentasUpdateInput, Prisma.LibroVentasUncheckedUpdateInput>;
};
export type LibroVentasDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where: Prisma.LibroVentasWhereUniqueInput;
};
export type LibroVentasDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LibroVentasWhereInput;
    limit?: number;
};
export type LibroVentasDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
};
export {};
