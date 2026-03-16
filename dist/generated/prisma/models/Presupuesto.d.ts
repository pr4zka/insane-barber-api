import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PresupuestoModel = runtime.Types.Result.DefaultSelection<Prisma.$PresupuestoPayload>;
export type AggregatePresupuesto = {
    _count: PresupuestoCountAggregateOutputType | null;
    _avg: PresupuestoAvgAggregateOutputType | null;
    _sum: PresupuestoSumAggregateOutputType | null;
    _min: PresupuestoMinAggregateOutputType | null;
    _max: PresupuestoMaxAggregateOutputType | null;
};
export type PresupuestoAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    total: runtime.Decimal | null;
};
export type PresupuestoSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    total: runtime.Decimal | null;
};
export type PresupuestoMinAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    fecha: Date | null;
    total: runtime.Decimal | null;
    estado: string | null;
    observacion: string | null;
};
export type PresupuestoMaxAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    fecha: Date | null;
    total: runtime.Decimal | null;
    estado: string | null;
    observacion: string | null;
};
export type PresupuestoCountAggregateOutputType = {
    id: number;
    clienteId: number;
    fecha: number;
    total: number;
    estado: number;
    observacion: number;
    _all: number;
};
export type PresupuestoAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
    total?: true;
};
export type PresupuestoSumAggregateInputType = {
    id?: true;
    clienteId?: true;
    total?: true;
};
export type PresupuestoMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    fecha?: true;
    total?: true;
    estado?: true;
    observacion?: true;
};
export type PresupuestoMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    fecha?: true;
    total?: true;
    estado?: true;
    observacion?: true;
};
export type PresupuestoCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    fecha?: true;
    total?: true;
    estado?: true;
    observacion?: true;
    _all?: true;
};
export type PresupuestoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresupuestoWhereInput;
    orderBy?: Prisma.PresupuestoOrderByWithRelationInput | Prisma.PresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.PresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PresupuestoCountAggregateInputType;
    _avg?: PresupuestoAvgAggregateInputType;
    _sum?: PresupuestoSumAggregateInputType;
    _min?: PresupuestoMinAggregateInputType;
    _max?: PresupuestoMaxAggregateInputType;
};
export type GetPresupuestoAggregateType<T extends PresupuestoAggregateArgs> = {
    [P in keyof T & keyof AggregatePresupuesto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePresupuesto[P]> : Prisma.GetScalarType<T[P], AggregatePresupuesto[P]>;
};
export type PresupuestoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresupuestoWhereInput;
    orderBy?: Prisma.PresupuestoOrderByWithAggregationInput | Prisma.PresupuestoOrderByWithAggregationInput[];
    by: Prisma.PresupuestoScalarFieldEnum[] | Prisma.PresupuestoScalarFieldEnum;
    having?: Prisma.PresupuestoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PresupuestoCountAggregateInputType | true;
    _avg?: PresupuestoAvgAggregateInputType;
    _sum?: PresupuestoSumAggregateInputType;
    _min?: PresupuestoMinAggregateInputType;
    _max?: PresupuestoMaxAggregateInputType;
};
export type PresupuestoGroupByOutputType = {
    id: number;
    clienteId: number;
    fecha: Date;
    total: runtime.Decimal;
    estado: string;
    observacion: string;
    _count: PresupuestoCountAggregateOutputType | null;
    _avg: PresupuestoAvgAggregateOutputType | null;
    _sum: PresupuestoSumAggregateOutputType | null;
    _min: PresupuestoMinAggregateOutputType | null;
    _max: PresupuestoMaxAggregateOutputType | null;
};
type GetPresupuestoGroupByPayload<T extends PresupuestoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PresupuestoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PresupuestoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PresupuestoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PresupuestoGroupByOutputType[P]>;
}>>;
export type PresupuestoWhereInput = {
    AND?: Prisma.PresupuestoWhereInput | Prisma.PresupuestoWhereInput[];
    OR?: Prisma.PresupuestoWhereInput[];
    NOT?: Prisma.PresupuestoWhereInput | Prisma.PresupuestoWhereInput[];
    id?: Prisma.IntFilter<"Presupuesto"> | number;
    clienteId?: Prisma.IntFilter<"Presupuesto"> | number;
    fecha?: Prisma.DateTimeFilter<"Presupuesto"> | Date | string;
    total?: Prisma.DecimalFilter<"Presupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFilter<"Presupuesto"> | string;
    observacion?: Prisma.StringFilter<"Presupuesto"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    detalles?: Prisma.DetallePresupuestoListRelationFilter;
};
export type PresupuestoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    detalles?: Prisma.DetallePresupuestoOrderByRelationAggregateInput;
};
export type PresupuestoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PresupuestoWhereInput | Prisma.PresupuestoWhereInput[];
    OR?: Prisma.PresupuestoWhereInput[];
    NOT?: Prisma.PresupuestoWhereInput | Prisma.PresupuestoWhereInput[];
    clienteId?: Prisma.IntFilter<"Presupuesto"> | number;
    fecha?: Prisma.DateTimeFilter<"Presupuesto"> | Date | string;
    total?: Prisma.DecimalFilter<"Presupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFilter<"Presupuesto"> | string;
    observacion?: Prisma.StringFilter<"Presupuesto"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    detalles?: Prisma.DetallePresupuestoListRelationFilter;
}, "id">;
export type PresupuestoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    _count?: Prisma.PresupuestoCountOrderByAggregateInput;
    _avg?: Prisma.PresupuestoAvgOrderByAggregateInput;
    _max?: Prisma.PresupuestoMaxOrderByAggregateInput;
    _min?: Prisma.PresupuestoMinOrderByAggregateInput;
    _sum?: Prisma.PresupuestoSumOrderByAggregateInput;
};
export type PresupuestoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PresupuestoScalarWhereWithAggregatesInput | Prisma.PresupuestoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PresupuestoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PresupuestoScalarWhereWithAggregatesInput | Prisma.PresupuestoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Presupuesto"> | number;
    clienteId?: Prisma.IntWithAggregatesFilter<"Presupuesto"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Presupuesto"> | Date | string;
    total?: Prisma.DecimalWithAggregatesFilter<"Presupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringWithAggregatesFilter<"Presupuesto"> | string;
    observacion?: Prisma.StringWithAggregatesFilter<"Presupuesto"> | string;
};
export type PresupuestoCreateInput = {
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutPresupuestosInput;
    detalles?: Prisma.DetallePresupuestoCreateNestedManyWithoutPresupuestoInput;
};
export type PresupuestoUncheckedCreateInput = {
    id?: number;
    clienteId: number;
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
    detalles?: Prisma.DetallePresupuestoUncheckedCreateNestedManyWithoutPresupuestoInput;
};
export type PresupuestoUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutPresupuestosNestedInput;
    detalles?: Prisma.DetallePresupuestoUpdateManyWithoutPresupuestoNestedInput;
};
export type PresupuestoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetallePresupuestoUncheckedUpdateManyWithoutPresupuestoNestedInput;
};
export type PresupuestoCreateManyInput = {
    id?: number;
    clienteId: number;
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
};
export type PresupuestoUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PresupuestoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PresupuestoListRelationFilter = {
    every?: Prisma.PresupuestoWhereInput;
    some?: Prisma.PresupuestoWhereInput;
    none?: Prisma.PresupuestoWhereInput;
};
export type PresupuestoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PresupuestoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type PresupuestoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PresupuestoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type PresupuestoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type PresupuestoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type PresupuestoScalarRelationFilter = {
    is?: Prisma.PresupuestoWhereInput;
    isNot?: Prisma.PresupuestoWhereInput;
};
export type PresupuestoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.PresupuestoCreateWithoutClienteInput, Prisma.PresupuestoUncheckedCreateWithoutClienteInput> | Prisma.PresupuestoCreateWithoutClienteInput[] | Prisma.PresupuestoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PresupuestoCreateOrConnectWithoutClienteInput | Prisma.PresupuestoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.PresupuestoCreateManyClienteInputEnvelope;
    connect?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
};
export type PresupuestoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.PresupuestoCreateWithoutClienteInput, Prisma.PresupuestoUncheckedCreateWithoutClienteInput> | Prisma.PresupuestoCreateWithoutClienteInput[] | Prisma.PresupuestoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PresupuestoCreateOrConnectWithoutClienteInput | Prisma.PresupuestoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.PresupuestoCreateManyClienteInputEnvelope;
    connect?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
};
export type PresupuestoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.PresupuestoCreateWithoutClienteInput, Prisma.PresupuestoUncheckedCreateWithoutClienteInput> | Prisma.PresupuestoCreateWithoutClienteInput[] | Prisma.PresupuestoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PresupuestoCreateOrConnectWithoutClienteInput | Prisma.PresupuestoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.PresupuestoUpsertWithWhereUniqueWithoutClienteInput | Prisma.PresupuestoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.PresupuestoCreateManyClienteInputEnvelope;
    set?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    disconnect?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    delete?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    connect?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    update?: Prisma.PresupuestoUpdateWithWhereUniqueWithoutClienteInput | Prisma.PresupuestoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.PresupuestoUpdateManyWithWhereWithoutClienteInput | Prisma.PresupuestoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.PresupuestoScalarWhereInput | Prisma.PresupuestoScalarWhereInput[];
};
export type PresupuestoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.PresupuestoCreateWithoutClienteInput, Prisma.PresupuestoUncheckedCreateWithoutClienteInput> | Prisma.PresupuestoCreateWithoutClienteInput[] | Prisma.PresupuestoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.PresupuestoCreateOrConnectWithoutClienteInput | Prisma.PresupuestoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.PresupuestoUpsertWithWhereUniqueWithoutClienteInput | Prisma.PresupuestoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.PresupuestoCreateManyClienteInputEnvelope;
    set?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    disconnect?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    delete?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    connect?: Prisma.PresupuestoWhereUniqueInput | Prisma.PresupuestoWhereUniqueInput[];
    update?: Prisma.PresupuestoUpdateWithWhereUniqueWithoutClienteInput | Prisma.PresupuestoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.PresupuestoUpdateManyWithWhereWithoutClienteInput | Prisma.PresupuestoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.PresupuestoScalarWhereInput | Prisma.PresupuestoScalarWhereInput[];
};
export type PresupuestoCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.PresupuestoCreateWithoutDetallesInput, Prisma.PresupuestoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.PresupuestoCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.PresupuestoWhereUniqueInput;
};
export type PresupuestoUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.PresupuestoCreateWithoutDetallesInput, Prisma.PresupuestoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.PresupuestoCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.PresupuestoUpsertWithoutDetallesInput;
    connect?: Prisma.PresupuestoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PresupuestoUpdateToOneWithWhereWithoutDetallesInput, Prisma.PresupuestoUpdateWithoutDetallesInput>, Prisma.PresupuestoUncheckedUpdateWithoutDetallesInput>;
};
export type PresupuestoCreateWithoutClienteInput = {
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
    detalles?: Prisma.DetallePresupuestoCreateNestedManyWithoutPresupuestoInput;
};
export type PresupuestoUncheckedCreateWithoutClienteInput = {
    id?: number;
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
    detalles?: Prisma.DetallePresupuestoUncheckedCreateNestedManyWithoutPresupuestoInput;
};
export type PresupuestoCreateOrConnectWithoutClienteInput = {
    where: Prisma.PresupuestoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PresupuestoCreateWithoutClienteInput, Prisma.PresupuestoUncheckedCreateWithoutClienteInput>;
};
export type PresupuestoCreateManyClienteInputEnvelope = {
    data: Prisma.PresupuestoCreateManyClienteInput | Prisma.PresupuestoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type PresupuestoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.PresupuestoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PresupuestoUpdateWithoutClienteInput, Prisma.PresupuestoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.PresupuestoCreateWithoutClienteInput, Prisma.PresupuestoUncheckedCreateWithoutClienteInput>;
};
export type PresupuestoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.PresupuestoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PresupuestoUpdateWithoutClienteInput, Prisma.PresupuestoUncheckedUpdateWithoutClienteInput>;
};
export type PresupuestoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.PresupuestoScalarWhereInput;
    data: Prisma.XOR<Prisma.PresupuestoUpdateManyMutationInput, Prisma.PresupuestoUncheckedUpdateManyWithoutClienteInput>;
};
export type PresupuestoScalarWhereInput = {
    AND?: Prisma.PresupuestoScalarWhereInput | Prisma.PresupuestoScalarWhereInput[];
    OR?: Prisma.PresupuestoScalarWhereInput[];
    NOT?: Prisma.PresupuestoScalarWhereInput | Prisma.PresupuestoScalarWhereInput[];
    id?: Prisma.IntFilter<"Presupuesto"> | number;
    clienteId?: Prisma.IntFilter<"Presupuesto"> | number;
    fecha?: Prisma.DateTimeFilter<"Presupuesto"> | Date | string;
    total?: Prisma.DecimalFilter<"Presupuesto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFilter<"Presupuesto"> | string;
    observacion?: Prisma.StringFilter<"Presupuesto"> | string;
};
export type PresupuestoCreateWithoutDetallesInput = {
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutPresupuestosInput;
};
export type PresupuestoUncheckedCreateWithoutDetallesInput = {
    id?: number;
    clienteId: number;
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
};
export type PresupuestoCreateOrConnectWithoutDetallesInput = {
    where: Prisma.PresupuestoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PresupuestoCreateWithoutDetallesInput, Prisma.PresupuestoUncheckedCreateWithoutDetallesInput>;
};
export type PresupuestoUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.PresupuestoUpdateWithoutDetallesInput, Prisma.PresupuestoUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.PresupuestoCreateWithoutDetallesInput, Prisma.PresupuestoUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.PresupuestoWhereInput;
};
export type PresupuestoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.PresupuestoWhereInput;
    data: Prisma.XOR<Prisma.PresupuestoUpdateWithoutDetallesInput, Prisma.PresupuestoUncheckedUpdateWithoutDetallesInput>;
};
export type PresupuestoUpdateWithoutDetallesInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutPresupuestosNestedInput;
};
export type PresupuestoUncheckedUpdateWithoutDetallesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PresupuestoCreateManyClienteInput = {
    id?: number;
    fecha?: Date | string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: string;
    observacion?: string;
};
export type PresupuestoUpdateWithoutClienteInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetallePresupuestoUpdateManyWithoutPresupuestoNestedInput;
};
export type PresupuestoUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetallePresupuestoUncheckedUpdateManyWithoutPresupuestoNestedInput;
};
export type PresupuestoUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PresupuestoCountOutputType = {
    detalles: number;
};
export type PresupuestoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | PresupuestoCountOutputTypeCountDetallesArgs;
};
export type PresupuestoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoCountOutputTypeSelect<ExtArgs> | null;
};
export type PresupuestoCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePresupuestoWhereInput;
};
export type PresupuestoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    total?: boolean;
    estado?: boolean;
    observacion?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Presupuesto$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.PresupuestoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["presupuesto"]>;
export type PresupuestoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    total?: boolean;
    estado?: boolean;
    observacion?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["presupuesto"]>;
export type PresupuestoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    total?: boolean;
    estado?: boolean;
    observacion?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["presupuesto"]>;
export type PresupuestoSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    fecha?: boolean;
    total?: boolean;
    estado?: boolean;
    observacion?: boolean;
};
export type PresupuestoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "fecha" | "total" | "estado" | "observacion", ExtArgs["result"]["presupuesto"]>;
export type PresupuestoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.Presupuesto$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.PresupuestoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PresupuestoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type PresupuestoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type $PresupuestoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Presupuesto";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        detalles: Prisma.$DetallePresupuestoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clienteId: number;
        fecha: Date;
        total: runtime.Decimal;
        estado: string;
        observacion: string;
    }, ExtArgs["result"]["presupuesto"]>;
    composites: {};
};
export type PresupuestoGetPayload<S extends boolean | null | undefined | PresupuestoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload, S>;
export type PresupuestoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PresupuestoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PresupuestoCountAggregateInputType | true;
};
export interface PresupuestoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Presupuesto'];
        meta: {
            name: 'Presupuesto';
        };
    };
    findUnique<T extends PresupuestoFindUniqueArgs>(args: Prisma.SelectSubset<T, PresupuestoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PresupuestoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PresupuestoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PresupuestoFindFirstArgs>(args?: Prisma.SelectSubset<T, PresupuestoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PresupuestoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PresupuestoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PresupuestoFindManyArgs>(args?: Prisma.SelectSubset<T, PresupuestoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PresupuestoCreateArgs>(args: Prisma.SelectSubset<T, PresupuestoCreateArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PresupuestoCreateManyArgs>(args?: Prisma.SelectSubset<T, PresupuestoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PresupuestoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PresupuestoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PresupuestoDeleteArgs>(args: Prisma.SelectSubset<T, PresupuestoDeleteArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PresupuestoUpdateArgs>(args: Prisma.SelectSubset<T, PresupuestoUpdateArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PresupuestoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PresupuestoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PresupuestoUpdateManyArgs>(args: Prisma.SelectSubset<T, PresupuestoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PresupuestoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PresupuestoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PresupuestoUpsertArgs>(args: Prisma.SelectSubset<T, PresupuestoUpsertArgs<ExtArgs>>): Prisma.Prisma__PresupuestoClient<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PresupuestoCountArgs>(args?: Prisma.Subset<T, PresupuestoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PresupuestoCountAggregateOutputType> : number>;
    aggregate<T extends PresupuestoAggregateArgs>(args: Prisma.Subset<T, PresupuestoAggregateArgs>): Prisma.PrismaPromise<GetPresupuestoAggregateType<T>>;
    groupBy<T extends PresupuestoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PresupuestoGroupByArgs['orderBy'];
    } : {
        orderBy?: PresupuestoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PresupuestoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresupuestoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PresupuestoFieldRefs;
}
export interface Prisma__PresupuestoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.Presupuesto$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Presupuesto$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PresupuestoFieldRefs {
    readonly id: Prisma.FieldRef<"Presupuesto", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Presupuesto", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Presupuesto", 'DateTime'>;
    readonly total: Prisma.FieldRef<"Presupuesto", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"Presupuesto", 'String'>;
    readonly observacion: Prisma.FieldRef<"Presupuesto", 'String'>;
}
export type PresupuestoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where: Prisma.PresupuestoWhereUniqueInput;
};
export type PresupuestoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where: Prisma.PresupuestoWhereUniqueInput;
};
export type PresupuestoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where?: Prisma.PresupuestoWhereInput;
    orderBy?: Prisma.PresupuestoOrderByWithRelationInput | Prisma.PresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.PresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresupuestoScalarFieldEnum | Prisma.PresupuestoScalarFieldEnum[];
};
export type PresupuestoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where?: Prisma.PresupuestoWhereInput;
    orderBy?: Prisma.PresupuestoOrderByWithRelationInput | Prisma.PresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.PresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresupuestoScalarFieldEnum | Prisma.PresupuestoScalarFieldEnum[];
};
export type PresupuestoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where?: Prisma.PresupuestoWhereInput;
    orderBy?: Prisma.PresupuestoOrderByWithRelationInput | Prisma.PresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.PresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresupuestoScalarFieldEnum | Prisma.PresupuestoScalarFieldEnum[];
};
export type PresupuestoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PresupuestoCreateInput, Prisma.PresupuestoUncheckedCreateInput>;
};
export type PresupuestoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PresupuestoCreateManyInput | Prisma.PresupuestoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PresupuestoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    data: Prisma.PresupuestoCreateManyInput | Prisma.PresupuestoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PresupuestoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PresupuestoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PresupuestoUpdateInput, Prisma.PresupuestoUncheckedUpdateInput>;
    where: Prisma.PresupuestoWhereUniqueInput;
};
export type PresupuestoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PresupuestoUpdateManyMutationInput, Prisma.PresupuestoUncheckedUpdateManyInput>;
    where?: Prisma.PresupuestoWhereInput;
    limit?: number;
};
export type PresupuestoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PresupuestoUpdateManyMutationInput, Prisma.PresupuestoUncheckedUpdateManyInput>;
    where?: Prisma.PresupuestoWhereInput;
    limit?: number;
    include?: Prisma.PresupuestoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PresupuestoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where: Prisma.PresupuestoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PresupuestoCreateInput, Prisma.PresupuestoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PresupuestoUpdateInput, Prisma.PresupuestoUncheckedUpdateInput>;
};
export type PresupuestoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where: Prisma.PresupuestoWhereUniqueInput;
};
export type PresupuestoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresupuestoWhereInput;
    limit?: number;
};
export type Presupuesto$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PresupuestoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
};
export {};
