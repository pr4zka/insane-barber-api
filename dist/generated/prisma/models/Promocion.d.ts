import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type PromocionModel = runtime.Types.Result.DefaultSelection<Prisma.$PromocionPayload>;
export type AggregatePromocion = {
    _count: PromocionCountAggregateOutputType | null;
    _avg: PromocionAvgAggregateOutputType | null;
    _sum: PromocionSumAggregateOutputType | null;
    _min: PromocionMinAggregateOutputType | null;
    _max: PromocionMaxAggregateOutputType | null;
};
export type PromocionAvgAggregateOutputType = {
    id: number | null;
    porcentaje: runtime.Decimal | null;
};
export type PromocionSumAggregateOutputType = {
    id: number | null;
    porcentaje: runtime.Decimal | null;
};
export type PromocionMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    porcentaje: runtime.Decimal | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: boolean | null;
};
export type PromocionMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    porcentaje: runtime.Decimal | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: boolean | null;
};
export type PromocionCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    porcentaje: number;
    fechaInicio: number;
    fechaFin: number;
    estado: number;
    _all: number;
};
export type PromocionAvgAggregateInputType = {
    id?: true;
    porcentaje?: true;
};
export type PromocionSumAggregateInputType = {
    id?: true;
    porcentaje?: true;
};
export type PromocionMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentaje?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
};
export type PromocionMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentaje?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
};
export type PromocionCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    porcentaje?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    _all?: true;
};
export type PromocionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromocionWhereInput;
    orderBy?: Prisma.PromocionOrderByWithRelationInput | Prisma.PromocionOrderByWithRelationInput[];
    cursor?: Prisma.PromocionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PromocionCountAggregateInputType;
    _avg?: PromocionAvgAggregateInputType;
    _sum?: PromocionSumAggregateInputType;
    _min?: PromocionMinAggregateInputType;
    _max?: PromocionMaxAggregateInputType;
};
export type GetPromocionAggregateType<T extends PromocionAggregateArgs> = {
    [P in keyof T & keyof AggregatePromocion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePromocion[P]> : Prisma.GetScalarType<T[P], AggregatePromocion[P]>;
};
export type PromocionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromocionWhereInput;
    orderBy?: Prisma.PromocionOrderByWithAggregationInput | Prisma.PromocionOrderByWithAggregationInput[];
    by: Prisma.PromocionScalarFieldEnum[] | Prisma.PromocionScalarFieldEnum;
    having?: Prisma.PromocionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PromocionCountAggregateInputType | true;
    _avg?: PromocionAvgAggregateInputType;
    _sum?: PromocionSumAggregateInputType;
    _min?: PromocionMinAggregateInputType;
    _max?: PromocionMaxAggregateInputType;
};
export type PromocionGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal;
    fechaInicio: Date;
    fechaFin: Date;
    estado: boolean;
    _count: PromocionCountAggregateOutputType | null;
    _avg: PromocionAvgAggregateOutputType | null;
    _sum: PromocionSumAggregateOutputType | null;
    _min: PromocionMinAggregateOutputType | null;
    _max: PromocionMaxAggregateOutputType | null;
};
type GetPromocionGroupByPayload<T extends PromocionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PromocionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PromocionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PromocionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PromocionGroupByOutputType[P]>;
}>>;
export type PromocionWhereInput = {
    AND?: Prisma.PromocionWhereInput | Prisma.PromocionWhereInput[];
    OR?: Prisma.PromocionWhereInput[];
    NOT?: Prisma.PromocionWhereInput | Prisma.PromocionWhereInput[];
    id?: Prisma.IntFilter<"Promocion"> | number;
    nombre?: Prisma.StringFilter<"Promocion"> | string;
    descripcion?: Prisma.StringFilter<"Promocion"> | string;
    porcentaje?: Prisma.DecimalFilter<"Promocion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFilter<"Promocion"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"Promocion"> | Date | string;
    estado?: Prisma.BoolFilter<"Promocion"> | boolean;
    pagos?: Prisma.PagoListRelationFilter;
};
export type PromocionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pagos?: Prisma.PagoOrderByRelationAggregateInput;
};
export type PromocionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.PromocionWhereInput | Prisma.PromocionWhereInput[];
    OR?: Prisma.PromocionWhereInput[];
    NOT?: Prisma.PromocionWhereInput | Prisma.PromocionWhereInput[];
    nombre?: Prisma.StringFilter<"Promocion"> | string;
    descripcion?: Prisma.StringFilter<"Promocion"> | string;
    porcentaje?: Prisma.DecimalFilter<"Promocion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFilter<"Promocion"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"Promocion"> | Date | string;
    estado?: Prisma.BoolFilter<"Promocion"> | boolean;
    pagos?: Prisma.PagoListRelationFilter;
}, "id">;
export type PromocionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.PromocionCountOrderByAggregateInput;
    _avg?: Prisma.PromocionAvgOrderByAggregateInput;
    _max?: Prisma.PromocionMaxOrderByAggregateInput;
    _min?: Prisma.PromocionMinOrderByAggregateInput;
    _sum?: Prisma.PromocionSumOrderByAggregateInput;
};
export type PromocionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PromocionScalarWhereWithAggregatesInput | Prisma.PromocionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PromocionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PromocionScalarWhereWithAggregatesInput | Prisma.PromocionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Promocion"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Promocion"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"Promocion"> | string;
    porcentaje?: Prisma.DecimalWithAggregatesFilter<"Promocion"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"Promocion"> | Date | string;
    fechaFin?: Prisma.DateTimeWithAggregatesFilter<"Promocion"> | Date | string;
    estado?: Prisma.BoolWithAggregatesFilter<"Promocion"> | boolean;
};
export type PromocionCreateInput = {
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: boolean;
    pagos?: Prisma.PagoCreateNestedManyWithoutPromocionInput;
};
export type PromocionUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: boolean;
    pagos?: Prisma.PagoUncheckedCreateNestedManyWithoutPromocionInput;
};
export type PromocionUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pagos?: Prisma.PagoUpdateManyWithoutPromocionNestedInput;
};
export type PromocionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    pagos?: Prisma.PagoUncheckedUpdateManyWithoutPromocionNestedInput;
};
export type PromocionCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: boolean;
};
export type PromocionUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PromocionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PromocionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type PromocionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type PromocionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type PromocionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type PromocionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    porcentaje?: Prisma.SortOrder;
};
export type PromocionNullableScalarRelationFilter = {
    is?: Prisma.PromocionWhereInput | null;
    isNot?: Prisma.PromocionWhereInput | null;
};
export type PromocionCreateNestedOneWithoutPagosInput = {
    create?: Prisma.XOR<Prisma.PromocionCreateWithoutPagosInput, Prisma.PromocionUncheckedCreateWithoutPagosInput>;
    connectOrCreate?: Prisma.PromocionCreateOrConnectWithoutPagosInput;
    connect?: Prisma.PromocionWhereUniqueInput;
};
export type PromocionUpdateOneWithoutPagosNestedInput = {
    create?: Prisma.XOR<Prisma.PromocionCreateWithoutPagosInput, Prisma.PromocionUncheckedCreateWithoutPagosInput>;
    connectOrCreate?: Prisma.PromocionCreateOrConnectWithoutPagosInput;
    upsert?: Prisma.PromocionUpsertWithoutPagosInput;
    disconnect?: Prisma.PromocionWhereInput | boolean;
    delete?: Prisma.PromocionWhereInput | boolean;
    connect?: Prisma.PromocionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PromocionUpdateToOneWithWhereWithoutPagosInput, Prisma.PromocionUpdateWithoutPagosInput>, Prisma.PromocionUncheckedUpdateWithoutPagosInput>;
};
export type PromocionCreateWithoutPagosInput = {
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: boolean;
};
export type PromocionUncheckedCreateWithoutPagosInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    porcentaje: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: boolean;
};
export type PromocionCreateOrConnectWithoutPagosInput = {
    where: Prisma.PromocionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PromocionCreateWithoutPagosInput, Prisma.PromocionUncheckedCreateWithoutPagosInput>;
};
export type PromocionUpsertWithoutPagosInput = {
    update: Prisma.XOR<Prisma.PromocionUpdateWithoutPagosInput, Prisma.PromocionUncheckedUpdateWithoutPagosInput>;
    create: Prisma.XOR<Prisma.PromocionCreateWithoutPagosInput, Prisma.PromocionUncheckedCreateWithoutPagosInput>;
    where?: Prisma.PromocionWhereInput;
};
export type PromocionUpdateToOneWithWhereWithoutPagosInput = {
    where?: Prisma.PromocionWhereInput;
    data: Prisma.XOR<Prisma.PromocionUpdateWithoutPagosInput, Prisma.PromocionUncheckedUpdateWithoutPagosInput>;
};
export type PromocionUpdateWithoutPagosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PromocionUncheckedUpdateWithoutPagosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    porcentaje?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PromocionCountOutputType = {
    pagos: number;
};
export type PromocionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pagos?: boolean | PromocionCountOutputTypeCountPagosArgs;
};
export type PromocionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionCountOutputTypeSelect<ExtArgs> | null;
};
export type PromocionCountOutputTypeCountPagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PagoWhereInput;
};
export type PromocionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    pagos?: boolean | Prisma.Promocion$pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.PromocionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["promocion"]>;
export type PromocionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["promocion"]>;
export type PromocionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["promocion"]>;
export type PromocionSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    porcentaje?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
};
export type PromocionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "porcentaje" | "fechaInicio" | "fechaFin" | "estado", ExtArgs["result"]["promocion"]>;
export type PromocionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pagos?: boolean | Prisma.Promocion$pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.PromocionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PromocionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PromocionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PromocionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Promocion";
    objects: {
        pagos: Prisma.$PagoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string;
        porcentaje: runtime.Decimal;
        fechaInicio: Date;
        fechaFin: Date;
        estado: boolean;
    }, ExtArgs["result"]["promocion"]>;
    composites: {};
};
export type PromocionGetPayload<S extends boolean | null | undefined | PromocionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PromocionPayload, S>;
export type PromocionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PromocionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PromocionCountAggregateInputType | true;
};
export interface PromocionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Promocion'];
        meta: {
            name: 'Promocion';
        };
    };
    findUnique<T extends PromocionFindUniqueArgs>(args: Prisma.SelectSubset<T, PromocionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PromocionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PromocionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PromocionFindFirstArgs>(args?: Prisma.SelectSubset<T, PromocionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PromocionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PromocionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PromocionFindManyArgs>(args?: Prisma.SelectSubset<T, PromocionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PromocionCreateArgs>(args: Prisma.SelectSubset<T, PromocionCreateArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PromocionCreateManyArgs>(args?: Prisma.SelectSubset<T, PromocionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PromocionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PromocionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PromocionDeleteArgs>(args: Prisma.SelectSubset<T, PromocionDeleteArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PromocionUpdateArgs>(args: Prisma.SelectSubset<T, PromocionUpdateArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PromocionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PromocionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PromocionUpdateManyArgs>(args: Prisma.SelectSubset<T, PromocionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PromocionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PromocionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PromocionUpsertArgs>(args: Prisma.SelectSubset<T, PromocionUpsertArgs<ExtArgs>>): Prisma.Prisma__PromocionClient<runtime.Types.Result.GetResult<Prisma.$PromocionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PromocionCountArgs>(args?: Prisma.Subset<T, PromocionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PromocionCountAggregateOutputType> : number>;
    aggregate<T extends PromocionAggregateArgs>(args: Prisma.Subset<T, PromocionAggregateArgs>): Prisma.PrismaPromise<GetPromocionAggregateType<T>>;
    groupBy<T extends PromocionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PromocionGroupByArgs['orderBy'];
    } : {
        orderBy?: PromocionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PromocionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromocionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PromocionFieldRefs;
}
export interface Prisma__PromocionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    pagos<T extends Prisma.Promocion$pagosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Promocion$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PromocionFieldRefs {
    readonly id: Prisma.FieldRef<"Promocion", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Promocion", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Promocion", 'String'>;
    readonly porcentaje: Prisma.FieldRef<"Promocion", 'Decimal'>;
    readonly fechaInicio: Prisma.FieldRef<"Promocion", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"Promocion", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"Promocion", 'Boolean'>;
}
export type PromocionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where: Prisma.PromocionWhereUniqueInput;
};
export type PromocionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where: Prisma.PromocionWhereUniqueInput;
};
export type PromocionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where?: Prisma.PromocionWhereInput;
    orderBy?: Prisma.PromocionOrderByWithRelationInput | Prisma.PromocionOrderByWithRelationInput[];
    cursor?: Prisma.PromocionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromocionScalarFieldEnum | Prisma.PromocionScalarFieldEnum[];
};
export type PromocionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where?: Prisma.PromocionWhereInput;
    orderBy?: Prisma.PromocionOrderByWithRelationInput | Prisma.PromocionOrderByWithRelationInput[];
    cursor?: Prisma.PromocionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromocionScalarFieldEnum | Prisma.PromocionScalarFieldEnum[];
};
export type PromocionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where?: Prisma.PromocionWhereInput;
    orderBy?: Prisma.PromocionOrderByWithRelationInput | Prisma.PromocionOrderByWithRelationInput[];
    cursor?: Prisma.PromocionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromocionScalarFieldEnum | Prisma.PromocionScalarFieldEnum[];
};
export type PromocionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PromocionCreateInput, Prisma.PromocionUncheckedCreateInput>;
};
export type PromocionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PromocionCreateManyInput | Prisma.PromocionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PromocionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    data: Prisma.PromocionCreateManyInput | Prisma.PromocionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PromocionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PromocionUpdateInput, Prisma.PromocionUncheckedUpdateInput>;
    where: Prisma.PromocionWhereUniqueInput;
};
export type PromocionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PromocionUpdateManyMutationInput, Prisma.PromocionUncheckedUpdateManyInput>;
    where?: Prisma.PromocionWhereInput;
    limit?: number;
};
export type PromocionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PromocionUpdateManyMutationInput, Prisma.PromocionUncheckedUpdateManyInput>;
    where?: Prisma.PromocionWhereInput;
    limit?: number;
};
export type PromocionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where: Prisma.PromocionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PromocionCreateInput, Prisma.PromocionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PromocionUpdateInput, Prisma.PromocionUncheckedUpdateInput>;
};
export type PromocionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
    where: Prisma.PromocionWhereUniqueInput;
};
export type PromocionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PromocionWhereInput;
    limit?: number;
};
export type Promocion$pagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PromocionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PromocionSelect<ExtArgs> | null;
    omit?: Prisma.PromocionOmit<ExtArgs> | null;
    include?: Prisma.PromocionInclude<ExtArgs> | null;
};
export {};
