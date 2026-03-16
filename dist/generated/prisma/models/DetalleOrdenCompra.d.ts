import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DetalleOrdenCompraModel = runtime.Types.Result.DefaultSelection<Prisma.$DetalleOrdenCompraPayload>;
export type AggregateDetalleOrdenCompra = {
    _count: DetalleOrdenCompraCountAggregateOutputType | null;
    _avg: DetalleOrdenCompraAvgAggregateOutputType | null;
    _sum: DetalleOrdenCompraSumAggregateOutputType | null;
    _min: DetalleOrdenCompraMinAggregateOutputType | null;
    _max: DetalleOrdenCompraMaxAggregateOutputType | null;
};
export type DetalleOrdenCompraAvgAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetalleOrdenCompraSumAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetalleOrdenCompraMinAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetalleOrdenCompraMaxAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetalleOrdenCompraCountAggregateOutputType = {
    id: number;
    ordenCompraId: number;
    insumoId: number;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    _all: number;
};
export type DetalleOrdenCompraAvgAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    insumoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetalleOrdenCompraSumAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    insumoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetalleOrdenCompraMinAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    insumoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetalleOrdenCompraMaxAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    insumoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetalleOrdenCompraCountAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    insumoId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
    _all?: true;
};
export type DetalleOrdenCompraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleOrdenCompraWhereInput;
    orderBy?: Prisma.DetalleOrdenCompraOrderByWithRelationInput | Prisma.DetalleOrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.DetalleOrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DetalleOrdenCompraCountAggregateInputType;
    _avg?: DetalleOrdenCompraAvgAggregateInputType;
    _sum?: DetalleOrdenCompraSumAggregateInputType;
    _min?: DetalleOrdenCompraMinAggregateInputType;
    _max?: DetalleOrdenCompraMaxAggregateInputType;
};
export type GetDetalleOrdenCompraAggregateType<T extends DetalleOrdenCompraAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalleOrdenCompra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalleOrdenCompra[P]> : Prisma.GetScalarType<T[P], AggregateDetalleOrdenCompra[P]>;
};
export type DetalleOrdenCompraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleOrdenCompraWhereInput;
    orderBy?: Prisma.DetalleOrdenCompraOrderByWithAggregationInput | Prisma.DetalleOrdenCompraOrderByWithAggregationInput[];
    by: Prisma.DetalleOrdenCompraScalarFieldEnum[] | Prisma.DetalleOrdenCompraScalarFieldEnum;
    having?: Prisma.DetalleOrdenCompraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetalleOrdenCompraCountAggregateInputType | true;
    _avg?: DetalleOrdenCompraAvgAggregateInputType;
    _sum?: DetalleOrdenCompraSumAggregateInputType;
    _min?: DetalleOrdenCompraMinAggregateInputType;
    _max?: DetalleOrdenCompraMaxAggregateInputType;
};
export type DetalleOrdenCompraGroupByOutputType = {
    id: number;
    ordenCompraId: number;
    insumoId: number;
    cantidad: runtime.Decimal;
    precioUnitario: runtime.Decimal;
    subtotal: runtime.Decimal;
    _count: DetalleOrdenCompraCountAggregateOutputType | null;
    _avg: DetalleOrdenCompraAvgAggregateOutputType | null;
    _sum: DetalleOrdenCompraSumAggregateOutputType | null;
    _min: DetalleOrdenCompraMinAggregateOutputType | null;
    _max: DetalleOrdenCompraMaxAggregateOutputType | null;
};
type GetDetalleOrdenCompraGroupByPayload<T extends DetalleOrdenCompraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetalleOrdenCompraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetalleOrdenCompraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetalleOrdenCompraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetalleOrdenCompraGroupByOutputType[P]>;
}>>;
export type DetalleOrdenCompraWhereInput = {
    AND?: Prisma.DetalleOrdenCompraWhereInput | Prisma.DetalleOrdenCompraWhereInput[];
    OR?: Prisma.DetalleOrdenCompraWhereInput[];
    NOT?: Prisma.DetalleOrdenCompraWhereInput | Prisma.DetalleOrdenCompraWhereInput[];
    id?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    ordenCompraId?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    insumoId?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    cantidad?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
    insumo?: Prisma.XOR<Prisma.InsumoScalarRelationFilter, Prisma.InsumoWhereInput>;
};
export type DetalleOrdenCompraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    ordenCompra?: Prisma.OrdenCompraOrderByWithRelationInput;
    insumo?: Prisma.InsumoOrderByWithRelationInput;
};
export type DetalleOrdenCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DetalleOrdenCompraWhereInput | Prisma.DetalleOrdenCompraWhereInput[];
    OR?: Prisma.DetalleOrdenCompraWhereInput[];
    NOT?: Prisma.DetalleOrdenCompraWhereInput | Prisma.DetalleOrdenCompraWhereInput[];
    ordenCompraId?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    insumoId?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    cantidad?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
    insumo?: Prisma.XOR<Prisma.InsumoScalarRelationFilter, Prisma.InsumoWhereInput>;
}, "id">;
export type DetalleOrdenCompraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    _count?: Prisma.DetalleOrdenCompraCountOrderByAggregateInput;
    _avg?: Prisma.DetalleOrdenCompraAvgOrderByAggregateInput;
    _max?: Prisma.DetalleOrdenCompraMaxOrderByAggregateInput;
    _min?: Prisma.DetalleOrdenCompraMinOrderByAggregateInput;
    _sum?: Prisma.DetalleOrdenCompraSumOrderByAggregateInput;
};
export type DetalleOrdenCompraScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetalleOrdenCompraScalarWhereWithAggregatesInput | Prisma.DetalleOrdenCompraScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetalleOrdenCompraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetalleOrdenCompraScalarWhereWithAggregatesInput | Prisma.DetalleOrdenCompraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DetalleOrdenCompra"> | number;
    ordenCompraId?: Prisma.IntWithAggregatesFilter<"DetalleOrdenCompra"> | number;
    insumoId?: Prisma.IntWithAggregatesFilter<"DetalleOrdenCompra"> | number;
    cantidad?: Prisma.DecimalWithAggregatesFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalWithAggregatesFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraCreateInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ordenCompra: Prisma.OrdenCompraCreateNestedOneWithoutDetallesInput;
    insumo: Prisma.InsumoCreateNestedOneWithoutDetallesOrdenCompraInput;
};
export type DetalleOrdenCompraUncheckedCreateInput = {
    id?: number;
    ordenCompraId: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUpdateInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ordenCompra?: Prisma.OrdenCompraUpdateOneRequiredWithoutDetallesNestedInput;
    insumo?: Prisma.InsumoUpdateOneRequiredWithoutDetallesOrdenCompraNestedInput;
};
export type DetalleOrdenCompraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraCreateManyInput = {
    id?: number;
    ordenCompraId: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUpdateManyMutationInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraListRelationFilter = {
    every?: Prisma.DetalleOrdenCompraWhereInput;
    some?: Prisma.DetalleOrdenCompraWhereInput;
    none?: Prisma.DetalleOrdenCompraWhereInput;
};
export type DetalleOrdenCompraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetalleOrdenCompraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleOrdenCompraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleOrdenCompraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleOrdenCompraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleOrdenCompraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetalleOrdenCompraCreateNestedManyWithoutInsumoInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput> | Prisma.DetalleOrdenCompraCreateWithoutInsumoInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyInsumoInputEnvelope;
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
};
export type DetalleOrdenCompraUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput> | Prisma.DetalleOrdenCompraCreateWithoutInsumoInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyInsumoInputEnvelope;
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
};
export type DetalleOrdenCompraUpdateManyWithoutInsumoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput> | Prisma.DetalleOrdenCompraCreateWithoutInsumoInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput[];
    upsert?: Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutInsumoInput | Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutInsumoInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyInsumoInputEnvelope;
    set?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    disconnect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    delete?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    update?: Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutInsumoInput | Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutInsumoInput[];
    updateMany?: Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutInsumoInput | Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutInsumoInput[];
    deleteMany?: Prisma.DetalleOrdenCompraScalarWhereInput | Prisma.DetalleOrdenCompraScalarWhereInput[];
};
export type DetalleOrdenCompraUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput> | Prisma.DetalleOrdenCompraCreateWithoutInsumoInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutInsumoInput[];
    upsert?: Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutInsumoInput | Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutInsumoInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyInsumoInputEnvelope;
    set?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    disconnect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    delete?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    update?: Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutInsumoInput | Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutInsumoInput[];
    updateMany?: Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutInsumoInput | Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutInsumoInput[];
    deleteMany?: Prisma.DetalleOrdenCompraScalarWhereInput | Prisma.DetalleOrdenCompraScalarWhereInput[];
};
export type DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyOrdenCompraInputEnvelope;
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
};
export type DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyOrdenCompraInputEnvelope;
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
};
export type DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput[];
    upsert?: Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutOrdenCompraInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyOrdenCompraInputEnvelope;
    set?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    disconnect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    delete?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    update?: Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutOrdenCompraInput[];
    updateMany?: Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutOrdenCompraInput[];
    deleteMany?: Prisma.DetalleOrdenCompraScalarWhereInput | Prisma.DetalleOrdenCompraScalarWhereInput[];
};
export type DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput[] | Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput[];
    upsert?: Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraUpsertWithWhereUniqueWithoutOrdenCompraInput[];
    createMany?: Prisma.DetalleOrdenCompraCreateManyOrdenCompraInputEnvelope;
    set?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    disconnect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    delete?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    connect?: Prisma.DetalleOrdenCompraWhereUniqueInput | Prisma.DetalleOrdenCompraWhereUniqueInput[];
    update?: Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraUpdateWithWhereUniqueWithoutOrdenCompraInput[];
    updateMany?: Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutOrdenCompraInput | Prisma.DetalleOrdenCompraUpdateManyWithWhereWithoutOrdenCompraInput[];
    deleteMany?: Prisma.DetalleOrdenCompraScalarWhereInput | Prisma.DetalleOrdenCompraScalarWhereInput[];
};
export type DetalleOrdenCompraCreateWithoutInsumoInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ordenCompra: Prisma.OrdenCompraCreateNestedOneWithoutDetallesInput;
};
export type DetalleOrdenCompraUncheckedCreateWithoutInsumoInput = {
    id?: number;
    ordenCompraId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraCreateOrConnectWithoutInsumoInput = {
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput>;
};
export type DetalleOrdenCompraCreateManyInsumoInputEnvelope = {
    data: Prisma.DetalleOrdenCompraCreateManyInsumoInput | Prisma.DetalleOrdenCompraCreateManyInsumoInput[];
    skipDuplicates?: boolean;
};
export type DetalleOrdenCompraUpsertWithWhereUniqueWithoutInsumoInput = {
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedUpdateWithoutInsumoInput>;
    create: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutInsumoInput>;
};
export type DetalleOrdenCompraUpdateWithWhereUniqueWithoutInsumoInput = {
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateWithoutInsumoInput, Prisma.DetalleOrdenCompraUncheckedUpdateWithoutInsumoInput>;
};
export type DetalleOrdenCompraUpdateManyWithWhereWithoutInsumoInput = {
    where: Prisma.DetalleOrdenCompraScalarWhereInput;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateManyMutationInput, Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutInsumoInput>;
};
export type DetalleOrdenCompraScalarWhereInput = {
    AND?: Prisma.DetalleOrdenCompraScalarWhereInput | Prisma.DetalleOrdenCompraScalarWhereInput[];
    OR?: Prisma.DetalleOrdenCompraScalarWhereInput[];
    NOT?: Prisma.DetalleOrdenCompraScalarWhereInput | Prisma.DetalleOrdenCompraScalarWhereInput[];
    id?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    ordenCompraId?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    insumoId?: Prisma.IntFilter<"DetalleOrdenCompra"> | number;
    cantidad?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetalleOrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraCreateWithoutOrdenCompraInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    insumo: Prisma.InsumoCreateNestedOneWithoutDetallesOrdenCompraInput;
};
export type DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput = {
    id?: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraCreateOrConnectWithoutOrdenCompraInput = {
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput>;
};
export type DetalleOrdenCompraCreateManyOrdenCompraInputEnvelope = {
    data: Prisma.DetalleOrdenCompraCreateManyOrdenCompraInput | Prisma.DetalleOrdenCompraCreateManyOrdenCompraInput[];
    skipDuplicates?: boolean;
};
export type DetalleOrdenCompraUpsertWithWhereUniqueWithoutOrdenCompraInput = {
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedUpdateWithoutOrdenCompraInput>;
    create: Prisma.XOR<Prisma.DetalleOrdenCompraCreateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedCreateWithoutOrdenCompraInput>;
};
export type DetalleOrdenCompraUpdateWithWhereUniqueWithoutOrdenCompraInput = {
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateWithoutOrdenCompraInput, Prisma.DetalleOrdenCompraUncheckedUpdateWithoutOrdenCompraInput>;
};
export type DetalleOrdenCompraUpdateManyWithWhereWithoutOrdenCompraInput = {
    where: Prisma.DetalleOrdenCompraScalarWhereInput;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateManyMutationInput, Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraInput>;
};
export type DetalleOrdenCompraCreateManyInsumoInput = {
    id?: number;
    ordenCompraId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUpdateWithoutInsumoInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ordenCompra?: Prisma.OrdenCompraUpdateOneRequiredWithoutDetallesNestedInput;
};
export type DetalleOrdenCompraUncheckedUpdateWithoutInsumoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUncheckedUpdateManyWithoutInsumoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraCreateManyOrdenCompraInput = {
    id?: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUpdateWithoutOrdenCompraInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    insumo?: Prisma.InsumoUpdateOneRequiredWithoutDetallesOrdenCompraNestedInput;
};
export type DetalleOrdenCompraUncheckedUpdateWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetalleOrdenCompraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleOrdenCompra"]>;
export type DetalleOrdenCompraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleOrdenCompra"]>;
export type DetalleOrdenCompraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detalleOrdenCompra"]>;
export type DetalleOrdenCompraSelectScalar = {
    id?: boolean;
    ordenCompraId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
};
export type DetalleOrdenCompraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordenCompraId" | "insumoId" | "cantidad" | "precioUnitario" | "subtotal", ExtArgs["result"]["detalleOrdenCompra"]>;
export type DetalleOrdenCompraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
};
export type DetalleOrdenCompraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
};
export type DetalleOrdenCompraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
};
export type $DetalleOrdenCompraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetalleOrdenCompra";
    objects: {
        ordenCompra: Prisma.$OrdenCompraPayload<ExtArgs>;
        insumo: Prisma.$InsumoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ordenCompraId: number;
        insumoId: number;
        cantidad: runtime.Decimal;
        precioUnitario: runtime.Decimal;
        subtotal: runtime.Decimal;
    }, ExtArgs["result"]["detalleOrdenCompra"]>;
    composites: {};
};
export type DetalleOrdenCompraGetPayload<S extends boolean | null | undefined | DetalleOrdenCompraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload, S>;
export type DetalleOrdenCompraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetalleOrdenCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetalleOrdenCompraCountAggregateInputType | true;
};
export interface DetalleOrdenCompraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetalleOrdenCompra'];
        meta: {
            name: 'DetalleOrdenCompra';
        };
    };
    findUnique<T extends DetalleOrdenCompraFindUniqueArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DetalleOrdenCompraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DetalleOrdenCompraFindFirstArgs>(args?: Prisma.SelectSubset<T, DetalleOrdenCompraFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DetalleOrdenCompraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetalleOrdenCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DetalleOrdenCompraFindManyArgs>(args?: Prisma.SelectSubset<T, DetalleOrdenCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DetalleOrdenCompraCreateArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraCreateArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DetalleOrdenCompraCreateManyArgs>(args?: Prisma.SelectSubset<T, DetalleOrdenCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DetalleOrdenCompraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetalleOrdenCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DetalleOrdenCompraDeleteArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraDeleteArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DetalleOrdenCompraUpdateArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraUpdateArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DetalleOrdenCompraDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetalleOrdenCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DetalleOrdenCompraUpdateManyArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DetalleOrdenCompraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DetalleOrdenCompraUpsertArgs>(args: Prisma.SelectSubset<T, DetalleOrdenCompraUpsertArgs<ExtArgs>>): Prisma.Prisma__DetalleOrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DetalleOrdenCompraCountArgs>(args?: Prisma.Subset<T, DetalleOrdenCompraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetalleOrdenCompraCountAggregateOutputType> : number>;
    aggregate<T extends DetalleOrdenCompraAggregateArgs>(args: Prisma.Subset<T, DetalleOrdenCompraAggregateArgs>): Prisma.PrismaPromise<GetDetalleOrdenCompraAggregateType<T>>;
    groupBy<T extends DetalleOrdenCompraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetalleOrdenCompraGroupByArgs['orderBy'];
    } : {
        orderBy?: DetalleOrdenCompraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetalleOrdenCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalleOrdenCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DetalleOrdenCompraFieldRefs;
}
export interface Prisma__DetalleOrdenCompraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenCompra<T extends Prisma.OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompraDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    insumo<T extends Prisma.InsumoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InsumoDefaultArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DetalleOrdenCompraFieldRefs {
    readonly id: Prisma.FieldRef<"DetalleOrdenCompra", 'Int'>;
    readonly ordenCompraId: Prisma.FieldRef<"DetalleOrdenCompra", 'Int'>;
    readonly insumoId: Prisma.FieldRef<"DetalleOrdenCompra", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"DetalleOrdenCompra", 'Decimal'>;
    readonly precioUnitario: Prisma.FieldRef<"DetalleOrdenCompra", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"DetalleOrdenCompra", 'Decimal'>;
}
export type DetalleOrdenCompraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
};
export type DetalleOrdenCompraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
};
export type DetalleOrdenCompraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.DetalleOrdenCompraWhereInput;
    orderBy?: Prisma.DetalleOrdenCompraOrderByWithRelationInput | Prisma.DetalleOrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.DetalleOrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleOrdenCompraScalarFieldEnum | Prisma.DetalleOrdenCompraScalarFieldEnum[];
};
export type DetalleOrdenCompraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.DetalleOrdenCompraWhereInput;
    orderBy?: Prisma.DetalleOrdenCompraOrderByWithRelationInput | Prisma.DetalleOrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.DetalleOrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleOrdenCompraScalarFieldEnum | Prisma.DetalleOrdenCompraScalarFieldEnum[];
};
export type DetalleOrdenCompraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.DetalleOrdenCompraWhereInput;
    orderBy?: Prisma.DetalleOrdenCompraOrderByWithRelationInput | Prisma.DetalleOrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.DetalleOrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleOrdenCompraScalarFieldEnum | Prisma.DetalleOrdenCompraScalarFieldEnum[];
};
export type DetalleOrdenCompraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraCreateInput, Prisma.DetalleOrdenCompraUncheckedCreateInput>;
};
export type DetalleOrdenCompraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DetalleOrdenCompraCreateManyInput | Prisma.DetalleOrdenCompraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DetalleOrdenCompraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    data: Prisma.DetalleOrdenCompraCreateManyInput | Prisma.DetalleOrdenCompraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DetalleOrdenCompraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DetalleOrdenCompraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateInput, Prisma.DetalleOrdenCompraUncheckedUpdateInput>;
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
};
export type DetalleOrdenCompraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateManyMutationInput, Prisma.DetalleOrdenCompraUncheckedUpdateManyInput>;
    where?: Prisma.DetalleOrdenCompraWhereInput;
    limit?: number;
};
export type DetalleOrdenCompraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateManyMutationInput, Prisma.DetalleOrdenCompraUncheckedUpdateManyInput>;
    where?: Prisma.DetalleOrdenCompraWhereInput;
    limit?: number;
    include?: Prisma.DetalleOrdenCompraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DetalleOrdenCompraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetalleOrdenCompraCreateInput, Prisma.DetalleOrdenCompraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DetalleOrdenCompraUpdateInput, Prisma.DetalleOrdenCompraUncheckedUpdateInput>;
};
export type DetalleOrdenCompraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where: Prisma.DetalleOrdenCompraWhereUniqueInput;
};
export type DetalleOrdenCompraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleOrdenCompraWhereInput;
    limit?: number;
};
export type DetalleOrdenCompraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
};
export {};
