import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type MovimientoCajaModel = runtime.Types.Result.DefaultSelection<Prisma.$MovimientoCajaPayload>;
export type AggregateMovimientoCaja = {
    _count: MovimientoCajaCountAggregateOutputType | null;
    _avg: MovimientoCajaAvgAggregateOutputType | null;
    _sum: MovimientoCajaSumAggregateOutputType | null;
    _min: MovimientoCajaMinAggregateOutputType | null;
    _max: MovimientoCajaMaxAggregateOutputType | null;
};
export type MovimientoCajaAvgAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    monto: runtime.Decimal | null;
};
export type MovimientoCajaSumAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    monto: runtime.Decimal | null;
};
export type MovimientoCajaMinAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    tipo: string | null;
    concepto: string | null;
    monto: runtime.Decimal | null;
    fecha: Date | null;
};
export type MovimientoCajaMaxAggregateOutputType = {
    id: number | null;
    cajaId: number | null;
    tipo: string | null;
    concepto: string | null;
    monto: runtime.Decimal | null;
    fecha: Date | null;
};
export type MovimientoCajaCountAggregateOutputType = {
    id: number;
    cajaId: number;
    tipo: number;
    concepto: number;
    monto: number;
    fecha: number;
    _all: number;
};
export type MovimientoCajaAvgAggregateInputType = {
    id?: true;
    cajaId?: true;
    monto?: true;
};
export type MovimientoCajaSumAggregateInputType = {
    id?: true;
    cajaId?: true;
    monto?: true;
};
export type MovimientoCajaMinAggregateInputType = {
    id?: true;
    cajaId?: true;
    tipo?: true;
    concepto?: true;
    monto?: true;
    fecha?: true;
};
export type MovimientoCajaMaxAggregateInputType = {
    id?: true;
    cajaId?: true;
    tipo?: true;
    concepto?: true;
    monto?: true;
    fecha?: true;
};
export type MovimientoCajaCountAggregateInputType = {
    id?: true;
    cajaId?: true;
    tipo?: true;
    concepto?: true;
    monto?: true;
    fecha?: true;
    _all?: true;
};
export type MovimientoCajaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoCajaWhereInput;
    orderBy?: Prisma.MovimientoCajaOrderByWithRelationInput | Prisma.MovimientoCajaOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoCajaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MovimientoCajaCountAggregateInputType;
    _avg?: MovimientoCajaAvgAggregateInputType;
    _sum?: MovimientoCajaSumAggregateInputType;
    _min?: MovimientoCajaMinAggregateInputType;
    _max?: MovimientoCajaMaxAggregateInputType;
};
export type GetMovimientoCajaAggregateType<T extends MovimientoCajaAggregateArgs> = {
    [P in keyof T & keyof AggregateMovimientoCaja]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovimientoCaja[P]> : Prisma.GetScalarType<T[P], AggregateMovimientoCaja[P]>;
};
export type MovimientoCajaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoCajaWhereInput;
    orderBy?: Prisma.MovimientoCajaOrderByWithAggregationInput | Prisma.MovimientoCajaOrderByWithAggregationInput[];
    by: Prisma.MovimientoCajaScalarFieldEnum[] | Prisma.MovimientoCajaScalarFieldEnum;
    having?: Prisma.MovimientoCajaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovimientoCajaCountAggregateInputType | true;
    _avg?: MovimientoCajaAvgAggregateInputType;
    _sum?: MovimientoCajaSumAggregateInputType;
    _min?: MovimientoCajaMinAggregateInputType;
    _max?: MovimientoCajaMaxAggregateInputType;
};
export type MovimientoCajaGroupByOutputType = {
    id: number;
    cajaId: number;
    tipo: string;
    concepto: string;
    monto: runtime.Decimal;
    fecha: Date;
    _count: MovimientoCajaCountAggregateOutputType | null;
    _avg: MovimientoCajaAvgAggregateOutputType | null;
    _sum: MovimientoCajaSumAggregateOutputType | null;
    _min: MovimientoCajaMinAggregateOutputType | null;
    _max: MovimientoCajaMaxAggregateOutputType | null;
};
type GetMovimientoCajaGroupByPayload<T extends MovimientoCajaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MovimientoCajaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MovimientoCajaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MovimientoCajaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MovimientoCajaGroupByOutputType[P]>;
}>>;
export type MovimientoCajaWhereInput = {
    AND?: Prisma.MovimientoCajaWhereInput | Prisma.MovimientoCajaWhereInput[];
    OR?: Prisma.MovimientoCajaWhereInput[];
    NOT?: Prisma.MovimientoCajaWhereInput | Prisma.MovimientoCajaWhereInput[];
    id?: Prisma.IntFilter<"MovimientoCaja"> | number;
    cajaId?: Prisma.IntFilter<"MovimientoCaja"> | number;
    tipo?: Prisma.StringFilter<"MovimientoCaja"> | string;
    concepto?: Prisma.StringFilter<"MovimientoCaja"> | string;
    monto?: Prisma.DecimalFilter<"MovimientoCaja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"MovimientoCaja"> | Date | string;
    caja?: Prisma.XOR<Prisma.CajaScalarRelationFilter, Prisma.CajaWhereInput>;
};
export type MovimientoCajaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    caja?: Prisma.CajaOrderByWithRelationInput;
};
export type MovimientoCajaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.MovimientoCajaWhereInput | Prisma.MovimientoCajaWhereInput[];
    OR?: Prisma.MovimientoCajaWhereInput[];
    NOT?: Prisma.MovimientoCajaWhereInput | Prisma.MovimientoCajaWhereInput[];
    cajaId?: Prisma.IntFilter<"MovimientoCaja"> | number;
    tipo?: Prisma.StringFilter<"MovimientoCaja"> | string;
    concepto?: Prisma.StringFilter<"MovimientoCaja"> | string;
    monto?: Prisma.DecimalFilter<"MovimientoCaja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"MovimientoCaja"> | Date | string;
    caja?: Prisma.XOR<Prisma.CajaScalarRelationFilter, Prisma.CajaWhereInput>;
}, "id">;
export type MovimientoCajaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.MovimientoCajaCountOrderByAggregateInput;
    _avg?: Prisma.MovimientoCajaAvgOrderByAggregateInput;
    _max?: Prisma.MovimientoCajaMaxOrderByAggregateInput;
    _min?: Prisma.MovimientoCajaMinOrderByAggregateInput;
    _sum?: Prisma.MovimientoCajaSumOrderByAggregateInput;
};
export type MovimientoCajaScalarWhereWithAggregatesInput = {
    AND?: Prisma.MovimientoCajaScalarWhereWithAggregatesInput | Prisma.MovimientoCajaScalarWhereWithAggregatesInput[];
    OR?: Prisma.MovimientoCajaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MovimientoCajaScalarWhereWithAggregatesInput | Prisma.MovimientoCajaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"MovimientoCaja"> | number;
    cajaId?: Prisma.IntWithAggregatesFilter<"MovimientoCaja"> | number;
    tipo?: Prisma.StringWithAggregatesFilter<"MovimientoCaja"> | string;
    concepto?: Prisma.StringWithAggregatesFilter<"MovimientoCaja"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"MovimientoCaja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"MovimientoCaja"> | Date | string;
};
export type MovimientoCajaCreateInput = {
    tipo: string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    caja: Prisma.CajaCreateNestedOneWithoutMovimientosInput;
};
export type MovimientoCajaUncheckedCreateInput = {
    id?: number;
    cajaId: number;
    tipo: string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type MovimientoCajaUpdateInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    caja?: Prisma.CajaUpdateOneRequiredWithoutMovimientosNestedInput;
};
export type MovimientoCajaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoCajaCreateManyInput = {
    id?: number;
    cajaId: number;
    tipo: string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type MovimientoCajaUpdateManyMutationInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoCajaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cajaId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoCajaListRelationFilter = {
    every?: Prisma.MovimientoCajaWhereInput;
    some?: Prisma.MovimientoCajaWhereInput;
    none?: Prisma.MovimientoCajaWhereInput;
};
export type MovimientoCajaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MovimientoCajaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type MovimientoCajaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type MovimientoCajaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type MovimientoCajaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type MovimientoCajaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cajaId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type MovimientoCajaCreateNestedManyWithoutCajaInput = {
    create?: Prisma.XOR<Prisma.MovimientoCajaCreateWithoutCajaInput, Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput> | Prisma.MovimientoCajaCreateWithoutCajaInput[] | Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput | Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput[];
    createMany?: Prisma.MovimientoCajaCreateManyCajaInputEnvelope;
    connect?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
};
export type MovimientoCajaUncheckedCreateNestedManyWithoutCajaInput = {
    create?: Prisma.XOR<Prisma.MovimientoCajaCreateWithoutCajaInput, Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput> | Prisma.MovimientoCajaCreateWithoutCajaInput[] | Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput | Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput[];
    createMany?: Prisma.MovimientoCajaCreateManyCajaInputEnvelope;
    connect?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
};
export type MovimientoCajaUpdateManyWithoutCajaNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoCajaCreateWithoutCajaInput, Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput> | Prisma.MovimientoCajaCreateWithoutCajaInput[] | Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput | Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput[];
    upsert?: Prisma.MovimientoCajaUpsertWithWhereUniqueWithoutCajaInput | Prisma.MovimientoCajaUpsertWithWhereUniqueWithoutCajaInput[];
    createMany?: Prisma.MovimientoCajaCreateManyCajaInputEnvelope;
    set?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    disconnect?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    delete?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    connect?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    update?: Prisma.MovimientoCajaUpdateWithWhereUniqueWithoutCajaInput | Prisma.MovimientoCajaUpdateWithWhereUniqueWithoutCajaInput[];
    updateMany?: Prisma.MovimientoCajaUpdateManyWithWhereWithoutCajaInput | Prisma.MovimientoCajaUpdateManyWithWhereWithoutCajaInput[];
    deleteMany?: Prisma.MovimientoCajaScalarWhereInput | Prisma.MovimientoCajaScalarWhereInput[];
};
export type MovimientoCajaUncheckedUpdateManyWithoutCajaNestedInput = {
    create?: Prisma.XOR<Prisma.MovimientoCajaCreateWithoutCajaInput, Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput> | Prisma.MovimientoCajaCreateWithoutCajaInput[] | Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput[];
    connectOrCreate?: Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput | Prisma.MovimientoCajaCreateOrConnectWithoutCajaInput[];
    upsert?: Prisma.MovimientoCajaUpsertWithWhereUniqueWithoutCajaInput | Prisma.MovimientoCajaUpsertWithWhereUniqueWithoutCajaInput[];
    createMany?: Prisma.MovimientoCajaCreateManyCajaInputEnvelope;
    set?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    disconnect?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    delete?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    connect?: Prisma.MovimientoCajaWhereUniqueInput | Prisma.MovimientoCajaWhereUniqueInput[];
    update?: Prisma.MovimientoCajaUpdateWithWhereUniqueWithoutCajaInput | Prisma.MovimientoCajaUpdateWithWhereUniqueWithoutCajaInput[];
    updateMany?: Prisma.MovimientoCajaUpdateManyWithWhereWithoutCajaInput | Prisma.MovimientoCajaUpdateManyWithWhereWithoutCajaInput[];
    deleteMany?: Prisma.MovimientoCajaScalarWhereInput | Prisma.MovimientoCajaScalarWhereInput[];
};
export type MovimientoCajaCreateWithoutCajaInput = {
    tipo: string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type MovimientoCajaUncheckedCreateWithoutCajaInput = {
    id?: number;
    tipo: string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type MovimientoCajaCreateOrConnectWithoutCajaInput = {
    where: Prisma.MovimientoCajaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovimientoCajaCreateWithoutCajaInput, Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput>;
};
export type MovimientoCajaCreateManyCajaInputEnvelope = {
    data: Prisma.MovimientoCajaCreateManyCajaInput | Prisma.MovimientoCajaCreateManyCajaInput[];
    skipDuplicates?: boolean;
};
export type MovimientoCajaUpsertWithWhereUniqueWithoutCajaInput = {
    where: Prisma.MovimientoCajaWhereUniqueInput;
    update: Prisma.XOR<Prisma.MovimientoCajaUpdateWithoutCajaInput, Prisma.MovimientoCajaUncheckedUpdateWithoutCajaInput>;
    create: Prisma.XOR<Prisma.MovimientoCajaCreateWithoutCajaInput, Prisma.MovimientoCajaUncheckedCreateWithoutCajaInput>;
};
export type MovimientoCajaUpdateWithWhereUniqueWithoutCajaInput = {
    where: Prisma.MovimientoCajaWhereUniqueInput;
    data: Prisma.XOR<Prisma.MovimientoCajaUpdateWithoutCajaInput, Prisma.MovimientoCajaUncheckedUpdateWithoutCajaInput>;
};
export type MovimientoCajaUpdateManyWithWhereWithoutCajaInput = {
    where: Prisma.MovimientoCajaScalarWhereInput;
    data: Prisma.XOR<Prisma.MovimientoCajaUpdateManyMutationInput, Prisma.MovimientoCajaUncheckedUpdateManyWithoutCajaInput>;
};
export type MovimientoCajaScalarWhereInput = {
    AND?: Prisma.MovimientoCajaScalarWhereInput | Prisma.MovimientoCajaScalarWhereInput[];
    OR?: Prisma.MovimientoCajaScalarWhereInput[];
    NOT?: Prisma.MovimientoCajaScalarWhereInput | Prisma.MovimientoCajaScalarWhereInput[];
    id?: Prisma.IntFilter<"MovimientoCaja"> | number;
    cajaId?: Prisma.IntFilter<"MovimientoCaja"> | number;
    tipo?: Prisma.StringFilter<"MovimientoCaja"> | string;
    concepto?: Prisma.StringFilter<"MovimientoCaja"> | string;
    monto?: Prisma.DecimalFilter<"MovimientoCaja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"MovimientoCaja"> | Date | string;
};
export type MovimientoCajaCreateManyCajaInput = {
    id?: number;
    tipo: string;
    concepto: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type MovimientoCajaUpdateWithoutCajaInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoCajaUncheckedUpdateWithoutCajaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoCajaUncheckedUpdateManyWithoutCajaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientoCajaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cajaId?: boolean;
    tipo?: boolean;
    concepto?: boolean;
    monto?: boolean;
    fecha?: boolean;
    caja?: boolean | Prisma.CajaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movimientoCaja"]>;
export type MovimientoCajaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cajaId?: boolean;
    tipo?: boolean;
    concepto?: boolean;
    monto?: boolean;
    fecha?: boolean;
    caja?: boolean | Prisma.CajaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movimientoCaja"]>;
export type MovimientoCajaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cajaId?: boolean;
    tipo?: boolean;
    concepto?: boolean;
    monto?: boolean;
    fecha?: boolean;
    caja?: boolean | Prisma.CajaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movimientoCaja"]>;
export type MovimientoCajaSelectScalar = {
    id?: boolean;
    cajaId?: boolean;
    tipo?: boolean;
    concepto?: boolean;
    monto?: boolean;
    fecha?: boolean;
};
export type MovimientoCajaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cajaId" | "tipo" | "concepto" | "monto" | "fecha", ExtArgs["result"]["movimientoCaja"]>;
export type MovimientoCajaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja?: boolean | Prisma.CajaDefaultArgs<ExtArgs>;
};
export type MovimientoCajaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja?: boolean | Prisma.CajaDefaultArgs<ExtArgs>;
};
export type MovimientoCajaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja?: boolean | Prisma.CajaDefaultArgs<ExtArgs>;
};
export type $MovimientoCajaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MovimientoCaja";
    objects: {
        caja: Prisma.$CajaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        cajaId: number;
        tipo: string;
        concepto: string;
        monto: runtime.Decimal;
        fecha: Date;
    }, ExtArgs["result"]["movimientoCaja"]>;
    composites: {};
};
export type MovimientoCajaGetPayload<S extends boolean | null | undefined | MovimientoCajaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload, S>;
export type MovimientoCajaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MovimientoCajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovimientoCajaCountAggregateInputType | true;
};
export interface MovimientoCajaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MovimientoCaja'];
        meta: {
            name: 'MovimientoCaja';
        };
    };
    findUnique<T extends MovimientoCajaFindUniqueArgs>(args: Prisma.SelectSubset<T, MovimientoCajaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MovimientoCajaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MovimientoCajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MovimientoCajaFindFirstArgs>(args?: Prisma.SelectSubset<T, MovimientoCajaFindFirstArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MovimientoCajaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MovimientoCajaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MovimientoCajaFindManyArgs>(args?: Prisma.SelectSubset<T, MovimientoCajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MovimientoCajaCreateArgs>(args: Prisma.SelectSubset<T, MovimientoCajaCreateArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MovimientoCajaCreateManyArgs>(args?: Prisma.SelectSubset<T, MovimientoCajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MovimientoCajaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MovimientoCajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MovimientoCajaDeleteArgs>(args: Prisma.SelectSubset<T, MovimientoCajaDeleteArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MovimientoCajaUpdateArgs>(args: Prisma.SelectSubset<T, MovimientoCajaUpdateArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MovimientoCajaDeleteManyArgs>(args?: Prisma.SelectSubset<T, MovimientoCajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MovimientoCajaUpdateManyArgs>(args: Prisma.SelectSubset<T, MovimientoCajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MovimientoCajaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MovimientoCajaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MovimientoCajaUpsertArgs>(args: Prisma.SelectSubset<T, MovimientoCajaUpsertArgs<ExtArgs>>): Prisma.Prisma__MovimientoCajaClient<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MovimientoCajaCountArgs>(args?: Prisma.Subset<T, MovimientoCajaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MovimientoCajaCountAggregateOutputType> : number>;
    aggregate<T extends MovimientoCajaAggregateArgs>(args: Prisma.Subset<T, MovimientoCajaAggregateArgs>): Prisma.PrismaPromise<GetMovimientoCajaAggregateType<T>>;
    groupBy<T extends MovimientoCajaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MovimientoCajaGroupByArgs['orderBy'];
    } : {
        orderBy?: MovimientoCajaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MovimientoCajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientoCajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MovimientoCajaFieldRefs;
}
export interface Prisma__MovimientoCajaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    caja<T extends Prisma.CajaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CajaDefaultArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MovimientoCajaFieldRefs {
    readonly id: Prisma.FieldRef<"MovimientoCaja", 'Int'>;
    readonly cajaId: Prisma.FieldRef<"MovimientoCaja", 'Int'>;
    readonly tipo: Prisma.FieldRef<"MovimientoCaja", 'String'>;
    readonly concepto: Prisma.FieldRef<"MovimientoCaja", 'String'>;
    readonly monto: Prisma.FieldRef<"MovimientoCaja", 'Decimal'>;
    readonly fecha: Prisma.FieldRef<"MovimientoCaja", 'DateTime'>;
}
export type MovimientoCajaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where: Prisma.MovimientoCajaWhereUniqueInput;
};
export type MovimientoCajaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where: Prisma.MovimientoCajaWhereUniqueInput;
};
export type MovimientoCajaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where?: Prisma.MovimientoCajaWhereInput;
    orderBy?: Prisma.MovimientoCajaOrderByWithRelationInput | Prisma.MovimientoCajaOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoCajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovimientoCajaScalarFieldEnum | Prisma.MovimientoCajaScalarFieldEnum[];
};
export type MovimientoCajaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where?: Prisma.MovimientoCajaWhereInput;
    orderBy?: Prisma.MovimientoCajaOrderByWithRelationInput | Prisma.MovimientoCajaOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoCajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovimientoCajaScalarFieldEnum | Prisma.MovimientoCajaScalarFieldEnum[];
};
export type MovimientoCajaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where?: Prisma.MovimientoCajaWhereInput;
    orderBy?: Prisma.MovimientoCajaOrderByWithRelationInput | Prisma.MovimientoCajaOrderByWithRelationInput[];
    cursor?: Prisma.MovimientoCajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovimientoCajaScalarFieldEnum | Prisma.MovimientoCajaScalarFieldEnum[];
};
export type MovimientoCajaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovimientoCajaCreateInput, Prisma.MovimientoCajaUncheckedCreateInput>;
};
export type MovimientoCajaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MovimientoCajaCreateManyInput | Prisma.MovimientoCajaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MovimientoCajaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    data: Prisma.MovimientoCajaCreateManyInput | Prisma.MovimientoCajaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MovimientoCajaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MovimientoCajaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovimientoCajaUpdateInput, Prisma.MovimientoCajaUncheckedUpdateInput>;
    where: Prisma.MovimientoCajaWhereUniqueInput;
};
export type MovimientoCajaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MovimientoCajaUpdateManyMutationInput, Prisma.MovimientoCajaUncheckedUpdateManyInput>;
    where?: Prisma.MovimientoCajaWhereInput;
    limit?: number;
};
export type MovimientoCajaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MovimientoCajaUpdateManyMutationInput, Prisma.MovimientoCajaUncheckedUpdateManyInput>;
    where?: Prisma.MovimientoCajaWhereInput;
    limit?: number;
    include?: Prisma.MovimientoCajaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MovimientoCajaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where: Prisma.MovimientoCajaWhereUniqueInput;
    create: Prisma.XOR<Prisma.MovimientoCajaCreateInput, Prisma.MovimientoCajaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MovimientoCajaUpdateInput, Prisma.MovimientoCajaUncheckedUpdateInput>;
};
export type MovimientoCajaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
    where: Prisma.MovimientoCajaWhereUniqueInput;
};
export type MovimientoCajaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoCajaWhereInput;
    limit?: number;
};
export type MovimientoCajaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MovimientoCajaSelect<ExtArgs> | null;
    omit?: Prisma.MovimientoCajaOmit<ExtArgs> | null;
    include?: Prisma.MovimientoCajaInclude<ExtArgs> | null;
};
export {};
