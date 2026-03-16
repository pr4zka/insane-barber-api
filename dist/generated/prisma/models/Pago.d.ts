import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PagoModel = runtime.Types.Result.DefaultSelection<Prisma.$PagoPayload>;
export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type PagoAvgAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    monto: runtime.Decimal | null;
    montoOriginal: runtime.Decimal | null;
    promocionId: number | null;
    descuentoId: number | null;
    porcentajeAplicado: runtime.Decimal | null;
};
export type PagoSumAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    monto: runtime.Decimal | null;
    montoOriginal: runtime.Decimal | null;
    promocionId: number | null;
    descuentoId: number | null;
    porcentajeAplicado: runtime.Decimal | null;
};
export type PagoMinAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    metodoPago: string | null;
    monto: runtime.Decimal | null;
    montoOriginal: runtime.Decimal | null;
    promocionId: number | null;
    descuentoId: number | null;
    porcentajeAplicado: runtime.Decimal | null;
    dpagoRef: string | null;
    estado: string | null;
    fecha: Date | null;
};
export type PagoMaxAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    metodoPago: string | null;
    monto: runtime.Decimal | null;
    montoOriginal: runtime.Decimal | null;
    promocionId: number | null;
    descuentoId: number | null;
    porcentajeAplicado: runtime.Decimal | null;
    dpagoRef: string | null;
    estado: string | null;
    fecha: Date | null;
};
export type PagoCountAggregateOutputType = {
    id: number;
    turnoId: number;
    metodoPago: number;
    monto: number;
    montoOriginal: number;
    promocionId: number;
    descuentoId: number;
    porcentajeAplicado: number;
    dpagoRef: number;
    estado: number;
    fecha: number;
    _all: number;
};
export type PagoAvgAggregateInputType = {
    id?: true;
    turnoId?: true;
    monto?: true;
    montoOriginal?: true;
    promocionId?: true;
    descuentoId?: true;
    porcentajeAplicado?: true;
};
export type PagoSumAggregateInputType = {
    id?: true;
    turnoId?: true;
    monto?: true;
    montoOriginal?: true;
    promocionId?: true;
    descuentoId?: true;
    porcentajeAplicado?: true;
};
export type PagoMinAggregateInputType = {
    id?: true;
    turnoId?: true;
    metodoPago?: true;
    monto?: true;
    montoOriginal?: true;
    promocionId?: true;
    descuentoId?: true;
    porcentajeAplicado?: true;
    dpagoRef?: true;
    estado?: true;
    fecha?: true;
};
export type PagoMaxAggregateInputType = {
    id?: true;
    turnoId?: true;
    metodoPago?: true;
    monto?: true;
    montoOriginal?: true;
    promocionId?: true;
    descuentoId?: true;
    porcentajeAplicado?: true;
    dpagoRef?: true;
    estado?: true;
    fecha?: true;
};
export type PagoCountAggregateInputType = {
    id?: true;
    turnoId?: true;
    metodoPago?: true;
    monto?: true;
    montoOriginal?: true;
    promocionId?: true;
    descuentoId?: true;
    porcentajeAplicado?: true;
    dpagoRef?: true;
    estado?: true;
    fecha?: true;
    _all?: true;
};
export type PagoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithRelationInput | Prisma.PagoOrderByWithRelationInput[];
    cursor?: Prisma.PagoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PagoCountAggregateInputType;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
    [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePago[P]> : Prisma.GetScalarType<T[P], AggregatePago[P]>;
};
export type PagoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
    orderBy?: Prisma.PagoOrderByWithAggregationInput | Prisma.PagoOrderByWithAggregationInput[];
    by: Prisma.PagoScalarFieldEnum[] | Prisma.PagoScalarFieldEnum;
    having?: Prisma.PagoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PagoCountAggregateInputType | true;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type PagoGroupByOutputType = {
    id: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal;
    montoOriginal: runtime.Decimal | null;
    promocionId: number | null;
    descuentoId: number | null;
    porcentajeAplicado: runtime.Decimal | null;
    dpagoRef: string | null;
    estado: string;
    fecha: Date;
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PagoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]>;
}>>;
export type PagoWhereInput = {
    AND?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    OR?: Prisma.PagoWhereInput[];
    NOT?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    id?: Prisma.IntFilter<"Pago"> | number;
    turnoId?: Prisma.IntFilter<"Pago"> | number;
    metodoPago?: Prisma.StringFilter<"Pago"> | string;
    monto?: Prisma.DecimalFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.DecimalNullableFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.IntNullableFilter<"Pago"> | number | null;
    descuentoId?: Prisma.IntNullableFilter<"Pago"> | number | null;
    porcentajeAplicado?: Prisma.DecimalNullableFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.StringNullableFilter<"Pago"> | string | null;
    estado?: Prisma.StringFilter<"Pago"> | string;
    fecha?: Prisma.DateTimeFilter<"Pago"> | Date | string;
    turno?: Prisma.XOR<Prisma.TurnoScalarRelationFilter, Prisma.TurnoWhereInput>;
    promocion?: Prisma.XOR<Prisma.PromocionNullableScalarRelationFilter, Prisma.PromocionWhereInput> | null;
    descuento?: Prisma.XOR<Prisma.DescuentoNullableScalarRelationFilter, Prisma.DescuentoWhereInput> | null;
    notas?: Prisma.NotaCreditoDebitoListRelationFilter;
    libroVenta?: Prisma.XOR<Prisma.LibroVentasNullableScalarRelationFilter, Prisma.LibroVentasWhereInput> | null;
};
export type PagoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrderInput | Prisma.SortOrder;
    promocionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    descuentoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrderInput | Prisma.SortOrder;
    dpagoRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    turno?: Prisma.TurnoOrderByWithRelationInput;
    promocion?: Prisma.PromocionOrderByWithRelationInput;
    descuento?: Prisma.DescuentoOrderByWithRelationInput;
    notas?: Prisma.NotaCreditoDebitoOrderByRelationAggregateInput;
    libroVenta?: Prisma.LibroVentasOrderByWithRelationInput;
};
export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    turnoId?: number;
    AND?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    OR?: Prisma.PagoWhereInput[];
    NOT?: Prisma.PagoWhereInput | Prisma.PagoWhereInput[];
    metodoPago?: Prisma.StringFilter<"Pago"> | string;
    monto?: Prisma.DecimalFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.DecimalNullableFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.IntNullableFilter<"Pago"> | number | null;
    descuentoId?: Prisma.IntNullableFilter<"Pago"> | number | null;
    porcentajeAplicado?: Prisma.DecimalNullableFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.StringNullableFilter<"Pago"> | string | null;
    estado?: Prisma.StringFilter<"Pago"> | string;
    fecha?: Prisma.DateTimeFilter<"Pago"> | Date | string;
    turno?: Prisma.XOR<Prisma.TurnoScalarRelationFilter, Prisma.TurnoWhereInput>;
    promocion?: Prisma.XOR<Prisma.PromocionNullableScalarRelationFilter, Prisma.PromocionWhereInput> | null;
    descuento?: Prisma.XOR<Prisma.DescuentoNullableScalarRelationFilter, Prisma.DescuentoWhereInput> | null;
    notas?: Prisma.NotaCreditoDebitoListRelationFilter;
    libroVenta?: Prisma.XOR<Prisma.LibroVentasNullableScalarRelationFilter, Prisma.LibroVentasWhereInput> | null;
}, "id" | "turnoId">;
export type PagoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrderInput | Prisma.SortOrder;
    promocionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    descuentoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrderInput | Prisma.SortOrder;
    dpagoRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.PagoCountOrderByAggregateInput;
    _avg?: Prisma.PagoAvgOrderByAggregateInput;
    _max?: Prisma.PagoMaxOrderByAggregateInput;
    _min?: Prisma.PagoMinOrderByAggregateInput;
    _sum?: Prisma.PagoSumOrderByAggregateInput;
};
export type PagoScalarWhereWithAggregatesInput = {
    AND?: Prisma.PagoScalarWhereWithAggregatesInput | Prisma.PagoScalarWhereWithAggregatesInput[];
    OR?: Prisma.PagoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PagoScalarWhereWithAggregatesInput | Prisma.PagoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Pago"> | number;
    turnoId?: Prisma.IntWithAggregatesFilter<"Pago"> | number;
    metodoPago?: Prisma.StringWithAggregatesFilter<"Pago"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.DecimalNullableWithAggregatesFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.IntNullableWithAggregatesFilter<"Pago"> | number | null;
    descuentoId?: Prisma.IntNullableWithAggregatesFilter<"Pago"> | number | null;
    porcentajeAplicado?: Prisma.DecimalNullableWithAggregatesFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.StringNullableWithAggregatesFilter<"Pago"> | string | null;
    estado?: Prisma.StringWithAggregatesFilter<"Pago"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Pago"> | Date | string;
};
export type PagoCreateInput = {
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutPagoInput;
    promocion?: Prisma.PromocionCreateNestedOneWithoutPagosInput;
    descuento?: Prisma.DescuentoCreateNestedOneWithoutPagosInput;
    notas?: Prisma.NotaCreditoDebitoCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasCreateNestedOneWithoutPagoInput;
};
export type PagoUncheckedCreateInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasUncheckedCreateNestedOneWithoutPagoInput;
};
export type PagoUpdateInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutPagoNestedInput;
    promocion?: Prisma.PromocionUpdateOneWithoutPagosNestedInput;
    descuento?: Prisma.DescuentoUpdateOneWithoutPagosNestedInput;
    notas?: Prisma.NotaCreditoDebitoUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUncheckedUpdateOneWithoutPagoNestedInput;
};
export type PagoCreateManyInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
};
export type PagoUpdateManyMutationInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PagoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PagoNullableScalarRelationFilter = {
    is?: Prisma.PagoWhereInput | null;
    isNot?: Prisma.PagoWhereInput | null;
};
export type PagoListRelationFilter = {
    every?: Prisma.PagoWhereInput;
    some?: Prisma.PagoWhereInput;
    none?: Prisma.PagoWhereInput;
};
export type PagoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PagoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrder;
    promocionId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrder;
    dpagoRef?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type PagoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrder;
    promocionId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrder;
};
export type PagoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrder;
    promocionId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrder;
    dpagoRef?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type PagoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    metodoPago?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrder;
    promocionId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrder;
    dpagoRef?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type PagoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    montoOriginal?: Prisma.SortOrder;
    promocionId?: Prisma.SortOrder;
    descuentoId?: Prisma.SortOrder;
    porcentajeAplicado?: Prisma.SortOrder;
};
export type PagoScalarRelationFilter = {
    is?: Prisma.PagoWhereInput;
    isNot?: Prisma.PagoWhereInput;
};
export type PagoCreateNestedOneWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutTurnoInput, Prisma.PagoUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutTurnoInput;
    connect?: Prisma.PagoWhereUniqueInput;
};
export type PagoUncheckedCreateNestedOneWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutTurnoInput, Prisma.PagoUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutTurnoInput;
    connect?: Prisma.PagoWhereUniqueInput;
};
export type PagoUpdateOneWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutTurnoInput, Prisma.PagoUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutTurnoInput;
    upsert?: Prisma.PagoUpsertWithoutTurnoInput;
    disconnect?: Prisma.PagoWhereInput | boolean;
    delete?: Prisma.PagoWhereInput | boolean;
    connect?: Prisma.PagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PagoUpdateToOneWithWhereWithoutTurnoInput, Prisma.PagoUpdateWithoutTurnoInput>, Prisma.PagoUncheckedUpdateWithoutTurnoInput>;
};
export type PagoUncheckedUpdateOneWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutTurnoInput, Prisma.PagoUncheckedCreateWithoutTurnoInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutTurnoInput;
    upsert?: Prisma.PagoUpsertWithoutTurnoInput;
    disconnect?: Prisma.PagoWhereInput | boolean;
    delete?: Prisma.PagoWhereInput | boolean;
    connect?: Prisma.PagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PagoUpdateToOneWithWhereWithoutTurnoInput, Prisma.PagoUpdateWithoutTurnoInput>, Prisma.PagoUncheckedUpdateWithoutTurnoInput>;
};
export type PagoCreateNestedManyWithoutPromocionInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutPromocionInput, Prisma.PagoUncheckedCreateWithoutPromocionInput> | Prisma.PagoCreateWithoutPromocionInput[] | Prisma.PagoUncheckedCreateWithoutPromocionInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutPromocionInput | Prisma.PagoCreateOrConnectWithoutPromocionInput[];
    createMany?: Prisma.PagoCreateManyPromocionInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUncheckedCreateNestedManyWithoutPromocionInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutPromocionInput, Prisma.PagoUncheckedCreateWithoutPromocionInput> | Prisma.PagoCreateWithoutPromocionInput[] | Prisma.PagoUncheckedCreateWithoutPromocionInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutPromocionInput | Prisma.PagoCreateOrConnectWithoutPromocionInput[];
    createMany?: Prisma.PagoCreateManyPromocionInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUpdateManyWithoutPromocionNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutPromocionInput, Prisma.PagoUncheckedCreateWithoutPromocionInput> | Prisma.PagoCreateWithoutPromocionInput[] | Prisma.PagoUncheckedCreateWithoutPromocionInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutPromocionInput | Prisma.PagoCreateOrConnectWithoutPromocionInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutPromocionInput | Prisma.PagoUpsertWithWhereUniqueWithoutPromocionInput[];
    createMany?: Prisma.PagoCreateManyPromocionInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutPromocionInput | Prisma.PagoUpdateWithWhereUniqueWithoutPromocionInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutPromocionInput | Prisma.PagoUpdateManyWithWhereWithoutPromocionInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type PagoUncheckedUpdateManyWithoutPromocionNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutPromocionInput, Prisma.PagoUncheckedCreateWithoutPromocionInput> | Prisma.PagoCreateWithoutPromocionInput[] | Prisma.PagoUncheckedCreateWithoutPromocionInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutPromocionInput | Prisma.PagoCreateOrConnectWithoutPromocionInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutPromocionInput | Prisma.PagoUpsertWithWhereUniqueWithoutPromocionInput[];
    createMany?: Prisma.PagoCreateManyPromocionInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutPromocionInput | Prisma.PagoUpdateWithWhereUniqueWithoutPromocionInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutPromocionInput | Prisma.PagoUpdateManyWithWhereWithoutPromocionInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type PagoCreateNestedManyWithoutDescuentoInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutDescuentoInput, Prisma.PagoUncheckedCreateWithoutDescuentoInput> | Prisma.PagoCreateWithoutDescuentoInput[] | Prisma.PagoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutDescuentoInput | Prisma.PagoCreateOrConnectWithoutDescuentoInput[];
    createMany?: Prisma.PagoCreateManyDescuentoInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUncheckedCreateNestedManyWithoutDescuentoInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutDescuentoInput, Prisma.PagoUncheckedCreateWithoutDescuentoInput> | Prisma.PagoCreateWithoutDescuentoInput[] | Prisma.PagoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutDescuentoInput | Prisma.PagoCreateOrConnectWithoutDescuentoInput[];
    createMany?: Prisma.PagoCreateManyDescuentoInputEnvelope;
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
};
export type PagoUpdateManyWithoutDescuentoNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutDescuentoInput, Prisma.PagoUncheckedCreateWithoutDescuentoInput> | Prisma.PagoCreateWithoutDescuentoInput[] | Prisma.PagoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutDescuentoInput | Prisma.PagoCreateOrConnectWithoutDescuentoInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutDescuentoInput | Prisma.PagoUpsertWithWhereUniqueWithoutDescuentoInput[];
    createMany?: Prisma.PagoCreateManyDescuentoInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutDescuentoInput | Prisma.PagoUpdateWithWhereUniqueWithoutDescuentoInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutDescuentoInput | Prisma.PagoUpdateManyWithWhereWithoutDescuentoInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type PagoUncheckedUpdateManyWithoutDescuentoNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutDescuentoInput, Prisma.PagoUncheckedCreateWithoutDescuentoInput> | Prisma.PagoCreateWithoutDescuentoInput[] | Prisma.PagoUncheckedCreateWithoutDescuentoInput[];
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutDescuentoInput | Prisma.PagoCreateOrConnectWithoutDescuentoInput[];
    upsert?: Prisma.PagoUpsertWithWhereUniqueWithoutDescuentoInput | Prisma.PagoUpsertWithWhereUniqueWithoutDescuentoInput[];
    createMany?: Prisma.PagoCreateManyDescuentoInputEnvelope;
    set?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    disconnect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    delete?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    connect?: Prisma.PagoWhereUniqueInput | Prisma.PagoWhereUniqueInput[];
    update?: Prisma.PagoUpdateWithWhereUniqueWithoutDescuentoInput | Prisma.PagoUpdateWithWhereUniqueWithoutDescuentoInput[];
    updateMany?: Prisma.PagoUpdateManyWithWhereWithoutDescuentoInput | Prisma.PagoUpdateManyWithWhereWithoutDescuentoInput[];
    deleteMany?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type PagoCreateNestedOneWithoutNotasInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutNotasInput, Prisma.PagoUncheckedCreateWithoutNotasInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutNotasInput;
    connect?: Prisma.PagoWhereUniqueInput;
};
export type PagoUpdateOneRequiredWithoutNotasNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutNotasInput, Prisma.PagoUncheckedCreateWithoutNotasInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutNotasInput;
    upsert?: Prisma.PagoUpsertWithoutNotasInput;
    connect?: Prisma.PagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PagoUpdateToOneWithWhereWithoutNotasInput, Prisma.PagoUpdateWithoutNotasInput>, Prisma.PagoUncheckedUpdateWithoutNotasInput>;
};
export type PagoCreateNestedOneWithoutLibroVentaInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutLibroVentaInput, Prisma.PagoUncheckedCreateWithoutLibroVentaInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutLibroVentaInput;
    connect?: Prisma.PagoWhereUniqueInput;
};
export type PagoUpdateOneRequiredWithoutLibroVentaNestedInput = {
    create?: Prisma.XOR<Prisma.PagoCreateWithoutLibroVentaInput, Prisma.PagoUncheckedCreateWithoutLibroVentaInput>;
    connectOrCreate?: Prisma.PagoCreateOrConnectWithoutLibroVentaInput;
    upsert?: Prisma.PagoUpsertWithoutLibroVentaInput;
    connect?: Prisma.PagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PagoUpdateToOneWithWhereWithoutLibroVentaInput, Prisma.PagoUpdateWithoutLibroVentaInput>, Prisma.PagoUncheckedUpdateWithoutLibroVentaInput>;
};
export type PagoCreateWithoutTurnoInput = {
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    promocion?: Prisma.PromocionCreateNestedOneWithoutPagosInput;
    descuento?: Prisma.DescuentoCreateNestedOneWithoutPagosInput;
    notas?: Prisma.NotaCreditoDebitoCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasCreateNestedOneWithoutPagoInput;
};
export type PagoUncheckedCreateWithoutTurnoInput = {
    id?: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasUncheckedCreateNestedOneWithoutPagoInput;
};
export type PagoCreateOrConnectWithoutTurnoInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutTurnoInput, Prisma.PagoUncheckedCreateWithoutTurnoInput>;
};
export type PagoUpsertWithoutTurnoInput = {
    update: Prisma.XOR<Prisma.PagoUpdateWithoutTurnoInput, Prisma.PagoUncheckedUpdateWithoutTurnoInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutTurnoInput, Prisma.PagoUncheckedCreateWithoutTurnoInput>;
    where?: Prisma.PagoWhereInput;
};
export type PagoUpdateToOneWithWhereWithoutTurnoInput = {
    where?: Prisma.PagoWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutTurnoInput, Prisma.PagoUncheckedUpdateWithoutTurnoInput>;
};
export type PagoUpdateWithoutTurnoInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    promocion?: Prisma.PromocionUpdateOneWithoutPagosNestedInput;
    descuento?: Prisma.DescuentoUpdateOneWithoutPagosNestedInput;
    notas?: Prisma.NotaCreditoDebitoUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateWithoutTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUncheckedUpdateOneWithoutPagoNestedInput;
};
export type PagoCreateWithoutPromocionInput = {
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutPagoInput;
    descuento?: Prisma.DescuentoCreateNestedOneWithoutPagosInput;
    notas?: Prisma.NotaCreditoDebitoCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasCreateNestedOneWithoutPagoInput;
};
export type PagoUncheckedCreateWithoutPromocionInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasUncheckedCreateNestedOneWithoutPagoInput;
};
export type PagoCreateOrConnectWithoutPromocionInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutPromocionInput, Prisma.PagoUncheckedCreateWithoutPromocionInput>;
};
export type PagoCreateManyPromocionInputEnvelope = {
    data: Prisma.PagoCreateManyPromocionInput | Prisma.PagoCreateManyPromocionInput[];
    skipDuplicates?: boolean;
};
export type PagoUpsertWithWhereUniqueWithoutPromocionInput = {
    where: Prisma.PagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PagoUpdateWithoutPromocionInput, Prisma.PagoUncheckedUpdateWithoutPromocionInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutPromocionInput, Prisma.PagoUncheckedCreateWithoutPromocionInput>;
};
export type PagoUpdateWithWhereUniqueWithoutPromocionInput = {
    where: Prisma.PagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutPromocionInput, Prisma.PagoUncheckedUpdateWithoutPromocionInput>;
};
export type PagoUpdateManyWithWhereWithoutPromocionInput = {
    where: Prisma.PagoScalarWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyWithoutPromocionInput>;
};
export type PagoScalarWhereInput = {
    AND?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
    OR?: Prisma.PagoScalarWhereInput[];
    NOT?: Prisma.PagoScalarWhereInput | Prisma.PagoScalarWhereInput[];
    id?: Prisma.IntFilter<"Pago"> | number;
    turnoId?: Prisma.IntFilter<"Pago"> | number;
    metodoPago?: Prisma.StringFilter<"Pago"> | string;
    monto?: Prisma.DecimalFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.DecimalNullableFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.IntNullableFilter<"Pago"> | number | null;
    descuentoId?: Prisma.IntNullableFilter<"Pago"> | number | null;
    porcentajeAplicado?: Prisma.DecimalNullableFilter<"Pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.StringNullableFilter<"Pago"> | string | null;
    estado?: Prisma.StringFilter<"Pago"> | string;
    fecha?: Prisma.DateTimeFilter<"Pago"> | Date | string;
};
export type PagoCreateWithoutDescuentoInput = {
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutPagoInput;
    promocion?: Prisma.PromocionCreateNestedOneWithoutPagosInput;
    notas?: Prisma.NotaCreditoDebitoCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasCreateNestedOneWithoutPagoInput;
};
export type PagoUncheckedCreateWithoutDescuentoInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedCreateNestedManyWithoutPagoInput;
    libroVenta?: Prisma.LibroVentasUncheckedCreateNestedOneWithoutPagoInput;
};
export type PagoCreateOrConnectWithoutDescuentoInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutDescuentoInput, Prisma.PagoUncheckedCreateWithoutDescuentoInput>;
};
export type PagoCreateManyDescuentoInputEnvelope = {
    data: Prisma.PagoCreateManyDescuentoInput | Prisma.PagoCreateManyDescuentoInput[];
    skipDuplicates?: boolean;
};
export type PagoUpsertWithWhereUniqueWithoutDescuentoInput = {
    where: Prisma.PagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.PagoUpdateWithoutDescuentoInput, Prisma.PagoUncheckedUpdateWithoutDescuentoInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutDescuentoInput, Prisma.PagoUncheckedCreateWithoutDescuentoInput>;
};
export type PagoUpdateWithWhereUniqueWithoutDescuentoInput = {
    where: Prisma.PagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutDescuentoInput, Prisma.PagoUncheckedUpdateWithoutDescuentoInput>;
};
export type PagoUpdateManyWithWhereWithoutDescuentoInput = {
    where: Prisma.PagoScalarWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyWithoutDescuentoInput>;
};
export type PagoCreateWithoutNotasInput = {
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutPagoInput;
    promocion?: Prisma.PromocionCreateNestedOneWithoutPagosInput;
    descuento?: Prisma.DescuentoCreateNestedOneWithoutPagosInput;
    libroVenta?: Prisma.LibroVentasCreateNestedOneWithoutPagoInput;
};
export type PagoUncheckedCreateWithoutNotasInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    libroVenta?: Prisma.LibroVentasUncheckedCreateNestedOneWithoutPagoInput;
};
export type PagoCreateOrConnectWithoutNotasInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutNotasInput, Prisma.PagoUncheckedCreateWithoutNotasInput>;
};
export type PagoUpsertWithoutNotasInput = {
    update: Prisma.XOR<Prisma.PagoUpdateWithoutNotasInput, Prisma.PagoUncheckedUpdateWithoutNotasInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutNotasInput, Prisma.PagoUncheckedCreateWithoutNotasInput>;
    where?: Prisma.PagoWhereInput;
};
export type PagoUpdateToOneWithWhereWithoutNotasInput = {
    where?: Prisma.PagoWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutNotasInput, Prisma.PagoUncheckedUpdateWithoutNotasInput>;
};
export type PagoUpdateWithoutNotasInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutPagoNestedInput;
    promocion?: Prisma.PromocionUpdateOneWithoutPagosNestedInput;
    descuento?: Prisma.DescuentoUpdateOneWithoutPagosNestedInput;
    libroVenta?: Prisma.LibroVentasUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateWithoutNotasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    libroVenta?: Prisma.LibroVentasUncheckedUpdateOneWithoutPagoNestedInput;
};
export type PagoCreateWithoutLibroVentaInput = {
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutPagoInput;
    promocion?: Prisma.PromocionCreateNestedOneWithoutPagosInput;
    descuento?: Prisma.DescuentoCreateNestedOneWithoutPagosInput;
    notas?: Prisma.NotaCreditoDebitoCreateNestedManyWithoutPagoInput;
};
export type PagoUncheckedCreateWithoutLibroVentaInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedCreateNestedManyWithoutPagoInput;
};
export type PagoCreateOrConnectWithoutLibroVentaInput = {
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateWithoutLibroVentaInput, Prisma.PagoUncheckedCreateWithoutLibroVentaInput>;
};
export type PagoUpsertWithoutLibroVentaInput = {
    update: Prisma.XOR<Prisma.PagoUpdateWithoutLibroVentaInput, Prisma.PagoUncheckedUpdateWithoutLibroVentaInput>;
    create: Prisma.XOR<Prisma.PagoCreateWithoutLibroVentaInput, Prisma.PagoUncheckedCreateWithoutLibroVentaInput>;
    where?: Prisma.PagoWhereInput;
};
export type PagoUpdateToOneWithWhereWithoutLibroVentaInput = {
    where?: Prisma.PagoWhereInput;
    data: Prisma.XOR<Prisma.PagoUpdateWithoutLibroVentaInput, Prisma.PagoUncheckedUpdateWithoutLibroVentaInput>;
};
export type PagoUpdateWithoutLibroVentaInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutPagoNestedInput;
    promocion?: Prisma.PromocionUpdateOneWithoutPagosNestedInput;
    descuento?: Prisma.DescuentoUpdateOneWithoutPagosNestedInput;
    notas?: Prisma.NotaCreditoDebitoUpdateManyWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateWithoutLibroVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedUpdateManyWithoutPagoNestedInput;
};
export type PagoCreateManyPromocionInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    descuentoId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
};
export type PagoUpdateWithoutPromocionInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutPagoNestedInput;
    descuento?: Prisma.DescuentoUpdateOneWithoutPagosNestedInput;
    notas?: Prisma.NotaCreditoDebitoUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateWithoutPromocionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUncheckedUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateManyWithoutPromocionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    descuentoId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PagoCreateManyDescuentoInput = {
    id?: number;
    turnoId: number;
    metodoPago: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: number | null;
    porcentajeAplicado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: string | null;
    estado?: string;
    fecha?: Date | string;
};
export type PagoUpdateWithoutDescuentoInput = {
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutPagoNestedInput;
    promocion?: Prisma.PromocionUpdateOneWithoutPagosNestedInput;
    notas?: Prisma.NotaCreditoDebitoUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateWithoutDescuentoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notas?: Prisma.NotaCreditoDebitoUncheckedUpdateManyWithoutPagoNestedInput;
    libroVenta?: Prisma.LibroVentasUncheckedUpdateOneWithoutPagoNestedInput;
};
export type PagoUncheckedUpdateManyWithoutDescuentoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    metodoPago?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoOriginal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    promocionId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    porcentajeAplicado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    dpagoRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PagoCountOutputType = {
    notas: number;
};
export type PagoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notas?: boolean | PagoCountOutputTypeCountNotasArgs;
};
export type PagoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoCountOutputTypeSelect<ExtArgs> | null;
};
export type PagoCountOutputTypeCountNotasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCreditoDebitoWhereInput;
};
export type PagoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    metodoPago?: boolean;
    monto?: boolean;
    montoOriginal?: boolean;
    promocionId?: boolean;
    descuentoId?: boolean;
    porcentajeAplicado?: boolean;
    dpagoRef?: boolean;
    estado?: boolean;
    fecha?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    promocion?: boolean | Prisma.Pago$promocionArgs<ExtArgs>;
    descuento?: boolean | Prisma.Pago$descuentoArgs<ExtArgs>;
    notas?: boolean | Prisma.Pago$notasArgs<ExtArgs>;
    libroVenta?: boolean | Prisma.Pago$libroVentaArgs<ExtArgs>;
    _count?: boolean | Prisma.PagoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type PagoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    metodoPago?: boolean;
    monto?: boolean;
    montoOriginal?: boolean;
    promocionId?: boolean;
    descuentoId?: boolean;
    porcentajeAplicado?: boolean;
    dpagoRef?: boolean;
    estado?: boolean;
    fecha?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    promocion?: boolean | Prisma.Pago$promocionArgs<ExtArgs>;
    descuento?: boolean | Prisma.Pago$descuentoArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type PagoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    metodoPago?: boolean;
    monto?: boolean;
    montoOriginal?: boolean;
    promocionId?: boolean;
    descuentoId?: boolean;
    porcentajeAplicado?: boolean;
    dpagoRef?: boolean;
    estado?: boolean;
    fecha?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    promocion?: boolean | Prisma.Pago$promocionArgs<ExtArgs>;
    descuento?: boolean | Prisma.Pago$descuentoArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type PagoSelectScalar = {
    id?: boolean;
    turnoId?: boolean;
    metodoPago?: boolean;
    monto?: boolean;
    montoOriginal?: boolean;
    promocionId?: boolean;
    descuentoId?: boolean;
    porcentajeAplicado?: boolean;
    dpagoRef?: boolean;
    estado?: boolean;
    fecha?: boolean;
};
export type PagoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "turnoId" | "metodoPago" | "monto" | "montoOriginal" | "promocionId" | "descuentoId" | "porcentajeAplicado" | "dpagoRef" | "estado" | "fecha", ExtArgs["result"]["pago"]>;
export type PagoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    promocion?: boolean | Prisma.Pago$promocionArgs<ExtArgs>;
    descuento?: boolean | Prisma.Pago$descuentoArgs<ExtArgs>;
    notas?: boolean | Prisma.Pago$notasArgs<ExtArgs>;
    libroVenta?: boolean | Prisma.Pago$libroVentaArgs<ExtArgs>;
    _count?: boolean | Prisma.PagoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PagoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    promocion?: boolean | Prisma.Pago$promocionArgs<ExtArgs>;
    descuento?: boolean | Prisma.Pago$descuentoArgs<ExtArgs>;
};
export type PagoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    promocion?: boolean | Prisma.Pago$promocionArgs<ExtArgs>;
    descuento?: boolean | Prisma.Pago$descuentoArgs<ExtArgs>;
};
export type $PagoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Pago";
    objects: {
        turno: Prisma.$TurnoPayload<ExtArgs>;
        promocion: Prisma.$PromocionPayload<ExtArgs> | null;
        descuento: Prisma.$DescuentoPayload<ExtArgs> | null;
        notas: Prisma.$NotaCreditoDebitoPayload<ExtArgs>[];
        libroVenta: Prisma.$LibroVentasPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        turnoId: number;
        metodoPago: string;
        monto: runtime.Decimal;
        montoOriginal: runtime.Decimal | null;
        promocionId: number | null;
        descuentoId: number | null;
        porcentajeAplicado: runtime.Decimal | null;
        dpagoRef: string | null;
        estado: string;
        fecha: Date;
    }, ExtArgs["result"]["pago"]>;
    composites: {};
};
export type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PagoPayload, S>;
export type PagoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PagoCountAggregateInputType | true;
};
export interface PagoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Pago'];
        meta: {
            name: 'Pago';
        };
    };
    findUnique<T extends PagoFindUniqueArgs>(args: Prisma.SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PagoFindFirstArgs>(args?: Prisma.SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PagoFindManyArgs>(args?: Prisma.SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PagoCreateArgs>(args: Prisma.SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PagoCreateManyArgs>(args?: Prisma.SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PagoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PagoDeleteArgs>(args: Prisma.SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PagoUpdateArgs>(args: Prisma.SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PagoDeleteManyArgs>(args?: Prisma.SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PagoUpdateManyArgs>(args: Prisma.SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PagoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PagoUpsertArgs>(args: Prisma.SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PagoCountArgs>(args?: Prisma.Subset<T, PagoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PagoCountAggregateOutputType> : number>;
    aggregate<T extends PagoAggregateArgs>(args: Prisma.Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>;
    groupBy<T extends PagoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PagoGroupByArgs['orderBy'];
    } : {
        orderBy?: PagoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PagoFieldRefs;
}
export interface Prisma__PagoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    turno<T extends Prisma.TurnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TurnoDefaultArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    promocion<T extends Prisma.Pago$promocionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pago$promocionArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    descuento<T extends Prisma.Pago$descuentoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pago$descuentoArgs<ExtArgs>>): Prisma.Prisma__DescuentoClient<runtime.Types.Result.GetResult<Prisma.$DescuentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notas<T extends Prisma.Pago$notasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pago$notasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    libroVenta<T extends Prisma.Pago$libroVentaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Pago$libroVentaArgs<ExtArgs>>): Prisma.Prisma__LibroVentasClient<runtime.Types.Result.GetResult<Prisma.$LibroVentasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PagoFieldRefs {
    readonly id: Prisma.FieldRef<"Pago", 'Int'>;
    readonly turnoId: Prisma.FieldRef<"Pago", 'Int'>;
    readonly metodoPago: Prisma.FieldRef<"Pago", 'String'>;
    readonly monto: Prisma.FieldRef<"Pago", 'Decimal'>;
    readonly montoOriginal: Prisma.FieldRef<"Pago", 'Decimal'>;
    readonly promocionId: Prisma.FieldRef<"Pago", 'Int'>;
    readonly descuentoId: Prisma.FieldRef<"Pago", 'Int'>;
    readonly porcentajeAplicado: Prisma.FieldRef<"Pago", 'Decimal'>;
    readonly dpagoRef: Prisma.FieldRef<"Pago", 'String'>;
    readonly estado: Prisma.FieldRef<"Pago", 'String'>;
    readonly fecha: Prisma.FieldRef<"Pago", 'DateTime'>;
}
export type PagoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PagoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PagoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PagoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PagoCreateInput, Prisma.PagoUncheckedCreateInput>;
};
export type PagoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PagoCreateManyInput | Prisma.PagoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PagoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    data: Prisma.PagoCreateManyInput | Prisma.PagoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PagoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PagoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PagoUpdateInput, Prisma.PagoUncheckedUpdateInput>;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyInput>;
    where?: Prisma.PagoWhereInput;
    limit?: number;
};
export type PagoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PagoUpdateManyMutationInput, Prisma.PagoUncheckedUpdateManyInput>;
    where?: Prisma.PagoWhereInput;
    limit?: number;
    include?: Prisma.PagoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PagoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.PagoCreateInput, Prisma.PagoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PagoUpdateInput, Prisma.PagoUncheckedUpdateInput>;
};
export type PagoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where: Prisma.PagoWhereUniqueInput;
};
export type PagoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
    limit?: number;
};
export type Pago$promocionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where?: Prisma.PromocionWhereInput;
};
export type Pago$descuentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DescuentoSelect<ExtArgs> | null;
    omit?: Prisma.DescuentoOmit<ExtArgs> | null;
    include?: Prisma.DescuentoInclude<ExtArgs> | null;
    where?: Prisma.DescuentoWhereInput;
};
export type Pago$notasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    where?: Prisma.NotaCreditoDebitoWhereInput;
    orderBy?: Prisma.NotaCreditoDebitoOrderByWithRelationInput | Prisma.NotaCreditoDebitoOrderByWithRelationInput[];
    cursor?: Prisma.NotaCreditoDebitoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaCreditoDebitoScalarFieldEnum | Prisma.NotaCreditoDebitoScalarFieldEnum[];
};
export type Pago$libroVentaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroVentasSelect<ExtArgs> | null;
    omit?: Prisma.LibroVentasOmit<ExtArgs> | null;
    include?: Prisma.LibroVentasInclude<ExtArgs> | null;
    where?: Prisma.LibroVentasWhereInput;
};
export type PagoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
};
export {};
