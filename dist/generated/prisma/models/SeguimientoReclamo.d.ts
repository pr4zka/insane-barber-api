import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type SeguimientoReclamoModel = runtime.Types.Result.DefaultSelection<Prisma.$SeguimientoReclamoPayload>;
export type AggregateSeguimientoReclamo = {
    _count: SeguimientoReclamoCountAggregateOutputType | null;
    _avg: SeguimientoReclamoAvgAggregateOutputType | null;
    _sum: SeguimientoReclamoSumAggregateOutputType | null;
    _min: SeguimientoReclamoMinAggregateOutputType | null;
    _max: SeguimientoReclamoMaxAggregateOutputType | null;
};
export type SeguimientoReclamoAvgAggregateOutputType = {
    id: number | null;
    reclamoId: number | null;
};
export type SeguimientoReclamoSumAggregateOutputType = {
    id: number | null;
    reclamoId: number | null;
};
export type SeguimientoReclamoMinAggregateOutputType = {
    id: number | null;
    reclamoId: number | null;
    comentario: string | null;
    estadoAnterior: string | null;
    estadoNuevo: string | null;
    fecha: Date | null;
};
export type SeguimientoReclamoMaxAggregateOutputType = {
    id: number | null;
    reclamoId: number | null;
    comentario: string | null;
    estadoAnterior: string | null;
    estadoNuevo: string | null;
    fecha: Date | null;
};
export type SeguimientoReclamoCountAggregateOutputType = {
    id: number;
    reclamoId: number;
    comentario: number;
    estadoAnterior: number;
    estadoNuevo: number;
    fecha: number;
    _all: number;
};
export type SeguimientoReclamoAvgAggregateInputType = {
    id?: true;
    reclamoId?: true;
};
export type SeguimientoReclamoSumAggregateInputType = {
    id?: true;
    reclamoId?: true;
};
export type SeguimientoReclamoMinAggregateInputType = {
    id?: true;
    reclamoId?: true;
    comentario?: true;
    estadoAnterior?: true;
    estadoNuevo?: true;
    fecha?: true;
};
export type SeguimientoReclamoMaxAggregateInputType = {
    id?: true;
    reclamoId?: true;
    comentario?: true;
    estadoAnterior?: true;
    estadoNuevo?: true;
    fecha?: true;
};
export type SeguimientoReclamoCountAggregateInputType = {
    id?: true;
    reclamoId?: true;
    comentario?: true;
    estadoAnterior?: true;
    estadoNuevo?: true;
    fecha?: true;
    _all?: true;
};
export type SeguimientoReclamoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeguimientoReclamoWhereInput;
    orderBy?: Prisma.SeguimientoReclamoOrderByWithRelationInput | Prisma.SeguimientoReclamoOrderByWithRelationInput[];
    cursor?: Prisma.SeguimientoReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SeguimientoReclamoCountAggregateInputType;
    _avg?: SeguimientoReclamoAvgAggregateInputType;
    _sum?: SeguimientoReclamoSumAggregateInputType;
    _min?: SeguimientoReclamoMinAggregateInputType;
    _max?: SeguimientoReclamoMaxAggregateInputType;
};
export type GetSeguimientoReclamoAggregateType<T extends SeguimientoReclamoAggregateArgs> = {
    [P in keyof T & keyof AggregateSeguimientoReclamo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeguimientoReclamo[P]> : Prisma.GetScalarType<T[P], AggregateSeguimientoReclamo[P]>;
};
export type SeguimientoReclamoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeguimientoReclamoWhereInput;
    orderBy?: Prisma.SeguimientoReclamoOrderByWithAggregationInput | Prisma.SeguimientoReclamoOrderByWithAggregationInput[];
    by: Prisma.SeguimientoReclamoScalarFieldEnum[] | Prisma.SeguimientoReclamoScalarFieldEnum;
    having?: Prisma.SeguimientoReclamoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeguimientoReclamoCountAggregateInputType | true;
    _avg?: SeguimientoReclamoAvgAggregateInputType;
    _sum?: SeguimientoReclamoSumAggregateInputType;
    _min?: SeguimientoReclamoMinAggregateInputType;
    _max?: SeguimientoReclamoMaxAggregateInputType;
};
export type SeguimientoReclamoGroupByOutputType = {
    id: number;
    reclamoId: number;
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha: Date;
    _count: SeguimientoReclamoCountAggregateOutputType | null;
    _avg: SeguimientoReclamoAvgAggregateOutputType | null;
    _sum: SeguimientoReclamoSumAggregateOutputType | null;
    _min: SeguimientoReclamoMinAggregateOutputType | null;
    _max: SeguimientoReclamoMaxAggregateOutputType | null;
};
type GetSeguimientoReclamoGroupByPayload<T extends SeguimientoReclamoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeguimientoReclamoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeguimientoReclamoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeguimientoReclamoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeguimientoReclamoGroupByOutputType[P]>;
}>>;
export type SeguimientoReclamoWhereInput = {
    AND?: Prisma.SeguimientoReclamoWhereInput | Prisma.SeguimientoReclamoWhereInput[];
    OR?: Prisma.SeguimientoReclamoWhereInput[];
    NOT?: Prisma.SeguimientoReclamoWhereInput | Prisma.SeguimientoReclamoWhereInput[];
    id?: Prisma.IntFilter<"SeguimientoReclamo"> | number;
    reclamoId?: Prisma.IntFilter<"SeguimientoReclamo"> | number;
    comentario?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    estadoAnterior?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    estadoNuevo?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    fecha?: Prisma.DateTimeFilter<"SeguimientoReclamo"> | Date | string;
    reclamo?: Prisma.XOR<Prisma.ReclamoScalarRelationFilter, Prisma.ReclamoWhereInput>;
};
export type SeguimientoReclamoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
    estadoAnterior?: Prisma.SortOrder;
    estadoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    reclamo?: Prisma.ReclamoOrderByWithRelationInput;
};
export type SeguimientoReclamoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SeguimientoReclamoWhereInput | Prisma.SeguimientoReclamoWhereInput[];
    OR?: Prisma.SeguimientoReclamoWhereInput[];
    NOT?: Prisma.SeguimientoReclamoWhereInput | Prisma.SeguimientoReclamoWhereInput[];
    reclamoId?: Prisma.IntFilter<"SeguimientoReclamo"> | number;
    comentario?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    estadoAnterior?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    estadoNuevo?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    fecha?: Prisma.DateTimeFilter<"SeguimientoReclamo"> | Date | string;
    reclamo?: Prisma.XOR<Prisma.ReclamoScalarRelationFilter, Prisma.ReclamoWhereInput>;
}, "id">;
export type SeguimientoReclamoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
    estadoAnterior?: Prisma.SortOrder;
    estadoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.SeguimientoReclamoCountOrderByAggregateInput;
    _avg?: Prisma.SeguimientoReclamoAvgOrderByAggregateInput;
    _max?: Prisma.SeguimientoReclamoMaxOrderByAggregateInput;
    _min?: Prisma.SeguimientoReclamoMinOrderByAggregateInput;
    _sum?: Prisma.SeguimientoReclamoSumOrderByAggregateInput;
};
export type SeguimientoReclamoScalarWhereWithAggregatesInput = {
    AND?: Prisma.SeguimientoReclamoScalarWhereWithAggregatesInput | Prisma.SeguimientoReclamoScalarWhereWithAggregatesInput[];
    OR?: Prisma.SeguimientoReclamoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SeguimientoReclamoScalarWhereWithAggregatesInput | Prisma.SeguimientoReclamoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SeguimientoReclamo"> | number;
    reclamoId?: Prisma.IntWithAggregatesFilter<"SeguimientoReclamo"> | number;
    comentario?: Prisma.StringWithAggregatesFilter<"SeguimientoReclamo"> | string;
    estadoAnterior?: Prisma.StringWithAggregatesFilter<"SeguimientoReclamo"> | string;
    estadoNuevo?: Prisma.StringWithAggregatesFilter<"SeguimientoReclamo"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"SeguimientoReclamo"> | Date | string;
};
export type SeguimientoReclamoCreateInput = {
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha?: Date | string;
    reclamo: Prisma.ReclamoCreateNestedOneWithoutSeguimientosInput;
};
export type SeguimientoReclamoUncheckedCreateInput = {
    id?: number;
    reclamoId: number;
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha?: Date | string;
};
export type SeguimientoReclamoUpdateInput = {
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reclamo?: Prisma.ReclamoUpdateOneRequiredWithoutSeguimientosNestedInput;
};
export type SeguimientoReclamoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reclamoId?: Prisma.IntFieldUpdateOperationsInput | number;
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeguimientoReclamoCreateManyInput = {
    id?: number;
    reclamoId: number;
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha?: Date | string;
};
export type SeguimientoReclamoUpdateManyMutationInput = {
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeguimientoReclamoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    reclamoId?: Prisma.IntFieldUpdateOperationsInput | number;
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeguimientoReclamoListRelationFilter = {
    every?: Prisma.SeguimientoReclamoWhereInput;
    some?: Prisma.SeguimientoReclamoWhereInput;
    none?: Prisma.SeguimientoReclamoWhereInput;
};
export type SeguimientoReclamoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SeguimientoReclamoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
    estadoAnterior?: Prisma.SortOrder;
    estadoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type SeguimientoReclamoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
};
export type SeguimientoReclamoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
    estadoAnterior?: Prisma.SortOrder;
    estadoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type SeguimientoReclamoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
    estadoAnterior?: Prisma.SortOrder;
    estadoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type SeguimientoReclamoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reclamoId?: Prisma.SortOrder;
};
export type SeguimientoReclamoCreateNestedManyWithoutReclamoInput = {
    create?: Prisma.XOR<Prisma.SeguimientoReclamoCreateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput> | Prisma.SeguimientoReclamoCreateWithoutReclamoInput[] | Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput[];
    connectOrCreate?: Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput | Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput[];
    createMany?: Prisma.SeguimientoReclamoCreateManyReclamoInputEnvelope;
    connect?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
};
export type SeguimientoReclamoUncheckedCreateNestedManyWithoutReclamoInput = {
    create?: Prisma.XOR<Prisma.SeguimientoReclamoCreateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput> | Prisma.SeguimientoReclamoCreateWithoutReclamoInput[] | Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput[];
    connectOrCreate?: Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput | Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput[];
    createMany?: Prisma.SeguimientoReclamoCreateManyReclamoInputEnvelope;
    connect?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
};
export type SeguimientoReclamoUpdateManyWithoutReclamoNestedInput = {
    create?: Prisma.XOR<Prisma.SeguimientoReclamoCreateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput> | Prisma.SeguimientoReclamoCreateWithoutReclamoInput[] | Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput[];
    connectOrCreate?: Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput | Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput[];
    upsert?: Prisma.SeguimientoReclamoUpsertWithWhereUniqueWithoutReclamoInput | Prisma.SeguimientoReclamoUpsertWithWhereUniqueWithoutReclamoInput[];
    createMany?: Prisma.SeguimientoReclamoCreateManyReclamoInputEnvelope;
    set?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    disconnect?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    delete?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    connect?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    update?: Prisma.SeguimientoReclamoUpdateWithWhereUniqueWithoutReclamoInput | Prisma.SeguimientoReclamoUpdateWithWhereUniqueWithoutReclamoInput[];
    updateMany?: Prisma.SeguimientoReclamoUpdateManyWithWhereWithoutReclamoInput | Prisma.SeguimientoReclamoUpdateManyWithWhereWithoutReclamoInput[];
    deleteMany?: Prisma.SeguimientoReclamoScalarWhereInput | Prisma.SeguimientoReclamoScalarWhereInput[];
};
export type SeguimientoReclamoUncheckedUpdateManyWithoutReclamoNestedInput = {
    create?: Prisma.XOR<Prisma.SeguimientoReclamoCreateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput> | Prisma.SeguimientoReclamoCreateWithoutReclamoInput[] | Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput[];
    connectOrCreate?: Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput | Prisma.SeguimientoReclamoCreateOrConnectWithoutReclamoInput[];
    upsert?: Prisma.SeguimientoReclamoUpsertWithWhereUniqueWithoutReclamoInput | Prisma.SeguimientoReclamoUpsertWithWhereUniqueWithoutReclamoInput[];
    createMany?: Prisma.SeguimientoReclamoCreateManyReclamoInputEnvelope;
    set?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    disconnect?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    delete?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    connect?: Prisma.SeguimientoReclamoWhereUniqueInput | Prisma.SeguimientoReclamoWhereUniqueInput[];
    update?: Prisma.SeguimientoReclamoUpdateWithWhereUniqueWithoutReclamoInput | Prisma.SeguimientoReclamoUpdateWithWhereUniqueWithoutReclamoInput[];
    updateMany?: Prisma.SeguimientoReclamoUpdateManyWithWhereWithoutReclamoInput | Prisma.SeguimientoReclamoUpdateManyWithWhereWithoutReclamoInput[];
    deleteMany?: Prisma.SeguimientoReclamoScalarWhereInput | Prisma.SeguimientoReclamoScalarWhereInput[];
};
export type SeguimientoReclamoCreateWithoutReclamoInput = {
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha?: Date | string;
};
export type SeguimientoReclamoUncheckedCreateWithoutReclamoInput = {
    id?: number;
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha?: Date | string;
};
export type SeguimientoReclamoCreateOrConnectWithoutReclamoInput = {
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeguimientoReclamoCreateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput>;
};
export type SeguimientoReclamoCreateManyReclamoInputEnvelope = {
    data: Prisma.SeguimientoReclamoCreateManyReclamoInput | Prisma.SeguimientoReclamoCreateManyReclamoInput[];
    skipDuplicates?: boolean;
};
export type SeguimientoReclamoUpsertWithWhereUniqueWithoutReclamoInput = {
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
    update: Prisma.XOR<Prisma.SeguimientoReclamoUpdateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedUpdateWithoutReclamoInput>;
    create: Prisma.XOR<Prisma.SeguimientoReclamoCreateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedCreateWithoutReclamoInput>;
};
export type SeguimientoReclamoUpdateWithWhereUniqueWithoutReclamoInput = {
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
    data: Prisma.XOR<Prisma.SeguimientoReclamoUpdateWithoutReclamoInput, Prisma.SeguimientoReclamoUncheckedUpdateWithoutReclamoInput>;
};
export type SeguimientoReclamoUpdateManyWithWhereWithoutReclamoInput = {
    where: Prisma.SeguimientoReclamoScalarWhereInput;
    data: Prisma.XOR<Prisma.SeguimientoReclamoUpdateManyMutationInput, Prisma.SeguimientoReclamoUncheckedUpdateManyWithoutReclamoInput>;
};
export type SeguimientoReclamoScalarWhereInput = {
    AND?: Prisma.SeguimientoReclamoScalarWhereInput | Prisma.SeguimientoReclamoScalarWhereInput[];
    OR?: Prisma.SeguimientoReclamoScalarWhereInput[];
    NOT?: Prisma.SeguimientoReclamoScalarWhereInput | Prisma.SeguimientoReclamoScalarWhereInput[];
    id?: Prisma.IntFilter<"SeguimientoReclamo"> | number;
    reclamoId?: Prisma.IntFilter<"SeguimientoReclamo"> | number;
    comentario?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    estadoAnterior?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    estadoNuevo?: Prisma.StringFilter<"SeguimientoReclamo"> | string;
    fecha?: Prisma.DateTimeFilter<"SeguimientoReclamo"> | Date | string;
};
export type SeguimientoReclamoCreateManyReclamoInput = {
    id?: number;
    comentario: string;
    estadoAnterior: string;
    estadoNuevo: string;
    fecha?: Date | string;
};
export type SeguimientoReclamoUpdateWithoutReclamoInput = {
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeguimientoReclamoUncheckedUpdateWithoutReclamoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeguimientoReclamoUncheckedUpdateManyWithoutReclamoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    comentario?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoAnterior?: Prisma.StringFieldUpdateOperationsInput | string;
    estadoNuevo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeguimientoReclamoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reclamoId?: boolean;
    comentario?: boolean;
    estadoAnterior?: boolean;
    estadoNuevo?: boolean;
    fecha?: boolean;
    reclamo?: boolean | Prisma.ReclamoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seguimientoReclamo"]>;
export type SeguimientoReclamoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reclamoId?: boolean;
    comentario?: boolean;
    estadoAnterior?: boolean;
    estadoNuevo?: boolean;
    fecha?: boolean;
    reclamo?: boolean | Prisma.ReclamoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seguimientoReclamo"]>;
export type SeguimientoReclamoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reclamoId?: boolean;
    comentario?: boolean;
    estadoAnterior?: boolean;
    estadoNuevo?: boolean;
    fecha?: boolean;
    reclamo?: boolean | Prisma.ReclamoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seguimientoReclamo"]>;
export type SeguimientoReclamoSelectScalar = {
    id?: boolean;
    reclamoId?: boolean;
    comentario?: boolean;
    estadoAnterior?: boolean;
    estadoNuevo?: boolean;
    fecha?: boolean;
};
export type SeguimientoReclamoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reclamoId" | "comentario" | "estadoAnterior" | "estadoNuevo" | "fecha", ExtArgs["result"]["seguimientoReclamo"]>;
export type SeguimientoReclamoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reclamo?: boolean | Prisma.ReclamoDefaultArgs<ExtArgs>;
};
export type SeguimientoReclamoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reclamo?: boolean | Prisma.ReclamoDefaultArgs<ExtArgs>;
};
export type SeguimientoReclamoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reclamo?: boolean | Prisma.ReclamoDefaultArgs<ExtArgs>;
};
export type $SeguimientoReclamoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SeguimientoReclamo";
    objects: {
        reclamo: Prisma.$ReclamoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        reclamoId: number;
        comentario: string;
        estadoAnterior: string;
        estadoNuevo: string;
        fecha: Date;
    }, ExtArgs["result"]["seguimientoReclamo"]>;
    composites: {};
};
export type SeguimientoReclamoGetPayload<S extends boolean | null | undefined | SeguimientoReclamoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload, S>;
export type SeguimientoReclamoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SeguimientoReclamoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeguimientoReclamoCountAggregateInputType | true;
};
export interface SeguimientoReclamoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SeguimientoReclamo'];
        meta: {
            name: 'SeguimientoReclamo';
        };
    };
    findUnique<T extends SeguimientoReclamoFindUniqueArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SeguimientoReclamoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SeguimientoReclamoFindFirstArgs>(args?: Prisma.SelectSubset<T, SeguimientoReclamoFindFirstArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SeguimientoReclamoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SeguimientoReclamoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SeguimientoReclamoFindManyArgs>(args?: Prisma.SelectSubset<T, SeguimientoReclamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SeguimientoReclamoCreateArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoCreateArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SeguimientoReclamoCreateManyArgs>(args?: Prisma.SelectSubset<T, SeguimientoReclamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SeguimientoReclamoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SeguimientoReclamoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SeguimientoReclamoDeleteArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoDeleteArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SeguimientoReclamoUpdateArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoUpdateArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SeguimientoReclamoDeleteManyArgs>(args?: Prisma.SelectSubset<T, SeguimientoReclamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SeguimientoReclamoUpdateManyArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SeguimientoReclamoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SeguimientoReclamoUpsertArgs>(args: Prisma.SelectSubset<T, SeguimientoReclamoUpsertArgs<ExtArgs>>): Prisma.Prisma__SeguimientoReclamoClient<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SeguimientoReclamoCountArgs>(args?: Prisma.Subset<T, SeguimientoReclamoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeguimientoReclamoCountAggregateOutputType> : number>;
    aggregate<T extends SeguimientoReclamoAggregateArgs>(args: Prisma.Subset<T, SeguimientoReclamoAggregateArgs>): Prisma.PrismaPromise<GetSeguimientoReclamoAggregateType<T>>;
    groupBy<T extends SeguimientoReclamoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SeguimientoReclamoGroupByArgs['orderBy'];
    } : {
        orderBy?: SeguimientoReclamoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SeguimientoReclamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeguimientoReclamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SeguimientoReclamoFieldRefs;
}
export interface Prisma__SeguimientoReclamoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reclamo<T extends Prisma.ReclamoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReclamoDefaultArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SeguimientoReclamoFieldRefs {
    readonly id: Prisma.FieldRef<"SeguimientoReclamo", 'Int'>;
    readonly reclamoId: Prisma.FieldRef<"SeguimientoReclamo", 'Int'>;
    readonly comentario: Prisma.FieldRef<"SeguimientoReclamo", 'String'>;
    readonly estadoAnterior: Prisma.FieldRef<"SeguimientoReclamo", 'String'>;
    readonly estadoNuevo: Prisma.FieldRef<"SeguimientoReclamo", 'String'>;
    readonly fecha: Prisma.FieldRef<"SeguimientoReclamo", 'DateTime'>;
}
export type SeguimientoReclamoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
};
export type SeguimientoReclamoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
};
export type SeguimientoReclamoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where?: Prisma.SeguimientoReclamoWhereInput;
    orderBy?: Prisma.SeguimientoReclamoOrderByWithRelationInput | Prisma.SeguimientoReclamoOrderByWithRelationInput[];
    cursor?: Prisma.SeguimientoReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeguimientoReclamoScalarFieldEnum | Prisma.SeguimientoReclamoScalarFieldEnum[];
};
export type SeguimientoReclamoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where?: Prisma.SeguimientoReclamoWhereInput;
    orderBy?: Prisma.SeguimientoReclamoOrderByWithRelationInput | Prisma.SeguimientoReclamoOrderByWithRelationInput[];
    cursor?: Prisma.SeguimientoReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeguimientoReclamoScalarFieldEnum | Prisma.SeguimientoReclamoScalarFieldEnum[];
};
export type SeguimientoReclamoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where?: Prisma.SeguimientoReclamoWhereInput;
    orderBy?: Prisma.SeguimientoReclamoOrderByWithRelationInput | Prisma.SeguimientoReclamoOrderByWithRelationInput[];
    cursor?: Prisma.SeguimientoReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeguimientoReclamoScalarFieldEnum | Prisma.SeguimientoReclamoScalarFieldEnum[];
};
export type SeguimientoReclamoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeguimientoReclamoCreateInput, Prisma.SeguimientoReclamoUncheckedCreateInput>;
};
export type SeguimientoReclamoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SeguimientoReclamoCreateManyInput | Prisma.SeguimientoReclamoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SeguimientoReclamoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    data: Prisma.SeguimientoReclamoCreateManyInput | Prisma.SeguimientoReclamoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SeguimientoReclamoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SeguimientoReclamoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeguimientoReclamoUpdateInput, Prisma.SeguimientoReclamoUncheckedUpdateInput>;
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
};
export type SeguimientoReclamoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SeguimientoReclamoUpdateManyMutationInput, Prisma.SeguimientoReclamoUncheckedUpdateManyInput>;
    where?: Prisma.SeguimientoReclamoWhereInput;
    limit?: number;
};
export type SeguimientoReclamoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SeguimientoReclamoUpdateManyMutationInput, Prisma.SeguimientoReclamoUncheckedUpdateManyInput>;
    where?: Prisma.SeguimientoReclamoWhereInput;
    limit?: number;
    include?: Prisma.SeguimientoReclamoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SeguimientoReclamoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
    create: Prisma.XOR<Prisma.SeguimientoReclamoCreateInput, Prisma.SeguimientoReclamoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SeguimientoReclamoUpdateInput, Prisma.SeguimientoReclamoUncheckedUpdateInput>;
};
export type SeguimientoReclamoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
    where: Prisma.SeguimientoReclamoWhereUniqueInput;
};
export type SeguimientoReclamoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeguimientoReclamoWhereInput;
    limit?: number;
};
export type SeguimientoReclamoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SeguimientoReclamoSelect<ExtArgs> | null;
    omit?: Prisma.SeguimientoReclamoOmit<ExtArgs> | null;
    include?: Prisma.SeguimientoReclamoInclude<ExtArgs> | null;
};
export {};
