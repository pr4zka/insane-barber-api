import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type CajaModel = runtime.Types.Result.DefaultSelection<Prisma.$CajaPayload>;
export type AggregateCaja = {
    _count: CajaCountAggregateOutputType | null;
    _avg: CajaAvgAggregateOutputType | null;
    _sum: CajaSumAggregateOutputType | null;
    _min: CajaMinAggregateOutputType | null;
    _max: CajaMaxAggregateOutputType | null;
};
export type CajaAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    montoInicial: runtime.Decimal | null;
    montoFinal: runtime.Decimal | null;
};
export type CajaSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    montoInicial: runtime.Decimal | null;
    montoFinal: runtime.Decimal | null;
};
export type CajaMinAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    fechaApertura: Date | null;
    fechaCierre: Date | null;
    montoInicial: runtime.Decimal | null;
    montoFinal: runtime.Decimal | null;
    estado: string | null;
};
export type CajaMaxAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
    fechaApertura: Date | null;
    fechaCierre: Date | null;
    montoInicial: runtime.Decimal | null;
    montoFinal: runtime.Decimal | null;
    estado: string | null;
};
export type CajaCountAggregateOutputType = {
    id: number;
    usuarioId: number;
    fechaApertura: number;
    fechaCierre: number;
    montoInicial: number;
    montoFinal: number;
    estado: number;
    _all: number;
};
export type CajaAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
    montoInicial?: true;
    montoFinal?: true;
};
export type CajaSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
    montoInicial?: true;
    montoFinal?: true;
};
export type CajaMinAggregateInputType = {
    id?: true;
    usuarioId?: true;
    fechaApertura?: true;
    fechaCierre?: true;
    montoInicial?: true;
    montoFinal?: true;
    estado?: true;
};
export type CajaMaxAggregateInputType = {
    id?: true;
    usuarioId?: true;
    fechaApertura?: true;
    fechaCierre?: true;
    montoInicial?: true;
    montoFinal?: true;
    estado?: true;
};
export type CajaCountAggregateInputType = {
    id?: true;
    usuarioId?: true;
    fechaApertura?: true;
    fechaCierre?: true;
    montoInicial?: true;
    montoFinal?: true;
    estado?: true;
    _all?: true;
};
export type CajaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithRelationInput | Prisma.CajaOrderByWithRelationInput[];
    cursor?: Prisma.CajaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CajaCountAggregateInputType;
    _avg?: CajaAvgAggregateInputType;
    _sum?: CajaSumAggregateInputType;
    _min?: CajaMinAggregateInputType;
    _max?: CajaMaxAggregateInputType;
};
export type GetCajaAggregateType<T extends CajaAggregateArgs> = {
    [P in keyof T & keyof AggregateCaja]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCaja[P]> : Prisma.GetScalarType<T[P], AggregateCaja[P]>;
};
export type CajaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithAggregationInput | Prisma.CajaOrderByWithAggregationInput[];
    by: Prisma.CajaScalarFieldEnum[] | Prisma.CajaScalarFieldEnum;
    having?: Prisma.CajaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CajaCountAggregateInputType | true;
    _avg?: CajaAvgAggregateInputType;
    _sum?: CajaSumAggregateInputType;
    _min?: CajaMinAggregateInputType;
    _max?: CajaMaxAggregateInputType;
};
export type CajaGroupByOutputType = {
    id: number;
    usuarioId: number;
    fechaApertura: Date;
    fechaCierre: Date | null;
    montoInicial: runtime.Decimal;
    montoFinal: runtime.Decimal | null;
    estado: string;
    _count: CajaCountAggregateOutputType | null;
    _avg: CajaAvgAggregateOutputType | null;
    _sum: CajaSumAggregateOutputType | null;
    _min: CajaMinAggregateOutputType | null;
    _max: CajaMaxAggregateOutputType | null;
};
type GetCajaGroupByPayload<T extends CajaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CajaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CajaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CajaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CajaGroupByOutputType[P]>;
}>>;
export type CajaWhereInput = {
    AND?: Prisma.CajaWhereInput | Prisma.CajaWhereInput[];
    OR?: Prisma.CajaWhereInput[];
    NOT?: Prisma.CajaWhereInput | Prisma.CajaWhereInput[];
    id?: Prisma.IntFilter<"Caja"> | number;
    usuarioId?: Prisma.IntFilter<"Caja"> | number;
    fechaApertura?: Prisma.DateTimeFilter<"Caja"> | Date | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"Caja"> | Date | string | null;
    montoInicial?: Prisma.DecimalFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.DecimalNullableFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFilter<"Caja"> | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    movimientos?: Prisma.MovimientoCajaListRelationFilter;
};
export type CajaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    movimientos?: Prisma.MovimientoCajaOrderByRelationAggregateInput;
};
export type CajaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CajaWhereInput | Prisma.CajaWhereInput[];
    OR?: Prisma.CajaWhereInput[];
    NOT?: Prisma.CajaWhereInput | Prisma.CajaWhereInput[];
    usuarioId?: Prisma.IntFilter<"Caja"> | number;
    fechaApertura?: Prisma.DateTimeFilter<"Caja"> | Date | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"Caja"> | Date | string | null;
    montoInicial?: Prisma.DecimalFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.DecimalNullableFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFilter<"Caja"> | string;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.UsuarioWhereInput>;
    movimientos?: Prisma.MovimientoCajaListRelationFilter;
}, "id">;
export type CajaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.CajaCountOrderByAggregateInput;
    _avg?: Prisma.CajaAvgOrderByAggregateInput;
    _max?: Prisma.CajaMaxOrderByAggregateInput;
    _min?: Prisma.CajaMinOrderByAggregateInput;
    _sum?: Prisma.CajaSumOrderByAggregateInput;
};
export type CajaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CajaScalarWhereWithAggregatesInput | Prisma.CajaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CajaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CajaScalarWhereWithAggregatesInput | Prisma.CajaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Caja"> | number;
    usuarioId?: Prisma.IntWithAggregatesFilter<"Caja"> | number;
    fechaApertura?: Prisma.DateTimeWithAggregatesFilter<"Caja"> | Date | string;
    fechaCierre?: Prisma.DateTimeNullableWithAggregatesFilter<"Caja"> | Date | string | null;
    montoInicial?: Prisma.DecimalWithAggregatesFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.DecimalNullableWithAggregatesFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringWithAggregatesFilter<"Caja"> | string;
};
export type CajaCreateInput = {
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutCajasInput;
    movimientos?: Prisma.MovimientoCajaCreateNestedManyWithoutCajaInput;
};
export type CajaUncheckedCreateInput = {
    id?: number;
    usuarioId: number;
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
    movimientos?: Prisma.MovimientoCajaUncheckedCreateNestedManyWithoutCajaInput;
};
export type CajaUpdateInput = {
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutCajasNestedInput;
    movimientos?: Prisma.MovimientoCajaUpdateManyWithoutCajaNestedInput;
};
export type CajaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    movimientos?: Prisma.MovimientoCajaUncheckedUpdateManyWithoutCajaNestedInput;
};
export type CajaCreateManyInput = {
    id?: number;
    usuarioId: number;
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
};
export type CajaUpdateManyMutationInput = {
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CajaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CajaListRelationFilter = {
    every?: Prisma.CajaWhereInput;
    some?: Prisma.CajaWhereInput;
    none?: Prisma.CajaWhereInput;
};
export type CajaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CajaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type CajaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrder;
};
export type CajaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type CajaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type CajaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
    montoInicial?: Prisma.SortOrder;
    montoFinal?: Prisma.SortOrder;
};
export type CajaScalarRelationFilter = {
    is?: Prisma.CajaWhereInput;
    isNot?: Prisma.CajaWhereInput;
};
export type CajaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.CajaCreateWithoutUsuarioInput, Prisma.CajaUncheckedCreateWithoutUsuarioInput> | Prisma.CajaCreateWithoutUsuarioInput[] | Prisma.CajaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CajaCreateOrConnectWithoutUsuarioInput | Prisma.CajaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.CajaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
};
export type CajaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.CajaCreateWithoutUsuarioInput, Prisma.CajaUncheckedCreateWithoutUsuarioInput> | Prisma.CajaCreateWithoutUsuarioInput[] | Prisma.CajaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CajaCreateOrConnectWithoutUsuarioInput | Prisma.CajaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.CajaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
};
export type CajaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.CajaCreateWithoutUsuarioInput, Prisma.CajaUncheckedCreateWithoutUsuarioInput> | Prisma.CajaCreateWithoutUsuarioInput[] | Prisma.CajaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CajaCreateOrConnectWithoutUsuarioInput | Prisma.CajaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.CajaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.CajaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.CajaCreateManyUsuarioInputEnvelope;
    set?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    disconnect?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    delete?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    connect?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    update?: Prisma.CajaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.CajaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.CajaUpdateManyWithWhereWithoutUsuarioInput | Prisma.CajaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.CajaScalarWhereInput | Prisma.CajaScalarWhereInput[];
};
export type CajaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.CajaCreateWithoutUsuarioInput, Prisma.CajaUncheckedCreateWithoutUsuarioInput> | Prisma.CajaCreateWithoutUsuarioInput[] | Prisma.CajaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.CajaCreateOrConnectWithoutUsuarioInput | Prisma.CajaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.CajaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.CajaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.CajaCreateManyUsuarioInputEnvelope;
    set?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    disconnect?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    delete?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    connect?: Prisma.CajaWhereUniqueInput | Prisma.CajaWhereUniqueInput[];
    update?: Prisma.CajaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.CajaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.CajaUpdateManyWithWhereWithoutUsuarioInput | Prisma.CajaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.CajaScalarWhereInput | Prisma.CajaScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CajaCreateNestedOneWithoutMovimientosInput = {
    create?: Prisma.XOR<Prisma.CajaCreateWithoutMovimientosInput, Prisma.CajaUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.CajaCreateOrConnectWithoutMovimientosInput;
    connect?: Prisma.CajaWhereUniqueInput;
};
export type CajaUpdateOneRequiredWithoutMovimientosNestedInput = {
    create?: Prisma.XOR<Prisma.CajaCreateWithoutMovimientosInput, Prisma.CajaUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.CajaCreateOrConnectWithoutMovimientosInput;
    upsert?: Prisma.CajaUpsertWithoutMovimientosInput;
    connect?: Prisma.CajaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CajaUpdateToOneWithWhereWithoutMovimientosInput, Prisma.CajaUpdateWithoutMovimientosInput>, Prisma.CajaUncheckedUpdateWithoutMovimientosInput>;
};
export type CajaCreateWithoutUsuarioInput = {
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
    movimientos?: Prisma.MovimientoCajaCreateNestedManyWithoutCajaInput;
};
export type CajaUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
    movimientos?: Prisma.MovimientoCajaUncheckedCreateNestedManyWithoutCajaInput;
};
export type CajaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.CajaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CajaCreateWithoutUsuarioInput, Prisma.CajaUncheckedCreateWithoutUsuarioInput>;
};
export type CajaCreateManyUsuarioInputEnvelope = {
    data: Prisma.CajaCreateManyUsuarioInput | Prisma.CajaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type CajaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.CajaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CajaUpdateWithoutUsuarioInput, Prisma.CajaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.CajaCreateWithoutUsuarioInput, Prisma.CajaUncheckedCreateWithoutUsuarioInput>;
};
export type CajaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.CajaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CajaUpdateWithoutUsuarioInput, Prisma.CajaUncheckedUpdateWithoutUsuarioInput>;
};
export type CajaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.CajaScalarWhereInput;
    data: Prisma.XOR<Prisma.CajaUpdateManyMutationInput, Prisma.CajaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type CajaScalarWhereInput = {
    AND?: Prisma.CajaScalarWhereInput | Prisma.CajaScalarWhereInput[];
    OR?: Prisma.CajaScalarWhereInput[];
    NOT?: Prisma.CajaScalarWhereInput | Prisma.CajaScalarWhereInput[];
    id?: Prisma.IntFilter<"Caja"> | number;
    usuarioId?: Prisma.IntFilter<"Caja"> | number;
    fechaApertura?: Prisma.DateTimeFilter<"Caja"> | Date | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"Caja"> | Date | string | null;
    montoInicial?: Prisma.DecimalFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.DecimalNullableFilter<"Caja"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFilter<"Caja"> | string;
};
export type CajaCreateWithoutMovimientosInput = {
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
    usuario: Prisma.UsuarioCreateNestedOneWithoutCajasInput;
};
export type CajaUncheckedCreateWithoutMovimientosInput = {
    id?: number;
    usuarioId: number;
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
};
export type CajaCreateOrConnectWithoutMovimientosInput = {
    where: Prisma.CajaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CajaCreateWithoutMovimientosInput, Prisma.CajaUncheckedCreateWithoutMovimientosInput>;
};
export type CajaUpsertWithoutMovimientosInput = {
    update: Prisma.XOR<Prisma.CajaUpdateWithoutMovimientosInput, Prisma.CajaUncheckedUpdateWithoutMovimientosInput>;
    create: Prisma.XOR<Prisma.CajaCreateWithoutMovimientosInput, Prisma.CajaUncheckedCreateWithoutMovimientosInput>;
    where?: Prisma.CajaWhereInput;
};
export type CajaUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: Prisma.CajaWhereInput;
    data: Prisma.XOR<Prisma.CajaUpdateWithoutMovimientosInput, Prisma.CajaUncheckedUpdateWithoutMovimientosInput>;
};
export type CajaUpdateWithoutMovimientosInput = {
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    usuario?: Prisma.UsuarioUpdateOneRequiredWithoutCajasNestedInput;
};
export type CajaUncheckedUpdateWithoutMovimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuarioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CajaCreateManyUsuarioInput = {
    id?: number;
    fechaApertura?: Date | string;
    fechaCierre?: Date | string | null;
    montoInicial: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: string;
};
export type CajaUpdateWithoutUsuarioInput = {
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    movimientos?: Prisma.MovimientoCajaUpdateManyWithoutCajaNestedInput;
};
export type CajaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    movimientos?: Prisma.MovimientoCajaUncheckedUpdateManyWithoutCajaNestedInput;
};
export type CajaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaApertura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    montoInicial?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoFinal?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type CajaCountOutputType = {
    movimientos: number;
};
export type CajaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    movimientos?: boolean | CajaCountOutputTypeCountMovimientosArgs;
};
export type CajaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaCountOutputTypeSelect<ExtArgs> | null;
};
export type CajaCountOutputTypeCountMovimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MovimientoCajaWhereInput;
};
export type CajaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    fechaApertura?: boolean;
    fechaCierre?: boolean;
    montoInicial?: boolean;
    montoFinal?: boolean;
    estado?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    movimientos?: boolean | Prisma.Caja$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.CajaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caja"]>;
export type CajaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    fechaApertura?: boolean;
    fechaCierre?: boolean;
    montoInicial?: boolean;
    montoFinal?: boolean;
    estado?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caja"]>;
export type CajaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuarioId?: boolean;
    fechaApertura?: boolean;
    fechaCierre?: boolean;
    montoInicial?: boolean;
    montoFinal?: boolean;
    estado?: boolean;
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caja"]>;
export type CajaSelectScalar = {
    id?: boolean;
    usuarioId?: boolean;
    fechaApertura?: boolean;
    fechaCierre?: boolean;
    montoInicial?: boolean;
    montoFinal?: boolean;
    estado?: boolean;
};
export type CajaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuarioId" | "fechaApertura" | "fechaCierre" | "montoInicial" | "montoFinal" | "estado", ExtArgs["result"]["caja"]>;
export type CajaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
    movimientos?: boolean | Prisma.Caja$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.CajaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CajaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type CajaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.UsuarioDefaultArgs<ExtArgs>;
};
export type $CajaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Caja";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs>;
        movimientos: Prisma.$MovimientoCajaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuarioId: number;
        fechaApertura: Date;
        fechaCierre: Date | null;
        montoInicial: runtime.Decimal;
        montoFinal: runtime.Decimal | null;
        estado: string;
    }, ExtArgs["result"]["caja"]>;
    composites: {};
};
export type CajaGetPayload<S extends boolean | null | undefined | CajaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CajaPayload, S>;
export type CajaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CajaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CajaCountAggregateInputType | true;
};
export interface CajaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Caja'];
        meta: {
            name: 'Caja';
        };
    };
    findUnique<T extends CajaFindUniqueArgs>(args: Prisma.SelectSubset<T, CajaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CajaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CajaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CajaFindFirstArgs>(args?: Prisma.SelectSubset<T, CajaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CajaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CajaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CajaFindManyArgs>(args?: Prisma.SelectSubset<T, CajaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CajaCreateArgs>(args: Prisma.SelectSubset<T, CajaCreateArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CajaCreateManyArgs>(args?: Prisma.SelectSubset<T, CajaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CajaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CajaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CajaDeleteArgs>(args: Prisma.SelectSubset<T, CajaDeleteArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CajaUpdateArgs>(args: Prisma.SelectSubset<T, CajaUpdateArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CajaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CajaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CajaUpdateManyArgs>(args: Prisma.SelectSubset<T, CajaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CajaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CajaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CajaUpsertArgs>(args: Prisma.SelectSubset<T, CajaUpsertArgs<ExtArgs>>): Prisma.Prisma__CajaClient<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CajaCountArgs>(args?: Prisma.Subset<T, CajaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CajaCountAggregateOutputType> : number>;
    aggregate<T extends CajaAggregateArgs>(args: Prisma.Subset<T, CajaAggregateArgs>): Prisma.PrismaPromise<GetCajaAggregateType<T>>;
    groupBy<T extends CajaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CajaGroupByArgs['orderBy'];
    } : {
        orderBy?: CajaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CajaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCajaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CajaFieldRefs;
}
export interface Prisma__CajaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.UsuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UsuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movimientos<T extends Prisma.Caja$movimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Caja$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MovimientoCajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CajaFieldRefs {
    readonly id: Prisma.FieldRef<"Caja", 'Int'>;
    readonly usuarioId: Prisma.FieldRef<"Caja", 'Int'>;
    readonly fechaApertura: Prisma.FieldRef<"Caja", 'DateTime'>;
    readonly fechaCierre: Prisma.FieldRef<"Caja", 'DateTime'>;
    readonly montoInicial: Prisma.FieldRef<"Caja", 'Decimal'>;
    readonly montoFinal: Prisma.FieldRef<"Caja", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"Caja", 'String'>;
}
export type CajaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where: Prisma.CajaWhereUniqueInput;
};
export type CajaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where: Prisma.CajaWhereUniqueInput;
};
export type CajaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithRelationInput | Prisma.CajaOrderByWithRelationInput[];
    cursor?: Prisma.CajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CajaScalarFieldEnum | Prisma.CajaScalarFieldEnum[];
};
export type CajaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithRelationInput | Prisma.CajaOrderByWithRelationInput[];
    cursor?: Prisma.CajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CajaScalarFieldEnum | Prisma.CajaScalarFieldEnum[];
};
export type CajaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithRelationInput | Prisma.CajaOrderByWithRelationInput[];
    cursor?: Prisma.CajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CajaScalarFieldEnum | Prisma.CajaScalarFieldEnum[];
};
export type CajaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CajaCreateInput, Prisma.CajaUncheckedCreateInput>;
};
export type CajaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CajaCreateManyInput | Prisma.CajaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CajaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    data: Prisma.CajaCreateManyInput | Prisma.CajaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CajaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CajaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CajaUpdateInput, Prisma.CajaUncheckedUpdateInput>;
    where: Prisma.CajaWhereUniqueInput;
};
export type CajaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CajaUpdateManyMutationInput, Prisma.CajaUncheckedUpdateManyInput>;
    where?: Prisma.CajaWhereInput;
    limit?: number;
};
export type CajaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CajaUpdateManyMutationInput, Prisma.CajaUncheckedUpdateManyInput>;
    where?: Prisma.CajaWhereInput;
    limit?: number;
    include?: Prisma.CajaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CajaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where: Prisma.CajaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CajaCreateInput, Prisma.CajaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CajaUpdateInput, Prisma.CajaUncheckedUpdateInput>;
};
export type CajaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where: Prisma.CajaWhereUniqueInput;
};
export type CajaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CajaWhereInput;
    limit?: number;
};
export type Caja$movimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CajaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
};
export {};
