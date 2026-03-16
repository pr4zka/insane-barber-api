import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ServicioModel = runtime.Types.Result.DefaultSelection<Prisma.$ServicioPayload>;
export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null;
    _avg: ServicioAvgAggregateOutputType | null;
    _sum: ServicioSumAggregateOutputType | null;
    _min: ServicioMinAggregateOutputType | null;
    _max: ServicioMaxAggregateOutputType | null;
};
export type ServicioAvgAggregateOutputType = {
    id: number | null;
    precio: runtime.Decimal | null;
    duracionMin: number | null;
};
export type ServicioSumAggregateOutputType = {
    id: number | null;
    precio: runtime.Decimal | null;
    duracionMin: number | null;
};
export type ServicioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    duracionMin: number | null;
    estado: boolean | null;
};
export type ServicioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    duracionMin: number | null;
    estado: boolean | null;
};
export type ServicioCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    precio: number;
    duracionMin: number;
    estado: number;
    _all: number;
};
export type ServicioAvgAggregateInputType = {
    id?: true;
    precio?: true;
    duracionMin?: true;
};
export type ServicioSumAggregateInputType = {
    id?: true;
    precio?: true;
    duracionMin?: true;
};
export type ServicioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    duracionMin?: true;
    estado?: true;
};
export type ServicioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    duracionMin?: true;
    estado?: true;
};
export type ServicioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    precio?: true;
    duracionMin?: true;
    estado?: true;
    _all?: true;
};
export type ServicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithRelationInput | Prisma.ServicioOrderByWithRelationInput[];
    cursor?: Prisma.ServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServicioCountAggregateInputType;
    _avg?: ServicioAvgAggregateInputType;
    _sum?: ServicioSumAggregateInputType;
    _min?: ServicioMinAggregateInputType;
    _max?: ServicioMaxAggregateInputType;
};
export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
    [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServicio[P]> : Prisma.GetScalarType<T[P], AggregateServicio[P]>;
};
export type ServicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithAggregationInput | Prisma.ServicioOrderByWithAggregationInput[];
    by: Prisma.ServicioScalarFieldEnum[] | Prisma.ServicioScalarFieldEnum;
    having?: Prisma.ServicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServicioCountAggregateInputType | true;
    _avg?: ServicioAvgAggregateInputType;
    _sum?: ServicioSumAggregateInputType;
    _min?: ServicioMinAggregateInputType;
    _max?: ServicioMaxAggregateInputType;
};
export type ServicioGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal;
    duracionMin: number;
    estado: boolean;
    _count: ServicioCountAggregateOutputType | null;
    _avg: ServicioAvgAggregateOutputType | null;
    _sum: ServicioSumAggregateOutputType | null;
    _min: ServicioMinAggregateOutputType | null;
    _max: ServicioMaxAggregateOutputType | null;
};
type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServicioGroupByOutputType[P]>;
}>>;
export type ServicioWhereInput = {
    AND?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    OR?: Prisma.ServicioWhereInput[];
    NOT?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    id?: Prisma.IntFilter<"Servicio"> | number;
    nombre?: Prisma.StringFilter<"Servicio"> | string;
    descripcion?: Prisma.StringFilter<"Servicio"> | string;
    precio?: Prisma.DecimalFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFilter<"Servicio"> | number;
    estado?: Prisma.BoolFilter<"Servicio"> | boolean;
    turnos?: Prisma.TurnoListRelationFilter;
    detallesPresupuesto?: Prisma.DetallePresupuestoListRelationFilter;
};
export type ServicioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    turnos?: Prisma.TurnoOrderByRelationAggregateInput;
    detallesPresupuesto?: Prisma.DetallePresupuestoOrderByRelationAggregateInput;
};
export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    OR?: Prisma.ServicioWhereInput[];
    NOT?: Prisma.ServicioWhereInput | Prisma.ServicioWhereInput[];
    nombre?: Prisma.StringFilter<"Servicio"> | string;
    descripcion?: Prisma.StringFilter<"Servicio"> | string;
    precio?: Prisma.DecimalFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFilter<"Servicio"> | number;
    estado?: Prisma.BoolFilter<"Servicio"> | boolean;
    turnos?: Prisma.TurnoListRelationFilter;
    detallesPresupuesto?: Prisma.DetallePresupuestoListRelationFilter;
}, "id">;
export type ServicioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.ServicioCountOrderByAggregateInput;
    _avg?: Prisma.ServicioAvgOrderByAggregateInput;
    _max?: Prisma.ServicioMaxOrderByAggregateInput;
    _min?: Prisma.ServicioMinOrderByAggregateInput;
    _sum?: Prisma.ServicioSumOrderByAggregateInput;
};
export type ServicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServicioScalarWhereWithAggregatesInput | Prisma.ServicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServicioScalarWhereWithAggregatesInput | Prisma.ServicioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Servicio"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Servicio"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"Servicio"> | string;
    precio?: Prisma.DecimalWithAggregatesFilter<"Servicio"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntWithAggregatesFilter<"Servicio"> | number;
    estado?: Prisma.BoolWithAggregatesFilter<"Servicio"> | boolean;
};
export type ServicioCreateInput = {
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
    turnos?: Prisma.TurnoCreateNestedManyWithoutServicioInput;
    detallesPresupuesto?: Prisma.DetallePresupuestoCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutServicioInput;
    detallesPresupuesto?: Prisma.DetallePresupuestoUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    turnos?: Prisma.TurnoUpdateManyWithoutServicioNestedInput;
    detallesPresupuesto?: Prisma.DetallePresupuestoUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutServicioNestedInput;
    detallesPresupuesto?: Prisma.DetallePresupuestoUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
};
export type ServicioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ServicioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ServicioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ServicioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
};
export type ServicioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ServicioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type ServicioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    duracionMin?: Prisma.SortOrder;
};
export type ServicioScalarRelationFilter = {
    is?: Prisma.ServicioWhereInput;
    isNot?: Prisma.ServicioWhereInput;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ServicioCreateNestedOneWithoutTurnosInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutTurnosInput, Prisma.ServicioUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutTurnosInput;
    connect?: Prisma.ServicioWhereUniqueInput;
};
export type ServicioUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutTurnosInput, Prisma.ServicioUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutTurnosInput;
    upsert?: Prisma.ServicioUpsertWithoutTurnosInput;
    connect?: Prisma.ServicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServicioUpdateToOneWithWhereWithoutTurnosInput, Prisma.ServicioUpdateWithoutTurnosInput>, Prisma.ServicioUncheckedUpdateWithoutTurnosInput>;
};
export type ServicioCreateNestedOneWithoutDetallesPresupuestoInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutDetallesPresupuestoInput, Prisma.ServicioUncheckedCreateWithoutDetallesPresupuestoInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutDetallesPresupuestoInput;
    connect?: Prisma.ServicioWhereUniqueInput;
};
export type ServicioUpdateOneRequiredWithoutDetallesPresupuestoNestedInput = {
    create?: Prisma.XOR<Prisma.ServicioCreateWithoutDetallesPresupuestoInput, Prisma.ServicioUncheckedCreateWithoutDetallesPresupuestoInput>;
    connectOrCreate?: Prisma.ServicioCreateOrConnectWithoutDetallesPresupuestoInput;
    upsert?: Prisma.ServicioUpsertWithoutDetallesPresupuestoInput;
    connect?: Prisma.ServicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServicioUpdateToOneWithWhereWithoutDetallesPresupuestoInput, Prisma.ServicioUpdateWithoutDetallesPresupuestoInput>, Prisma.ServicioUncheckedUpdateWithoutDetallesPresupuestoInput>;
};
export type ServicioCreateWithoutTurnosInput = {
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
    detallesPresupuesto?: Prisma.DetallePresupuestoCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateWithoutTurnosInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
    detallesPresupuesto?: Prisma.DetallePresupuestoUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioCreateOrConnectWithoutTurnosInput = {
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutTurnosInput, Prisma.ServicioUncheckedCreateWithoutTurnosInput>;
};
export type ServicioUpsertWithoutTurnosInput = {
    update: Prisma.XOR<Prisma.ServicioUpdateWithoutTurnosInput, Prisma.ServicioUncheckedUpdateWithoutTurnosInput>;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutTurnosInput, Prisma.ServicioUncheckedCreateWithoutTurnosInput>;
    where?: Prisma.ServicioWhereInput;
};
export type ServicioUpdateToOneWithWhereWithoutTurnosInput = {
    where?: Prisma.ServicioWhereInput;
    data: Prisma.XOR<Prisma.ServicioUpdateWithoutTurnosInput, Prisma.ServicioUncheckedUpdateWithoutTurnosInput>;
};
export type ServicioUpdateWithoutTurnosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detallesPresupuesto?: Prisma.DetallePresupuestoUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateWithoutTurnosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detallesPresupuesto?: Prisma.DetallePresupuestoUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioCreateWithoutDetallesPresupuestoInput = {
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
    turnos?: Prisma.TurnoCreateNestedManyWithoutServicioInput;
};
export type ServicioUncheckedCreateWithoutDetallesPresupuestoInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin: number;
    estado?: boolean;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutServicioInput;
};
export type ServicioCreateOrConnectWithoutDetallesPresupuestoInput = {
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutDetallesPresupuestoInput, Prisma.ServicioUncheckedCreateWithoutDetallesPresupuestoInput>;
};
export type ServicioUpsertWithoutDetallesPresupuestoInput = {
    update: Prisma.XOR<Prisma.ServicioUpdateWithoutDetallesPresupuestoInput, Prisma.ServicioUncheckedUpdateWithoutDetallesPresupuestoInput>;
    create: Prisma.XOR<Prisma.ServicioCreateWithoutDetallesPresupuestoInput, Prisma.ServicioUncheckedCreateWithoutDetallesPresupuestoInput>;
    where?: Prisma.ServicioWhereInput;
};
export type ServicioUpdateToOneWithWhereWithoutDetallesPresupuestoInput = {
    where?: Prisma.ServicioWhereInput;
    data: Prisma.XOR<Prisma.ServicioUpdateWithoutDetallesPresupuestoInput, Prisma.ServicioUncheckedUpdateWithoutDetallesPresupuestoInput>;
};
export type ServicioUpdateWithoutDetallesPresupuestoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    turnos?: Prisma.TurnoUpdateManyWithoutServicioNestedInput;
};
export type ServicioUncheckedUpdateWithoutDetallesPresupuestoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    duracionMin?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutServicioNestedInput;
};
export type ServicioCountOutputType = {
    turnos: number;
    detallesPresupuesto: number;
};
export type ServicioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turnos?: boolean | ServicioCountOutputTypeCountTurnosArgs;
    detallesPresupuesto?: boolean | ServicioCountOutputTypeCountDetallesPresupuestoArgs;
};
export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioCountOutputTypeSelect<ExtArgs> | null;
};
export type ServicioCountOutputTypeCountTurnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
};
export type ServicioCountOutputTypeCountDetallesPresupuestoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetallePresupuestoWhereInput;
};
export type ServicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    duracionMin?: boolean;
    estado?: boolean;
    turnos?: boolean | Prisma.Servicio$turnosArgs<ExtArgs>;
    detallesPresupuesto?: boolean | Prisma.Servicio$detallesPresupuestoArgs<ExtArgs>;
    _count?: boolean | Prisma.ServicioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["servicio"]>;
export type ServicioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    duracionMin?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["servicio"]>;
export type ServicioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    duracionMin?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["servicio"]>;
export type ServicioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    duracionMin?: boolean;
    estado?: boolean;
};
export type ServicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "duracionMin" | "estado", ExtArgs["result"]["servicio"]>;
export type ServicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turnos?: boolean | Prisma.Servicio$turnosArgs<ExtArgs>;
    detallesPresupuesto?: boolean | Prisma.Servicio$detallesPresupuestoArgs<ExtArgs>;
    _count?: boolean | Prisma.ServicioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ServicioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ServicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Servicio";
    objects: {
        turnos: Prisma.$TurnoPayload<ExtArgs>[];
        detallesPresupuesto: Prisma.$DetallePresupuestoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string;
        precio: runtime.Decimal;
        duracionMin: number;
        estado: boolean;
    }, ExtArgs["result"]["servicio"]>;
    composites: {};
};
export type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServicioPayload, S>;
export type ServicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServicioCountAggregateInputType | true;
};
export interface ServicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Servicio'];
        meta: {
            name: 'Servicio';
        };
    };
    findUnique<T extends ServicioFindUniqueArgs>(args: Prisma.SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServicioFindFirstArgs>(args?: Prisma.SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServicioFindManyArgs>(args?: Prisma.SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServicioCreateArgs>(args: Prisma.SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServicioCreateManyArgs>(args?: Prisma.SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServicioDeleteArgs>(args: Prisma.SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServicioUpdateArgs>(args: Prisma.SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServicioUpdateManyArgs>(args: Prisma.SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServicioUpsertArgs>(args: Prisma.SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma.Prisma__ServicioClient<runtime.Types.Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServicioCountArgs>(args?: Prisma.Subset<T, ServicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServicioCountAggregateOutputType> : number>;
    aggregate<T extends ServicioAggregateArgs>(args: Prisma.Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>;
    groupBy<T extends ServicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServicioGroupByArgs['orderBy'];
    } : {
        orderBy?: ServicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServicioFieldRefs;
}
export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    turnos<T extends Prisma.Servicio$turnosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Servicio$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detallesPresupuesto<T extends Prisma.Servicio$detallesPresupuestoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Servicio$detallesPresupuestoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetallePresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServicioFieldRefs {
    readonly id: Prisma.FieldRef<"Servicio", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Servicio", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Servicio", 'String'>;
    readonly precio: Prisma.FieldRef<"Servicio", 'Decimal'>;
    readonly duracionMin: Prisma.FieldRef<"Servicio", 'Int'>;
    readonly estado: Prisma.FieldRef<"Servicio", 'Boolean'>;
}
export type ServicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithRelationInput | Prisma.ServicioOrderByWithRelationInput[];
    cursor?: Prisma.ServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicioScalarFieldEnum | Prisma.ServicioScalarFieldEnum[];
};
export type ServicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithRelationInput | Prisma.ServicioOrderByWithRelationInput[];
    cursor?: Prisma.ServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicioScalarFieldEnum | Prisma.ServicioScalarFieldEnum[];
};
export type ServicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where?: Prisma.ServicioWhereInput;
    orderBy?: Prisma.ServicioOrderByWithRelationInput | Prisma.ServicioOrderByWithRelationInput[];
    cursor?: Prisma.ServicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServicioScalarFieldEnum | Prisma.ServicioScalarFieldEnum[];
};
export type ServicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioCreateInput, Prisma.ServicioUncheckedCreateInput>;
};
export type ServicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServicioCreateManyInput | Prisma.ServicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServicioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    data: Prisma.ServicioCreateManyInput | Prisma.ServicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioUpdateInput, Prisma.ServicioUncheckedUpdateInput>;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServicioUpdateManyMutationInput, Prisma.ServicioUncheckedUpdateManyInput>;
    where?: Prisma.ServicioWhereInput;
    limit?: number;
};
export type ServicioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServicioUpdateManyMutationInput, Prisma.ServicioUncheckedUpdateManyInput>;
    where?: Prisma.ServicioWhereInput;
    limit?: number;
};
export type ServicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServicioCreateInput, Prisma.ServicioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServicioUpdateInput, Prisma.ServicioUncheckedUpdateInput>;
};
export type ServicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
    where: Prisma.ServicioWhereUniqueInput;
};
export type ServicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServicioWhereInput;
    limit?: number;
};
export type Servicio$turnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Servicio$detallesPresupuestoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DetallePresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.DetallePresupuestoOmit<ExtArgs> | null;
    include?: Prisma.DetallePresupuestoInclude<ExtArgs> | null;
    where?: Prisma.DetallePresupuestoWhereInput;
    orderBy?: Prisma.DetallePresupuestoOrderByWithRelationInput | Prisma.DetallePresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.DetallePresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DetallePresupuestoScalarFieldEnum | Prisma.DetallePresupuestoScalarFieldEnum[];
};
export type ServicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServicioSelect<ExtArgs> | null;
    omit?: Prisma.ServicioOmit<ExtArgs> | null;
    include?: Prisma.ServicioInclude<ExtArgs> | null;
};
export {};
