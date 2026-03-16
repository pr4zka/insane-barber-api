import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TurnoModel = runtime.Types.Result.DefaultSelection<Prisma.$TurnoPayload>;
export type AggregateTurno = {
    _count: TurnoCountAggregateOutputType | null;
    _avg: TurnoAvgAggregateOutputType | null;
    _sum: TurnoSumAggregateOutputType | null;
    _min: TurnoMinAggregateOutputType | null;
    _max: TurnoMaxAggregateOutputType | null;
};
export type TurnoAvgAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    barberoId: number | null;
    servicioId: number | null;
};
export type TurnoSumAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    barberoId: number | null;
    servicioId: number | null;
};
export type TurnoMinAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    barberoId: number | null;
    servicioId: number | null;
    fecha: Date | null;
    hora: string | null;
    estado: string | null;
    observacion: string | null;
};
export type TurnoMaxAggregateOutputType = {
    id: number | null;
    clienteId: number | null;
    barberoId: number | null;
    servicioId: number | null;
    fecha: Date | null;
    hora: string | null;
    estado: string | null;
    observacion: string | null;
};
export type TurnoCountAggregateOutputType = {
    id: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: number;
    hora: number;
    estado: number;
    observacion: number;
    _all: number;
};
export type TurnoAvgAggregateInputType = {
    id?: true;
    clienteId?: true;
    barberoId?: true;
    servicioId?: true;
};
export type TurnoSumAggregateInputType = {
    id?: true;
    clienteId?: true;
    barberoId?: true;
    servicioId?: true;
};
export type TurnoMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    barberoId?: true;
    servicioId?: true;
    fecha?: true;
    hora?: true;
    estado?: true;
    observacion?: true;
};
export type TurnoMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    barberoId?: true;
    servicioId?: true;
    fecha?: true;
    hora?: true;
    estado?: true;
    observacion?: true;
};
export type TurnoCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    barberoId?: true;
    servicioId?: true;
    fecha?: true;
    hora?: true;
    estado?: true;
    observacion?: true;
    _all?: true;
};
export type TurnoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithRelationInput | Prisma.TurnoOrderByWithRelationInput[];
    cursor?: Prisma.TurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TurnoCountAggregateInputType;
    _avg?: TurnoAvgAggregateInputType;
    _sum?: TurnoSumAggregateInputType;
    _min?: TurnoMinAggregateInputType;
    _max?: TurnoMaxAggregateInputType;
};
export type GetTurnoAggregateType<T extends TurnoAggregateArgs> = {
    [P in keyof T & keyof AggregateTurno]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTurno[P]> : Prisma.GetScalarType<T[P], AggregateTurno[P]>;
};
export type TurnoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithAggregationInput | Prisma.TurnoOrderByWithAggregationInput[];
    by: Prisma.TurnoScalarFieldEnum[] | Prisma.TurnoScalarFieldEnum;
    having?: Prisma.TurnoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TurnoCountAggregateInputType | true;
    _avg?: TurnoAvgAggregateInputType;
    _sum?: TurnoSumAggregateInputType;
    _min?: TurnoMinAggregateInputType;
    _max?: TurnoMaxAggregateInputType;
};
export type TurnoGroupByOutputType = {
    id: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: Date;
    hora: string;
    estado: string;
    observacion: string;
    _count: TurnoCountAggregateOutputType | null;
    _avg: TurnoAvgAggregateOutputType | null;
    _sum: TurnoSumAggregateOutputType | null;
    _min: TurnoMinAggregateOutputType | null;
    _max: TurnoMaxAggregateOutputType | null;
};
type GetTurnoGroupByPayload<T extends TurnoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TurnoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TurnoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TurnoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TurnoGroupByOutputType[P]>;
}>>;
export type TurnoWhereInput = {
    AND?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    OR?: Prisma.TurnoWhereInput[];
    NOT?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    id?: Prisma.IntFilter<"Turno"> | number;
    clienteId?: Prisma.IntFilter<"Turno"> | number;
    barberoId?: Prisma.IntFilter<"Turno"> | number;
    servicioId?: Prisma.IntFilter<"Turno"> | number;
    fecha?: Prisma.DateTimeFilter<"Turno"> | Date | string;
    hora?: Prisma.StringFilter<"Turno"> | string;
    estado?: Prisma.StringFilter<"Turno"> | string;
    observacion?: Prisma.StringFilter<"Turno"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    barbero?: Prisma.XOR<Prisma.BarberoScalarRelationFilter, Prisma.BarberoWhereInput>;
    servicio?: Prisma.XOR<Prisma.ServicioScalarRelationFilter, Prisma.ServicioWhereInput>;
    pago?: Prisma.XOR<Prisma.PagoNullableScalarRelationFilter, Prisma.PagoWhereInput> | null;
    insumosUtilizados?: Prisma.InsumoUtilizadoListRelationFilter;
    notaRemisionVenta?: Prisma.XOR<Prisma.NotaRemisionVentaNullableScalarRelationFilter, Prisma.NotaRemisionVentaWhereInput> | null;
};
export type TurnoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    cliente?: Prisma.ClienteOrderByWithRelationInput;
    barbero?: Prisma.BarberoOrderByWithRelationInput;
    servicio?: Prisma.ServicioOrderByWithRelationInput;
    pago?: Prisma.PagoOrderByWithRelationInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoOrderByRelationAggregateInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaOrderByWithRelationInput;
};
export type TurnoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    OR?: Prisma.TurnoWhereInput[];
    NOT?: Prisma.TurnoWhereInput | Prisma.TurnoWhereInput[];
    clienteId?: Prisma.IntFilter<"Turno"> | number;
    barberoId?: Prisma.IntFilter<"Turno"> | number;
    servicioId?: Prisma.IntFilter<"Turno"> | number;
    fecha?: Prisma.DateTimeFilter<"Turno"> | Date | string;
    hora?: Prisma.StringFilter<"Turno"> | string;
    estado?: Prisma.StringFilter<"Turno"> | string;
    observacion?: Prisma.StringFilter<"Turno"> | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.ClienteWhereInput>;
    barbero?: Prisma.XOR<Prisma.BarberoScalarRelationFilter, Prisma.BarberoWhereInput>;
    servicio?: Prisma.XOR<Prisma.ServicioScalarRelationFilter, Prisma.ServicioWhereInput>;
    pago?: Prisma.XOR<Prisma.PagoNullableScalarRelationFilter, Prisma.PagoWhereInput> | null;
    insumosUtilizados?: Prisma.InsumoUtilizadoListRelationFilter;
    notaRemisionVenta?: Prisma.XOR<Prisma.NotaRemisionVentaNullableScalarRelationFilter, Prisma.NotaRemisionVentaWhereInput> | null;
}, "id">;
export type TurnoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    _count?: Prisma.TurnoCountOrderByAggregateInput;
    _avg?: Prisma.TurnoAvgOrderByAggregateInput;
    _max?: Prisma.TurnoMaxOrderByAggregateInput;
    _min?: Prisma.TurnoMinOrderByAggregateInput;
    _sum?: Prisma.TurnoSumOrderByAggregateInput;
};
export type TurnoScalarWhereWithAggregatesInput = {
    AND?: Prisma.TurnoScalarWhereWithAggregatesInput | Prisma.TurnoScalarWhereWithAggregatesInput[];
    OR?: Prisma.TurnoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TurnoScalarWhereWithAggregatesInput | Prisma.TurnoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    clienteId?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    barberoId?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    servicioId?: Prisma.IntWithAggregatesFilter<"Turno"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"Turno"> | Date | string;
    hora?: Prisma.StringWithAggregatesFilter<"Turno"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"Turno"> | string;
    observacion?: Prisma.StringWithAggregatesFilter<"Turno"> | string;
};
export type TurnoCreateInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutTurnosInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutTurnosInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutTurnosInput;
    pago?: Prisma.PagoCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaCreateNestedOneWithoutTurnoInput;
};
export type TurnoUncheckedCreateInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    pago?: Prisma.PagoUncheckedCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput;
};
export type TurnoUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutTurnosNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutTurnosNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutTurnosNestedInput;
    pago?: Prisma.PagoUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUncheckedUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput;
};
export type TurnoCreateManyInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
};
export type TurnoUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TurnoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TurnoListRelationFilter = {
    every?: Prisma.TurnoWhereInput;
    some?: Prisma.TurnoWhereInput;
    none?: Prisma.TurnoWhereInput;
};
export type TurnoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TurnoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type TurnoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
};
export type TurnoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type TurnoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    hora?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type TurnoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    barberoId?: Prisma.SortOrder;
    servicioId?: Prisma.SortOrder;
};
export type TurnoScalarRelationFilter = {
    is?: Prisma.TurnoWhereInput;
    isNot?: Prisma.TurnoWhereInput;
};
export type TurnoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutClienteInput, Prisma.TurnoUncheckedCreateWithoutClienteInput> | Prisma.TurnoCreateWithoutClienteInput[] | Prisma.TurnoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutClienteInput | Prisma.TurnoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.TurnoCreateManyClienteInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutClienteInput, Prisma.TurnoUncheckedCreateWithoutClienteInput> | Prisma.TurnoCreateWithoutClienteInput[] | Prisma.TurnoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutClienteInput | Prisma.TurnoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.TurnoCreateManyClienteInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutClienteInput, Prisma.TurnoUncheckedCreateWithoutClienteInput> | Prisma.TurnoCreateWithoutClienteInput[] | Prisma.TurnoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutClienteInput | Prisma.TurnoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutClienteInput | Prisma.TurnoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.TurnoCreateManyClienteInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutClienteInput | Prisma.TurnoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutClienteInput | Prisma.TurnoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutClienteInput, Prisma.TurnoUncheckedCreateWithoutClienteInput> | Prisma.TurnoCreateWithoutClienteInput[] | Prisma.TurnoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutClienteInput | Prisma.TurnoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutClienteInput | Prisma.TurnoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.TurnoCreateManyClienteInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutClienteInput | Prisma.TurnoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutClienteInput | Prisma.TurnoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoCreateNestedManyWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutBarberoInput, Prisma.TurnoUncheckedCreateWithoutBarberoInput> | Prisma.TurnoCreateWithoutBarberoInput[] | Prisma.TurnoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutBarberoInput | Prisma.TurnoCreateOrConnectWithoutBarberoInput[];
    createMany?: Prisma.TurnoCreateManyBarberoInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUncheckedCreateNestedManyWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutBarberoInput, Prisma.TurnoUncheckedCreateWithoutBarberoInput> | Prisma.TurnoCreateWithoutBarberoInput[] | Prisma.TurnoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutBarberoInput | Prisma.TurnoCreateOrConnectWithoutBarberoInput[];
    createMany?: Prisma.TurnoCreateManyBarberoInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUpdateManyWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutBarberoInput, Prisma.TurnoUncheckedCreateWithoutBarberoInput> | Prisma.TurnoCreateWithoutBarberoInput[] | Prisma.TurnoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutBarberoInput | Prisma.TurnoCreateOrConnectWithoutBarberoInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutBarberoInput | Prisma.TurnoUpsertWithWhereUniqueWithoutBarberoInput[];
    createMany?: Prisma.TurnoCreateManyBarberoInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutBarberoInput | Prisma.TurnoUpdateWithWhereUniqueWithoutBarberoInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutBarberoInput | Prisma.TurnoUpdateManyWithWhereWithoutBarberoInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoUncheckedUpdateManyWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutBarberoInput, Prisma.TurnoUncheckedCreateWithoutBarberoInput> | Prisma.TurnoCreateWithoutBarberoInput[] | Prisma.TurnoUncheckedCreateWithoutBarberoInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutBarberoInput | Prisma.TurnoCreateOrConnectWithoutBarberoInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutBarberoInput | Prisma.TurnoUpsertWithWhereUniqueWithoutBarberoInput[];
    createMany?: Prisma.TurnoCreateManyBarberoInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutBarberoInput | Prisma.TurnoUpdateWithWhereUniqueWithoutBarberoInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutBarberoInput | Prisma.TurnoUpdateManyWithWhereWithoutBarberoInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutServicioInput, Prisma.TurnoUncheckedCreateWithoutServicioInput> | Prisma.TurnoCreateWithoutServicioInput[] | Prisma.TurnoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutServicioInput | Prisma.TurnoCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.TurnoCreateManyServicioInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUncheckedCreateNestedManyWithoutServicioInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutServicioInput, Prisma.TurnoUncheckedCreateWithoutServicioInput> | Prisma.TurnoCreateWithoutServicioInput[] | Prisma.TurnoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutServicioInput | Prisma.TurnoCreateOrConnectWithoutServicioInput[];
    createMany?: Prisma.TurnoCreateManyServicioInputEnvelope;
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
};
export type TurnoUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutServicioInput, Prisma.TurnoUncheckedCreateWithoutServicioInput> | Prisma.TurnoCreateWithoutServicioInput[] | Prisma.TurnoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutServicioInput | Prisma.TurnoCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutServicioInput | Prisma.TurnoUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.TurnoCreateManyServicioInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutServicioInput | Prisma.TurnoUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutServicioInput | Prisma.TurnoUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutServicioInput, Prisma.TurnoUncheckedCreateWithoutServicioInput> | Prisma.TurnoCreateWithoutServicioInput[] | Prisma.TurnoUncheckedCreateWithoutServicioInput[];
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutServicioInput | Prisma.TurnoCreateOrConnectWithoutServicioInput[];
    upsert?: Prisma.TurnoUpsertWithWhereUniqueWithoutServicioInput | Prisma.TurnoUpsertWithWhereUniqueWithoutServicioInput[];
    createMany?: Prisma.TurnoCreateManyServicioInputEnvelope;
    set?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    disconnect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    delete?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    connect?: Prisma.TurnoWhereUniqueInput | Prisma.TurnoWhereUniqueInput[];
    update?: Prisma.TurnoUpdateWithWhereUniqueWithoutServicioInput | Prisma.TurnoUpdateWithWhereUniqueWithoutServicioInput[];
    updateMany?: Prisma.TurnoUpdateManyWithWhereWithoutServicioInput | Prisma.TurnoUpdateManyWithWhereWithoutServicioInput[];
    deleteMany?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
};
export type TurnoCreateNestedOneWithoutInsumosUtilizadosInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutInsumosUtilizadosInput, Prisma.TurnoUncheckedCreateWithoutInsumosUtilizadosInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutInsumosUtilizadosInput;
    connect?: Prisma.TurnoWhereUniqueInput;
};
export type TurnoUpdateOneRequiredWithoutInsumosUtilizadosNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutInsumosUtilizadosInput, Prisma.TurnoUncheckedCreateWithoutInsumosUtilizadosInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutInsumosUtilizadosInput;
    upsert?: Prisma.TurnoUpsertWithoutInsumosUtilizadosInput;
    connect?: Prisma.TurnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TurnoUpdateToOneWithWhereWithoutInsumosUtilizadosInput, Prisma.TurnoUpdateWithoutInsumosUtilizadosInput>, Prisma.TurnoUncheckedUpdateWithoutInsumosUtilizadosInput>;
};
export type TurnoCreateNestedOneWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutPagoInput, Prisma.TurnoUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutPagoInput;
    connect?: Prisma.TurnoWhereUniqueInput;
};
export type TurnoUpdateOneRequiredWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutPagoInput, Prisma.TurnoUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutPagoInput;
    upsert?: Prisma.TurnoUpsertWithoutPagoInput;
    connect?: Prisma.TurnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TurnoUpdateToOneWithWhereWithoutPagoInput, Prisma.TurnoUpdateWithoutPagoInput>, Prisma.TurnoUncheckedUpdateWithoutPagoInput>;
};
export type TurnoCreateNestedOneWithoutNotaRemisionVentaInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutNotaRemisionVentaInput, Prisma.TurnoUncheckedCreateWithoutNotaRemisionVentaInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutNotaRemisionVentaInput;
    connect?: Prisma.TurnoWhereUniqueInput;
};
export type TurnoUpdateOneRequiredWithoutNotaRemisionVentaNestedInput = {
    create?: Prisma.XOR<Prisma.TurnoCreateWithoutNotaRemisionVentaInput, Prisma.TurnoUncheckedCreateWithoutNotaRemisionVentaInput>;
    connectOrCreate?: Prisma.TurnoCreateOrConnectWithoutNotaRemisionVentaInput;
    upsert?: Prisma.TurnoUpsertWithoutNotaRemisionVentaInput;
    connect?: Prisma.TurnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TurnoUpdateToOneWithWhereWithoutNotaRemisionVentaInput, Prisma.TurnoUpdateWithoutNotaRemisionVentaInput>, Prisma.TurnoUncheckedUpdateWithoutNotaRemisionVentaInput>;
};
export type TurnoCreateWithoutClienteInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    barbero: Prisma.BarberoCreateNestedOneWithoutTurnosInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutTurnosInput;
    pago?: Prisma.PagoCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaCreateNestedOneWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutClienteInput = {
    id?: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    pago?: Prisma.PagoUncheckedCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutClienteInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutClienteInput, Prisma.TurnoUncheckedCreateWithoutClienteInput>;
};
export type TurnoCreateManyClienteInputEnvelope = {
    data: Prisma.TurnoCreateManyClienteInput | Prisma.TurnoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type TurnoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.TurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutClienteInput, Prisma.TurnoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutClienteInput, Prisma.TurnoUncheckedCreateWithoutClienteInput>;
};
export type TurnoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.TurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutClienteInput, Prisma.TurnoUncheckedUpdateWithoutClienteInput>;
};
export type TurnoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.TurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyWithoutClienteInput>;
};
export type TurnoScalarWhereInput = {
    AND?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
    OR?: Prisma.TurnoScalarWhereInput[];
    NOT?: Prisma.TurnoScalarWhereInput | Prisma.TurnoScalarWhereInput[];
    id?: Prisma.IntFilter<"Turno"> | number;
    clienteId?: Prisma.IntFilter<"Turno"> | number;
    barberoId?: Prisma.IntFilter<"Turno"> | number;
    servicioId?: Prisma.IntFilter<"Turno"> | number;
    fecha?: Prisma.DateTimeFilter<"Turno"> | Date | string;
    hora?: Prisma.StringFilter<"Turno"> | string;
    estado?: Prisma.StringFilter<"Turno"> | string;
    observacion?: Prisma.StringFilter<"Turno"> | string;
};
export type TurnoCreateWithoutBarberoInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutTurnosInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutTurnosInput;
    pago?: Prisma.PagoCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaCreateNestedOneWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutBarberoInput = {
    id?: number;
    clienteId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    pago?: Prisma.PagoUncheckedCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutBarberoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutBarberoInput, Prisma.TurnoUncheckedCreateWithoutBarberoInput>;
};
export type TurnoCreateManyBarberoInputEnvelope = {
    data: Prisma.TurnoCreateManyBarberoInput | Prisma.TurnoCreateManyBarberoInput[];
    skipDuplicates?: boolean;
};
export type TurnoUpsertWithWhereUniqueWithoutBarberoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutBarberoInput, Prisma.TurnoUncheckedUpdateWithoutBarberoInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutBarberoInput, Prisma.TurnoUncheckedCreateWithoutBarberoInput>;
};
export type TurnoUpdateWithWhereUniqueWithoutBarberoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutBarberoInput, Prisma.TurnoUncheckedUpdateWithoutBarberoInput>;
};
export type TurnoUpdateManyWithWhereWithoutBarberoInput = {
    where: Prisma.TurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyWithoutBarberoInput>;
};
export type TurnoCreateWithoutServicioInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutTurnosInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutTurnosInput;
    pago?: Prisma.PagoCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaCreateNestedOneWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutServicioInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    pago?: Prisma.PagoUncheckedCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutServicioInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutServicioInput, Prisma.TurnoUncheckedCreateWithoutServicioInput>;
};
export type TurnoCreateManyServicioInputEnvelope = {
    data: Prisma.TurnoCreateManyServicioInput | Prisma.TurnoCreateManyServicioInput[];
    skipDuplicates?: boolean;
};
export type TurnoUpsertWithWhereUniqueWithoutServicioInput = {
    where: Prisma.TurnoWhereUniqueInput;
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutServicioInput, Prisma.TurnoUncheckedUpdateWithoutServicioInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutServicioInput, Prisma.TurnoUncheckedCreateWithoutServicioInput>;
};
export type TurnoUpdateWithWhereUniqueWithoutServicioInput = {
    where: Prisma.TurnoWhereUniqueInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutServicioInput, Prisma.TurnoUncheckedUpdateWithoutServicioInput>;
};
export type TurnoUpdateManyWithWhereWithoutServicioInput = {
    where: Prisma.TurnoScalarWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyWithoutServicioInput>;
};
export type TurnoCreateWithoutInsumosUtilizadosInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutTurnosInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutTurnosInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutTurnosInput;
    pago?: Prisma.PagoCreateNestedOneWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaCreateNestedOneWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutInsumosUtilizadosInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    pago?: Prisma.PagoUncheckedCreateNestedOneWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutInsumosUtilizadosInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutInsumosUtilizadosInput, Prisma.TurnoUncheckedCreateWithoutInsumosUtilizadosInput>;
};
export type TurnoUpsertWithoutInsumosUtilizadosInput = {
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutInsumosUtilizadosInput, Prisma.TurnoUncheckedUpdateWithoutInsumosUtilizadosInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutInsumosUtilizadosInput, Prisma.TurnoUncheckedCreateWithoutInsumosUtilizadosInput>;
    where?: Prisma.TurnoWhereInput;
};
export type TurnoUpdateToOneWithWhereWithoutInsumosUtilizadosInput = {
    where?: Prisma.TurnoWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutInsumosUtilizadosInput, Prisma.TurnoUncheckedUpdateWithoutInsumosUtilizadosInput>;
};
export type TurnoUpdateWithoutInsumosUtilizadosInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutTurnosNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutTurnosNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutTurnosNestedInput;
    pago?: Prisma.PagoUpdateOneWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutInsumosUtilizadosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUncheckedUpdateOneWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput;
};
export type TurnoCreateWithoutPagoInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutTurnosInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutTurnosInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutTurnosInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaCreateNestedOneWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutPagoInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedCreateNestedOneWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutPagoInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutPagoInput, Prisma.TurnoUncheckedCreateWithoutPagoInput>;
};
export type TurnoUpsertWithoutPagoInput = {
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutPagoInput, Prisma.TurnoUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutPagoInput, Prisma.TurnoUncheckedCreateWithoutPagoInput>;
    where?: Prisma.TurnoWhereInput;
};
export type TurnoUpdateToOneWithWhereWithoutPagoInput = {
    where?: Prisma.TurnoWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutPagoInput, Prisma.TurnoUncheckedUpdateWithoutPagoInput>;
};
export type TurnoUpdateWithoutPagoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutTurnosNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutTurnosNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutTurnosNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput;
};
export type TurnoCreateWithoutNotaRemisionVentaInput = {
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    cliente: Prisma.ClienteCreateNestedOneWithoutTurnosInput;
    barbero: Prisma.BarberoCreateNestedOneWithoutTurnosInput;
    servicio: Prisma.ServicioCreateNestedOneWithoutTurnosInput;
    pago?: Prisma.PagoCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoCreateNestedManyWithoutTurnoInput;
};
export type TurnoUncheckedCreateWithoutNotaRemisionVentaInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
    pago?: Prisma.PagoUncheckedCreateNestedOneWithoutTurnoInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutTurnoInput;
};
export type TurnoCreateOrConnectWithoutNotaRemisionVentaInput = {
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutNotaRemisionVentaInput, Prisma.TurnoUncheckedCreateWithoutNotaRemisionVentaInput>;
};
export type TurnoUpsertWithoutNotaRemisionVentaInput = {
    update: Prisma.XOR<Prisma.TurnoUpdateWithoutNotaRemisionVentaInput, Prisma.TurnoUncheckedUpdateWithoutNotaRemisionVentaInput>;
    create: Prisma.XOR<Prisma.TurnoCreateWithoutNotaRemisionVentaInput, Prisma.TurnoUncheckedCreateWithoutNotaRemisionVentaInput>;
    where?: Prisma.TurnoWhereInput;
};
export type TurnoUpdateToOneWithWhereWithoutNotaRemisionVentaInput = {
    where?: Prisma.TurnoWhereInput;
    data: Prisma.XOR<Prisma.TurnoUpdateWithoutNotaRemisionVentaInput, Prisma.TurnoUncheckedUpdateWithoutNotaRemisionVentaInput>;
};
export type TurnoUpdateWithoutNotaRemisionVentaInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutTurnosNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutTurnosNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutTurnosNestedInput;
    pago?: Prisma.PagoUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUpdateManyWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutNotaRemisionVentaInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUncheckedUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput;
};
export type TurnoCreateManyClienteInput = {
    id?: number;
    barberoId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
};
export type TurnoUpdateWithoutClienteInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutTurnosNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutTurnosNestedInput;
    pago?: Prisma.PagoUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUncheckedUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TurnoCreateManyBarberoInput = {
    id?: number;
    clienteId: number;
    servicioId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
};
export type TurnoUpdateWithoutBarberoInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutTurnosNestedInput;
    servicio?: Prisma.ServicioUpdateOneRequiredWithoutTurnosNestedInput;
    pago?: Prisma.PagoUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutBarberoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUncheckedUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateManyWithoutBarberoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    servicioId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TurnoCreateManyServicioInput = {
    id?: number;
    clienteId: number;
    barberoId: number;
    fecha: Date | string;
    hora: string;
    estado?: string;
    observacion?: string;
};
export type TurnoUpdateWithoutServicioInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    cliente?: Prisma.ClienteUpdateOneRequiredWithoutTurnosNestedInput;
    barbero?: Prisma.BarberoUpdateOneRequiredWithoutTurnosNestedInput;
    pago?: Prisma.PagoUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateWithoutServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    pago?: Prisma.PagoUncheckedUpdateOneWithoutTurnoNestedInput;
    insumosUtilizados?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutTurnoNestedInput;
    notaRemisionVenta?: Prisma.NotaRemisionVentaUncheckedUpdateOneWithoutTurnoNestedInput;
};
export type TurnoUncheckedUpdateManyWithoutServicioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    clienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    barberoId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hora?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TurnoCountOutputType = {
    insumosUtilizados: number;
};
export type TurnoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    insumosUtilizados?: boolean | TurnoCountOutputTypeCountInsumosUtilizadosArgs;
};
export type TurnoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoCountOutputTypeSelect<ExtArgs> | null;
};
export type TurnoCountOutputTypeCountInsumosUtilizadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoUtilizadoWhereInput;
};
export type TurnoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    barberoId?: boolean;
    servicioId?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    observacion?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    pago?: boolean | Prisma.Turno$pagoArgs<ExtArgs>;
    insumosUtilizados?: boolean | Prisma.Turno$insumosUtilizadosArgs<ExtArgs>;
    notaRemisionVenta?: boolean | Prisma.Turno$notaRemisionVentaArgs<ExtArgs>;
    _count?: boolean | Prisma.TurnoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["turno"]>;
export type TurnoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    barberoId?: boolean;
    servicioId?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    observacion?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["turno"]>;
export type TurnoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    barberoId?: boolean;
    servicioId?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    observacion?: boolean;
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["turno"]>;
export type TurnoSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    barberoId?: boolean;
    servicioId?: boolean;
    fecha?: boolean;
    hora?: boolean;
    estado?: boolean;
    observacion?: boolean;
};
export type TurnoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "barberoId" | "servicioId" | "fecha" | "hora" | "estado" | "observacion", ExtArgs["result"]["turno"]>;
export type TurnoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
    pago?: boolean | Prisma.Turno$pagoArgs<ExtArgs>;
    insumosUtilizados?: boolean | Prisma.Turno$insumosUtilizadosArgs<ExtArgs>;
    notaRemisionVenta?: boolean | Prisma.Turno$notaRemisionVentaArgs<ExtArgs>;
    _count?: boolean | Prisma.TurnoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type TurnoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
};
export type TurnoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ClienteDefaultArgs<ExtArgs>;
    barbero?: boolean | Prisma.BarberoDefaultArgs<ExtArgs>;
    servicio?: boolean | Prisma.ServicioDefaultArgs<ExtArgs>;
};
export type $TurnoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Turno";
    objects: {
        cliente: Prisma.$ClientePayload<ExtArgs>;
        barbero: Prisma.$BarberoPayload<ExtArgs>;
        servicio: Prisma.$ServicioPayload<ExtArgs>;
        pago: Prisma.$PagoPayload<ExtArgs> | null;
        insumosUtilizados: Prisma.$InsumoUtilizadoPayload<ExtArgs>[];
        notaRemisionVenta: Prisma.$NotaRemisionVentaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        clienteId: number;
        barberoId: number;
        servicioId: number;
        fecha: Date;
        hora: string;
        estado: string;
        observacion: string;
    }, ExtArgs["result"]["turno"]>;
    composites: {};
};
export type TurnoGetPayload<S extends boolean | null | undefined | TurnoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TurnoPayload, S>;
export type TurnoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TurnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TurnoCountAggregateInputType | true;
};
export interface TurnoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Turno'];
        meta: {
            name: 'Turno';
        };
    };
    findUnique<T extends TurnoFindUniqueArgs>(args: Prisma.SelectSubset<T, TurnoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TurnoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TurnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TurnoFindFirstArgs>(args?: Prisma.SelectSubset<T, TurnoFindFirstArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TurnoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TurnoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TurnoFindManyArgs>(args?: Prisma.SelectSubset<T, TurnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TurnoCreateArgs>(args: Prisma.SelectSubset<T, TurnoCreateArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TurnoCreateManyArgs>(args?: Prisma.SelectSubset<T, TurnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TurnoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TurnoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TurnoDeleteArgs>(args: Prisma.SelectSubset<T, TurnoDeleteArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TurnoUpdateArgs>(args: Prisma.SelectSubset<T, TurnoUpdateArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TurnoDeleteManyArgs>(args?: Prisma.SelectSubset<T, TurnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TurnoUpdateManyArgs>(args: Prisma.SelectSubset<T, TurnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TurnoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TurnoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TurnoUpsertArgs>(args: Prisma.SelectSubset<T, TurnoUpsertArgs<ExtArgs>>): Prisma.Prisma__TurnoClient<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TurnoCountArgs>(args?: Prisma.Subset<T, TurnoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TurnoCountAggregateOutputType> : number>;
    aggregate<T extends TurnoAggregateArgs>(args: Prisma.Subset<T, TurnoAggregateArgs>): Prisma.PrismaPromise<GetTurnoAggregateType<T>>;
    groupBy<T extends TurnoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TurnoGroupByArgs['orderBy'];
    } : {
        orderBy?: TurnoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TurnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTurnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TurnoFieldRefs;
}
export interface Prisma__TurnoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ClienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ClienteDefaultArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    barbero<T extends Prisma.BarberoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BarberoDefaultArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    servicio<T extends Prisma.ServicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pago<T extends Prisma.Turno$pagoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Turno$pagoArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    insumosUtilizados<T extends Prisma.Turno$insumosUtilizadosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Turno$insumosUtilizadosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notaRemisionVenta<T extends Prisma.Turno$notaRemisionVentaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Turno$notaRemisionVentaArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionVentaClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionVentaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TurnoFieldRefs {
    readonly id: Prisma.FieldRef<"Turno", 'Int'>;
    readonly clienteId: Prisma.FieldRef<"Turno", 'Int'>;
    readonly barberoId: Prisma.FieldRef<"Turno", 'Int'>;
    readonly servicioId: Prisma.FieldRef<"Turno", 'Int'>;
    readonly fecha: Prisma.FieldRef<"Turno", 'DateTime'>;
    readonly hora: Prisma.FieldRef<"Turno", 'String'>;
    readonly estado: Prisma.FieldRef<"Turno", 'String'>;
    readonly observacion: Prisma.FieldRef<"Turno", 'String'>;
}
export type TurnoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithRelationInput | Prisma.TurnoOrderByWithRelationInput[];
    cursor?: Prisma.TurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TurnoScalarFieldEnum | Prisma.TurnoScalarFieldEnum[];
};
export type TurnoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithRelationInput | Prisma.TurnoOrderByWithRelationInput[];
    cursor?: Prisma.TurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TurnoScalarFieldEnum | Prisma.TurnoScalarFieldEnum[];
};
export type TurnoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where?: Prisma.TurnoWhereInput;
    orderBy?: Prisma.TurnoOrderByWithRelationInput | Prisma.TurnoOrderByWithRelationInput[];
    cursor?: Prisma.TurnoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TurnoScalarFieldEnum | Prisma.TurnoScalarFieldEnum[];
};
export type TurnoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TurnoCreateInput, Prisma.TurnoUncheckedCreateInput>;
};
export type TurnoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TurnoCreateManyInput | Prisma.TurnoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TurnoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    data: Prisma.TurnoCreateManyInput | Prisma.TurnoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TurnoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TurnoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TurnoUpdateInput, Prisma.TurnoUncheckedUpdateInput>;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyInput>;
    where?: Prisma.TurnoWhereInput;
    limit?: number;
};
export type TurnoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TurnoUpdateManyMutationInput, Prisma.TurnoUncheckedUpdateManyInput>;
    where?: Prisma.TurnoWhereInput;
    limit?: number;
    include?: Prisma.TurnoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TurnoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.TurnoCreateInput, Prisma.TurnoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TurnoUpdateInput, Prisma.TurnoUncheckedUpdateInput>;
};
export type TurnoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
    where: Prisma.TurnoWhereUniqueInput;
};
export type TurnoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
    limit?: number;
};
export type Turno$pagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PagoSelect<ExtArgs> | null;
    omit?: Prisma.PagoOmit<ExtArgs> | null;
    include?: Prisma.PagoInclude<ExtArgs> | null;
    where?: Prisma.PagoWhereInput;
};
export type Turno$insumosUtilizadosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Turno$notaRemisionVentaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionVentaSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionVentaOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionVentaInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionVentaWhereInput;
};
export type TurnoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TurnoSelect<ExtArgs> | null;
    omit?: Prisma.TurnoOmit<ExtArgs> | null;
    include?: Prisma.TurnoInclude<ExtArgs> | null;
};
export {};
