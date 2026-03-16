import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type InsumoUtilizadoModel = runtime.Types.Result.DefaultSelection<Prisma.$InsumoUtilizadoPayload>;
export type AggregateInsumoUtilizado = {
    _count: InsumoUtilizadoCountAggregateOutputType | null;
    _avg: InsumoUtilizadoAvgAggregateOutputType | null;
    _sum: InsumoUtilizadoSumAggregateOutputType | null;
    _min: InsumoUtilizadoMinAggregateOutputType | null;
    _max: InsumoUtilizadoMaxAggregateOutputType | null;
};
export type InsumoUtilizadoAvgAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
};
export type InsumoUtilizadoSumAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
};
export type InsumoUtilizadoMinAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
    fecha: Date | null;
};
export type InsumoUtilizadoMaxAggregateOutputType = {
    id: number | null;
    turnoId: number | null;
    insumoId: number | null;
    cantidad: runtime.Decimal | null;
    fecha: Date | null;
};
export type InsumoUtilizadoCountAggregateOutputType = {
    id: number;
    turnoId: number;
    insumoId: number;
    cantidad: number;
    fecha: number;
    _all: number;
};
export type InsumoUtilizadoAvgAggregateInputType = {
    id?: true;
    turnoId?: true;
    insumoId?: true;
    cantidad?: true;
};
export type InsumoUtilizadoSumAggregateInputType = {
    id?: true;
    turnoId?: true;
    insumoId?: true;
    cantidad?: true;
};
export type InsumoUtilizadoMinAggregateInputType = {
    id?: true;
    turnoId?: true;
    insumoId?: true;
    cantidad?: true;
    fecha?: true;
};
export type InsumoUtilizadoMaxAggregateInputType = {
    id?: true;
    turnoId?: true;
    insumoId?: true;
    cantidad?: true;
    fecha?: true;
};
export type InsumoUtilizadoCountAggregateInputType = {
    id?: true;
    turnoId?: true;
    insumoId?: true;
    cantidad?: true;
    fecha?: true;
    _all?: true;
};
export type InsumoUtilizadoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoUtilizadoWhereInput;
    orderBy?: Prisma.InsumoUtilizadoOrderByWithRelationInput | Prisma.InsumoUtilizadoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoUtilizadoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InsumoUtilizadoCountAggregateInputType;
    _avg?: InsumoUtilizadoAvgAggregateInputType;
    _sum?: InsumoUtilizadoSumAggregateInputType;
    _min?: InsumoUtilizadoMinAggregateInputType;
    _max?: InsumoUtilizadoMaxAggregateInputType;
};
export type GetInsumoUtilizadoAggregateType<T extends InsumoUtilizadoAggregateArgs> = {
    [P in keyof T & keyof AggregateInsumoUtilizado]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInsumoUtilizado[P]> : Prisma.GetScalarType<T[P], AggregateInsumoUtilizado[P]>;
};
export type InsumoUtilizadoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoUtilizadoWhereInput;
    orderBy?: Prisma.InsumoUtilizadoOrderByWithAggregationInput | Prisma.InsumoUtilizadoOrderByWithAggregationInput[];
    by: Prisma.InsumoUtilizadoScalarFieldEnum[] | Prisma.InsumoUtilizadoScalarFieldEnum;
    having?: Prisma.InsumoUtilizadoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InsumoUtilizadoCountAggregateInputType | true;
    _avg?: InsumoUtilizadoAvgAggregateInputType;
    _sum?: InsumoUtilizadoSumAggregateInputType;
    _min?: InsumoUtilizadoMinAggregateInputType;
    _max?: InsumoUtilizadoMaxAggregateInputType;
};
export type InsumoUtilizadoGroupByOutputType = {
    id: number;
    turnoId: number;
    insumoId: number;
    cantidad: runtime.Decimal;
    fecha: Date;
    _count: InsumoUtilizadoCountAggregateOutputType | null;
    _avg: InsumoUtilizadoAvgAggregateOutputType | null;
    _sum: InsumoUtilizadoSumAggregateOutputType | null;
    _min: InsumoUtilizadoMinAggregateOutputType | null;
    _max: InsumoUtilizadoMaxAggregateOutputType | null;
};
type GetInsumoUtilizadoGroupByPayload<T extends InsumoUtilizadoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InsumoUtilizadoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InsumoUtilizadoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InsumoUtilizadoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InsumoUtilizadoGroupByOutputType[P]>;
}>>;
export type InsumoUtilizadoWhereInput = {
    AND?: Prisma.InsumoUtilizadoWhereInput | Prisma.InsumoUtilizadoWhereInput[];
    OR?: Prisma.InsumoUtilizadoWhereInput[];
    NOT?: Prisma.InsumoUtilizadoWhereInput | Prisma.InsumoUtilizadoWhereInput[];
    id?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    turnoId?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    insumoId?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    cantidad?: Prisma.DecimalFilter<"InsumoUtilizado"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"InsumoUtilizado"> | Date | string;
    turno?: Prisma.XOR<Prisma.TurnoScalarRelationFilter, Prisma.TurnoWhereInput>;
    insumo?: Prisma.XOR<Prisma.InsumoScalarRelationFilter, Prisma.InsumoWhereInput>;
};
export type InsumoUtilizadoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    turno?: Prisma.TurnoOrderByWithRelationInput;
    insumo?: Prisma.InsumoOrderByWithRelationInput;
};
export type InsumoUtilizadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.InsumoUtilizadoWhereInput | Prisma.InsumoUtilizadoWhereInput[];
    OR?: Prisma.InsumoUtilizadoWhereInput[];
    NOT?: Prisma.InsumoUtilizadoWhereInput | Prisma.InsumoUtilizadoWhereInput[];
    turnoId?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    insumoId?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    cantidad?: Prisma.DecimalFilter<"InsumoUtilizado"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"InsumoUtilizado"> | Date | string;
    turno?: Prisma.XOR<Prisma.TurnoScalarRelationFilter, Prisma.TurnoWhereInput>;
    insumo?: Prisma.XOR<Prisma.InsumoScalarRelationFilter, Prisma.InsumoWhereInput>;
}, "id">;
export type InsumoUtilizadoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.InsumoUtilizadoCountOrderByAggregateInput;
    _avg?: Prisma.InsumoUtilizadoAvgOrderByAggregateInput;
    _max?: Prisma.InsumoUtilizadoMaxOrderByAggregateInput;
    _min?: Prisma.InsumoUtilizadoMinOrderByAggregateInput;
    _sum?: Prisma.InsumoUtilizadoSumOrderByAggregateInput;
};
export type InsumoUtilizadoScalarWhereWithAggregatesInput = {
    AND?: Prisma.InsumoUtilizadoScalarWhereWithAggregatesInput | Prisma.InsumoUtilizadoScalarWhereWithAggregatesInput[];
    OR?: Prisma.InsumoUtilizadoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InsumoUtilizadoScalarWhereWithAggregatesInput | Prisma.InsumoUtilizadoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"InsumoUtilizado"> | number;
    turnoId?: Prisma.IntWithAggregatesFilter<"InsumoUtilizado"> | number;
    insumoId?: Prisma.IntWithAggregatesFilter<"InsumoUtilizado"> | number;
    cantidad?: Prisma.DecimalWithAggregatesFilter<"InsumoUtilizado"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"InsumoUtilizado"> | Date | string;
};
export type InsumoUtilizadoCreateInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutInsumosUtilizadosInput;
    insumo: Prisma.InsumoCreateNestedOneWithoutUsosInput;
};
export type InsumoUtilizadoUncheckedCreateInput = {
    id?: number;
    turnoId: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type InsumoUtilizadoUpdateInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutInsumosUtilizadosNestedInput;
    insumo?: Prisma.InsumoUpdateOneRequiredWithoutUsosNestedInput;
};
export type InsumoUtilizadoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoCreateManyInput = {
    id?: number;
    turnoId: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type InsumoUtilizadoUpdateManyMutationInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoListRelationFilter = {
    every?: Prisma.InsumoUtilizadoWhereInput;
    some?: Prisma.InsumoUtilizadoWhereInput;
    none?: Prisma.InsumoUtilizadoWhereInput;
};
export type InsumoUtilizadoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InsumoUtilizadoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type InsumoUtilizadoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type InsumoUtilizadoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type InsumoUtilizadoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type InsumoUtilizadoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    turnoId?: Prisma.SortOrder;
    insumoId?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type InsumoUtilizadoCreateNestedManyWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput> | Prisma.InsumoUtilizadoCreateWithoutTurnoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyTurnoInputEnvelope;
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
};
export type InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput> | Prisma.InsumoUtilizadoCreateWithoutTurnoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyTurnoInputEnvelope;
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
};
export type InsumoUtilizadoUpdateManyWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput> | Prisma.InsumoUtilizadoCreateWithoutTurnoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput[];
    upsert?: Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutTurnoInput | Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutTurnoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyTurnoInputEnvelope;
    set?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    disconnect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    delete?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    update?: Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutTurnoInput | Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutTurnoInput[];
    updateMany?: Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutTurnoInput | Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutTurnoInput[];
    deleteMany?: Prisma.InsumoUtilizadoScalarWhereInput | Prisma.InsumoUtilizadoScalarWhereInput[];
};
export type InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput> | Prisma.InsumoUtilizadoCreateWithoutTurnoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutTurnoInput[];
    upsert?: Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutTurnoInput | Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutTurnoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyTurnoInputEnvelope;
    set?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    disconnect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    delete?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    update?: Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutTurnoInput | Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutTurnoInput[];
    updateMany?: Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutTurnoInput | Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutTurnoInput[];
    deleteMany?: Prisma.InsumoUtilizadoScalarWhereInput | Prisma.InsumoUtilizadoScalarWhereInput[];
};
export type InsumoUtilizadoCreateNestedManyWithoutInsumoInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput> | Prisma.InsumoUtilizadoCreateWithoutInsumoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyInsumoInputEnvelope;
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
};
export type InsumoUtilizadoUncheckedCreateNestedManyWithoutInsumoInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput> | Prisma.InsumoUtilizadoCreateWithoutInsumoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyInsumoInputEnvelope;
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
};
export type InsumoUtilizadoUpdateManyWithoutInsumoNestedInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput> | Prisma.InsumoUtilizadoCreateWithoutInsumoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput[];
    upsert?: Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutInsumoInput | Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutInsumoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyInsumoInputEnvelope;
    set?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    disconnect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    delete?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    update?: Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutInsumoInput | Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutInsumoInput[];
    updateMany?: Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutInsumoInput | Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutInsumoInput[];
    deleteMany?: Prisma.InsumoUtilizadoScalarWhereInput | Prisma.InsumoUtilizadoScalarWhereInput[];
};
export type InsumoUtilizadoUncheckedUpdateManyWithoutInsumoNestedInput = {
    create?: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput> | Prisma.InsumoUtilizadoCreateWithoutInsumoInput[] | Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput[];
    connectOrCreate?: Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput | Prisma.InsumoUtilizadoCreateOrConnectWithoutInsumoInput[];
    upsert?: Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutInsumoInput | Prisma.InsumoUtilizadoUpsertWithWhereUniqueWithoutInsumoInput[];
    createMany?: Prisma.InsumoUtilizadoCreateManyInsumoInputEnvelope;
    set?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    disconnect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    delete?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    connect?: Prisma.InsumoUtilizadoWhereUniqueInput | Prisma.InsumoUtilizadoWhereUniqueInput[];
    update?: Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutInsumoInput | Prisma.InsumoUtilizadoUpdateWithWhereUniqueWithoutInsumoInput[];
    updateMany?: Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutInsumoInput | Prisma.InsumoUtilizadoUpdateManyWithWhereWithoutInsumoInput[];
    deleteMany?: Prisma.InsumoUtilizadoScalarWhereInput | Prisma.InsumoUtilizadoScalarWhereInput[];
};
export type InsumoUtilizadoCreateWithoutTurnoInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    insumo: Prisma.InsumoCreateNestedOneWithoutUsosInput;
};
export type InsumoUtilizadoUncheckedCreateWithoutTurnoInput = {
    id?: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type InsumoUtilizadoCreateOrConnectWithoutTurnoInput = {
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    create: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput>;
};
export type InsumoUtilizadoCreateManyTurnoInputEnvelope = {
    data: Prisma.InsumoUtilizadoCreateManyTurnoInput | Prisma.InsumoUtilizadoCreateManyTurnoInput[];
    skipDuplicates?: boolean;
};
export type InsumoUtilizadoUpsertWithWhereUniqueWithoutTurnoInput = {
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    update: Prisma.XOR<Prisma.InsumoUtilizadoUpdateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedUpdateWithoutTurnoInput>;
    create: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutTurnoInput>;
};
export type InsumoUtilizadoUpdateWithWhereUniqueWithoutTurnoInput = {
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateWithoutTurnoInput, Prisma.InsumoUtilizadoUncheckedUpdateWithoutTurnoInput>;
};
export type InsumoUtilizadoUpdateManyWithWhereWithoutTurnoInput = {
    where: Prisma.InsumoUtilizadoScalarWhereInput;
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateManyMutationInput, Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoInput>;
};
export type InsumoUtilizadoScalarWhereInput = {
    AND?: Prisma.InsumoUtilizadoScalarWhereInput | Prisma.InsumoUtilizadoScalarWhereInput[];
    OR?: Prisma.InsumoUtilizadoScalarWhereInput[];
    NOT?: Prisma.InsumoUtilizadoScalarWhereInput | Prisma.InsumoUtilizadoScalarWhereInput[];
    id?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    turnoId?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    insumoId?: Prisma.IntFilter<"InsumoUtilizado"> | number;
    cantidad?: Prisma.DecimalFilter<"InsumoUtilizado"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"InsumoUtilizado"> | Date | string;
};
export type InsumoUtilizadoCreateWithoutInsumoInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    turno: Prisma.TurnoCreateNestedOneWithoutInsumosUtilizadosInput;
};
export type InsumoUtilizadoUncheckedCreateWithoutInsumoInput = {
    id?: number;
    turnoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type InsumoUtilizadoCreateOrConnectWithoutInsumoInput = {
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    create: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput>;
};
export type InsumoUtilizadoCreateManyInsumoInputEnvelope = {
    data: Prisma.InsumoUtilizadoCreateManyInsumoInput | Prisma.InsumoUtilizadoCreateManyInsumoInput[];
    skipDuplicates?: boolean;
};
export type InsumoUtilizadoUpsertWithWhereUniqueWithoutInsumoInput = {
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    update: Prisma.XOR<Prisma.InsumoUtilizadoUpdateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedUpdateWithoutInsumoInput>;
    create: Prisma.XOR<Prisma.InsumoUtilizadoCreateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedCreateWithoutInsumoInput>;
};
export type InsumoUtilizadoUpdateWithWhereUniqueWithoutInsumoInput = {
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateWithoutInsumoInput, Prisma.InsumoUtilizadoUncheckedUpdateWithoutInsumoInput>;
};
export type InsumoUtilizadoUpdateManyWithWhereWithoutInsumoInput = {
    where: Prisma.InsumoUtilizadoScalarWhereInput;
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateManyMutationInput, Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutInsumoInput>;
};
export type InsumoUtilizadoCreateManyTurnoInput = {
    id?: number;
    insumoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type InsumoUtilizadoUpdateWithoutTurnoInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    insumo?: Prisma.InsumoUpdateOneRequiredWithoutUsosNestedInput;
};
export type InsumoUtilizadoUncheckedUpdateWithoutTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoUncheckedUpdateManyWithoutTurnoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    insumoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoCreateManyInsumoInput = {
    id?: number;
    turnoId: number;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type InsumoUtilizadoUpdateWithoutInsumoInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turno?: Prisma.TurnoUpdateOneRequiredWithoutInsumosUtilizadosNestedInput;
};
export type InsumoUtilizadoUncheckedUpdateWithoutInsumoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoUncheckedUpdateManyWithoutInsumoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    turnoId?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InsumoUtilizadoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["insumoUtilizado"]>;
export type InsumoUtilizadoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["insumoUtilizado"]>;
export type InsumoUtilizadoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    turnoId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["insumoUtilizado"]>;
export type InsumoUtilizadoSelectScalar = {
    id?: boolean;
    turnoId?: boolean;
    insumoId?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
};
export type InsumoUtilizadoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "turnoId" | "insumoId" | "cantidad" | "fecha", ExtArgs["result"]["insumoUtilizado"]>;
export type InsumoUtilizadoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
};
export type InsumoUtilizadoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
};
export type InsumoUtilizadoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turno?: boolean | Prisma.TurnoDefaultArgs<ExtArgs>;
    insumo?: boolean | Prisma.InsumoDefaultArgs<ExtArgs>;
};
export type $InsumoUtilizadoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InsumoUtilizado";
    objects: {
        turno: Prisma.$TurnoPayload<ExtArgs>;
        insumo: Prisma.$InsumoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        turnoId: number;
        insumoId: number;
        cantidad: runtime.Decimal;
        fecha: Date;
    }, ExtArgs["result"]["insumoUtilizado"]>;
    composites: {};
};
export type InsumoUtilizadoGetPayload<S extends boolean | null | undefined | InsumoUtilizadoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload, S>;
export type InsumoUtilizadoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InsumoUtilizadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InsumoUtilizadoCountAggregateInputType | true;
};
export interface InsumoUtilizadoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InsumoUtilizado'];
        meta: {
            name: 'InsumoUtilizado';
        };
    };
    findUnique<T extends InsumoUtilizadoFindUniqueArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InsumoUtilizadoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InsumoUtilizadoFindFirstArgs>(args?: Prisma.SelectSubset<T, InsumoUtilizadoFindFirstArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InsumoUtilizadoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InsumoUtilizadoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InsumoUtilizadoFindManyArgs>(args?: Prisma.SelectSubset<T, InsumoUtilizadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InsumoUtilizadoCreateArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoCreateArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InsumoUtilizadoCreateManyArgs>(args?: Prisma.SelectSubset<T, InsumoUtilizadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InsumoUtilizadoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InsumoUtilizadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InsumoUtilizadoDeleteArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoDeleteArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InsumoUtilizadoUpdateArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoUpdateArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InsumoUtilizadoDeleteManyArgs>(args?: Prisma.SelectSubset<T, InsumoUtilizadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InsumoUtilizadoUpdateManyArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InsumoUtilizadoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InsumoUtilizadoUpsertArgs>(args: Prisma.SelectSubset<T, InsumoUtilizadoUpsertArgs<ExtArgs>>): Prisma.Prisma__InsumoUtilizadoClient<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InsumoUtilizadoCountArgs>(args?: Prisma.Subset<T, InsumoUtilizadoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InsumoUtilizadoCountAggregateOutputType> : number>;
    aggregate<T extends InsumoUtilizadoAggregateArgs>(args: Prisma.Subset<T, InsumoUtilizadoAggregateArgs>): Prisma.PrismaPromise<GetInsumoUtilizadoAggregateType<T>>;
    groupBy<T extends InsumoUtilizadoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InsumoUtilizadoGroupByArgs['orderBy'];
    } : {
        orderBy?: InsumoUtilizadoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InsumoUtilizadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsumoUtilizadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InsumoUtilizadoFieldRefs;
}
export interface Prisma__InsumoUtilizadoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    turno<T extends Prisma.TurnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TurnoDefaultArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    insumo<T extends Prisma.InsumoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InsumoDefaultArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InsumoUtilizadoFieldRefs {
    readonly id: Prisma.FieldRef<"InsumoUtilizado", 'Int'>;
    readonly turnoId: Prisma.FieldRef<"InsumoUtilizado", 'Int'>;
    readonly insumoId: Prisma.FieldRef<"InsumoUtilizado", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"InsumoUtilizado", 'Decimal'>;
    readonly fecha: Prisma.FieldRef<"InsumoUtilizado", 'DateTime'>;
}
export type InsumoUtilizadoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
};
export type InsumoUtilizadoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
};
export type InsumoUtilizadoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where?: Prisma.InsumoUtilizadoWhereInput;
    orderBy?: Prisma.InsumoUtilizadoOrderByWithRelationInput | Prisma.InsumoUtilizadoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoUtilizadoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InsumoUtilizadoScalarFieldEnum | Prisma.InsumoUtilizadoScalarFieldEnum[];
};
export type InsumoUtilizadoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where?: Prisma.InsumoUtilizadoWhereInput;
    orderBy?: Prisma.InsumoUtilizadoOrderByWithRelationInput | Prisma.InsumoUtilizadoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoUtilizadoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InsumoUtilizadoScalarFieldEnum | Prisma.InsumoUtilizadoScalarFieldEnum[];
};
export type InsumoUtilizadoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where?: Prisma.InsumoUtilizadoWhereInput;
    orderBy?: Prisma.InsumoUtilizadoOrderByWithRelationInput | Prisma.InsumoUtilizadoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoUtilizadoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InsumoUtilizadoScalarFieldEnum | Prisma.InsumoUtilizadoScalarFieldEnum[];
};
export type InsumoUtilizadoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InsumoUtilizadoCreateInput, Prisma.InsumoUtilizadoUncheckedCreateInput>;
};
export type InsumoUtilizadoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InsumoUtilizadoCreateManyInput | Prisma.InsumoUtilizadoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InsumoUtilizadoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    data: Prisma.InsumoUtilizadoCreateManyInput | Prisma.InsumoUtilizadoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InsumoUtilizadoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InsumoUtilizadoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateInput, Prisma.InsumoUtilizadoUncheckedUpdateInput>;
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
};
export type InsumoUtilizadoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateManyMutationInput, Prisma.InsumoUtilizadoUncheckedUpdateManyInput>;
    where?: Prisma.InsumoUtilizadoWhereInput;
    limit?: number;
};
export type InsumoUtilizadoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InsumoUtilizadoUpdateManyMutationInput, Prisma.InsumoUtilizadoUncheckedUpdateManyInput>;
    where?: Prisma.InsumoUtilizadoWhereInput;
    limit?: number;
    include?: Prisma.InsumoUtilizadoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InsumoUtilizadoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
    create: Prisma.XOR<Prisma.InsumoUtilizadoCreateInput, Prisma.InsumoUtilizadoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InsumoUtilizadoUpdateInput, Prisma.InsumoUtilizadoUncheckedUpdateInput>;
};
export type InsumoUtilizadoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
    where: Prisma.InsumoUtilizadoWhereUniqueInput;
};
export type InsumoUtilizadoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoUtilizadoWhereInput;
    limit?: number;
};
export type InsumoUtilizadoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoUtilizadoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoUtilizadoOmit<ExtArgs> | null;
    include?: Prisma.InsumoUtilizadoInclude<ExtArgs> | null;
};
export {};
