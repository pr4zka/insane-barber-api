import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AjusteCompraModel = runtime.Types.Result.DefaultSelection<Prisma.$AjusteCompraPayload>;
export type AggregateAjusteCompra = {
    _count: AjusteCompraCountAggregateOutputType | null;
    _avg: AjusteCompraAvgAggregateOutputType | null;
    _sum: AjusteCompraSumAggregateOutputType | null;
    _min: AjusteCompraMinAggregateOutputType | null;
    _max: AjusteCompraMaxAggregateOutputType | null;
};
export type AjusteCompraAvgAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    montoAnterior: runtime.Decimal | null;
    montoNuevo: runtime.Decimal | null;
};
export type AjusteCompraSumAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    montoAnterior: runtime.Decimal | null;
    montoNuevo: runtime.Decimal | null;
};
export type AjusteCompraMinAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    tipo: string | null;
    descripcion: string | null;
    montoAnterior: runtime.Decimal | null;
    montoNuevo: runtime.Decimal | null;
    fecha: Date | null;
};
export type AjusteCompraMaxAggregateOutputType = {
    id: number | null;
    ordenCompraId: number | null;
    tipo: string | null;
    descripcion: string | null;
    montoAnterior: runtime.Decimal | null;
    montoNuevo: runtime.Decimal | null;
    fecha: Date | null;
};
export type AjusteCompraCountAggregateOutputType = {
    id: number;
    ordenCompraId: number;
    tipo: number;
    descripcion: number;
    montoAnterior: number;
    montoNuevo: number;
    fecha: number;
    _all: number;
};
export type AjusteCompraAvgAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    montoAnterior?: true;
    montoNuevo?: true;
};
export type AjusteCompraSumAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    montoAnterior?: true;
    montoNuevo?: true;
};
export type AjusteCompraMinAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    tipo?: true;
    descripcion?: true;
    montoAnterior?: true;
    montoNuevo?: true;
    fecha?: true;
};
export type AjusteCompraMaxAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    tipo?: true;
    descripcion?: true;
    montoAnterior?: true;
    montoNuevo?: true;
    fecha?: true;
};
export type AjusteCompraCountAggregateInputType = {
    id?: true;
    ordenCompraId?: true;
    tipo?: true;
    descripcion?: true;
    montoAnterior?: true;
    montoNuevo?: true;
    fecha?: true;
    _all?: true;
};
export type AjusteCompraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AjusteCompraWhereInput;
    orderBy?: Prisma.AjusteCompraOrderByWithRelationInput | Prisma.AjusteCompraOrderByWithRelationInput[];
    cursor?: Prisma.AjusteCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AjusteCompraCountAggregateInputType;
    _avg?: AjusteCompraAvgAggregateInputType;
    _sum?: AjusteCompraSumAggregateInputType;
    _min?: AjusteCompraMinAggregateInputType;
    _max?: AjusteCompraMaxAggregateInputType;
};
export type GetAjusteCompraAggregateType<T extends AjusteCompraAggregateArgs> = {
    [P in keyof T & keyof AggregateAjusteCompra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAjusteCompra[P]> : Prisma.GetScalarType<T[P], AggregateAjusteCompra[P]>;
};
export type AjusteCompraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AjusteCompraWhereInput;
    orderBy?: Prisma.AjusteCompraOrderByWithAggregationInput | Prisma.AjusteCompraOrderByWithAggregationInput[];
    by: Prisma.AjusteCompraScalarFieldEnum[] | Prisma.AjusteCompraScalarFieldEnum;
    having?: Prisma.AjusteCompraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AjusteCompraCountAggregateInputType | true;
    _avg?: AjusteCompraAvgAggregateInputType;
    _sum?: AjusteCompraSumAggregateInputType;
    _min?: AjusteCompraMinAggregateInputType;
    _max?: AjusteCompraMaxAggregateInputType;
};
export type AjusteCompraGroupByOutputType = {
    id: number;
    ordenCompraId: number;
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal;
    montoNuevo: runtime.Decimal;
    fecha: Date;
    _count: AjusteCompraCountAggregateOutputType | null;
    _avg: AjusteCompraAvgAggregateOutputType | null;
    _sum: AjusteCompraSumAggregateOutputType | null;
    _min: AjusteCompraMinAggregateOutputType | null;
    _max: AjusteCompraMaxAggregateOutputType | null;
};
type GetAjusteCompraGroupByPayload<T extends AjusteCompraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AjusteCompraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AjusteCompraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AjusteCompraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AjusteCompraGroupByOutputType[P]>;
}>>;
export type AjusteCompraWhereInput = {
    AND?: Prisma.AjusteCompraWhereInput | Prisma.AjusteCompraWhereInput[];
    OR?: Prisma.AjusteCompraWhereInput[];
    NOT?: Prisma.AjusteCompraWhereInput | Prisma.AjusteCompraWhereInput[];
    id?: Prisma.IntFilter<"AjusteCompra"> | number;
    ordenCompraId?: Prisma.IntFilter<"AjusteCompra"> | number;
    tipo?: Prisma.StringFilter<"AjusteCompra"> | string;
    descripcion?: Prisma.StringFilter<"AjusteCompra"> | string;
    montoAnterior?: Prisma.DecimalFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"AjusteCompra"> | Date | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
};
export type AjusteCompraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    ordenCompra?: Prisma.OrdenCompraOrderByWithRelationInput;
};
export type AjusteCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.AjusteCompraWhereInput | Prisma.AjusteCompraWhereInput[];
    OR?: Prisma.AjusteCompraWhereInput[];
    NOT?: Prisma.AjusteCompraWhereInput | Prisma.AjusteCompraWhereInput[];
    ordenCompraId?: Prisma.IntFilter<"AjusteCompra"> | number;
    tipo?: Prisma.StringFilter<"AjusteCompra"> | string;
    descripcion?: Prisma.StringFilter<"AjusteCompra"> | string;
    montoAnterior?: Prisma.DecimalFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"AjusteCompra"> | Date | string;
    ordenCompra?: Prisma.XOR<Prisma.OrdenCompraScalarRelationFilter, Prisma.OrdenCompraWhereInput>;
}, "id">;
export type AjusteCompraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    _count?: Prisma.AjusteCompraCountOrderByAggregateInput;
    _avg?: Prisma.AjusteCompraAvgOrderByAggregateInput;
    _max?: Prisma.AjusteCompraMaxOrderByAggregateInput;
    _min?: Prisma.AjusteCompraMinOrderByAggregateInput;
    _sum?: Prisma.AjusteCompraSumOrderByAggregateInput;
};
export type AjusteCompraScalarWhereWithAggregatesInput = {
    AND?: Prisma.AjusteCompraScalarWhereWithAggregatesInput | Prisma.AjusteCompraScalarWhereWithAggregatesInput[];
    OR?: Prisma.AjusteCompraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AjusteCompraScalarWhereWithAggregatesInput | Prisma.AjusteCompraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"AjusteCompra"> | number;
    ordenCompraId?: Prisma.IntWithAggregatesFilter<"AjusteCompra"> | number;
    tipo?: Prisma.StringWithAggregatesFilter<"AjusteCompra"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"AjusteCompra"> | string;
    montoAnterior?: Prisma.DecimalWithAggregatesFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalWithAggregatesFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"AjusteCompra"> | Date | string;
};
export type AjusteCompraCreateInput = {
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    ordenCompra: Prisma.OrdenCompraCreateNestedOneWithoutAjustesInput;
};
export type AjusteCompraUncheckedCreateInput = {
    id?: number;
    ordenCompraId: number;
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type AjusteCompraUpdateInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordenCompra?: Prisma.OrdenCompraUpdateOneRequiredWithoutAjustesNestedInput;
};
export type AjusteCompraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AjusteCompraCreateManyInput = {
    id?: number;
    ordenCompraId: number;
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type AjusteCompraUpdateManyMutationInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AjusteCompraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordenCompraId?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AjusteCompraListRelationFilter = {
    every?: Prisma.AjusteCompraWhereInput;
    some?: Prisma.AjusteCompraWhereInput;
    none?: Prisma.AjusteCompraWhereInput;
};
export type AjusteCompraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AjusteCompraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type AjusteCompraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
};
export type AjusteCompraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type AjusteCompraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
};
export type AjusteCompraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordenCompraId?: Prisma.SortOrder;
    montoAnterior?: Prisma.SortOrder;
    montoNuevo?: Prisma.SortOrder;
};
export type AjusteCompraCreateNestedManyWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.AjusteCompraCreateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.AjusteCompraCreateWithoutOrdenCompraInput[] | Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput[];
    createMany?: Prisma.AjusteCompraCreateManyOrdenCompraInputEnvelope;
    connect?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
};
export type AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.AjusteCompraCreateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.AjusteCompraCreateWithoutOrdenCompraInput[] | Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput[];
    createMany?: Prisma.AjusteCompraCreateManyOrdenCompraInputEnvelope;
    connect?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
};
export type AjusteCompraUpdateManyWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.AjusteCompraCreateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.AjusteCompraCreateWithoutOrdenCompraInput[] | Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput[];
    upsert?: Prisma.AjusteCompraUpsertWithWhereUniqueWithoutOrdenCompraInput | Prisma.AjusteCompraUpsertWithWhereUniqueWithoutOrdenCompraInput[];
    createMany?: Prisma.AjusteCompraCreateManyOrdenCompraInputEnvelope;
    set?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    disconnect?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    delete?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    connect?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    update?: Prisma.AjusteCompraUpdateWithWhereUniqueWithoutOrdenCompraInput | Prisma.AjusteCompraUpdateWithWhereUniqueWithoutOrdenCompraInput[];
    updateMany?: Prisma.AjusteCompraUpdateManyWithWhereWithoutOrdenCompraInput | Prisma.AjusteCompraUpdateManyWithWhereWithoutOrdenCompraInput[];
    deleteMany?: Prisma.AjusteCompraScalarWhereInput | Prisma.AjusteCompraScalarWhereInput[];
};
export type AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.AjusteCompraCreateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput> | Prisma.AjusteCompraCreateWithoutOrdenCompraInput[] | Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput[];
    connectOrCreate?: Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput | Prisma.AjusteCompraCreateOrConnectWithoutOrdenCompraInput[];
    upsert?: Prisma.AjusteCompraUpsertWithWhereUniqueWithoutOrdenCompraInput | Prisma.AjusteCompraUpsertWithWhereUniqueWithoutOrdenCompraInput[];
    createMany?: Prisma.AjusteCompraCreateManyOrdenCompraInputEnvelope;
    set?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    disconnect?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    delete?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    connect?: Prisma.AjusteCompraWhereUniqueInput | Prisma.AjusteCompraWhereUniqueInput[];
    update?: Prisma.AjusteCompraUpdateWithWhereUniqueWithoutOrdenCompraInput | Prisma.AjusteCompraUpdateWithWhereUniqueWithoutOrdenCompraInput[];
    updateMany?: Prisma.AjusteCompraUpdateManyWithWhereWithoutOrdenCompraInput | Prisma.AjusteCompraUpdateManyWithWhereWithoutOrdenCompraInput[];
    deleteMany?: Prisma.AjusteCompraScalarWhereInput | Prisma.AjusteCompraScalarWhereInput[];
};
export type AjusteCompraCreateWithoutOrdenCompraInput = {
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type AjusteCompraUncheckedCreateWithoutOrdenCompraInput = {
    id?: number;
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type AjusteCompraCreateOrConnectWithoutOrdenCompraInput = {
    where: Prisma.AjusteCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.AjusteCompraCreateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput>;
};
export type AjusteCompraCreateManyOrdenCompraInputEnvelope = {
    data: Prisma.AjusteCompraCreateManyOrdenCompraInput | Prisma.AjusteCompraCreateManyOrdenCompraInput[];
    skipDuplicates?: boolean;
};
export type AjusteCompraUpsertWithWhereUniqueWithoutOrdenCompraInput = {
    where: Prisma.AjusteCompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.AjusteCompraUpdateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedUpdateWithoutOrdenCompraInput>;
    create: Prisma.XOR<Prisma.AjusteCompraCreateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedCreateWithoutOrdenCompraInput>;
};
export type AjusteCompraUpdateWithWhereUniqueWithoutOrdenCompraInput = {
    where: Prisma.AjusteCompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.AjusteCompraUpdateWithoutOrdenCompraInput, Prisma.AjusteCompraUncheckedUpdateWithoutOrdenCompraInput>;
};
export type AjusteCompraUpdateManyWithWhereWithoutOrdenCompraInput = {
    where: Prisma.AjusteCompraScalarWhereInput;
    data: Prisma.XOR<Prisma.AjusteCompraUpdateManyMutationInput, Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraInput>;
};
export type AjusteCompraScalarWhereInput = {
    AND?: Prisma.AjusteCompraScalarWhereInput | Prisma.AjusteCompraScalarWhereInput[];
    OR?: Prisma.AjusteCompraScalarWhereInput[];
    NOT?: Prisma.AjusteCompraScalarWhereInput | Prisma.AjusteCompraScalarWhereInput[];
    id?: Prisma.IntFilter<"AjusteCompra"> | number;
    ordenCompraId?: Prisma.IntFilter<"AjusteCompra"> | number;
    tipo?: Prisma.StringFilter<"AjusteCompra"> | string;
    descripcion?: Prisma.StringFilter<"AjusteCompra"> | string;
    montoAnterior?: Prisma.DecimalFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFilter<"AjusteCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"AjusteCompra"> | Date | string;
};
export type AjusteCompraCreateManyOrdenCompraInput = {
    id?: number;
    tipo: string;
    descripcion: string;
    montoAnterior: runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
};
export type AjusteCompraUpdateWithoutOrdenCompraInput = {
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AjusteCompraUncheckedUpdateWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AjusteCompraUncheckedUpdateManyWithoutOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    montoAnterior?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    montoNuevo?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AjusteCompraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    montoAnterior?: boolean;
    montoNuevo?: boolean;
    fecha?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ajusteCompra"]>;
export type AjusteCompraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    montoAnterior?: boolean;
    montoNuevo?: boolean;
    fecha?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ajusteCompra"]>;
export type AjusteCompraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    montoAnterior?: boolean;
    montoNuevo?: boolean;
    fecha?: boolean;
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ajusteCompra"]>;
export type AjusteCompraSelectScalar = {
    id?: boolean;
    ordenCompraId?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    montoAnterior?: boolean;
    montoNuevo?: boolean;
    fecha?: boolean;
};
export type AjusteCompraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordenCompraId" | "tipo" | "descripcion" | "montoAnterior" | "montoNuevo" | "fecha", ExtArgs["result"]["ajusteCompra"]>;
export type AjusteCompraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type AjusteCompraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type AjusteCompraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenCompra?: boolean | Prisma.OrdenCompraDefaultArgs<ExtArgs>;
};
export type $AjusteCompraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AjusteCompra";
    objects: {
        ordenCompra: Prisma.$OrdenCompraPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ordenCompraId: number;
        tipo: string;
        descripcion: string;
        montoAnterior: runtime.Decimal;
        montoNuevo: runtime.Decimal;
        fecha: Date;
    }, ExtArgs["result"]["ajusteCompra"]>;
    composites: {};
};
export type AjusteCompraGetPayload<S extends boolean | null | undefined | AjusteCompraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload, S>;
export type AjusteCompraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AjusteCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AjusteCompraCountAggregateInputType | true;
};
export interface AjusteCompraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AjusteCompra'];
        meta: {
            name: 'AjusteCompra';
        };
    };
    findUnique<T extends AjusteCompraFindUniqueArgs>(args: Prisma.SelectSubset<T, AjusteCompraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AjusteCompraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AjusteCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AjusteCompraFindFirstArgs>(args?: Prisma.SelectSubset<T, AjusteCompraFindFirstArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AjusteCompraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AjusteCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AjusteCompraFindManyArgs>(args?: Prisma.SelectSubset<T, AjusteCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AjusteCompraCreateArgs>(args: Prisma.SelectSubset<T, AjusteCompraCreateArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AjusteCompraCreateManyArgs>(args?: Prisma.SelectSubset<T, AjusteCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AjusteCompraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AjusteCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AjusteCompraDeleteArgs>(args: Prisma.SelectSubset<T, AjusteCompraDeleteArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AjusteCompraUpdateArgs>(args: Prisma.SelectSubset<T, AjusteCompraUpdateArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AjusteCompraDeleteManyArgs>(args?: Prisma.SelectSubset<T, AjusteCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AjusteCompraUpdateManyArgs>(args: Prisma.SelectSubset<T, AjusteCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AjusteCompraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AjusteCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AjusteCompraUpsertArgs>(args: Prisma.SelectSubset<T, AjusteCompraUpsertArgs<ExtArgs>>): Prisma.Prisma__AjusteCompraClient<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AjusteCompraCountArgs>(args?: Prisma.Subset<T, AjusteCompraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AjusteCompraCountAggregateOutputType> : number>;
    aggregate<T extends AjusteCompraAggregateArgs>(args: Prisma.Subset<T, AjusteCompraAggregateArgs>): Prisma.PrismaPromise<GetAjusteCompraAggregateType<T>>;
    groupBy<T extends AjusteCompraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AjusteCompraGroupByArgs['orderBy'];
    } : {
        orderBy?: AjusteCompraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AjusteCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAjusteCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AjusteCompraFieldRefs;
}
export interface Prisma__AjusteCompraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenCompra<T extends Prisma.OrdenCompraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompraDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AjusteCompraFieldRefs {
    readonly id: Prisma.FieldRef<"AjusteCompra", 'Int'>;
    readonly ordenCompraId: Prisma.FieldRef<"AjusteCompra", 'Int'>;
    readonly tipo: Prisma.FieldRef<"AjusteCompra", 'String'>;
    readonly descripcion: Prisma.FieldRef<"AjusteCompra", 'String'>;
    readonly montoAnterior: Prisma.FieldRef<"AjusteCompra", 'Decimal'>;
    readonly montoNuevo: Prisma.FieldRef<"AjusteCompra", 'Decimal'>;
    readonly fecha: Prisma.FieldRef<"AjusteCompra", 'DateTime'>;
}
export type AjusteCompraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where: Prisma.AjusteCompraWhereUniqueInput;
};
export type AjusteCompraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where: Prisma.AjusteCompraWhereUniqueInput;
};
export type AjusteCompraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where?: Prisma.AjusteCompraWhereInput;
    orderBy?: Prisma.AjusteCompraOrderByWithRelationInput | Prisma.AjusteCompraOrderByWithRelationInput[];
    cursor?: Prisma.AjusteCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AjusteCompraScalarFieldEnum | Prisma.AjusteCompraScalarFieldEnum[];
};
export type AjusteCompraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where?: Prisma.AjusteCompraWhereInput;
    orderBy?: Prisma.AjusteCompraOrderByWithRelationInput | Prisma.AjusteCompraOrderByWithRelationInput[];
    cursor?: Prisma.AjusteCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AjusteCompraScalarFieldEnum | Prisma.AjusteCompraScalarFieldEnum[];
};
export type AjusteCompraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where?: Prisma.AjusteCompraWhereInput;
    orderBy?: Prisma.AjusteCompraOrderByWithRelationInput | Prisma.AjusteCompraOrderByWithRelationInput[];
    cursor?: Prisma.AjusteCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AjusteCompraScalarFieldEnum | Prisma.AjusteCompraScalarFieldEnum[];
};
export type AjusteCompraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AjusteCompraCreateInput, Prisma.AjusteCompraUncheckedCreateInput>;
};
export type AjusteCompraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AjusteCompraCreateManyInput | Prisma.AjusteCompraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AjusteCompraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    data: Prisma.AjusteCompraCreateManyInput | Prisma.AjusteCompraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AjusteCompraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AjusteCompraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AjusteCompraUpdateInput, Prisma.AjusteCompraUncheckedUpdateInput>;
    where: Prisma.AjusteCompraWhereUniqueInput;
};
export type AjusteCompraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AjusteCompraUpdateManyMutationInput, Prisma.AjusteCompraUncheckedUpdateManyInput>;
    where?: Prisma.AjusteCompraWhereInput;
    limit?: number;
};
export type AjusteCompraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AjusteCompraUpdateManyMutationInput, Prisma.AjusteCompraUncheckedUpdateManyInput>;
    where?: Prisma.AjusteCompraWhereInput;
    limit?: number;
    include?: Prisma.AjusteCompraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AjusteCompraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where: Prisma.AjusteCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.AjusteCompraCreateInput, Prisma.AjusteCompraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AjusteCompraUpdateInput, Prisma.AjusteCompraUncheckedUpdateInput>;
};
export type AjusteCompraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
    where: Prisma.AjusteCompraWhereUniqueInput;
};
export type AjusteCompraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AjusteCompraWhereInput;
    limit?: number;
};
export type AjusteCompraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AjusteCompraSelect<ExtArgs> | null;
    omit?: Prisma.AjusteCompraOmit<ExtArgs> | null;
    include?: Prisma.AjusteCompraInclude<ExtArgs> | null;
};
export {};
