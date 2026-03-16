import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type InsumoModel = runtime.Types.Result.DefaultSelection<Prisma.$InsumoPayload>;
export type AggregateInsumo = {
    _count: InsumoCountAggregateOutputType | null;
    _avg: InsumoAvgAggregateOutputType | null;
    _sum: InsumoSumAggregateOutputType | null;
    _min: InsumoMinAggregateOutputType | null;
    _max: InsumoMaxAggregateOutputType | null;
};
export type InsumoAvgAggregateOutputType = {
    id: number | null;
    stock: runtime.Decimal | null;
};
export type InsumoSumAggregateOutputType = {
    id: number | null;
    stock: runtime.Decimal | null;
};
export type InsumoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    unidad: string | null;
    stock: runtime.Decimal | null;
    estado: boolean | null;
};
export type InsumoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    descripcion: string | null;
    unidad: string | null;
    stock: runtime.Decimal | null;
    estado: boolean | null;
};
export type InsumoCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    unidad: number;
    stock: number;
    estado: number;
    _all: number;
};
export type InsumoAvgAggregateInputType = {
    id?: true;
    stock?: true;
};
export type InsumoSumAggregateInputType = {
    id?: true;
    stock?: true;
};
export type InsumoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    unidad?: true;
    stock?: true;
    estado?: true;
};
export type InsumoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    unidad?: true;
    stock?: true;
    estado?: true;
};
export type InsumoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    unidad?: true;
    stock?: true;
    estado?: true;
    _all?: true;
};
export type InsumoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoWhereInput;
    orderBy?: Prisma.InsumoOrderByWithRelationInput | Prisma.InsumoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InsumoCountAggregateInputType;
    _avg?: InsumoAvgAggregateInputType;
    _sum?: InsumoSumAggregateInputType;
    _min?: InsumoMinAggregateInputType;
    _max?: InsumoMaxAggregateInputType;
};
export type GetInsumoAggregateType<T extends InsumoAggregateArgs> = {
    [P in keyof T & keyof AggregateInsumo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInsumo[P]> : Prisma.GetScalarType<T[P], AggregateInsumo[P]>;
};
export type InsumoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoWhereInput;
    orderBy?: Prisma.InsumoOrderByWithAggregationInput | Prisma.InsumoOrderByWithAggregationInput[];
    by: Prisma.InsumoScalarFieldEnum[] | Prisma.InsumoScalarFieldEnum;
    having?: Prisma.InsumoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InsumoCountAggregateInputType | true;
    _avg?: InsumoAvgAggregateInputType;
    _sum?: InsumoSumAggregateInputType;
    _min?: InsumoMinAggregateInputType;
    _max?: InsumoMaxAggregateInputType;
};
export type InsumoGroupByOutputType = {
    id: number;
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal;
    estado: boolean;
    _count: InsumoCountAggregateOutputType | null;
    _avg: InsumoAvgAggregateOutputType | null;
    _sum: InsumoSumAggregateOutputType | null;
    _min: InsumoMinAggregateOutputType | null;
    _max: InsumoMaxAggregateOutputType | null;
};
type GetInsumoGroupByPayload<T extends InsumoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InsumoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InsumoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InsumoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InsumoGroupByOutputType[P]>;
}>>;
export type InsumoWhereInput = {
    AND?: Prisma.InsumoWhereInput | Prisma.InsumoWhereInput[];
    OR?: Prisma.InsumoWhereInput[];
    NOT?: Prisma.InsumoWhereInput | Prisma.InsumoWhereInput[];
    id?: Prisma.IntFilter<"Insumo"> | number;
    nombre?: Prisma.StringFilter<"Insumo"> | string;
    descripcion?: Prisma.StringFilter<"Insumo"> | string;
    unidad?: Prisma.StringFilter<"Insumo"> | string;
    stock?: Prisma.DecimalFilter<"Insumo"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"Insumo"> | boolean;
    usos?: Prisma.InsumoUtilizadoListRelationFilter;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraListRelationFilter;
};
export type InsumoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usos?: Prisma.InsumoUtilizadoOrderByRelationAggregateInput;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraOrderByRelationAggregateInput;
};
export type InsumoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.InsumoWhereInput | Prisma.InsumoWhereInput[];
    OR?: Prisma.InsumoWhereInput[];
    NOT?: Prisma.InsumoWhereInput | Prisma.InsumoWhereInput[];
    nombre?: Prisma.StringFilter<"Insumo"> | string;
    descripcion?: Prisma.StringFilter<"Insumo"> | string;
    unidad?: Prisma.StringFilter<"Insumo"> | string;
    stock?: Prisma.DecimalFilter<"Insumo"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFilter<"Insumo"> | boolean;
    usos?: Prisma.InsumoUtilizadoListRelationFilter;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraListRelationFilter;
}, "id">;
export type InsumoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.InsumoCountOrderByAggregateInput;
    _avg?: Prisma.InsumoAvgOrderByAggregateInput;
    _max?: Prisma.InsumoMaxOrderByAggregateInput;
    _min?: Prisma.InsumoMinOrderByAggregateInput;
    _sum?: Prisma.InsumoSumOrderByAggregateInput;
};
export type InsumoScalarWhereWithAggregatesInput = {
    AND?: Prisma.InsumoScalarWhereWithAggregatesInput | Prisma.InsumoScalarWhereWithAggregatesInput[];
    OR?: Prisma.InsumoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InsumoScalarWhereWithAggregatesInput | Prisma.InsumoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Insumo"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Insumo"> | string;
    descripcion?: Prisma.StringWithAggregatesFilter<"Insumo"> | string;
    unidad?: Prisma.StringWithAggregatesFilter<"Insumo"> | string;
    stock?: Prisma.DecimalWithAggregatesFilter<"Insumo"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolWithAggregatesFilter<"Insumo"> | boolean;
};
export type InsumoCreateInput = {
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    usos?: Prisma.InsumoUtilizadoCreateNestedManyWithoutInsumoInput;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutInsumoInput;
};
export type InsumoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    usos?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutInsumoInput;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutInsumoInput;
};
export type InsumoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usos?: Prisma.InsumoUtilizadoUpdateManyWithoutInsumoNestedInput;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraUpdateManyWithoutInsumoNestedInput;
};
export type InsumoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usos?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutInsumoNestedInput;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutInsumoNestedInput;
};
export type InsumoCreateManyInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
};
export type InsumoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InsumoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type InsumoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type InsumoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type InsumoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type InsumoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    unidad?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type InsumoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type InsumoScalarRelationFilter = {
    is?: Prisma.InsumoWhereInput;
    isNot?: Prisma.InsumoWhereInput;
};
export type InsumoCreateNestedOneWithoutUsosInput = {
    create?: Prisma.XOR<Prisma.InsumoCreateWithoutUsosInput, Prisma.InsumoUncheckedCreateWithoutUsosInput>;
    connectOrCreate?: Prisma.InsumoCreateOrConnectWithoutUsosInput;
    connect?: Prisma.InsumoWhereUniqueInput;
};
export type InsumoUpdateOneRequiredWithoutUsosNestedInput = {
    create?: Prisma.XOR<Prisma.InsumoCreateWithoutUsosInput, Prisma.InsumoUncheckedCreateWithoutUsosInput>;
    connectOrCreate?: Prisma.InsumoCreateOrConnectWithoutUsosInput;
    upsert?: Prisma.InsumoUpsertWithoutUsosInput;
    connect?: Prisma.InsumoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InsumoUpdateToOneWithWhereWithoutUsosInput, Prisma.InsumoUpdateWithoutUsosInput>, Prisma.InsumoUncheckedUpdateWithoutUsosInput>;
};
export type InsumoCreateNestedOneWithoutDetallesOrdenCompraInput = {
    create?: Prisma.XOR<Prisma.InsumoCreateWithoutDetallesOrdenCompraInput, Prisma.InsumoUncheckedCreateWithoutDetallesOrdenCompraInput>;
    connectOrCreate?: Prisma.InsumoCreateOrConnectWithoutDetallesOrdenCompraInput;
    connect?: Prisma.InsumoWhereUniqueInput;
};
export type InsumoUpdateOneRequiredWithoutDetallesOrdenCompraNestedInput = {
    create?: Prisma.XOR<Prisma.InsumoCreateWithoutDetallesOrdenCompraInput, Prisma.InsumoUncheckedCreateWithoutDetallesOrdenCompraInput>;
    connectOrCreate?: Prisma.InsumoCreateOrConnectWithoutDetallesOrdenCompraInput;
    upsert?: Prisma.InsumoUpsertWithoutDetallesOrdenCompraInput;
    connect?: Prisma.InsumoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.InsumoUpdateToOneWithWhereWithoutDetallesOrdenCompraInput, Prisma.InsumoUpdateWithoutDetallesOrdenCompraInput>, Prisma.InsumoUncheckedUpdateWithoutDetallesOrdenCompraInput>;
};
export type InsumoCreateWithoutUsosInput = {
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraCreateNestedManyWithoutInsumoInput;
};
export type InsumoUncheckedCreateWithoutUsosInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraUncheckedCreateNestedManyWithoutInsumoInput;
};
export type InsumoCreateOrConnectWithoutUsosInput = {
    where: Prisma.InsumoWhereUniqueInput;
    create: Prisma.XOR<Prisma.InsumoCreateWithoutUsosInput, Prisma.InsumoUncheckedCreateWithoutUsosInput>;
};
export type InsumoUpsertWithoutUsosInput = {
    update: Prisma.XOR<Prisma.InsumoUpdateWithoutUsosInput, Prisma.InsumoUncheckedUpdateWithoutUsosInput>;
    create: Prisma.XOR<Prisma.InsumoCreateWithoutUsosInput, Prisma.InsumoUncheckedCreateWithoutUsosInput>;
    where?: Prisma.InsumoWhereInput;
};
export type InsumoUpdateToOneWithWhereWithoutUsosInput = {
    where?: Prisma.InsumoWhereInput;
    data: Prisma.XOR<Prisma.InsumoUpdateWithoutUsosInput, Prisma.InsumoUncheckedUpdateWithoutUsosInput>;
};
export type InsumoUpdateWithoutUsosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraUpdateManyWithoutInsumoNestedInput;
};
export type InsumoUncheckedUpdateWithoutUsosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    detallesOrdenCompra?: Prisma.DetalleOrdenCompraUncheckedUpdateManyWithoutInsumoNestedInput;
};
export type InsumoCreateWithoutDetallesOrdenCompraInput = {
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    usos?: Prisma.InsumoUtilizadoCreateNestedManyWithoutInsumoInput;
};
export type InsumoUncheckedCreateWithoutDetallesOrdenCompraInput = {
    id?: number;
    nombre: string;
    descripcion: string;
    unidad: string;
    stock: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: boolean;
    usos?: Prisma.InsumoUtilizadoUncheckedCreateNestedManyWithoutInsumoInput;
};
export type InsumoCreateOrConnectWithoutDetallesOrdenCompraInput = {
    where: Prisma.InsumoWhereUniqueInput;
    create: Prisma.XOR<Prisma.InsumoCreateWithoutDetallesOrdenCompraInput, Prisma.InsumoUncheckedCreateWithoutDetallesOrdenCompraInput>;
};
export type InsumoUpsertWithoutDetallesOrdenCompraInput = {
    update: Prisma.XOR<Prisma.InsumoUpdateWithoutDetallesOrdenCompraInput, Prisma.InsumoUncheckedUpdateWithoutDetallesOrdenCompraInput>;
    create: Prisma.XOR<Prisma.InsumoCreateWithoutDetallesOrdenCompraInput, Prisma.InsumoUncheckedCreateWithoutDetallesOrdenCompraInput>;
    where?: Prisma.InsumoWhereInput;
};
export type InsumoUpdateToOneWithWhereWithoutDetallesOrdenCompraInput = {
    where?: Prisma.InsumoWhereInput;
    data: Prisma.XOR<Prisma.InsumoUpdateWithoutDetallesOrdenCompraInput, Prisma.InsumoUncheckedUpdateWithoutDetallesOrdenCompraInput>;
};
export type InsumoUpdateWithoutDetallesOrdenCompraInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usos?: Prisma.InsumoUtilizadoUpdateManyWithoutInsumoNestedInput;
};
export type InsumoUncheckedUpdateWithoutDetallesOrdenCompraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    unidad?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usos?: Prisma.InsumoUtilizadoUncheckedUpdateManyWithoutInsumoNestedInput;
};
export type InsumoCountOutputType = {
    usos: number;
    detallesOrdenCompra: number;
};
export type InsumoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usos?: boolean | InsumoCountOutputTypeCountUsosArgs;
    detallesOrdenCompra?: boolean | InsumoCountOutputTypeCountDetallesOrdenCompraArgs;
};
export type InsumoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoCountOutputTypeSelect<ExtArgs> | null;
};
export type InsumoCountOutputTypeCountUsosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoUtilizadoWhereInput;
};
export type InsumoCountOutputTypeCountDetallesOrdenCompraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DetalleOrdenCompraWhereInput;
};
export type InsumoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    unidad?: boolean;
    stock?: boolean;
    estado?: boolean;
    usos?: boolean | Prisma.Insumo$usosArgs<ExtArgs>;
    detallesOrdenCompra?: boolean | Prisma.Insumo$detallesOrdenCompraArgs<ExtArgs>;
    _count?: boolean | Prisma.InsumoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["insumo"]>;
export type InsumoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    unidad?: boolean;
    stock?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["insumo"]>;
export type InsumoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    unidad?: boolean;
    stock?: boolean;
    estado?: boolean;
}, ExtArgs["result"]["insumo"]>;
export type InsumoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    unidad?: boolean;
    stock?: boolean;
    estado?: boolean;
};
export type InsumoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "unidad" | "stock" | "estado", ExtArgs["result"]["insumo"]>;
export type InsumoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usos?: boolean | Prisma.Insumo$usosArgs<ExtArgs>;
    detallesOrdenCompra?: boolean | Prisma.Insumo$detallesOrdenCompraArgs<ExtArgs>;
    _count?: boolean | Prisma.InsumoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type InsumoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type InsumoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $InsumoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Insumo";
    objects: {
        usos: Prisma.$InsumoUtilizadoPayload<ExtArgs>[];
        detallesOrdenCompra: Prisma.$DetalleOrdenCompraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        descripcion: string;
        unidad: string;
        stock: runtime.Decimal;
        estado: boolean;
    }, ExtArgs["result"]["insumo"]>;
    composites: {};
};
export type InsumoGetPayload<S extends boolean | null | undefined | InsumoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InsumoPayload, S>;
export type InsumoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InsumoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InsumoCountAggregateInputType | true;
};
export interface InsumoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Insumo'];
        meta: {
            name: 'Insumo';
        };
    };
    findUnique<T extends InsumoFindUniqueArgs>(args: Prisma.SelectSubset<T, InsumoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InsumoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InsumoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InsumoFindFirstArgs>(args?: Prisma.SelectSubset<T, InsumoFindFirstArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InsumoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InsumoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InsumoFindManyArgs>(args?: Prisma.SelectSubset<T, InsumoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InsumoCreateArgs>(args: Prisma.SelectSubset<T, InsumoCreateArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InsumoCreateManyArgs>(args?: Prisma.SelectSubset<T, InsumoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InsumoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InsumoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InsumoDeleteArgs>(args: Prisma.SelectSubset<T, InsumoDeleteArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InsumoUpdateArgs>(args: Prisma.SelectSubset<T, InsumoUpdateArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InsumoDeleteManyArgs>(args?: Prisma.SelectSubset<T, InsumoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InsumoUpdateManyArgs>(args: Prisma.SelectSubset<T, InsumoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InsumoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InsumoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InsumoUpsertArgs>(args: Prisma.SelectSubset<T, InsumoUpsertArgs<ExtArgs>>): Prisma.Prisma__InsumoClient<runtime.Types.Result.GetResult<Prisma.$InsumoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InsumoCountArgs>(args?: Prisma.Subset<T, InsumoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InsumoCountAggregateOutputType> : number>;
    aggregate<T extends InsumoAggregateArgs>(args: Prisma.Subset<T, InsumoAggregateArgs>): Prisma.PrismaPromise<GetInsumoAggregateType<T>>;
    groupBy<T extends InsumoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InsumoGroupByArgs['orderBy'];
    } : {
        orderBy?: InsumoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InsumoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInsumoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InsumoFieldRefs;
}
export interface Prisma__InsumoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usos<T extends Prisma.Insumo$usosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Insumo$usosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InsumoUtilizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detallesOrdenCompra<T extends Prisma.Insumo$detallesOrdenCompraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Insumo$detallesOrdenCompraArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DetalleOrdenCompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InsumoFieldRefs {
    readonly id: Prisma.FieldRef<"Insumo", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Insumo", 'String'>;
    readonly descripcion: Prisma.FieldRef<"Insumo", 'String'>;
    readonly unidad: Prisma.FieldRef<"Insumo", 'String'>;
    readonly stock: Prisma.FieldRef<"Insumo", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"Insumo", 'Boolean'>;
}
export type InsumoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where: Prisma.InsumoWhereUniqueInput;
};
export type InsumoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where: Prisma.InsumoWhereUniqueInput;
};
export type InsumoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where?: Prisma.InsumoWhereInput;
    orderBy?: Prisma.InsumoOrderByWithRelationInput | Prisma.InsumoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InsumoScalarFieldEnum | Prisma.InsumoScalarFieldEnum[];
};
export type InsumoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where?: Prisma.InsumoWhereInput;
    orderBy?: Prisma.InsumoOrderByWithRelationInput | Prisma.InsumoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InsumoScalarFieldEnum | Prisma.InsumoScalarFieldEnum[];
};
export type InsumoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where?: Prisma.InsumoWhereInput;
    orderBy?: Prisma.InsumoOrderByWithRelationInput | Prisma.InsumoOrderByWithRelationInput[];
    cursor?: Prisma.InsumoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InsumoScalarFieldEnum | Prisma.InsumoScalarFieldEnum[];
};
export type InsumoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InsumoCreateInput, Prisma.InsumoUncheckedCreateInput>;
};
export type InsumoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InsumoCreateManyInput | Prisma.InsumoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InsumoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    data: Prisma.InsumoCreateManyInput | Prisma.InsumoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InsumoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InsumoUpdateInput, Prisma.InsumoUncheckedUpdateInput>;
    where: Prisma.InsumoWhereUniqueInput;
};
export type InsumoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InsumoUpdateManyMutationInput, Prisma.InsumoUncheckedUpdateManyInput>;
    where?: Prisma.InsumoWhereInput;
    limit?: number;
};
export type InsumoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InsumoUpdateManyMutationInput, Prisma.InsumoUncheckedUpdateManyInput>;
    where?: Prisma.InsumoWhereInput;
    limit?: number;
};
export type InsumoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where: Prisma.InsumoWhereUniqueInput;
    create: Prisma.XOR<Prisma.InsumoCreateInput, Prisma.InsumoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InsumoUpdateInput, Prisma.InsumoUncheckedUpdateInput>;
};
export type InsumoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
    where: Prisma.InsumoWhereUniqueInput;
};
export type InsumoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InsumoWhereInput;
    limit?: number;
};
export type Insumo$usosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Insumo$detallesOrdenCompraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type InsumoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InsumoSelect<ExtArgs> | null;
    omit?: Prisma.InsumoOmit<ExtArgs> | null;
    include?: Prisma.InsumoInclude<ExtArgs> | null;
};
export {};
