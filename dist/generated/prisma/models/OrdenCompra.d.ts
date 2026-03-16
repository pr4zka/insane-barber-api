import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type OrdenCompraModel = runtime.Types.Result.DefaultSelection<Prisma.$OrdenCompraPayload>;
export type AggregateOrdenCompra = {
    _count: OrdenCompraCountAggregateOutputType | null;
    _avg: OrdenCompraAvgAggregateOutputType | null;
    _sum: OrdenCompraSumAggregateOutputType | null;
    _min: OrdenCompraMinAggregateOutputType | null;
    _max: OrdenCompraMaxAggregateOutputType | null;
};
export type OrdenCompraAvgAggregateOutputType = {
    id: number | null;
    proveedorId: number | null;
    total: runtime.Decimal | null;
};
export type OrdenCompraSumAggregateOutputType = {
    id: number | null;
    proveedorId: number | null;
    total: runtime.Decimal | null;
};
export type OrdenCompraMinAggregateOutputType = {
    id: number | null;
    proveedorId: number | null;
    fecha: Date | null;
    estado: string | null;
    total: runtime.Decimal | null;
    observacion: string | null;
};
export type OrdenCompraMaxAggregateOutputType = {
    id: number | null;
    proveedorId: number | null;
    fecha: Date | null;
    estado: string | null;
    total: runtime.Decimal | null;
    observacion: string | null;
};
export type OrdenCompraCountAggregateOutputType = {
    id: number;
    proveedorId: number;
    fecha: number;
    estado: number;
    total: number;
    observacion: number;
    _all: number;
};
export type OrdenCompraAvgAggregateInputType = {
    id?: true;
    proveedorId?: true;
    total?: true;
};
export type OrdenCompraSumAggregateInputType = {
    id?: true;
    proveedorId?: true;
    total?: true;
};
export type OrdenCompraMinAggregateInputType = {
    id?: true;
    proveedorId?: true;
    fecha?: true;
    estado?: true;
    total?: true;
    observacion?: true;
};
export type OrdenCompraMaxAggregateInputType = {
    id?: true;
    proveedorId?: true;
    fecha?: true;
    estado?: true;
    total?: true;
    observacion?: true;
};
export type OrdenCompraCountAggregateInputType = {
    id?: true;
    proveedorId?: true;
    fecha?: true;
    estado?: true;
    total?: true;
    observacion?: true;
    _all?: true;
};
export type OrdenCompraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdenCompraWhereInput;
    orderBy?: Prisma.OrdenCompraOrderByWithRelationInput | Prisma.OrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.OrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OrdenCompraCountAggregateInputType;
    _avg?: OrdenCompraAvgAggregateInputType;
    _sum?: OrdenCompraSumAggregateInputType;
    _min?: OrdenCompraMinAggregateInputType;
    _max?: OrdenCompraMaxAggregateInputType;
};
export type GetOrdenCompraAggregateType<T extends OrdenCompraAggregateArgs> = {
    [P in keyof T & keyof AggregateOrdenCompra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrdenCompra[P]> : Prisma.GetScalarType<T[P], AggregateOrdenCompra[P]>;
};
export type OrdenCompraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdenCompraWhereInput;
    orderBy?: Prisma.OrdenCompraOrderByWithAggregationInput | Prisma.OrdenCompraOrderByWithAggregationInput[];
    by: Prisma.OrdenCompraScalarFieldEnum[] | Prisma.OrdenCompraScalarFieldEnum;
    having?: Prisma.OrdenCompraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrdenCompraCountAggregateInputType | true;
    _avg?: OrdenCompraAvgAggregateInputType;
    _sum?: OrdenCompraSumAggregateInputType;
    _min?: OrdenCompraMinAggregateInputType;
    _max?: OrdenCompraMaxAggregateInputType;
};
export type OrdenCompraGroupByOutputType = {
    id: number;
    proveedorId: number;
    fecha: Date;
    estado: string;
    total: runtime.Decimal;
    observacion: string;
    _count: OrdenCompraCountAggregateOutputType | null;
    _avg: OrdenCompraAvgAggregateOutputType | null;
    _sum: OrdenCompraSumAggregateOutputType | null;
    _min: OrdenCompraMinAggregateOutputType | null;
    _max: OrdenCompraMaxAggregateOutputType | null;
};
type GetOrdenCompraGroupByPayload<T extends OrdenCompraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OrdenCompraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OrdenCompraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OrdenCompraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OrdenCompraGroupByOutputType[P]>;
}>>;
export type OrdenCompraWhereInput = {
    AND?: Prisma.OrdenCompraWhereInput | Prisma.OrdenCompraWhereInput[];
    OR?: Prisma.OrdenCompraWhereInput[];
    NOT?: Prisma.OrdenCompraWhereInput | Prisma.OrdenCompraWhereInput[];
    id?: Prisma.IntFilter<"OrdenCompra"> | number;
    proveedorId?: Prisma.IntFilter<"OrdenCompra"> | number;
    fecha?: Prisma.DateTimeFilter<"OrdenCompra"> | Date | string;
    estado?: Prisma.StringFilter<"OrdenCompra"> | string;
    total?: Prisma.DecimalFilter<"OrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFilter<"OrdenCompra"> | string;
    proveedor?: Prisma.XOR<Prisma.ProveedorScalarRelationFilter, Prisma.ProveedorWhereInput>;
    detalles?: Prisma.DetalleOrdenCompraListRelationFilter;
    libroCompras?: Prisma.XOR<Prisma.LibroComprasNullableScalarRelationFilter, Prisma.LibroComprasWhereInput> | null;
    notaRemision?: Prisma.XOR<Prisma.NotaRemisionNullableScalarRelationFilter, Prisma.NotaRemisionWhereInput> | null;
    notasCD?: Prisma.NotaCDCompraListRelationFilter;
    ajustes?: Prisma.AjusteCompraListRelationFilter;
};
export type OrdenCompraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    proveedor?: Prisma.ProveedorOrderByWithRelationInput;
    detalles?: Prisma.DetalleOrdenCompraOrderByRelationAggregateInput;
    libroCompras?: Prisma.LibroComprasOrderByWithRelationInput;
    notaRemision?: Prisma.NotaRemisionOrderByWithRelationInput;
    notasCD?: Prisma.NotaCDCompraOrderByRelationAggregateInput;
    ajustes?: Prisma.AjusteCompraOrderByRelationAggregateInput;
};
export type OrdenCompraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.OrdenCompraWhereInput | Prisma.OrdenCompraWhereInput[];
    OR?: Prisma.OrdenCompraWhereInput[];
    NOT?: Prisma.OrdenCompraWhereInput | Prisma.OrdenCompraWhereInput[];
    proveedorId?: Prisma.IntFilter<"OrdenCompra"> | number;
    fecha?: Prisma.DateTimeFilter<"OrdenCompra"> | Date | string;
    estado?: Prisma.StringFilter<"OrdenCompra"> | string;
    total?: Prisma.DecimalFilter<"OrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFilter<"OrdenCompra"> | string;
    proveedor?: Prisma.XOR<Prisma.ProveedorScalarRelationFilter, Prisma.ProveedorWhereInput>;
    detalles?: Prisma.DetalleOrdenCompraListRelationFilter;
    libroCompras?: Prisma.XOR<Prisma.LibroComprasNullableScalarRelationFilter, Prisma.LibroComprasWhereInput> | null;
    notaRemision?: Prisma.XOR<Prisma.NotaRemisionNullableScalarRelationFilter, Prisma.NotaRemisionWhereInput> | null;
    notasCD?: Prisma.NotaCDCompraListRelationFilter;
    ajustes?: Prisma.AjusteCompraListRelationFilter;
}, "id">;
export type OrdenCompraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
    _count?: Prisma.OrdenCompraCountOrderByAggregateInput;
    _avg?: Prisma.OrdenCompraAvgOrderByAggregateInput;
    _max?: Prisma.OrdenCompraMaxOrderByAggregateInput;
    _min?: Prisma.OrdenCompraMinOrderByAggregateInput;
    _sum?: Prisma.OrdenCompraSumOrderByAggregateInput;
};
export type OrdenCompraScalarWhereWithAggregatesInput = {
    AND?: Prisma.OrdenCompraScalarWhereWithAggregatesInput | Prisma.OrdenCompraScalarWhereWithAggregatesInput[];
    OR?: Prisma.OrdenCompraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OrdenCompraScalarWhereWithAggregatesInput | Prisma.OrdenCompraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"OrdenCompra"> | number;
    proveedorId?: Prisma.IntWithAggregatesFilter<"OrdenCompra"> | number;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"OrdenCompra"> | Date | string;
    estado?: Prisma.StringWithAggregatesFilter<"OrdenCompra"> | string;
    total?: Prisma.DecimalWithAggregatesFilter<"OrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringWithAggregatesFilter<"OrdenCompra"> | string;
};
export type OrdenCompraCreateInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    proveedor: Prisma.ProveedorCreateNestedOneWithoutOrdenesCompraInput;
    detalles?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUpdateInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedor?: Prisma.ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput;
    detalles?: Prisma.DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraCreateManyInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
};
export type OrdenCompraUpdateManyMutationInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrdenCompraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrdenCompraListRelationFilter = {
    every?: Prisma.OrdenCompraWhereInput;
    some?: Prisma.OrdenCompraWhereInput;
    none?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OrdenCompraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type OrdenCompraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdenCompraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type OrdenCompraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    observacion?: Prisma.SortOrder;
};
export type OrdenCompraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type OrdenCompraScalarRelationFilter = {
    is?: Prisma.OrdenCompraWhereInput;
    isNot?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutProveedorInput, Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput> | Prisma.OrdenCompraCreateWithoutProveedorInput[] | Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput | Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.OrdenCompraCreateManyProveedorInputEnvelope;
    connect?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
};
export type OrdenCompraUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutProveedorInput, Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput> | Prisma.OrdenCompraCreateWithoutProveedorInput[] | Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput | Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.OrdenCompraCreateManyProveedorInputEnvelope;
    connect?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
};
export type OrdenCompraUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutProveedorInput, Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput> | Prisma.OrdenCompraCreateWithoutProveedorInput[] | Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput | Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.OrdenCompraUpsertWithWhereUniqueWithoutProveedorInput | Prisma.OrdenCompraUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.OrdenCompraCreateManyProveedorInputEnvelope;
    set?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    disconnect?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    delete?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    connect?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    update?: Prisma.OrdenCompraUpdateWithWhereUniqueWithoutProveedorInput | Prisma.OrdenCompraUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.OrdenCompraUpdateManyWithWhereWithoutProveedorInput | Prisma.OrdenCompraUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.OrdenCompraScalarWhereInput | Prisma.OrdenCompraScalarWhereInput[];
};
export type OrdenCompraUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutProveedorInput, Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput> | Prisma.OrdenCompraCreateWithoutProveedorInput[] | Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput | Prisma.OrdenCompraCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.OrdenCompraUpsertWithWhereUniqueWithoutProveedorInput | Prisma.OrdenCompraUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.OrdenCompraCreateManyProveedorInputEnvelope;
    set?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    disconnect?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    delete?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    connect?: Prisma.OrdenCompraWhereUniqueInput | Prisma.OrdenCompraWhereUniqueInput[];
    update?: Prisma.OrdenCompraUpdateWithWhereUniqueWithoutProveedorInput | Prisma.OrdenCompraUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.OrdenCompraUpdateManyWithWhereWithoutProveedorInput | Prisma.OrdenCompraUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.OrdenCompraScalarWhereInput | Prisma.OrdenCompraScalarWhereInput[];
};
export type OrdenCompraCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutDetallesInput, Prisma.OrdenCompraUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraUpdateOneRequiredWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutDetallesInput, Prisma.OrdenCompraUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.OrdenCompraUpsertWithoutDetallesInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdenCompraUpdateToOneWithWhereWithoutDetallesInput, Prisma.OrdenCompraUpdateWithoutDetallesInput>, Prisma.OrdenCompraUncheckedUpdateWithoutDetallesInput>;
};
export type OrdenCompraCreateNestedOneWithoutLibroComprasInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutLibroComprasInput, Prisma.OrdenCompraUncheckedCreateWithoutLibroComprasInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutLibroComprasInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraUpdateOneRequiredWithoutLibroComprasNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutLibroComprasInput, Prisma.OrdenCompraUncheckedCreateWithoutLibroComprasInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutLibroComprasInput;
    upsert?: Prisma.OrdenCompraUpsertWithoutLibroComprasInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdenCompraUpdateToOneWithWhereWithoutLibroComprasInput, Prisma.OrdenCompraUpdateWithoutLibroComprasInput>, Prisma.OrdenCompraUncheckedUpdateWithoutLibroComprasInput>;
};
export type OrdenCompraCreateNestedOneWithoutNotaRemisionInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotaRemisionInput, Prisma.OrdenCompraUncheckedCreateWithoutNotaRemisionInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutNotaRemisionInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraUpdateOneRequiredWithoutNotaRemisionNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotaRemisionInput, Prisma.OrdenCompraUncheckedCreateWithoutNotaRemisionInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutNotaRemisionInput;
    upsert?: Prisma.OrdenCompraUpsertWithoutNotaRemisionInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdenCompraUpdateToOneWithWhereWithoutNotaRemisionInput, Prisma.OrdenCompraUpdateWithoutNotaRemisionInput>, Prisma.OrdenCompraUncheckedUpdateWithoutNotaRemisionInput>;
};
export type OrdenCompraCreateNestedOneWithoutNotasCDInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotasCDInput, Prisma.OrdenCompraUncheckedCreateWithoutNotasCDInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutNotasCDInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraUpdateOneRequiredWithoutNotasCDNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotasCDInput, Prisma.OrdenCompraUncheckedCreateWithoutNotasCDInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutNotasCDInput;
    upsert?: Prisma.OrdenCompraUpsertWithoutNotasCDInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdenCompraUpdateToOneWithWhereWithoutNotasCDInput, Prisma.OrdenCompraUpdateWithoutNotasCDInput>, Prisma.OrdenCompraUncheckedUpdateWithoutNotasCDInput>;
};
export type OrdenCompraCreateNestedOneWithoutAjustesInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutAjustesInput, Prisma.OrdenCompraUncheckedCreateWithoutAjustesInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutAjustesInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraUpdateOneRequiredWithoutAjustesNestedInput = {
    create?: Prisma.XOR<Prisma.OrdenCompraCreateWithoutAjustesInput, Prisma.OrdenCompraUncheckedCreateWithoutAjustesInput>;
    connectOrCreate?: Prisma.OrdenCompraCreateOrConnectWithoutAjustesInput;
    upsert?: Prisma.OrdenCompraUpsertWithoutAjustesInput;
    connect?: Prisma.OrdenCompraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OrdenCompraUpdateToOneWithWhereWithoutAjustesInput, Prisma.OrdenCompraUpdateWithoutAjustesInput>, Prisma.OrdenCompraUncheckedUpdateWithoutAjustesInput>;
};
export type OrdenCompraCreateWithoutProveedorInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateWithoutProveedorInput = {
    id?: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraCreateOrConnectWithoutProveedorInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutProveedorInput, Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput>;
};
export type OrdenCompraCreateManyProveedorInputEnvelope = {
    data: Prisma.OrdenCompraCreateManyProveedorInput | Prisma.OrdenCompraCreateManyProveedorInput[];
    skipDuplicates?: boolean;
};
export type OrdenCompraUpsertWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    update: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutProveedorInput, Prisma.OrdenCompraUncheckedUpdateWithoutProveedorInput>;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutProveedorInput, Prisma.OrdenCompraUncheckedCreateWithoutProveedorInput>;
};
export type OrdenCompraUpdateWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutProveedorInput, Prisma.OrdenCompraUncheckedUpdateWithoutProveedorInput>;
};
export type OrdenCompraUpdateManyWithWhereWithoutProveedorInput = {
    where: Prisma.OrdenCompraScalarWhereInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateManyMutationInput, Prisma.OrdenCompraUncheckedUpdateManyWithoutProveedorInput>;
};
export type OrdenCompraScalarWhereInput = {
    AND?: Prisma.OrdenCompraScalarWhereInput | Prisma.OrdenCompraScalarWhereInput[];
    OR?: Prisma.OrdenCompraScalarWhereInput[];
    NOT?: Prisma.OrdenCompraScalarWhereInput | Prisma.OrdenCompraScalarWhereInput[];
    id?: Prisma.IntFilter<"OrdenCompra"> | number;
    proveedorId?: Prisma.IntFilter<"OrdenCompra"> | number;
    fecha?: Prisma.DateTimeFilter<"OrdenCompra"> | Date | string;
    estado?: Prisma.StringFilter<"OrdenCompra"> | string;
    total?: Prisma.DecimalFilter<"OrdenCompra"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFilter<"OrdenCompra"> | string;
};
export type OrdenCompraCreateWithoutDetallesInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    proveedor: Prisma.ProveedorCreateNestedOneWithoutOrdenesCompraInput;
    libroCompras?: Prisma.LibroComprasCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateWithoutDetallesInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    libroCompras?: Prisma.LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraCreateOrConnectWithoutDetallesInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutDetallesInput, Prisma.OrdenCompraUncheckedCreateWithoutDetallesInput>;
};
export type OrdenCompraUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutDetallesInput, Prisma.OrdenCompraUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutDetallesInput, Prisma.OrdenCompraUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.OrdenCompraWhereInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutDetallesInput, Prisma.OrdenCompraUncheckedUpdateWithoutDetallesInput>;
};
export type OrdenCompraUpdateWithoutDetallesInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedor?: Prisma.ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateWithoutDetallesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    libroCompras?: Prisma.LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraCreateWithoutLibroComprasInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    proveedor: Prisma.ProveedorCreateNestedOneWithoutOrdenesCompraInput;
    detalles?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateWithoutLibroComprasInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraCreateOrConnectWithoutLibroComprasInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutLibroComprasInput, Prisma.OrdenCompraUncheckedCreateWithoutLibroComprasInput>;
};
export type OrdenCompraUpsertWithoutLibroComprasInput = {
    update: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutLibroComprasInput, Prisma.OrdenCompraUncheckedUpdateWithoutLibroComprasInput>;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutLibroComprasInput, Prisma.OrdenCompraUncheckedCreateWithoutLibroComprasInput>;
    where?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraUpdateToOneWithWhereWithoutLibroComprasInput = {
    where?: Prisma.OrdenCompraWhereInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutLibroComprasInput, Prisma.OrdenCompraUncheckedUpdateWithoutLibroComprasInput>;
};
export type OrdenCompraUpdateWithoutLibroComprasInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedor?: Prisma.ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput;
    detalles?: Prisma.DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateWithoutLibroComprasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraCreateWithoutNotaRemisionInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    proveedor: Prisma.ProveedorCreateNestedOneWithoutOrdenesCompraInput;
    detalles?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateWithoutNotaRemisionInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraCreateOrConnectWithoutNotaRemisionInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotaRemisionInput, Prisma.OrdenCompraUncheckedCreateWithoutNotaRemisionInput>;
};
export type OrdenCompraUpsertWithoutNotaRemisionInput = {
    update: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutNotaRemisionInput, Prisma.OrdenCompraUncheckedUpdateWithoutNotaRemisionInput>;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotaRemisionInput, Prisma.OrdenCompraUncheckedCreateWithoutNotaRemisionInput>;
    where?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraUpdateToOneWithWhereWithoutNotaRemisionInput = {
    where?: Prisma.OrdenCompraWhereInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutNotaRemisionInput, Prisma.OrdenCompraUncheckedUpdateWithoutNotaRemisionInput>;
};
export type OrdenCompraUpdateWithoutNotaRemisionInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedor?: Prisma.ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput;
    detalles?: Prisma.DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateWithoutNotaRemisionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraCreateWithoutNotasCDInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    proveedor: Prisma.ProveedorCreateNestedOneWithoutOrdenesCompraInput;
    detalles?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionCreateNestedOneWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateWithoutNotasCDInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput;
    ajustes?: Prisma.AjusteCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraCreateOrConnectWithoutNotasCDInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotasCDInput, Prisma.OrdenCompraUncheckedCreateWithoutNotasCDInput>;
};
export type OrdenCompraUpsertWithoutNotasCDInput = {
    update: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutNotasCDInput, Prisma.OrdenCompraUncheckedUpdateWithoutNotasCDInput>;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutNotasCDInput, Prisma.OrdenCompraUncheckedCreateWithoutNotasCDInput>;
    where?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraUpdateToOneWithWhereWithoutNotasCDInput = {
    where?: Prisma.OrdenCompraWhereInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutNotasCDInput, Prisma.OrdenCompraUncheckedUpdateWithoutNotasCDInput>;
};
export type OrdenCompraUpdateWithoutNotasCDInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedor?: Prisma.ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput;
    detalles?: Prisma.DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUpdateOneWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateWithoutNotasCDInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraCreateWithoutAjustesInput = {
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    proveedor: Prisma.ProveedorCreateNestedOneWithoutOrdenesCompraInput;
    detalles?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraUncheckedCreateWithoutAjustesInput = {
    id?: number;
    proveedorId: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
    libroCompras?: Prisma.LibroComprasUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notaRemision?: Prisma.NotaRemisionUncheckedCreateNestedOneWithoutOrdenCompraInput;
    notasCD?: Prisma.NotaCDCompraUncheckedCreateNestedManyWithoutOrdenCompraInput;
};
export type OrdenCompraCreateOrConnectWithoutAjustesInput = {
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutAjustesInput, Prisma.OrdenCompraUncheckedCreateWithoutAjustesInput>;
};
export type OrdenCompraUpsertWithoutAjustesInput = {
    update: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutAjustesInput, Prisma.OrdenCompraUncheckedUpdateWithoutAjustesInput>;
    create: Prisma.XOR<Prisma.OrdenCompraCreateWithoutAjustesInput, Prisma.OrdenCompraUncheckedCreateWithoutAjustesInput>;
    where?: Prisma.OrdenCompraWhereInput;
};
export type OrdenCompraUpdateToOneWithWhereWithoutAjustesInput = {
    where?: Prisma.OrdenCompraWhereInput;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateWithoutAjustesInput, Prisma.OrdenCompraUncheckedUpdateWithoutAjustesInput>;
};
export type OrdenCompraUpdateWithoutAjustesInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedor?: Prisma.ProveedorUpdateOneRequiredWithoutOrdenesCompraNestedInput;
    detalles?: Prisma.DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateWithoutAjustesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    proveedorId?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraCreateManyProveedorInput = {
    id?: number;
    fecha?: Date | string;
    estado?: string;
    total?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: string;
};
export type OrdenCompraUpdateWithoutProveedorInput = {
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateWithoutProveedorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
    detalles?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    libroCompras?: Prisma.LibroComprasUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notaRemision?: Prisma.NotaRemisionUncheckedUpdateOneWithoutOrdenCompraNestedInput;
    notasCD?: Prisma.NotaCDCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
    ajustes?: Prisma.AjusteCompraUncheckedUpdateManyWithoutOrdenCompraNestedInput;
};
export type OrdenCompraUncheckedUpdateManyWithoutProveedorInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observacion?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OrdenCompraCountOutputType = {
    detalles: number;
    notasCD: number;
    ajustes: number;
};
export type OrdenCompraCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | OrdenCompraCountOutputTypeCountDetallesArgs;
    notasCD?: boolean | OrdenCompraCountOutputTypeCountNotasCDArgs;
    ajustes?: boolean | OrdenCompraCountOutputTypeCountAjustesArgs;
};
export type OrdenCompraCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraCountOutputTypeSelect<ExtArgs> | null;
};
export type OrdenCompraCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleOrdenCompraWhereInput;
};
export type OrdenCompraCountOutputTypeCountNotasCDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotaCDCompraWhereInput;
};
export type OrdenCompraCountOutputTypeCountAjustesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AjusteCompraWhereInput;
};
export type OrdenCompraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proveedorId?: boolean;
    fecha?: boolean;
    estado?: boolean;
    total?: boolean;
    observacion?: boolean;
    proveedor?: boolean | Prisma.ProveedorDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.OrdenCompra$detallesArgs<ExtArgs>;
    libroCompras?: boolean | Prisma.OrdenCompra$libroComprasArgs<ExtArgs>;
    notaRemision?: boolean | Prisma.OrdenCompra$notaRemisionArgs<ExtArgs>;
    notasCD?: boolean | Prisma.OrdenCompra$notasCDArgs<ExtArgs>;
    ajustes?: boolean | Prisma.OrdenCompra$ajustesArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdenCompraCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordenCompra"]>;
export type OrdenCompraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proveedorId?: boolean;
    fecha?: boolean;
    estado?: boolean;
    total?: boolean;
    observacion?: boolean;
    proveedor?: boolean | Prisma.ProveedorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordenCompra"]>;
export type OrdenCompraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proveedorId?: boolean;
    fecha?: boolean;
    estado?: boolean;
    total?: boolean;
    observacion?: boolean;
    proveedor?: boolean | Prisma.ProveedorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ordenCompra"]>;
export type OrdenCompraSelectScalar = {
    id?: boolean;
    proveedorId?: boolean;
    fecha?: boolean;
    estado?: boolean;
    total?: boolean;
    observacion?: boolean;
};
export type OrdenCompraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proveedorId" | "fecha" | "estado" | "total" | "observacion", ExtArgs["result"]["ordenCompra"]>;
export type OrdenCompraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.ProveedorDefaultArgs<ExtArgs>;
    detalles?: boolean | Prisma.OrdenCompra$detallesArgs<ExtArgs>;
    libroCompras?: boolean | Prisma.OrdenCompra$libroComprasArgs<ExtArgs>;
    notaRemision?: boolean | Prisma.OrdenCompra$notaRemisionArgs<ExtArgs>;
    notasCD?: boolean | Prisma.OrdenCompra$notasCDArgs<ExtArgs>;
    ajustes?: boolean | Prisma.OrdenCompra$ajustesArgs<ExtArgs>;
    _count?: boolean | Prisma.OrdenCompraCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OrdenCompraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.ProveedorDefaultArgs<ExtArgs>;
};
export type OrdenCompraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.ProveedorDefaultArgs<ExtArgs>;
};
export type $OrdenCompraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OrdenCompra";
    objects: {
        proveedor: Prisma.$ProveedorPayload<ExtArgs>;
        detalles: Prisma.$DetalleOrdenCompraPayload<ExtArgs>[];
        libroCompras: Prisma.$LibroComprasPayload<ExtArgs> | null;
        notaRemision: Prisma.$NotaRemisionPayload<ExtArgs> | null;
        notasCD: Prisma.$NotaCDCompraPayload<ExtArgs>[];
        ajustes: Prisma.$AjusteCompraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        proveedorId: number;
        fecha: Date;
        estado: string;
        total: runtime.Decimal;
        observacion: string;
    }, ExtArgs["result"]["ordenCompra"]>;
    composites: {};
};
export type OrdenCompraGetPayload<S extends boolean | null | undefined | OrdenCompraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload, S>;
export type OrdenCompraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OrdenCompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OrdenCompraCountAggregateInputType | true;
};
export interface OrdenCompraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OrdenCompra'];
        meta: {
            name: 'OrdenCompra';
        };
    };
    findUnique<T extends OrdenCompraFindUniqueArgs>(args: Prisma.SelectSubset<T, OrdenCompraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OrdenCompraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OrdenCompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OrdenCompraFindFirstArgs>(args?: Prisma.SelectSubset<T, OrdenCompraFindFirstArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OrdenCompraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OrdenCompraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OrdenCompraFindManyArgs>(args?: Prisma.SelectSubset<T, OrdenCompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OrdenCompraCreateArgs>(args: Prisma.SelectSubset<T, OrdenCompraCreateArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OrdenCompraCreateManyArgs>(args?: Prisma.SelectSubset<T, OrdenCompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends OrdenCompraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OrdenCompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends OrdenCompraDeleteArgs>(args: Prisma.SelectSubset<T, OrdenCompraDeleteArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OrdenCompraUpdateArgs>(args: Prisma.SelectSubset<T, OrdenCompraUpdateArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OrdenCompraDeleteManyArgs>(args?: Prisma.SelectSubset<T, OrdenCompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OrdenCompraUpdateManyArgs>(args: Prisma.SelectSubset<T, OrdenCompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends OrdenCompraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OrdenCompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends OrdenCompraUpsertArgs>(args: Prisma.SelectSubset<T, OrdenCompraUpsertArgs<ExtArgs>>): Prisma.Prisma__OrdenCompraClient<runtime.Types.Result.GetResult<Prisma.$OrdenCompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OrdenCompraCountArgs>(args?: Prisma.Subset<T, OrdenCompraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OrdenCompraCountAggregateOutputType> : number>;
    aggregate<T extends OrdenCompraAggregateArgs>(args: Prisma.Subset<T, OrdenCompraAggregateArgs>): Prisma.PrismaPromise<GetOrdenCompraAggregateType<T>>;
    groupBy<T extends OrdenCompraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OrdenCompraGroupByArgs['orderBy'];
    } : {
        orderBy?: OrdenCompraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OrdenCompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdenCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OrdenCompraFieldRefs;
}
export interface Prisma__OrdenCompraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proveedor<T extends Prisma.ProveedorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProveedorDefaultArgs<ExtArgs>>): Prisma.Prisma__ProveedorClient<runtime.Types.Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.OrdenCompra$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompra$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    libroCompras<T extends Prisma.OrdenCompra$libroComprasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompra$libroComprasArgs<ExtArgs>>): Prisma.Prisma__LibroComprasClient<runtime.Types.Result.GetResult<Prisma.$LibroComprasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notaRemision<T extends Prisma.OrdenCompra$notaRemisionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompra$notaRemisionArgs<ExtArgs>>): Prisma.Prisma__NotaRemisionClient<runtime.Types.Result.GetResult<Prisma.$NotaRemisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    notasCD<T extends Prisma.OrdenCompra$notasCDArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompra$notasCDArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotaCDCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ajustes<T extends Prisma.OrdenCompra$ajustesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdenCompra$ajustesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AjusteCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OrdenCompraFieldRefs {
    readonly id: Prisma.FieldRef<"OrdenCompra", 'Int'>;
    readonly proveedorId: Prisma.FieldRef<"OrdenCompra", 'Int'>;
    readonly fecha: Prisma.FieldRef<"OrdenCompra", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"OrdenCompra", 'String'>;
    readonly total: Prisma.FieldRef<"OrdenCompra", 'Decimal'>;
    readonly observacion: Prisma.FieldRef<"OrdenCompra", 'String'>;
}
export type OrdenCompraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.OrdenCompraWhereInput;
    orderBy?: Prisma.OrdenCompraOrderByWithRelationInput | Prisma.OrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.OrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdenCompraScalarFieldEnum | Prisma.OrdenCompraScalarFieldEnum[];
};
export type OrdenCompraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.OrdenCompraWhereInput;
    orderBy?: Prisma.OrdenCompraOrderByWithRelationInput | Prisma.OrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.OrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdenCompraScalarFieldEnum | Prisma.OrdenCompraScalarFieldEnum[];
};
export type OrdenCompraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.OrdenCompraWhereInput;
    orderBy?: Prisma.OrdenCompraOrderByWithRelationInput | Prisma.OrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.OrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdenCompraScalarFieldEnum | Prisma.OrdenCompraScalarFieldEnum[];
};
export type OrdenCompraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrdenCompraCreateInput, Prisma.OrdenCompraUncheckedCreateInput>;
};
export type OrdenCompraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OrdenCompraCreateManyInput | Prisma.OrdenCompraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type OrdenCompraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    data: Prisma.OrdenCompraCreateManyInput | Prisma.OrdenCompraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.OrdenCompraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type OrdenCompraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateInput, Prisma.OrdenCompraUncheckedUpdateInput>;
    where: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OrdenCompraUpdateManyMutationInput, Prisma.OrdenCompraUncheckedUpdateManyInput>;
    where?: Prisma.OrdenCompraWhereInput;
    limit?: number;
};
export type OrdenCompraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OrdenCompraUpdateManyMutationInput, Prisma.OrdenCompraUncheckedUpdateManyInput>;
    where?: Prisma.OrdenCompraWhereInput;
    limit?: number;
    include?: Prisma.OrdenCompraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type OrdenCompraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where: Prisma.OrdenCompraWhereUniqueInput;
    create: Prisma.XOR<Prisma.OrdenCompraCreateInput, Prisma.OrdenCompraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OrdenCompraUpdateInput, Prisma.OrdenCompraUncheckedUpdateInput>;
};
export type OrdenCompraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
    where: Prisma.OrdenCompraWhereUniqueInput;
};
export type OrdenCompraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdenCompraWhereInput;
    limit?: number;
};
export type OrdenCompra$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetalleOrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.DetalleOrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.DetalleOrdenCompraInclude<ExtArgs> | null;
    where?: Prisma.DetalleOrdenCompraWhereInput;
    orderBy?: Prisma.DetalleOrdenCompraOrderByWithRelationInput | Prisma.DetalleOrdenCompraOrderByWithRelationInput[];
    cursor?: Prisma.DetalleOrdenCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetalleOrdenCompraScalarFieldEnum | Prisma.DetalleOrdenCompraScalarFieldEnum[];
};
export type OrdenCompra$libroComprasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LibroComprasSelect<ExtArgs> | null;
    omit?: Prisma.LibroComprasOmit<ExtArgs> | null;
    include?: Prisma.LibroComprasInclude<ExtArgs> | null;
    where?: Prisma.LibroComprasWhereInput;
};
export type OrdenCompra$notaRemisionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaRemisionSelect<ExtArgs> | null;
    omit?: Prisma.NotaRemisionOmit<ExtArgs> | null;
    include?: Prisma.NotaRemisionInclude<ExtArgs> | null;
    where?: Prisma.NotaRemisionWhereInput;
};
export type OrdenCompra$notasCDArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.NotaCDCompraSelect<ExtArgs> | null;
    omit?: Prisma.NotaCDCompraOmit<ExtArgs> | null;
    include?: Prisma.NotaCDCompraInclude<ExtArgs> | null;
    where?: Prisma.NotaCDCompraWhereInput;
    orderBy?: Prisma.NotaCDCompraOrderByWithRelationInput | Prisma.NotaCDCompraOrderByWithRelationInput[];
    cursor?: Prisma.NotaCDCompraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotaCDCompraScalarFieldEnum | Prisma.NotaCDCompraScalarFieldEnum[];
};
export type OrdenCompra$ajustesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type OrdenCompraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdenCompraSelect<ExtArgs> | null;
    omit?: Prisma.OrdenCompraOmit<ExtArgs> | null;
    include?: Prisma.OrdenCompraInclude<ExtArgs> | null;
};
export {};
