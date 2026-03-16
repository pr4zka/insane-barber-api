import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type NotaCreditoDebitoModel = runtime.Types.Result.DefaultSelection<Prisma.$NotaCreditoDebitoPayload>;
export type AggregateNotaCreditoDebito = {
    _count: NotaCreditoDebitoCountAggregateOutputType | null;
    _avg: NotaCreditoDebitoAvgAggregateOutputType | null;
    _sum: NotaCreditoDebitoSumAggregateOutputType | null;
    _min: NotaCreditoDebitoMinAggregateOutputType | null;
    _max: NotaCreditoDebitoMaxAggregateOutputType | null;
};
export type NotaCreditoDebitoAvgAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    monto: runtime.Decimal | null;
};
export type NotaCreditoDebitoSumAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    monto: runtime.Decimal | null;
};
export type NotaCreditoDebitoMinAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    tipo: string | null;
    monto: runtime.Decimal | null;
    motivo: string | null;
    estado: string | null;
    fecha: Date | null;
};
export type NotaCreditoDebitoMaxAggregateOutputType = {
    id: number | null;
    pagoId: number | null;
    tipo: string | null;
    monto: runtime.Decimal | null;
    motivo: string | null;
    estado: string | null;
    fecha: Date | null;
};
export type NotaCreditoDebitoCountAggregateOutputType = {
    id: number;
    pagoId: number;
    tipo: number;
    monto: number;
    motivo: number;
    estado: number;
    fecha: number;
    _all: number;
};
export type NotaCreditoDebitoAvgAggregateInputType = {
    id?: true;
    pagoId?: true;
    monto?: true;
};
export type NotaCreditoDebitoSumAggregateInputType = {
    id?: true;
    pagoId?: true;
    monto?: true;
};
export type NotaCreditoDebitoMinAggregateInputType = {
    id?: true;
    pagoId?: true;
    tipo?: true;
    monto?: true;
    motivo?: true;
    estado?: true;
    fecha?: true;
};
export type NotaCreditoDebitoMaxAggregateInputType = {
    id?: true;
    pagoId?: true;
    tipo?: true;
    monto?: true;
    motivo?: true;
    estado?: true;
    fecha?: true;
};
export type NotaCreditoDebitoCountAggregateInputType = {
    id?: true;
    pagoId?: true;
    tipo?: true;
    monto?: true;
    motivo?: true;
    estado?: true;
    fecha?: true;
    _all?: true;
};
export type NotaCreditoDebitoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCreditoDebitoWhereInput;
    orderBy?: Prisma.NotaCreditoDebitoOrderByWithRelationInput | Prisma.NotaCreditoDebitoOrderByWithRelationInput[];
    cursor?: Prisma.NotaCreditoDebitoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotaCreditoDebitoCountAggregateInputType;
    _avg?: NotaCreditoDebitoAvgAggregateInputType;
    _sum?: NotaCreditoDebitoSumAggregateInputType;
    _min?: NotaCreditoDebitoMinAggregateInputType;
    _max?: NotaCreditoDebitoMaxAggregateInputType;
};
export type GetNotaCreditoDebitoAggregateType<T extends NotaCreditoDebitoAggregateArgs> = {
    [P in keyof T & keyof AggregateNotaCreditoDebito]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotaCreditoDebito[P]> : Prisma.GetScalarType<T[P], AggregateNotaCreditoDebito[P]>;
};
export type NotaCreditoDebitoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCreditoDebitoWhereInput;
    orderBy?: Prisma.NotaCreditoDebitoOrderByWithAggregationInput | Prisma.NotaCreditoDebitoOrderByWithAggregationInput[];
    by: Prisma.NotaCreditoDebitoScalarFieldEnum[] | Prisma.NotaCreditoDebitoScalarFieldEnum;
    having?: Prisma.NotaCreditoDebitoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotaCreditoDebitoCountAggregateInputType | true;
    _avg?: NotaCreditoDebitoAvgAggregateInputType;
    _sum?: NotaCreditoDebitoSumAggregateInputType;
    _min?: NotaCreditoDebitoMinAggregateInputType;
    _max?: NotaCreditoDebitoMaxAggregateInputType;
};
export type NotaCreditoDebitoGroupByOutputType = {
    id: number;
    pagoId: number;
    tipo: string;
    monto: runtime.Decimal;
    motivo: string;
    estado: string;
    fecha: Date;
    _count: NotaCreditoDebitoCountAggregateOutputType | null;
    _avg: NotaCreditoDebitoAvgAggregateOutputType | null;
    _sum: NotaCreditoDebitoSumAggregateOutputType | null;
    _min: NotaCreditoDebitoMinAggregateOutputType | null;
    _max: NotaCreditoDebitoMaxAggregateOutputType | null;
};
type GetNotaCreditoDebitoGroupByPayload<T extends NotaCreditoDebitoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotaCreditoDebitoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotaCreditoDebitoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotaCreditoDebitoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotaCreditoDebitoGroupByOutputType[P]>;
}>>;
export type NotaCreditoDebitoWhereInput = {
    AND?: Prisma.NotaCreditoDebitoWhereInput | Prisma.NotaCreditoDebitoWhereInput[];
    OR?: Prisma.NotaCreditoDebitoWhereInput[];
    NOT?: Prisma.NotaCreditoDebitoWhereInput | Prisma.NotaCreditoDebitoWhereInput[];
    id?: Prisma.IntFilter<"NotaCreditoDebito"> | number;
    pagoId?: Prisma.IntFilter<"NotaCreditoDebito"> | number;
    tipo?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    monto?: Prisma.DecimalFilter<"NotaCreditoDebito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    estado?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    fecha?: Prisma.DateTimeFilter<"NotaCreditoDebito"> | Date | string;
    pago?: Prisma.XOR<Prisma.PagoScalarRelationFilter, Prisma.PagoWhereInput>;
};
export type NotaCreditoDebitoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    pago?: Prisma.PagoOrderByWithRelationInput;
};
export type NotaCreditoDebitoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.NotaCreditoDebitoWhereInput | Prisma.NotaCreditoDebitoWhereInput[];
    OR?: Prisma.NotaCreditoDebitoWhereInput[];
    NOT?: Prisma.NotaCreditoDebitoWhereInput | Prisma.NotaCreditoDebitoWhereInput[];
    pagoId?: Prisma.IntFilter<"NotaCreditoDebito"> | number;
    tipo?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    monto?: Prisma.DecimalFilter<"NotaCreditoDebito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    estado?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    fecha?: Prisma.DateTimeFilter<"NotaCreditoDebito"> | Date | string;
    pago?: Prisma.XOR<Prisma.PagoScalarRelationFilter, Prisma.PagoWhereInput>;
}, "id">;
export type NotaCreditoDebitoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.NotaCreditoDebitoCountOrderByAggregateInput;
    _avg?: Prisma.NotaCreditoDebitoAvgOrderByAggregateInput;
    _max?: Prisma.NotaCreditoDebitoMaxOrderByAggregateInput;
    _min?: Prisma.NotaCreditoDebitoMinOrderByAggregateInput;
    _sum?: Prisma.NotaCreditoDebitoSumOrderByAggregateInput;
};
export type NotaCreditoDebitoScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotaCreditoDebitoScalarWhereWithAggregatesInput | Prisma.NotaCreditoDebitoScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotaCreditoDebitoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotaCreditoDebitoScalarWhereWithAggregatesInput | Prisma.NotaCreditoDebitoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"NotaCreditoDebito"> | number;
    pagoId?: Prisma.IntWithAggregatesFilter<"NotaCreditoDebito"> | number;
    tipo?: Prisma.StringWithAggregatesFilter<"NotaCreditoDebito"> | string;
    monto?: Prisma.DecimalWithAggregatesFilter<"NotaCreditoDebito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringWithAggregatesFilter<"NotaCreditoDebito"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"NotaCreditoDebito"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"NotaCreditoDebito"> | Date | string;
};
export type NotaCreditoDebitoCreateInput = {
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
    pago: Prisma.PagoCreateNestedOneWithoutNotasInput;
};
export type NotaCreditoDebitoUncheckedCreateInput = {
    id?: number;
    pagoId: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCreditoDebitoUpdateInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pago?: Prisma.PagoUpdateOneRequiredWithoutNotasNestedInput;
};
export type NotaCreditoDebitoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pagoId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCreditoDebitoCreateManyInput = {
    id?: number;
    pagoId: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCreditoDebitoUpdateManyMutationInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCreditoDebitoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    pagoId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCreditoDebitoListRelationFilter = {
    every?: Prisma.NotaCreditoDebitoWhereInput;
    some?: Prisma.NotaCreditoDebitoWhereInput;
    none?: Prisma.NotaCreditoDebitoWhereInput;
};
export type NotaCreditoDebitoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotaCreditoDebitoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type NotaCreditoDebitoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type NotaCreditoDebitoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type NotaCreditoDebitoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type NotaCreditoDebitoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pagoId?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type NotaCreditoDebitoCreateNestedManyWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.NotaCreditoDebitoCreateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput> | Prisma.NotaCreditoDebitoCreateWithoutPagoInput[] | Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput | Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput[];
    createMany?: Prisma.NotaCreditoDebitoCreateManyPagoInputEnvelope;
    connect?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
};
export type NotaCreditoDebitoUncheckedCreateNestedManyWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.NotaCreditoDebitoCreateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput> | Prisma.NotaCreditoDebitoCreateWithoutPagoInput[] | Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput | Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput[];
    createMany?: Prisma.NotaCreditoDebitoCreateManyPagoInputEnvelope;
    connect?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
};
export type NotaCreditoDebitoUpdateManyWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.NotaCreditoDebitoCreateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput> | Prisma.NotaCreditoDebitoCreateWithoutPagoInput[] | Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput | Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput[];
    upsert?: Prisma.NotaCreditoDebitoUpsertWithWhereUniqueWithoutPagoInput | Prisma.NotaCreditoDebitoUpsertWithWhereUniqueWithoutPagoInput[];
    createMany?: Prisma.NotaCreditoDebitoCreateManyPagoInputEnvelope;
    set?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    disconnect?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    delete?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    connect?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    update?: Prisma.NotaCreditoDebitoUpdateWithWhereUniqueWithoutPagoInput | Prisma.NotaCreditoDebitoUpdateWithWhereUniqueWithoutPagoInput[];
    updateMany?: Prisma.NotaCreditoDebitoUpdateManyWithWhereWithoutPagoInput | Prisma.NotaCreditoDebitoUpdateManyWithWhereWithoutPagoInput[];
    deleteMany?: Prisma.NotaCreditoDebitoScalarWhereInput | Prisma.NotaCreditoDebitoScalarWhereInput[];
};
export type NotaCreditoDebitoUncheckedUpdateManyWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.NotaCreditoDebitoCreateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput> | Prisma.NotaCreditoDebitoCreateWithoutPagoInput[] | Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput | Prisma.NotaCreditoDebitoCreateOrConnectWithoutPagoInput[];
    upsert?: Prisma.NotaCreditoDebitoUpsertWithWhereUniqueWithoutPagoInput | Prisma.NotaCreditoDebitoUpsertWithWhereUniqueWithoutPagoInput[];
    createMany?: Prisma.NotaCreditoDebitoCreateManyPagoInputEnvelope;
    set?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    disconnect?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    delete?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    connect?: Prisma.NotaCreditoDebitoWhereUniqueInput | Prisma.NotaCreditoDebitoWhereUniqueInput[];
    update?: Prisma.NotaCreditoDebitoUpdateWithWhereUniqueWithoutPagoInput | Prisma.NotaCreditoDebitoUpdateWithWhereUniqueWithoutPagoInput[];
    updateMany?: Prisma.NotaCreditoDebitoUpdateManyWithWhereWithoutPagoInput | Prisma.NotaCreditoDebitoUpdateManyWithWhereWithoutPagoInput[];
    deleteMany?: Prisma.NotaCreditoDebitoScalarWhereInput | Prisma.NotaCreditoDebitoScalarWhereInput[];
};
export type NotaCreditoDebitoCreateWithoutPagoInput = {
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCreditoDebitoUncheckedCreateWithoutPagoInput = {
    id?: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCreditoDebitoCreateOrConnectWithoutPagoInput = {
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaCreditoDebitoCreateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput>;
};
export type NotaCreditoDebitoCreateManyPagoInputEnvelope = {
    data: Prisma.NotaCreditoDebitoCreateManyPagoInput | Prisma.NotaCreditoDebitoCreateManyPagoInput[];
    skipDuplicates?: boolean;
};
export type NotaCreditoDebitoUpsertWithWhereUniqueWithoutPagoInput = {
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.NotaCreditoDebitoCreateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedCreateWithoutPagoInput>;
};
export type NotaCreditoDebitoUpdateWithWhereUniqueWithoutPagoInput = {
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateWithoutPagoInput, Prisma.NotaCreditoDebitoUncheckedUpdateWithoutPagoInput>;
};
export type NotaCreditoDebitoUpdateManyWithWhereWithoutPagoInput = {
    where: Prisma.NotaCreditoDebitoScalarWhereInput;
    data: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateManyMutationInput, Prisma.NotaCreditoDebitoUncheckedUpdateManyWithoutPagoInput>;
};
export type NotaCreditoDebitoScalarWhereInput = {
    AND?: Prisma.NotaCreditoDebitoScalarWhereInput | Prisma.NotaCreditoDebitoScalarWhereInput[];
    OR?: Prisma.NotaCreditoDebitoScalarWhereInput[];
    NOT?: Prisma.NotaCreditoDebitoScalarWhereInput | Prisma.NotaCreditoDebitoScalarWhereInput[];
    id?: Prisma.IntFilter<"NotaCreditoDebito"> | number;
    pagoId?: Prisma.IntFilter<"NotaCreditoDebito"> | number;
    tipo?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    monto?: Prisma.DecimalFilter<"NotaCreditoDebito"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    estado?: Prisma.StringFilter<"NotaCreditoDebito"> | string;
    fecha?: Prisma.DateTimeFilter<"NotaCreditoDebito"> | Date | string;
};
export type NotaCreditoDebitoCreateManyPagoInput = {
    id?: number;
    tipo: string;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo: string;
    estado?: string;
    fecha?: Date | string;
};
export type NotaCreditoDebitoUpdateWithoutPagoInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCreditoDebitoUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCreditoDebitoUncheckedUpdateManyWithoutPagoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotaCreditoDebitoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pagoId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaCreditoDebito"]>;
export type NotaCreditoDebitoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pagoId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaCreditoDebito"]>;
export type NotaCreditoDebitoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    pagoId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notaCreditoDebito"]>;
export type NotaCreditoDebitoSelectScalar = {
    id?: boolean;
    pagoId?: boolean;
    tipo?: boolean;
    monto?: boolean;
    motivo?: boolean;
    estado?: boolean;
    fecha?: boolean;
};
export type NotaCreditoDebitoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "pagoId" | "tipo" | "monto" | "motivo" | "estado" | "fecha", ExtArgs["result"]["notaCreditoDebito"]>;
export type NotaCreditoDebitoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
};
export type NotaCreditoDebitoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
};
export type NotaCreditoDebitoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pago?: boolean | Prisma.PagoDefaultArgs<ExtArgs>;
};
export type $NotaCreditoDebitoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "NotaCreditoDebito";
    objects: {
        pago: Prisma.$PagoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        pagoId: number;
        tipo: string;
        monto: runtime.Decimal;
        motivo: string;
        estado: string;
        fecha: Date;
    }, ExtArgs["result"]["notaCreditoDebito"]>;
    composites: {};
};
export type NotaCreditoDebitoGetPayload<S extends boolean | null | undefined | NotaCreditoDebitoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload, S>;
export type NotaCreditoDebitoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotaCreditoDebitoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotaCreditoDebitoCountAggregateInputType | true;
};
export interface NotaCreditoDebitoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['NotaCreditoDebito'];
        meta: {
            name: 'NotaCreditoDebito';
        };
    };
    findUnique<T extends NotaCreditoDebitoFindUniqueArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends NotaCreditoDebitoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends NotaCreditoDebitoFindFirstArgs>(args?: Prisma.SelectSubset<T, NotaCreditoDebitoFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends NotaCreditoDebitoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotaCreditoDebitoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends NotaCreditoDebitoFindManyArgs>(args?: Prisma.SelectSubset<T, NotaCreditoDebitoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends NotaCreditoDebitoCreateArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoCreateArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends NotaCreditoDebitoCreateManyArgs>(args?: Prisma.SelectSubset<T, NotaCreditoDebitoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends NotaCreditoDebitoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotaCreditoDebitoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends NotaCreditoDebitoDeleteArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoDeleteArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends NotaCreditoDebitoUpdateArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoUpdateArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends NotaCreditoDebitoDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotaCreditoDebitoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends NotaCreditoDebitoUpdateManyArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends NotaCreditoDebitoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends NotaCreditoDebitoUpsertArgs>(args: Prisma.SelectSubset<T, NotaCreditoDebitoUpsertArgs<ExtArgs>>): Prisma.Prisma__NotaCreditoDebitoClient<runtime.Types.Result.GetResult<Prisma.$NotaCreditoDebitoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends NotaCreditoDebitoCountArgs>(args?: Prisma.Subset<T, NotaCreditoDebitoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotaCreditoDebitoCountAggregateOutputType> : number>;
    aggregate<T extends NotaCreditoDebitoAggregateArgs>(args: Prisma.Subset<T, NotaCreditoDebitoAggregateArgs>): Prisma.PrismaPromise<GetNotaCreditoDebitoAggregateType<T>>;
    groupBy<T extends NotaCreditoDebitoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotaCreditoDebitoGroupByArgs['orderBy'];
    } : {
        orderBy?: NotaCreditoDebitoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotaCreditoDebitoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaCreditoDebitoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: NotaCreditoDebitoFieldRefs;
}
export interface Prisma__NotaCreditoDebitoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pago<T extends Prisma.PagoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PagoDefaultArgs<ExtArgs>>): Prisma.Prisma__PagoClient<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface NotaCreditoDebitoFieldRefs {
    readonly id: Prisma.FieldRef<"NotaCreditoDebito", 'Int'>;
    readonly pagoId: Prisma.FieldRef<"NotaCreditoDebito", 'Int'>;
    readonly tipo: Prisma.FieldRef<"NotaCreditoDebito", 'String'>;
    readonly monto: Prisma.FieldRef<"NotaCreditoDebito", 'Decimal'>;
    readonly motivo: Prisma.FieldRef<"NotaCreditoDebito", 'String'>;
    readonly estado: Prisma.FieldRef<"NotaCreditoDebito", 'String'>;
    readonly fecha: Prisma.FieldRef<"NotaCreditoDebito", 'DateTime'>;
}
export type NotaCreditoDebitoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
};
export type NotaCreditoDebitoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
};
export type NotaCreditoDebitoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotaCreditoDebitoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotaCreditoDebitoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type NotaCreditoDebitoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaCreditoDebitoCreateInput, Prisma.NotaCreditoDebitoUncheckedCreateInput>;
};
export type NotaCreditoDebitoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.NotaCreditoDebitoCreateManyInput | Prisma.NotaCreditoDebitoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type NotaCreditoDebitoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    data: Prisma.NotaCreditoDebitoCreateManyInput | Prisma.NotaCreditoDebitoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.NotaCreditoDebitoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type NotaCreditoDebitoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateInput, Prisma.NotaCreditoDebitoUncheckedUpdateInput>;
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
};
export type NotaCreditoDebitoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateManyMutationInput, Prisma.NotaCreditoDebitoUncheckedUpdateManyInput>;
    where?: Prisma.NotaCreditoDebitoWhereInput;
    limit?: number;
};
export type NotaCreditoDebitoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateManyMutationInput, Prisma.NotaCreditoDebitoUncheckedUpdateManyInput>;
    where?: Prisma.NotaCreditoDebitoWhereInput;
    limit?: number;
    include?: Prisma.NotaCreditoDebitoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type NotaCreditoDebitoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotaCreditoDebitoCreateInput, Prisma.NotaCreditoDebitoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.NotaCreditoDebitoUpdateInput, Prisma.NotaCreditoDebitoUncheckedUpdateInput>;
};
export type NotaCreditoDebitoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
    where: Prisma.NotaCreditoDebitoWhereUniqueInput;
};
export type NotaCreditoDebitoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCreditoDebitoWhereInput;
    limit?: number;
};
export type NotaCreditoDebitoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCreditoDebitoSelect<ExtArgs> | null;
    omit?: Prisma.NotaCreditoDebitoOmit<ExtArgs> | null;
    include?: Prisma.NotaCreditoDebitoInclude<ExtArgs> | null;
};
export {};
