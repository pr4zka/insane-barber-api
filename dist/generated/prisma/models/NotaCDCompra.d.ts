import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type NotaCDCompraModel = runtime.Types.Result.DefaultSelection<Prisma.$NotaCDCompraPayload>;
export type AggregateNotaCDCompra = {
    _count: NotaCDCompraCountAggregateOutputType | null;
    _avg: NotaCDCompraAvgAggregateOutputType | null;
    _sum: NotaCDCompraSumAggregateOutputType | null;
    _min: NotaCDCompraMinAggregateOutputType | null;
    _max: NotaCDCompraMaxAggregateOutputType | null;
};
export type NotaCDCompraAvgAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    monto: runtime.Decimal | null;
};
export type NotaCDCompraSumAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    monto: runtime.Decimal | null;
};
export type NotaCDCompraMinAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    tipo: string | null;
    monto: runtime.Decimal | null;
    motivo: string | null;
    estado: string | null;
    fecha: Date | null;
};
export type NotaCDCompraMaxAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    tipo: string | null;
    monto: runtime.Decimal | null;
    motivo: string | null;
    estado: string | null;
    fecha: Date | null;
};
export type NotaCDCompraCountAggregateOutputType = {
    id: number;
    ordenCompraId: number;
    tipo: number;
    monto: number;
    motivo: number;
    estado: number;
    fecha: number;
    _all: number;
};
export type NotaCDCompraAvgAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    monto?: true;
};
export type NotaCDCompraSumAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    monto?: true;
};
export type NotaCDCompraMinAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    tipo?: true;
    monto?: true;
    motivo?: true;
    estado?: true;
    fecha?: true;
};
export type NotaCDCompraMaxAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    tipo?: true;
    monto?: true;
    motivo?: true;
    estado?: true;
    fecha?: true;
};
export type NotaCDCompraCountAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    tipo?: true;
    monto?: true;
    motivo?: true;
    estado?: true;
    fecha?: true;
    _all?: true;
};
export type NotaCDCompraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCDCompraWhereInput;
    orderBy?: Prisma.NotaCDCompraOrderByWithRelationInput | Prisma.NotaCDCompraOrderByWithRelationInput[];
    cursor?: Prisma.NotaCDCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotaCDCompraCountAggregateInputType;
    _avg?: NotaCDCompraAvgAggregateInputType;
    _sum?: NotaCDCompraSumAggregateInputType;
    _min?: NotaCDCompraMinAggregateInputType;
    _max?: NotaCDCompraMaxAggregateInputType;
};
export type GetNotaCDCompraAggregateType<T extends NotaCDCompraAggregateArgs> = {
    [P in keyof T & keyof AggregateNotaCDCompra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotaCDCompra[P]> : Prisma.GetScalarType<T[P], AggregateNotaCDCompra[P]>;
};
export type NotaCDCompraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCDCompraWhereInput;
    orderBy?: Prisma.NotaCDCompraOrderByWithAggregationInput | Prisma.NotaCDCompraOrderByWithAggregationInput[];
    by: Prisma.NotaCDCompraScalarFieldEnum[] | Prisma.NotaCDCompraScalarFieldEnum;
    having?: Prisma.NotaCDCompraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotaCDCompraCountAggregateInputType | true;
    _avg?: NotaCDCompraAvgAggregateInputType;
    _sum?: NotaCDCompraSumAggregateInputType;
    _min?: NotaCDCompraMinAggregateInputType;
    _max?: NotaCDCompraMaxAggregateInputType;
};
export type NotaCDCompraGroupByOutputType = {
    id: number;
    ordenCompraId: number;
    tipo: string;
    monto: runtime.Decimal;
    motivo: string;
    estado: string;
    fecha: Date;
    _count: NotaCDCompraCountAggregateOutputType | null;
    _avg: NotaCDCompraAvgAggregateOutputType | null;
    _sum: NotaCDCompraSumAggregateOutputType | null;
    _min: NotaCDCompraMinAggregateOutputType | null;
    _max: NotaCDCompraMaxAggregateOutputType | null;
};
type GetNotaCDCompraGroupByPayload<T extends NotaCDCompraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotaCDCompraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotaCDCompraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotaCDCompraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotaCDCompraGroupByOutputType[P]>;
}>>;
export type NotaCDCompraWhereInput = {
    AND?: Prisma.NotaCDCompraWhereInput | Prisma.NotaCDCompraWhereInput[];
    OR?: Prisma.NotaCDCompraWhereInput[];
    NOT?: Prisma.NotaCDCompraWhereInput | Prisma.NotaCDCompraWhereInput[];
    id?: Prisma.IntFilter<"NotaCDCompra"> | number;
    ordenCompraId?: Prisma.IntFilter<"NotaCDCompra"> | number;
    tipo?: Prisma.StringFilter<"NotaCDCompra"> | string;
    monto?: Prisma.DecimalFilter<"NotaCDCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFilter<"NotaCDCompra"> | string;
    estado?: Prisma.StringFilter<"NotaCDCompra"> | string;
    fecha?: Prisma.DateTimeFilter<"NotaCDCompra"> | Date | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
};
export type NotaCDCompraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ordenCompra?: Prisma.OrdenCompraOrderByWithRelationInput;
};
export type NotaCDCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.NotaCDCompraWhereInput | Prisma.NotaCDCompraWhereInput[];
    OR?: Prisma.NotaCDCompraWhereInput[];
    NOT?: Prisma.NotaCDCompraWhereInput | Prisma.NotaCDCompraWhereInput[];
    ordenCompraId?: Prisma.IntFilter<"NotaCDCompra"> | number;
    tipo?: Prisma.StringFilter<"NotaCDCompra"> | string;
    monto?: Prisma.DecimalFilter<"NotaCDCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFilter<"NotaCDCompra"> | string;
    estado?: Prisma.StringFilter<"NotaCDCompra"> | string;
    fecha?: Prisma.DateTimeFilter<"NotaCDCompra"> | Date | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
}, "id">;
export type NotaCDCompraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.NotaCDCompraCountOrderByAggregateInput;
    _avg?: Prisma.NotaCDCompraAvgOrderByAggregateInput;
    _max?: Prisma.NotaCDCompraMaxOrderByAggregateInput;
    _min?: Prisma.NotaCDCompraMinOrderByAggregateInput;
    _sum?: Prisma.NotaCDCompraSumOrderByAggregateInput;
};
export type NotaCDCompraScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotaCDCompraScalarWhereWithAggregatesInput | Prisma.NotaCDCompraScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotaCDCompraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotaCDCompraScalarWhereWithAggregatesInput | Prisma.NotaCDCompraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"NotaCDCompra"> | number;
    ordenCompraId?: Prisma.IntWithAggregatesFilter<"NotaCDCompra"> | number;
    tipo?: Prisma.StringWithAggregatesFilter<"NotaCDCompra"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"NotaCDCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringWithAggregatesFilter<"NotaCDCompra"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"NotaCDCompra"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"NotaCDCompra"> | Date | string;
};
export type NotaCDCompraCreateInput = {
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
    ordenCompra: Prisma.OrdenCompraCreateNestedOneWithoutNotasCDInput;
};
export type NotaCDCompraUncheckedCreateInput = {
    id?: number;
    ordenCompraId: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCDCompraUpdateInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordenCompra?: Prisma.OrdenCompraUpdateOneRequiredWithoutNotasCDNestedInput;
};
export type NotaCDCompraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCDCompraCreateManyInput = {
    id?: number;
    ordenCompraId: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCDCompraUpdateManyMutationInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCDCompraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCDCompraListRelationFilter = {
    every?: Prisma.NotaCDCompraWhereInput;
    some?: Prisma.NotaCDCompraWhereInput;
    none?: Prisma.NotaCDCompraWhereInput;
};
export type NotaCDCompraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotaCDCompraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type NotaCDCompraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type NotaCDCompraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type NotaCDCompraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type NotaCDCompraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type NotaCDCompraCreateNestedManyWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.NotaCDCompraCreateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.NotaCDCompraCreateWithoutOrdenCompraInput[] | Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput[];
    createMany?: Prisma.NotaCDCompraCreateManyOrdenCompraInputEnvelope;
    connect?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
};
export type NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.NotaCDCompraCreateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.NotaCDCompraCreateWithoutOrdenCompraInput[] | Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput[];
    createMany?: Prisma.NotaCDCompraCreateManyOrdenCompraInputEnvelope;
    connect?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
};
export type NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.NotaCDCompraCreateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.NotaCDCompraCreateWithoutOrdenCompraInput[] | Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput[];
    upsert?: Prisma.NotaCDCompraUpsertWithWhereUniqueWithoutOrdenCompraInput | Prisma.NotaCDCompraUpsertWithWhereUniqueWithoutOrdenCompraInput[];
    createMany?: Prisma.NotaCDCompraCreateManyOrdenCompraInputEnvelope;
    set?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    disconnect?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    delete?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    connect?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    update?: Prisma.NotaCDCompraUpdateWithWhereUniqueWithoutOrdenCompraInput | Prisma.NotaCDCompraUpdateWithWhereUniqueWithoutOrdenCompraInput[];
    updateMany?: Prisma.NotaCDCompraUpdateManyWithWhereWithoutOrdenCompraInput | Prisma.NotaCDCompraUpdateManyWithWhereWithoutOrdenCompraInput[];
    deleteMany?: Prisma.NotaCDCompraScalarWhereInput | Prisma.NotaCDCompraScalarWhereInput[];
};
export type NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.NotaCDCompraCreateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.NotaCDCompraCreateWithoutOrdenCompraInput[] | Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.NotaCDCompraCreateOrConnectWithoutOrdenCompraInput[];
    upsert?: Prisma.NotaCDCompraUpsertWithWhereUniqueWithoutOrdenCompraInput | Prisma.NotaCDCompraUpsertWithWhereUniqueWithoutOrdenCompraInput[];
    createMany?: Prisma.NotaCDCompraCreateManyOrdenCompraInputEnvelope;
    set?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    disconnect?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    delete?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    connect?: Prisma.NotaCDCompraWhereUniqueInput | Prisma.NotaCDCompraWhereUniqueInput[];
    update?: Prisma.NotaCDCompraUpdateWithWhereUniqueWithoutOrdenCompraInput | Prisma.NotaCDCompraUpdateWithWhereUniqueWithoutOrdenCompraInput[];
    updateMany?: Prisma.NotaCDCompraUpdateManyWithWhereWithoutOrdenCompraInput | Prisma.NotaCDCompraUpdateManyWithWhereWithoutOrdenCompraInput[];
    deleteMany?: Prisma.NotaCDCompraScalarWhereInput | Prisma.NotaCDCompraScalarWhereInput[];
};
export type NotaCDCompraCreateWithoutOrdenCompraInput = {
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCDCompraUncheckedCreateWithoutOrdenCompraInput = {
    id?: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCDCompraCreateOrConnectWithoutOrdenCompraInput = {
    where: Prisma.NotaCDCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaCDCompraCreateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput>;
};
export type NotaCDCompraCreateManyOrdenCompraInputEnvelope = {
    data: Prisma.NotaCDCompraCreateManyOrdenCompraInput | Prisma.NotaCDCompraCreateManyOrdenCompraInput[];
    skipDuplicates?: boolean;
};
export type NotaCDCompraUpsertWithWhereUniqueWithoutOrdenCompraInput = {
    where: Prisma.NotaCDCompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotaCDCompraUpdateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedUpdateWithoutOrdenCompraInput>;
    create: Prisma.XOR<Prisma.NotaCDCompraCreateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedCreateWithoutOrdenCompraInput>;
};
export type NotaCDCompraUpdateWithWhereUniqueWithoutOrdenCompraInput = {
    where: Prisma.NotaCDCompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotaCDCompraUpdateWithoutOrdenCompraInput, Prisma.NotaCDCompraUncheckedUpdateWithoutOrdenCompraInput>;
};
export type NotaCDCompraUpdateManyWithWhereWithoutOrdenCompraInput = {
    where: Prisma.NotaCDCompraScalarWhereInput;
    data: Prisma.XOR<Prisma.NotaCDCompraUpdateManyMutationInput, Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraInput>;
};
export type NotaCDCompraScalarWhereInput = {
    AND?: Prisma.NotaCDCompraScalarWhereInput | Prisma.NotaCDCompraScalarWhereInput[];
    OR?: Prisma.NotaCDCompraScalarWhereInput[];
    NOT?: Prisma.NotaCDCompraScalarWhereInput | Prisma.NotaCDCompraScalarWhereInput[];
    id?: Prisma.IntFilter<"NotaCDCompra"> | number;
    ordenCompraId?: Prisma.IntFilter<"NotaCDCompra"> | number;
    tipo?: Prisma.StringFilter<"NotaCDCompra"> | string;
    monto?: Prisma.DecimalFilter<"NotaCDCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFilter<"NotaCDCompra"> | string;
    estado?: Prisma.StringFilter<"NotaCDCompra"> | string;
    fecha?: Prisma.DateTimeFilter<"NotaCDCompra"> | Date | string;
};
export type NotaCDCompraCreateManyOrdenCompraInput = {
    id?: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCDCompraUpdateWithoutOrdenCompraInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCDCompraUncheckedUpdateWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCDCompraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaCDCompra"]>;
export type NotaCDCompraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaCDCompra"]>;
export type NotaCDCompraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaCDCompra"]>;
export type NotaCDCompraSelectScalar = {
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
};
export type NotaCDCompraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordenCompraId" | "tipo" | "monto" | "motivo" | "estado" | "fecha", ExtArgs["result"]["notaCDCompra"]>;
export type NotaCDCompraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type NotaCDCompraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type NotaCDCompraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type $NotaCDCompraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotaCDCompra";
    objects: {
        ordenCompra: Prisma.$OrdenCompraPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ordenCompraId: number;
        tipo: string;
        monto: runtime.Decimal;
        motivo: string;
        estado: string;
        fecha: Date;
    }, ExtArgs["result"]["notaCDCompra"]>;
    composites: {};
};
export type NotaCDCompraGetPayload<S extends boolean | null | undefined | NotaCDCompraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload, S>;
export type NotaCDCompraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotaCDCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotaCDCompraCountAggregateInputType | true;
};
export interface NotaCDCompraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotaCDCompra'];
        meta: {
            name: 'NotaCDCompra';
        };
    };
    findUnique<T extends NotaCDCompraFindUniqueArgs>(args: Prisma.SelectSubset<T, NotaCDCompraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotaCDCompraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotaCDCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotaCDCompraFindFirstArgs>(args?: Prisma.SelectSubset<T, NotaCDCompraFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotaCDCompraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotaCDCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotaCDCompraFindManyArgs>(args?: Prisma.SelectSubset<T, NotaCDCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotaCDCompraCreateArgs>(args: Prisma.SelectSubset<T, NotaCDCompraCreateArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotaCDCompraCreateManyArgs>(args?: Prisma.SelectSubset<T, NotaCDCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotaCDCompraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotaCDCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotaCDCompraDeleteArgs>(args: Prisma.SelectSubset<T, NotaCDCompraDeleteArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotaCDCompraUpdateArgs>(args: Prisma.SelectSubset<T, NotaCDCompraUpdateArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotaCDCompraDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotaCDCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotaCDCompraUpdateManyArgs>(args: Prisma.SelectSubset<T, NotaCDCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotaCDCompraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotaCDCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotaCDCompraUpsertArgs>(args: Prisma.SelectSubset<T, NotaCDCompraUpsertArgs<ExtArgs>>): Prisma.Prisma__NotaCDCompraClient<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotaCDCompraCountArgs>(args?: Prisma.Subset<T, NotaCDCompraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotaCDCompraCountAggregateOutputType> : number>;
    aggregate<T extends NotaCDCompraAggregateArgs>(args: Prisma.Subset<T, NotaCDCompraAggregateArgs>): Prisma.PrismaPromise<GetNotaCDCompraAggregateType<T>>;
    groupBy<T extends NotaCDCompraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotaCDCompraGroupByArgs['orderBy'];
    } : {
        orderBy?: NotaCDCompraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotaCDCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaCDCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotaCDCompraFieldRefs;
}
export interface Prisma__NotaCDCompraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenCompra<T extends Prisma.OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompraDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotaCDCompraFieldRefs {
    readonly id: Prisma.FieldRef<"NotaCDCompra", 'Int'>;
    readonly ordenCompraId: Prisma.FieldRef<"NotaCDCompra", 'Int'>;
    readonly tipo: Prisma.FieldRef<"NotaCDCompra", 'String'>;
    readonly monto: Prisma.FieldRef<"NotaCDCompra", 'Decimal'>;
    readonly motivo: Prisma.FieldRef<"NotaCDCompra", 'String'>;
    readonly estado: Prisma.FieldRef<"NotaCDCompra", 'String'>;
    readonly fecha: Prisma.FieldRef<"NotaCDCompra", 'DateTime'>;
}
export type NotaCDCompraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where: Prisma.NotaCDCompraWhereUniqueInput;
};
export type NotaCDCompraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where: Prisma.NotaCDCompraWhereUniqueInput;
};
export type NotaCDCompraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where?: Prisma.NotaCDCompraWhereInput;
    orderBy?: Prisma.NotaCDCompraOrderByWithRelationInput | Prisma.NotaCDCompraOrderByWithRelationInput[];
    cursor?: Prisma.NotaCDCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaCDCompraScalarFieldEnum | Prisma.NotaCDCompraScalarFieldEnum[];
};
export type NotaCDCompraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where?: Prisma.NotaCDCompraWhereInput;
    orderBy?: Prisma.NotaCDCompraOrderByWithRelationInput | Prisma.NotaCDCompraOrderByWithRelationInput[];
    cursor?: Prisma.NotaCDCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaCDCompraScalarFieldEnum | Prisma.NotaCDCompraScalarFieldEnum[];
};
export type NotaCDCompraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where?: Prisma.NotaCDCompraWhereInput;
    orderBy?: Prisma.NotaCDCompraOrderByWithRelationInput | Prisma.NotaCDCompraOrderByWithRelationInput[];
    cursor?: Prisma.NotaCDCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaCDCompraScalarFieldEnum | Prisma.NotaCDCompraScalarFieldEnum[];
};
export type NotaCDCompraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaCDCompraCreateInput, Prisma.NotaCDCompraUncheckedCreateInput>;
};
export type NotaCDCompraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotaCDCompraCreateManyInput | Prisma.NotaCDCompraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotaCDCompraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    data: Prisma.NotaCDCompraCreateManyInput | Prisma.NotaCDCompraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotaCDCompraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotaCDCompraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaCDCompraUpdateInput, Prisma.NotaCDCompraUncheckedUpdateInput>;
    where: Prisma.NotaCDCompraWhereUniqueInput;
};
export type NotaCDCompraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotaCDCompraUpdateManyMutationInput, Prisma.NotaCDCompraUncheckedUpdateManyInput>;
    where?: Prisma.NotaCDCompraWhereInput;
    limit?: number;
};
export type NotaCDCompraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaCDCompraUpdateManyMutationInput, Prisma.NotaCDCompraUncheckedUpdateManyInput>;
    where?: Prisma.NotaCDCompraWhereInput;
    limit?: number;
    include?: Prisma.NotaCDCompraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotaCDCompraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where: Prisma.NotaCDCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaCDCompraCreateInput, Prisma.NotaCDCompraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotaCDCompraUpdateInput, Prisma.NotaCDCompraUncheckedUpdateInput>;
};
export type NotaCDCompraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where: Prisma.NotaCDCompraWhereUniqueInput;
};
export type NotaCDCompraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCDCompraWhereInput;
    limit?: number;
};
export type NotaCDCompraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
};
export {};
