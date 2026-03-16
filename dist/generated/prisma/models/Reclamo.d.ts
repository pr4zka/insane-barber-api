import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ReclamoModel = runtime.Types.Result.DefaultSelection<Prisma.$ReclamoPayload>;
export type AggregateReclamo = {
    _count: ReclamoCountAggregateOutputType | null;
    _avg: ReclamoAvgAggregateOutputType | null;
    _sum: ReclamoSumAggregateOutputType | null;
    _min: ReclamoMinAggregateOutputType | null;
    _max: ReclamoMaxAggregateOutputType | null;
};
export type ReclamoAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
};
export type ReclamoSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
};
export type ReclamoMinAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    descripcion: string | null;
    fecha: Date | null;
    estado: string | null;
};
export type ReclamoMaxAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    descripcion: string | null;
    fecha: Date | null;
    estado: string | null;
};
export type ReclamoCountAggregateOutputType = {
    id: number;
    clienteId: number;
    descripcion: number;
    fecha: number;
    estado: number;
    _all: number;
};
export type ReclamoAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
};
export type ReclamoSumAggregateInputType = {
    id?: true;
    clienteId?: true;
};
export type ReclamoMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    descripcion?: true;
    fecha?: true;
    estado?: true;
};
export type ReclamoMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    descripcion?: true;
    fecha?: true;
    estado?: true;
};
export type ReclamoCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    descripcion?: true;
    fecha?: true;
    estado?: true;
    _all?: true;
};
export type ReclamoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReclamoWhereInput;
    orderBy?: Prisma.ReclamoOrderByWithRelationInput | Prisma.ReclamoOrderByWithRelationInput[];
    cursor?: Prisma.ReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReclamoCountAggregateInputType;
    _avg?: ReclamoAvgAggregateInputType;
    _sum?: ReclamoSumAggregateInputType;
    _min?: ReclamoMinAggregateInputType;
    _max?: ReclamoMaxAggregateInputType;
};
export type GetReclamoAggregateType<T extends ReclamoAggregateArgs> = {
    [P in keyof T & keyof AggregateReclamo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReclamo[P]> : Prisma.GetScalarType<T[P], AggregateReclamo[P]>;
};
export type ReclamoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReclamoWhereInput;
    orderBy?: Prisma.ReclamoOrderByWithAggregationInput | Prisma.ReclamoOrderByWithAggregationInput[];
    by: Prisma.ReclamoScalarFieldEnum[] | Prisma.ReclamoScalarFieldEnum;
    having?: Prisma.ReclamoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReclamoCountAggregateInputType | true;
    _avg?: ReclamoAvgAggregateInputType;
    _sum?: ReclamoSumAggregateInputType;
    _min?: ReclamoMinAggregateInputType;
    _max?: ReclamoMaxAggregateInputType;
};
export type ReclamoGroupByOutputType = {
    id: number;
    clienteId: number;
    descripcion: string;
    fecha: Date;
    estado: string;
    _count: ReclamoCountAggregateOutputType | null;
    _avg: ReclamoAvgAggregateOutputType | null;
    _sum: ReclamoSumAggregateOutputType | null;
    _min: ReclamoMinAggregateOutputType | null;
    _max: ReclamoMaxAggregateOutputType | null;
};
type GetReclamoGroupByPayload<T extends ReclamoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReclamoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReclamoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReclamoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReclamoGroupByOutputType[P]>;
}>>;
export type ReclamoWhereInput = {
    AND?: Prisma.ReclamoWhereInput | Prisma.ReclamoWhereInput[];
    OR?: Prisma.ReclamoWhereInput[];
    NOT?: Prisma.ReclamoWhereInput | Prisma.ReclamoWhereInput[];
    id?: Prisma.IntFilter<"Reclamo"> | number;
    clienteId?: Prisma.IntFilter<"Reclamo"> | number;
    descripcion?: Prisma.StringFilter<"Reclamo"> | string;
    fecha?: Prisma.DateTimeFilter<"Reclamo"> | Date | string;
    estado?: Prisma.StringFilter<"Reclamo"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    seguimientos?: Prisma.SeguimientoReclamoListRelationFilter;
};
export type ReclamoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    seguimientos?: Prisma.SeguimientoReclamoOrderByRelationAggregateInput;
};
export type ReclamoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ReclamoWhereInput | Prisma.ReclamoWhereInput[];
    OR?: Prisma.ReclamoWhereInput[];
    NOT?: Prisma.ReclamoWhereInput | Prisma.ReclamoWhereInput[];
    clienteId?: Prisma.IntFilter<"Reclamo"> | number;
    descripcion?: Prisma.StringFilter<"Reclamo"> | string;
    fecha?: Prisma.DateTimeFilter<"Reclamo"> | Date | string;
    estado?: Prisma.StringFilter<"Reclamo"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    seguimientos?: Prisma.SeguimientoReclamoListRelationFilter;
}, "id">;
export type ReclamoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.ReclamoCountOrderByAggregateInput;
    _avg?: Prisma.ReclamoAvgOrderByAggregateInput;
    _max?: Prisma.ReclamoMaxOrderByAggregateInput;
    _min?: Prisma.ReclamoMinOrderByAggregateInput;
    _sum?: Prisma.ReclamoSumOrderByAggregateInput;
};
export type ReclamoScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReclamoScalarWhereWithAggregatesInput | Prisma.ReclamoScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReclamoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReclamoScalarWhereWithAggregatesInput | Prisma.ReclamoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Reclamo"> | number;
    clienteId?: Prisma.IntWithAggregatesFilter<"Reclamo"> | number;
    descripcion?: Prisma.StringWithAggregatesFilter<"Reclamo"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Reclamo"> | Date | string;
    estado?: Prisma.StringWithAggregatesFilter<"Reclamo"> | string;
};
export type ReclamoCreateInput = {
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutReclamosInput;
    seguimientos?: Prisma.SeguimientoReclamoCreateNestedManyWithoutReclamoInput;
};
export type ReclamoUncheckedCreateInput = {
    id?: number;
    clienteId: number;
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
    seguimientos?: Prisma.SeguimientoReclamoUncheckedCreateNestedManyWithoutReclamoInput;
};
export type ReclamoUpdateInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutReclamosNestedInput;
    seguimientos?: Prisma.SeguimientoReclamoUpdateManyWithoutReclamoNestedInput;
};
export type ReclamoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    seguimientos?: Prisma.SeguimientoReclamoUncheckedUpdateManyWithoutReclamoNestedInput;
};
export type ReclamoCreateManyInput = {
    id?: number;
    clienteId: number;
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
};
export type ReclamoUpdateManyMutationInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReclamoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReclamoListRelationFilter = {
    every?: Prisma.ReclamoWhereInput;
    some?: Prisma.ReclamoWhereInput;
    none?: Prisma.ReclamoWhereInput;
};
export type ReclamoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReclamoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ReclamoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
};
export type ReclamoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ReclamoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ReclamoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
};
export type ReclamoScalarRelationFilter = {
    is?: Prisma.ReclamoWhereInput;
    isNot?: Prisma.ReclamoWhereInput;
};
export type ReclamoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.ReclamoCreateWithoutClienteInput, Prisma.ReclamoUncheckedCreateWithoutClienteInput> | Prisma.ReclamoCreateWithoutClienteInput[] | Prisma.ReclamoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ReclamoCreateOrConnectWithoutClienteInput | Prisma.ReclamoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.ReclamoCreateManyClienteInputEnvelope;
    connect?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
};
export type ReclamoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.ReclamoCreateWithoutClienteInput, Prisma.ReclamoUncheckedCreateWithoutClienteInput> | Prisma.ReclamoCreateWithoutClienteInput[] | Prisma.ReclamoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ReclamoCreateOrConnectWithoutClienteInput | Prisma.ReclamoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.ReclamoCreateManyClienteInputEnvelope;
    connect?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
};
export type ReclamoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.ReclamoCreateWithoutClienteInput, Prisma.ReclamoUncheckedCreateWithoutClienteInput> | Prisma.ReclamoCreateWithoutClienteInput[] | Prisma.ReclamoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ReclamoCreateOrConnectWithoutClienteInput | Prisma.ReclamoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.ReclamoUpsertWithWhereUniqueWithoutClienteInput | Prisma.ReclamoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.ReclamoCreateManyClienteInputEnvelope;
    set?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    disconnect?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    delete?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    connect?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    update?: Prisma.ReclamoUpdateWithWhereUniqueWithoutClienteInput | Prisma.ReclamoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.ReclamoUpdateManyWithWhereWithoutClienteInput | Prisma.ReclamoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.ReclamoScalarWhereInput | Prisma.ReclamoScalarWhereInput[];
};
export type ReclamoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.ReclamoCreateWithoutClienteInput, Prisma.ReclamoUncheckedCreateWithoutClienteInput> | Prisma.ReclamoCreateWithoutClienteInput[] | Prisma.ReclamoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ReclamoCreateOrConnectWithoutClienteInput | Prisma.ReclamoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.ReclamoUpsertWithWhereUniqueWithoutClienteInput | Prisma.ReclamoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.ReclamoCreateManyClienteInputEnvelope;
    set?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    disconnect?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    delete?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    connect?: Prisma.ReclamoWhereUniqueInput | Prisma.ReclamoWhereUniqueInput[];
    update?: Prisma.ReclamoUpdateWithWhereUniqueWithoutClienteInput | Prisma.ReclamoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.ReclamoUpdateManyWithWhereWithoutClienteInput | Prisma.ReclamoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.ReclamoScalarWhereInput | Prisma.ReclamoScalarWhereInput[];
};
export type ReclamoCreateNestedOneWithoutSeguimientosInput = {
    create?: Prisma.XOR<Prisma.ReclamoCreateWithoutSeguimientosInput, Prisma.ReclamoUncheckedCreateWithoutSeguimientosInput>;
    connectOrCreate?: Prisma.ReclamoCreateOrConnectWithoutSeguimientosInput;
    connect?: Prisma.ReclamoWhereUniqueInput;
};
export type ReclamoUpdateOneRequiredWithoutSeguimientosNestedInput = {
    create?: Prisma.XOR<Prisma.ReclamoCreateWithoutSeguimientosInput, Prisma.ReclamoUncheckedCreateWithoutSeguimientosInput>;
    connectOrCreate?: Prisma.ReclamoCreateOrConnectWithoutSeguimientosInput;
    upsert?: Prisma.ReclamoUpsertWithoutSeguimientosInput;
    connect?: Prisma.ReclamoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReclamoUpdateToOneWithWhereWithoutSeguimientosInput, Prisma.ReclamoUpdateWithoutSeguimientosInput>, Prisma.ReclamoUncheckedUpdateWithoutSeguimientosInput>;
};
export type ReclamoCreateWithoutClienteInput = {
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
    seguimientos?: Prisma.SeguimientoReclamoCreateNestedManyWithoutReclamoInput;
};
export type ReclamoUncheckedCreateWithoutClienteInput = {
    id?: number;
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
    seguimientos?: Prisma.SeguimientoReclamoUncheckedCreateNestedManyWithoutReclamoInput;
};
export type ReclamoCreateOrConnectWithoutClienteInput = {
    where: Prisma.ReclamoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReclamoCreateWithoutClienteInput, Prisma.ReclamoUncheckedCreateWithoutClienteInput>;
};
export type ReclamoCreateManyClienteInputEnvelope = {
    data: Prisma.ReclamoCreateManyClienteInput | Prisma.ReclamoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type ReclamoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.ReclamoWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReclamoUpdateWithoutClienteInput, Prisma.ReclamoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.ReclamoCreateWithoutClienteInput, Prisma.ReclamoUncheckedCreateWithoutClienteInput>;
};
export type ReclamoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.ReclamoWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReclamoUpdateWithoutClienteInput, Prisma.ReclamoUncheckedUpdateWithoutClienteInput>;
};
export type ReclamoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.ReclamoScalarWhereInput;
    data: Prisma.XOR<Prisma.ReclamoUpdateManyMutationInput, Prisma.ReclamoUncheckedUpdateManyWithoutClienteInput>;
};
export type ReclamoScalarWhereInput = {
    AND?: Prisma.ReclamoScalarWhereInput | Prisma.ReclamoScalarWhereInput[];
    OR?: Prisma.ReclamoScalarWhereInput[];
    NOT?: Prisma.ReclamoScalarWhereInput | Prisma.ReclamoScalarWhereInput[];
    id?: Prisma.IntFilter<"Reclamo"> | number;
    clienteId?: Prisma.IntFilter<"Reclamo"> | number;
    descripcion?: Prisma.StringFilter<"Reclamo"> | string;
    fecha?: Prisma.DateTimeFilter<"Reclamo"> | Date | string;
    estado?: Prisma.StringFilter<"Reclamo"> | string;
};
export type ReclamoCreateWithoutSeguimientosInput = {
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutReclamosInput;
};
export type ReclamoUncheckedCreateWithoutSeguimientosInput = {
    id?: number;
    clienteId: number;
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
};
export type ReclamoCreateOrConnectWithoutSeguimientosInput = {
    where: Prisma.ReclamoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReclamoCreateWithoutSeguimientosInput, Prisma.ReclamoUncheckedCreateWithoutSeguimientosInput>;
};
export type ReclamoUpsertWithoutSeguimientosInput = {
    update: Prisma.XOR<Prisma.ReclamoUpdateWithoutSeguimientosInput, Prisma.ReclamoUncheckedUpdateWithoutSeguimientosInput>;
    create: Prisma.XOR<Prisma.ReclamoCreateWithoutSeguimientosInput, Prisma.ReclamoUncheckedCreateWithoutSeguimientosInput>;
    where?: Prisma.ReclamoWhereInput;
};
export type ReclamoUpdateToOneWithWhereWithoutSeguimientosInput = {
    where?: Prisma.ReclamoWhereInput;
    data: Prisma.XOR<Prisma.ReclamoUpdateWithoutSeguimientosInput, Prisma.ReclamoUncheckedUpdateWithoutSeguimientosInput>;
};
export type ReclamoUpdateWithoutSeguimientosInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutReclamosNestedInput;
};
export type ReclamoUncheckedUpdateWithoutSeguimientosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReclamoCreateManyClienteInput = {
    id?: number;
    descripcion: string;
    fecha?: Date | string;
    estado?: string;
};
export type ReclamoUpdateWithoutClienteInput = {
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    seguimientos?: Prisma.SeguimientoReclamoUpdateManyWithoutReclamoNestedInput;
};
export type ReclamoUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    seguimientos?: Prisma.SeguimientoReclamoUncheckedUpdateManyWithoutReclamoNestedInput;
};
export type ReclamoUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type ReclamoCountOutputType = {
    seguimientos: number;
};
export type ReclamoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seguimientos?: boolean | ReclamoCountOutputTypeCountSeguimientosArgs;
};
export type ReclamoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoCountOutputTypeSelect<ExtArgs> | null;
};
export type ReclamoCountOutputTypeCountSeguimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SeguimientoReclamoWhereInput;
};
export type ReclamoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    descripcion?: boolean;
    fecha?: boolean;
    estado?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    seguimientos?: boolean | Prisma.Reclamo$seguimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.ReclamoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reclamo"]>;
export type ReclamoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    descripcion?: boolean;
    fecha?: boolean;
    estado?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reclamo"]>;
export type ReclamoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    descripcion?: boolean;
    fecha?: boolean;
    estado?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reclamo"]>;
export type ReclamoSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    descripcion?: boolean;
    fecha?: boolean;
    estado?: boolean;
};
export type ReclamoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "descripcion" | "fecha" | "estado", ExtArgs["result"]["reclamo"]>;
export type ReclamoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    seguimientos?: boolean | Prisma.Reclamo$seguimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.ReclamoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReclamoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type ReclamoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
};
export type $ReclamoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reclamo";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        seguimientos: Prisma.$SeguimientoReclamoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clienteId: number;
        descripcion: string;
        fecha: Date;
        estado: string;
    }, ExtArgs["result"]["reclamo"]>;
    composites: {};
};
export type ReclamoGetPayload<S extends boolean | null | undefined | ReclamoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReclamoPayload, S>;
export type ReclamoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReclamoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReclamoCountAggregateInputType | true;
};
export interface ReclamoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reclamo'];
        meta: {
            name: 'Reclamo';
        };
    };
    findUnique<T extends ReclamoFindUniqueArgs>(args: Prisma.SelectSubset<T, ReclamoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReclamoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReclamoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReclamoFindFirstArgs>(args?: Prisma.SelectSubset<T, ReclamoFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReclamoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReclamoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReclamoFindManyArgs>(args?: Prisma.SelectSubset<T, ReclamoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReclamoCreateArgs>(args: Prisma.SelectSubset<T, ReclamoCreateArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReclamoCreateManyArgs>(args?: Prisma.SelectSubset<T, ReclamoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReclamoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReclamoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReclamoDeleteArgs>(args: Prisma.SelectSubset<T, ReclamoDeleteArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReclamoUpdateArgs>(args: Prisma.SelectSubset<T, ReclamoUpdateArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReclamoDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReclamoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReclamoUpdateManyArgs>(args: Prisma.SelectSubset<T, ReclamoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReclamoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReclamoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReclamoUpsertArgs>(args: Prisma.SelectSubset<T, ReclamoUpsertArgs<ExtArgs>>): Prisma.Prisma__ReclamoClient<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReclamoCountArgs>(args?: Prisma.Subset<T, ReclamoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReclamoCountAggregateOutputType> : number>;
    aggregate<T extends ReclamoAggregateArgs>(args: Prisma.Subset<T, ReclamoAggregateArgs>): Prisma.PrismaPromise<GetReclamoAggregateType<T>>;
    groupBy<T extends ReclamoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReclamoGroupByArgs['orderBy'];
    } : {
        orderBy?: ReclamoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReclamoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReclamoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReclamoFieldRefs;
}
export interface Prisma__ReclamoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    seguimientos<T extends Prisma.Reclamo$seguimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reclamo$seguimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SeguimientoReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReclamoFieldRefs {
    readonly id: Prisma.FieldRef<"Reclamo", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Reclamo", 'Int'>;
    readonly descripcion: Prisma.FieldRef<"Reclamo", 'String'>;
    readonly fecha: Prisma.FieldRef<"Reclamo", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"Reclamo", 'String'>;
}
export type ReclamoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where: Prisma.ReclamoWhereUniqueInput;
};
export type ReclamoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where: Prisma.ReclamoWhereUniqueInput;
};
export type ReclamoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where?: Prisma.ReclamoWhereInput;
    orderBy?: Prisma.ReclamoOrderByWithRelationInput | Prisma.ReclamoOrderByWithRelationInput[];
    cursor?: Prisma.ReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReclamoScalarFieldEnum | Prisma.ReclamoScalarFieldEnum[];
};
export type ReclamoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where?: Prisma.ReclamoWhereInput;
    orderBy?: Prisma.ReclamoOrderByWithRelationInput | Prisma.ReclamoOrderByWithRelationInput[];
    cursor?: Prisma.ReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReclamoScalarFieldEnum | Prisma.ReclamoScalarFieldEnum[];
};
export type ReclamoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where?: Prisma.ReclamoWhereInput;
    orderBy?: Prisma.ReclamoOrderByWithRelationInput | Prisma.ReclamoOrderByWithRelationInput[];
    cursor?: Prisma.ReclamoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReclamoScalarFieldEnum | Prisma.ReclamoScalarFieldEnum[];
};
export type ReclamoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReclamoCreateInput, Prisma.ReclamoUncheckedCreateInput>;
};
export type ReclamoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReclamoCreateManyInput | Prisma.ReclamoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReclamoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    data: Prisma.ReclamoCreateManyInput | Prisma.ReclamoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReclamoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReclamoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReclamoUpdateInput, Prisma.ReclamoUncheckedUpdateInput>;
    where: Prisma.ReclamoWhereUniqueInput;
};
export type ReclamoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReclamoUpdateManyMutationInput, Prisma.ReclamoUncheckedUpdateManyInput>;
    where?: Prisma.ReclamoWhereInput;
    limit?: number;
};
export type ReclamoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReclamoUpdateManyMutationInput, Prisma.ReclamoUncheckedUpdateManyInput>;
    where?: Prisma.ReclamoWhereInput;
    limit?: number;
    include?: Prisma.ReclamoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReclamoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where: Prisma.ReclamoWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReclamoCreateInput, Prisma.ReclamoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReclamoUpdateInput, Prisma.ReclamoUncheckedUpdateInput>;
};
export type ReclamoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
    where: Prisma.ReclamoWhereUniqueInput;
};
export type ReclamoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReclamoWhereInput;
    limit?: number;
};
export type Reclamo$seguimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReclamoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReclamoSelect<ExtArgs> | null;
    omit?: Prisma.ReclamoOmit<ExtArgs> | null;
    include?: Prisma.ReclamoInclude<ExtArgs> | null;
};
export {};
