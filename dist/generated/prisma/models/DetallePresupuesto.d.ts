import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type DetallePresupuestoModel = runtime.Types.Result.DefaultSelection<Prisma.$DetallePresupuestoPayload>;
export type AggregateDetallePresupuesto = {
    _count: DetallePresupuestoCountAggregateOutputType | null;
    _avg: DetallePresupuestoAvgAggregateOutputType | null;
    _sum: DetallePresupuestoSumAggregateOutputType | null;
    _min: DetallePresupuestoMinAggregateOutputType | null;
    _max: DetallePresupuestoMaxAggregateOutputType | null;
};
export type DetallePresupuestoAvgAggregateOutputType = {
    id: number | null;
    presupuestoId: number | null;
    servicioId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetallePresupuestoSumAggregateOutputType = {
    id: number | null;
    presupuestoId: number | null;
    servicioId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetallePresupuestoMinAggregateOutputType = {
    id: number | null;
    presupuestoId: number | null;
    servicioId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetallePresupuestoMaxAggregateOutputType = {
    id: number | null;
    presupuestoId: number | null;
    servicioId: number | null;
    cantidad: number | null;
    precioUnitario: runtime.Decimal | null;
    subtotal: runtime.Decimal | null;
};
export type DetallePresupuestoCountAggregateOutputType = {
    id: number;
    presupuestoId: number;
    servicioId: number;
    cantidad: number;
    precioUnitario: number;
    subtotal: number;
    _all: number;
};
export type DetallePresupuestoAvgAggregateInputType = {
    id?: true;
    presupuestoId?: true;
    servicioId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetallePresupuestoSumAggregateInputType = {
    id?: true;
    presupuestoId?: true;
    servicioId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetallePresupuestoMinAggregateInputType = {
    id?: true;
    presupuestoId?: true;
    servicioId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetallePresupuestoMaxAggregateInputType = {
    id?: true;
    presupuestoId?: true;
    servicioId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
};
export type DetallePresupuestoCountAggregateInputType = {
    id?: true;
    presupuestoId?: true;
    servicioId?: true;
    cantidad?: true;
    precioUnitario?: true;
    subtotal?: true;
    _all?: true;
};
export type DetallePresupuestoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePresupuestoWhereInput;
    orderBy?: Prisma.DetallePresupuestoOrderByWithRelationInput | Prisma.DetallePresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DetallePresupuestoCountAggregateInputType;
    _avg?: DetallePresupuestoAvgAggregateInputType;
    _sum?: DetallePresupuestoSumAggregateInputType;
    _min?: DetallePresupuestoMinAggregateInputType;
    _max?: DetallePresupuestoMaxAggregateInputType;
};
export type GetDetallePresupuestoAggregateType<T extends DetallePresupuestoAggregateArgs> = {
    [P in keyof T & keyof AggregateDetallePresupuesto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetallePresupuesto[P]> : Prisma.GetScalarType<T[P], AggregateDetallePresupuesto[P]>;
};
export type DetallePresupuestoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePresupuestoWhereInput;
    orderBy?: Prisma.DetallePresupuestoOrderByWithAggregationInput | Prisma.DetallePresupuestoOrderByWithAggregationInput[];
    by: Prisma.DetallePresupuestoScalarFieldEnum[] | Prisma.DetallePresupuestoScalarFieldEnum;
    having?: Prisma.DetallePresupuestoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DetallePresupuestoCountAggregateInputType | true;
    _avg?: DetallePresupuestoAvgAggregateInputType;
    _sum?: DetallePresupuestoSumAggregateInputType;
    _min?: DetallePresupuestoMinAggregateInputType;
    _max?: DetallePresupuestoMaxAggregateInputType;
};
export type DetallePresupuestoGroupByOutputType = {
    id: number;
    presupuestoId: number;
    servicioId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal;
    subtotal: runtime.Decimal;
    _count: DetallePresupuestoCountAggregateOutputType | null;
    _avg: DetallePresupuestoAvgAggregateOutputType | null;
    _sum: DetallePresupuestoSumAggregateOutputType | null;
    _min: DetallePresupuestoMinAggregateOutputType | null;
    _max: DetallePresupuestoMaxAggregateOutputType | null;
};
type GetDetallePresupuestoGroupByPayload<T extends DetallePresupuestoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DetallePresupuestoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DetallePresupuestoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DetallePresupuestoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DetallePresupuestoGroupByOutputType[P]>;
}>>;
export type DetallePresupuestoWhereInput = {
    AND?: Prisma.DetallePresupuestoWhereInput | Prisma.DetallePresupuestoWhereInput[];
    OR?: Prisma.DetallePresupuestoWhereInput[];
    NOT?: Prisma.DetallePresupuestoWhereInput | Prisma.DetallePresupuestoWhereInput[];
    id?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    presupuestoId?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    servicioId?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    cantidad?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    presupuesto?: Prisma.XOR<Prisma.PresupuestoScalarRelationFilter, Prisma.PresupuestoWhereInput>;
    servicio?: Prisma.XOR<Prisma.ServicioScalarRelationFilter, Prisma.ServicioWhereInput>;
};
export type DetallePresupuestoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    presupuesto?: Prisma.PresupuestoOrderByWithRelationInput;
    servicio?: Prisma.ServicioOrderByWithRelationInput;
};
export type DetallePresupuestoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.DetallePresupuestoWhereInput | Prisma.DetallePresupuestoWhereInput[];
    OR?: Prisma.DetallePresupuestoWhereInput[];
    NOT?: Prisma.DetallePresupuestoWhereInput | Prisma.DetallePresupuestoWhereInput[];
    presupuestoId?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    servicioId?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    cantidad?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    presupuesto?: Prisma.XOR<Prisma.PresupuestoScalarRelationFilter, Prisma.PresupuestoWhereInput>;
    servicio?: Prisma.XOR<Prisma.ServicioScalarRelationFilter, Prisma.ServicioWhereInput>;
}, "id">;
export type DetallePresupuestoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
    _count?: Prisma.DetallePresupuestoCountOrderByAggregateInput;
    _avg?: Prisma.DetallePresupuestoAvgOrderByAggregateInput;
    _max?: Prisma.DetallePresupuestoMaxOrderByAggregateInput;
    _min?: Prisma.DetallePresupuestoMinOrderByAggregateInput;
    _sum?: Prisma.DetallePresupuestoSumOrderByAggregateInput;
};
export type DetallePresupuestoScalarWhereWithAggregatesInput = {
    AND?: Prisma.DetallePresupuestoScalarWhereWithAggregatesInput | Prisma.DetallePresupuestoScalarWhereWithAggregatesInput[];
    OR?: Prisma.DetallePresupuestoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DetallePresupuestoScalarWhereWithAggregatesInput | Prisma.DetallePresupuestoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"DetallePresupuesto"> | number;
    presupuestoId?: Prisma.IntWithAggregatesFilter<"DetallePresupuesto"> | number;
    servicioId?: Prisma.IntWithAggregatesFilter<"DetallePresupuesto"> | number;
    cantidad?: Prisma.IntWithAggregatesFilter<"DetallePresupuesto"> | number;
    precioUnitario?: Prisma.DecimalWithAggregatesFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalWithAggregatesFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoCreateInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    presupuesto: Prisma.PresupuestoCreateNestedOneWithoutDetallesInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutDetallesPresupuestoInput;
};
export type DetallePresupuestoUncheckedCreateInput = {
    id?: number;
    presupuestoId: number;
    servicioId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUpdateInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    presupuesto?: Prisma.PresupuestoUpdateOneRequiredWithoutDetallesNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutDetallesPresupuestoNestedInput;
};
export type DetallePresupuestoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    presupuestoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoCreateManyInput = {
    id?: number;
    presupuestoId: number;
    servicioId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUpdateManyMutationInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    presupuestoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoListRelationFilter = {
    every?: Prisma.DetallePresupuestoWhereInput;
    some?: Prisma.DetallePresupuestoWhereInput;
    none?: Prisma.DetallePresupuestoWhereInput;
};
export type DetallePresupuestoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DetallePresupuestoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePresupuestoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePresupuestoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePresupuestoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePresupuestoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    presupuestoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    precioUnitario?: Prisma.SortOrder;
    subtotal?: Prisma.SortOrder;
};
export type DetallePresupuestoCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput> | Prisma.DetallePresupuestoCreateWithoutServicioInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput | Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyServicioInputEnvelope;
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
};
export type DetallePresupuestoUncheckedCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput> | Prisma.DetallePresupuestoCreateWithoutServicioInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput | Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyServicioInputEnvelope;
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
};
export type DetallePresupuestoUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput> | Prisma.DetallePresupuestoCreateWithoutServicioInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput | Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutServicioInput | Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyServicioInputEnvelope;
    set?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    disconnect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    delete?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    update?: Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutServicioInput | Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.DetallePresupuestoUpdateManyWithWhereWithoutServicioInput | Prisma.DetallePresupuestoUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.DetallePresupuestoScalarWhereInput | Prisma.DetallePresupuestoScalarWhereInput[];
};
export type DetallePresupuestoUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput> | Prisma.DetallePresupuestoCreateWithoutServicioInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput | Prisma.DetallePresupuestoCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutServicioInput | Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyServicioInputEnvelope;
    set?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    disconnect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    delete?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    update?: Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutServicioInput | Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.DetallePresupuestoUpdateManyWithWhereWithoutServicioInput | Prisma.DetallePresupuestoUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.DetallePresupuestoScalarWhereInput | Prisma.DetallePresupuestoScalarWhereInput[];
};
export type DetallePresupuestoCreateNestedManyWithoutPresupuestoInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput> | Prisma.DetallePresupuestoCreateWithoutPresupuestoInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput | Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyPresupuestoInputEnvelope;
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
};
export type DetallePresupuestoUncheckedCreateNestedManyWithoutPresupuestoInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput> | Prisma.DetallePresupuestoCreateWithoutPresupuestoInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput | Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyPresupuestoInputEnvelope;
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
};
export type DetallePresupuestoUpdateManyWithoutPresupuestoNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput> | Prisma.DetallePresupuestoCreateWithoutPresupuestoInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput | Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput[];
    upsert?: Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutPresupuestoInput | Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutPresupuestoInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyPresupuestoInputEnvelope;
    set?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    disconnect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    delete?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    update?: Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutPresupuestoInput | Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutPresupuestoInput[];
    updateMany?: Prisma.DetallePresupuestoUpdateManyWithWhereWithoutPresupuestoInput | Prisma.DetallePresupuestoUpdateManyWithWhereWithoutPresupuestoInput[];
    deleteMany?: Prisma.DetallePresupuestoScalarWhereInput | Prisma.DetallePresupuestoScalarWhereInput[];
};
export type DetallePresupuestoUncheckedUpdateManyWithoutPresupuestoNestedInput = {
    create?: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput> | Prisma.DetallePresupuestoCreateWithoutPresupuestoInput[] | Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput[];
    connectOrCreate?: Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput | Prisma.DetallePresupuestoCreateOrConnectWithoutPresupuestoInput[];
    upsert?: Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutPresupuestoInput | Prisma.DetallePresupuestoUpsertWithWhereUniqueWithoutPresupuestoInput[];
    createMany?: Prisma.DetallePresupuestoCreateManyPresupuestoInputEnvelope;
    set?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    disconnect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    delete?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    connect?: Prisma.DetallePresupuestoWhereUniqueInput | Prisma.DetallePresupuestoWhereUniqueInput[];
    update?: Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutPresupuestoInput | Prisma.DetallePresupuestoUpdateWithWhereUniqueWithoutPresupuestoInput[];
    updateMany?: Prisma.DetallePresupuestoUpdateManyWithWhereWithoutPresupuestoInput | Prisma.DetallePresupuestoUpdateManyWithWhereWithoutPresupuestoInput[];
    deleteMany?: Prisma.DetallePresupuestoScalarWhereInput | Prisma.DetallePresupuestoScalarWhereInput[];
};
export type DetallePresupuestoCreateWithoutServicioInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    presupuesto: Prisma.PresupuestoCreateNestedOneWithoutDetallesInput;
};
export type DetallePresupuestoUncheckedCreateWithoutServicioInput = {
    id?: number;
    presupuestoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoCreateOrConnectWithoutServicioInput = {
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput>;
};
export type DetallePresupuestoCreateManyServicioInputEnvelope = {
    data: Prisma.DetallePresupuestoCreateManyServicioInput | Prisma.DetallePresupuestoCreateManyServicioInput[];
    skipDuplicates?: boolean;
};
export type DetallePresupuestoUpsertWithWhereUniqueWithoutServicioInput = {
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetallePresupuestoUpdateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedUpdateWithoutServicioInput>;
    create: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedCreateWithoutServicioInput>;
};
export type DetallePresupuestoUpdateWithWhereUniqueWithoutServicioInput = {
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateWithoutServicioInput, Prisma.DetallePresupuestoUncheckedUpdateWithoutServicioInput>;
};
export type DetallePresupuestoUpdateManyWithWhereWithoutServicioInput = {
    where: Prisma.DetallePresupuestoScalarWhereInput;
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateManyMutationInput, Prisma.DetallePresupuestoUncheckedUpdateManyWithoutServicioInput>;
};
export type DetallePresupuestoScalarWhereInput = {
    AND?: Prisma.DetallePresupuestoScalarWhereInput | Prisma.DetallePresupuestoScalarWhereInput[];
    OR?: Prisma.DetallePresupuestoScalarWhereInput[];
    NOT?: Prisma.DetallePresupuestoScalarWhereInput | Prisma.DetallePresupuestoScalarWhereInput[];
    id?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    presupuestoId?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    servicioId?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    cantidad?: Prisma.IntFilter<"DetallePresupuesto"> | number;
    precioUnitario?: Prisma.DecimalFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFilter<"DetallePresupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoCreateWithoutPresupuestoInput = {
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    servicio: Prisma.ServicioCreateNestedOneWithoutDetallesPresupuestoInput;
};
export type DetallePresupuestoUncheckedCreateWithoutPresupuestoInput = {
    id?: number;
    servicioId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoCreateOrConnectWithoutPresupuestoInput = {
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput>;
};
export type DetallePresupuestoCreateManyPresupuestoInputEnvelope = {
    data: Prisma.DetallePresupuestoCreateManyPresupuestoInput | Prisma.DetallePresupuestoCreateManyPresupuestoInput[];
    skipDuplicates?: boolean;
};
export type DetallePresupuestoUpsertWithWhereUniqueWithoutPresupuestoInput = {
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    update: Prisma.XOR<Prisma.DetallePresupuestoUpdateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedUpdateWithoutPresupuestoInput>;
    create: Prisma.XOR<Prisma.DetallePresupuestoCreateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedCreateWithoutPresupuestoInput>;
};
export type DetallePresupuestoUpdateWithWhereUniqueWithoutPresupuestoInput = {
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateWithoutPresupuestoInput, Prisma.DetallePresupuestoUncheckedUpdateWithoutPresupuestoInput>;
};
export type DetallePresupuestoUpdateManyWithWhereWithoutPresupuestoInput = {
    where: Prisma.DetallePresupuestoScalarWhereInput;
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateManyMutationInput, Prisma.DetallePresupuestoUncheckedUpdateManyWithoutPresupuestoInput>;
};
export type DetallePresupuestoCreateManyServicioInput = {
    id?: number;
    presupuestoId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUpdateWithoutServicioInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    presupuesto?: Prisma.PresupuestoUpdateOneRequiredWithoutDetallesNestedInput;
};
export type DetallePresupuestoUncheckedUpdateWithoutServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    presupuestoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUncheckedUpdateManyWithoutServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    presupuestoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoCreateManyPresupuestoInput = {
    id?: number;
    servicioId: number;
    cantidad: number;
    precioUnitario: runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUpdateWithoutPresupuestoInput = {
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutDetallesPresupuestoNestedInput;
};
export type DetallePresupuestoUncheckedUpdateWithoutPresupuestoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoUncheckedUpdateManyWithoutPresupuestoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.IntFieldUpdateOperationsInput | number;
    precioUnitario?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    subtotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type DetallePresupuestoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    presupuestoId?: boolean;
    servicioId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    presupuesto?: boolean | Prisma.PresupuestoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detallePresupuesto"]>;
export type DetallePresupuestoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    presupuestoId?: boolean;
    servicioId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    presupuesto?: boolean | Prisma.PresupuestoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detallePresupuesto"]>;
export type DetallePresupuestoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    presupuestoId?: boolean;
    servicioId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
    presupuesto?: boolean | Prisma.PresupuestoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["detallePresupuesto"]>;
export type DetallePresupuestoSelectScalar = {
    id?: boolean;
    presupuestoId?: boolean;
    servicioId?: boolean;
    cantidad?: boolean;
    precioUnitario?: boolean;
    subtotal?: boolean;
};
export type DetallePresupuestoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "presupuestoId" | "servicioId" | "cantidad" | "precioUnitario" | "subtotal", ExtArgs["result"]["detallePresupuesto"]>;
export type DetallePresupuestoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    presupuesto?: boolean | Prisma.PresupuestoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
};
export type DetallePresupuestoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    presupuesto?: boolean | Prisma.PresupuestoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
};
export type DetallePresupuestoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    presupuesto?: boolean | Prisma.PresupuestoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
};
export type $DetallePresupuestoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DetallePresupuesto";
    objects: {
        presupuesto: Prisma.$PresupuestoPayload<ExtArgs>;
        servicio: Prisma.$ServicioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        presupuestoId: number;
        servicioId: number;
        cantidad: number;
        precioUnitario: runtime.Decimal;
        subtotal: runtime.Decimal;
    }, ExtArgs["result"]["detallePresupuesto"]>;
    composites: {};
};
export type DetallePresupuestoGetPayload<S extends boolean | null | undefined | DetallePresupuestoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload, S>;
export type DetallePresupuestoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DetallePresupuestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DetallePresupuestoCountAggregateInputType | true;
};
export interface DetallePresupuestoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DetallePresupuesto'];
        meta: {
            name: 'DetallePresupuesto';
        };
    };
    findUnique<T extends DetallePresupuestoFindUniqueArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DetallePresupuestoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DetallePresupuestoFindFirstArgs>(args?: Prisma.SelectSubset<T, DetallePresupuestoFindFirstArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DetallePresupuestoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DetallePresupuestoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DetallePresupuestoFindManyArgs>(args?: Prisma.SelectSubset<T, DetallePresupuestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DetallePresupuestoCreateArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoCreateArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DetallePresupuestoCreateManyArgs>(args?: Prisma.SelectSubset<T, DetallePresupuestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DetallePresupuestoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DetallePresupuestoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DetallePresupuestoDeleteArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoDeleteArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DetallePresupuestoUpdateArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoUpdateArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DetallePresupuestoDeleteManyArgs>(args?: Prisma.SelectSubset<T, DetallePresupuestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DetallePresupuestoUpdateManyArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DetallePresupuestoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DetallePresupuestoUpsertArgs>(args: Prisma.SelectSubset<T, DetallePresupuestoUpsertArgs<ExtArgs>>): Prisma.Prisma__DetallePresupuestoClient<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DetallePresupuestoCountArgs>(args?: Prisma.Subset<T, DetallePresupuestoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DetallePresupuestoCountAggregateOutputType> : number>;
    aggregate<T extends DetallePresupuestoAggregateArgs>(args: Prisma.Subset<T, DetallePresupuestoAggregateArgs>): Prisma.PrismaPromise<GetDetallePresupuestoAggregateType<T>>;
    groupBy<T extends DetallePresupuestoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DetallePresupuestoGroupByArgs['orderBy'];
    } : {
        orderBy?: DetallePresupuestoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DetallePresupuestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetallePresupuestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DetallePresupuestoFieldRefs;
}
export interface Prisma__DetallePresupuestoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    presupuesto<T extends Prisma.PresupuestoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PresupuestoDefaultArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    servicio<T extends Prisma.ServicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DetallePresupuestoFieldRefs {
    readonly id: Prisma.FieldRef<"DetallePresupuesto", 'Int'>;
    readonly presupuestoId: Prisma.FieldRef<"DetallePresupuesto", 'Int'>;
    readonly servicioId: Prisma.FieldRef<"DetallePresupuesto", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"DetallePresupuesto", 'Int'>;
    readonly precioUnitario: Prisma.FieldRef<"DetallePresupuesto", 'Decimal'>;
    readonly subtotal: Prisma.FieldRef<"DetallePresupuesto", 'Decimal'>;
}
export type DetallePresupuestoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where: Prisma.DetallePresupuestoWhereUniqueInput;
};
export type DetallePresupuestoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where: Prisma.DetallePresupuestoWhereUniqueInput;
};
export type DetallePresupuestoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where?: Prisma.DetallePresupuestoWhereInput;
    orderBy?: Prisma.DetallePresupuestoOrderByWithRelationInput | Prisma.DetallePresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePresupuestoScalarFieldEnum | Prisma.DetallePresupuestoScalarFieldEnum[];
};
export type DetallePresupuestoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where?: Prisma.DetallePresupuestoWhereInput;
    orderBy?: Prisma.DetallePresupuestoOrderByWithRelationInput | Prisma.DetallePresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePresupuestoScalarFieldEnum | Prisma.DetallePresupuestoScalarFieldEnum[];
};
export type DetallePresupuestoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where?: Prisma.DetallePresupuestoWhereInput;
    orderBy?: Prisma.DetallePresupuestoOrderByWithRelationInput | Prisma.DetallePresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePresupuestoScalarFieldEnum | Prisma.DetallePresupuestoScalarFieldEnum[];
};
export type DetallePresupuestoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetallePresupuestoCreateInput, Prisma.DetallePresupuestoUncheckedCreateInput>;
};
export type DetallePresupuestoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DetallePresupuestoCreateManyInput | Prisma.DetallePresupuestoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DetallePresupuestoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    data: Prisma.DetallePresupuestoCreateManyInput | Prisma.DetallePresupuestoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DetallePresupuestoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DetallePresupuestoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateInput, Prisma.DetallePresupuestoUncheckedUpdateInput>;
    where: Prisma.DetallePresupuestoWhereUniqueInput;
};
export type DetallePresupuestoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateManyMutationInput, Prisma.DetallePresupuestoUncheckedUpdateManyInput>;
    where?: Prisma.DetallePresupuestoWhereInput;
    limit?: number;
};
export type DetallePresupuestoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DetallePresupuestoUpdateManyMutationInput, Prisma.DetallePresupuestoUncheckedUpdateManyInput>;
    where?: Prisma.DetallePresupuestoWhereInput;
    limit?: number;
    include?: Prisma.DetallePresupuestoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DetallePresupuestoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where: Prisma.DetallePresupuestoWhereUniqueInput;
    create: Prisma.XOR<Prisma.DetallePresupuestoCreateInput, Prisma.DetallePresupuestoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DetallePresupuestoUpdateInput, Prisma.DetallePresupuestoUncheckedUpdateInput>;
};
export type DetallePresupuestoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where: Prisma.DetallePresupuestoWhereUniqueInput;
};
export type DetallePresupuestoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePresupuestoWhereInput;
    limit?: number;
};
export type DetallePresupuestoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
};
export {};
