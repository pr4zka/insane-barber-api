import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type BarberoModel = runtime.Types.Result.DefaultSelection<Prisma.$BarberoPayload>;
export type AggregateBarbero = {
    _count: BarberoCountAggregateOutputType | null;
    _avg: BarberoAvgAggregateOutputType | null;
    _sum: BarberoSumAggregateOutputType | null;
    _min: BarberoMinAggregateOutputType | null;
    _max: BarberoMaxAggregateOutputType | null;
};
export type BarberoAvgAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
};
export type BarberoSumAggregateOutputType = {
    id: number | null;
    usuarioId: number | null;
};
export type BarberoMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    especialidad: string | null;
    estado: boolean | null;
    usuarioId: number | null;
};
export type BarberoMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    especialidad: string | null;
    estado: boolean | null;
    usuarioId: number | null;
};
export type BarberoCountAggregateOutputType = {
    id: number;
    nombre: number;
    telefono: number;
    especialidad: number;
    estado: number;
    usuarioId: number;
    _all: number;
};
export type BarberoAvgAggregateInputType = {
    id?: true;
    usuarioId?: true;
};
export type BarberoSumAggregateInputType = {
    id?: true;
    usuarioId?: true;
};
export type BarberoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    especialidad?: true;
    estado?: true;
    usuarioId?: true;
};
export type BarberoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    especialidad?: true;
    estado?: true;
    usuarioId?: true;
};
export type BarberoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    especialidad?: true;
    estado?: true;
    usuarioId?: true;
    _all?: true;
};
export type BarberoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    cursor?: Prisma.BarberoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BarberoCountAggregateInputType;
    _avg?: BarberoAvgAggregateInputType;
    _sum?: BarberoSumAggregateInputType;
    _min?: BarberoMinAggregateInputType;
    _max?: BarberoMaxAggregateInputType;
};
export type GetBarberoAggregateType<T extends BarberoAggregateArgs> = {
    [P in keyof T & keyof AggregateBarbero]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBarbero[P]> : Prisma.GetScalarType<T[P], AggregateBarbero[P]>;
};
export type BarberoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithAggregationInput | Prisma.BarberoOrderByWithAggregationInput[];
    by: Prisma.BarberoScalarFieldEnum[] | Prisma.BarberoScalarFieldEnum;
    having?: Prisma.BarberoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BarberoCountAggregateInputType | true;
    _avg?: BarberoAvgAggregateInputType;
    _sum?: BarberoSumAggregateInputType;
    _min?: BarberoMinAggregateInputType;
    _max?: BarberoMaxAggregateInputType;
};
export type BarberoGroupByOutputType = {
    id: number;
    nombre: string;
    telefono: string;
    especialidad: string;
    estado: boolean;
    usuarioId: number | null;
    _count: BarberoCountAggregateOutputType | null;
    _avg: BarberoAvgAggregateOutputType | null;
    _sum: BarberoSumAggregateOutputType | null;
    _min: BarberoMinAggregateOutputType | null;
    _max: BarberoMaxAggregateOutputType | null;
};
type GetBarberoGroupByPayload<T extends BarberoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BarberoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BarberoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BarberoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BarberoGroupByOutputType[P]>;
}>>;
export type BarberoWhereInput = {
    AND?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    OR?: Prisma.BarberoWhereInput[];
    NOT?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    id?: Prisma.IntFilter<"Barbero"> | number;
    nombre?: Prisma.StringFilter<"Barbero"> | string;
    telefono?: Prisma.StringFilter<"Barbero"> | string;
    especialidad?: Prisma.StringFilter<"Barbero"> | string;
    estado?: Prisma.BoolFilter<"Barbero"> | boolean;
    usuarioId?: Prisma.IntNullableFilter<"Barbero"> | number | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
    turnos?: Prisma.TurnoListRelationFilter;
};
export type BarberoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario?: Prisma.UsuarioOrderByWithRelationInput;
    turnos?: Prisma.TurnoOrderByRelationAggregateInput;
};
export type BarberoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    usuarioId?: number;
    AND?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    OR?: Prisma.BarberoWhereInput[];
    NOT?: Prisma.BarberoWhereInput | Prisma.BarberoWhereInput[];
    nombre?: Prisma.StringFilter<"Barbero"> | string;
    telefono?: Prisma.StringFilter<"Barbero"> | string;
    especialidad?: Prisma.StringFilter<"Barbero"> | string;
    estado?: Prisma.BoolFilter<"Barbero"> | boolean;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.UsuarioWhereInput> | null;
    turnos?: Prisma.TurnoListRelationFilter;
}, "id" | "usuarioId">;
export type BarberoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BarberoCountOrderByAggregateInput;
    _avg?: Prisma.BarberoAvgOrderByAggregateInput;
    _max?: Prisma.BarberoMaxOrderByAggregateInput;
    _min?: Prisma.BarberoMinOrderByAggregateInput;
    _sum?: Prisma.BarberoSumOrderByAggregateInput;
};
export type BarberoScalarWhereWithAggregatesInput = {
    AND?: Prisma.BarberoScalarWhereWithAggregatesInput | Prisma.BarberoScalarWhereWithAggregatesInput[];
    OR?: Prisma.BarberoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BarberoScalarWhereWithAggregatesInput | Prisma.BarberoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Barbero"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    especialidad?: Prisma.StringWithAggregatesFilter<"Barbero"> | string;
    estado?: Prisma.BoolWithAggregatesFilter<"Barbero"> | boolean;
    usuarioId?: Prisma.IntNullableWithAggregatesFilter<"Barbero"> | number | null;
};
export type BarberoCreateInput = {
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    usuario?: Prisma.UsuarioCreateNestedOneWithoutBarberoInput;
    turnos?: Prisma.TurnoCreateNestedManyWithoutBarberoInput;
};
export type BarberoUncheckedCreateInput = {
    id?: number;
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    usuarioId?: number | null;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutBarberoInput;
};
export type BarberoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usuario?: Prisma.UsuarioUpdateOneWithoutBarberoNestedInput;
    turnos?: Prisma.TurnoUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutBarberoNestedInput;
};
export type BarberoCreateManyInput = {
    id?: number;
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    usuarioId?: number | null;
};
export type BarberoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BarberoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BarberoNullableScalarRelationFilter = {
    is?: Prisma.BarberoWhereInput | null;
    isNot?: Prisma.BarberoWhereInput | null;
};
export type BarberoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type BarberoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type BarberoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type BarberoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    especialidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type BarberoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuarioId?: Prisma.SortOrder;
};
export type BarberoScalarRelationFilter = {
    is?: Prisma.BarberoWhereInput;
    isNot?: Prisma.BarberoWhereInput;
};
export type BarberoCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutUsuarioInput, Prisma.BarberoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.BarberoWhereUniqueInput;
};
export type BarberoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutUsuarioInput, Prisma.BarberoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.BarberoWhereUniqueInput;
};
export type BarberoUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutUsuarioInput, Prisma.BarberoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.BarberoUpsertWithoutUsuarioInput;
    disconnect?: Prisma.BarberoWhereInput | boolean;
    delete?: Prisma.BarberoWhereInput | boolean;
    connect?: Prisma.BarberoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BarberoUpdateToOneWithWhereWithoutUsuarioInput, Prisma.BarberoUpdateWithoutUsuarioInput>, Prisma.BarberoUncheckedUpdateWithoutUsuarioInput>;
};
export type BarberoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutUsuarioInput, Prisma.BarberoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.BarberoUpsertWithoutUsuarioInput;
    disconnect?: Prisma.BarberoWhereInput | boolean;
    delete?: Prisma.BarberoWhereInput | boolean;
    connect?: Prisma.BarberoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BarberoUpdateToOneWithWhereWithoutUsuarioInput, Prisma.BarberoUpdateWithoutUsuarioInput>, Prisma.BarberoUncheckedUpdateWithoutUsuarioInput>;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BarberoCreateNestedOneWithoutTurnosInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutTurnosInput, Prisma.BarberoUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutTurnosInput;
    connect?: Prisma.BarberoWhereUniqueInput;
};
export type BarberoUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: Prisma.XOR<Prisma.BarberoCreateWithoutTurnosInput, Prisma.BarberoUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.BarberoCreateOrConnectWithoutTurnosInput;
    upsert?: Prisma.BarberoUpsertWithoutTurnosInput;
    connect?: Prisma.BarberoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BarberoUpdateToOneWithWhereWithoutTurnosInput, Prisma.BarberoUpdateWithoutTurnosInput>, Prisma.BarberoUncheckedUpdateWithoutTurnosInput>;
};
export type BarberoCreateWithoutUsuarioInput = {
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    turnos?: Prisma.TurnoCreateNestedManyWithoutBarberoInput;
};
export type BarberoUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutBarberoInput;
};
export type BarberoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.BarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutUsuarioInput, Prisma.BarberoUncheckedCreateWithoutUsuarioInput>;
};
export type BarberoUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.BarberoUpdateWithoutUsuarioInput, Prisma.BarberoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutUsuarioInput, Prisma.BarberoUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.BarberoWhereInput;
};
export type BarberoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.BarberoWhereInput;
    data: Prisma.XOR<Prisma.BarberoUpdateWithoutUsuarioInput, Prisma.BarberoUncheckedUpdateWithoutUsuarioInput>;
};
export type BarberoUpdateWithoutUsuarioInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    turnos?: Prisma.TurnoUpdateManyWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutBarberoNestedInput;
};
export type BarberoCreateWithoutTurnosInput = {
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    usuario?: Prisma.UsuarioCreateNestedOneWithoutBarberoInput;
};
export type BarberoUncheckedCreateWithoutTurnosInput = {
    id?: number;
    nombre: string;
    telefono: string;
    especialidad: string;
    estado?: boolean;
    usuarioId?: number | null;
};
export type BarberoCreateOrConnectWithoutTurnosInput = {
    where: Prisma.BarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutTurnosInput, Prisma.BarberoUncheckedCreateWithoutTurnosInput>;
};
export type BarberoUpsertWithoutTurnosInput = {
    update: Prisma.XOR<Prisma.BarberoUpdateWithoutTurnosInput, Prisma.BarberoUncheckedUpdateWithoutTurnosInput>;
    create: Prisma.XOR<Prisma.BarberoCreateWithoutTurnosInput, Prisma.BarberoUncheckedCreateWithoutTurnosInput>;
    where?: Prisma.BarberoWhereInput;
};
export type BarberoUpdateToOneWithWhereWithoutTurnosInput = {
    where?: Prisma.BarberoWhereInput;
    data: Prisma.XOR<Prisma.BarberoUpdateWithoutTurnosInput, Prisma.BarberoUncheckedUpdateWithoutTurnosInput>;
};
export type BarberoUpdateWithoutTurnosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usuario?: Prisma.UsuarioUpdateOneWithoutBarberoNestedInput;
};
export type BarberoUncheckedUpdateWithoutTurnosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    especialidad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usuarioId?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type BarberoCountOutputType = {
    turnos: number;
};
export type BarberoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turnos?: boolean | BarberoCountOutputTypeCountTurnosArgs;
};
export type BarberoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoCountOutputTypeSelect<ExtArgs> | null;
};
export type BarberoCountOutputTypeCountTurnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
};
export type BarberoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    especialidad?: boolean;
    estado?: boolean;
    usuarioId?: boolean;
    usuario?: boolean | Prisma.Barbero$usuarioArgs<ExtArgs>;
    turnos?: boolean | Prisma.Barbero$turnosArgs<ExtArgs>;
    _count?: boolean | Prisma.BarberoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["barbero"]>;
export type BarberoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    especialidad?: boolean;
    estado?: boolean;
    usuarioId?: boolean;
    usuario?: boolean | Prisma.Barbero$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["barbero"]>;
export type BarberoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    especialidad?: boolean;
    estado?: boolean;
    usuarioId?: boolean;
    usuario?: boolean | Prisma.Barbero$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["barbero"]>;
export type BarberoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    especialidad?: boolean;
    estado?: boolean;
    usuarioId?: boolean;
};
export type BarberoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "telefono" | "especialidad" | "estado" | "usuarioId", ExtArgs["result"]["barbero"]>;
export type BarberoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.Barbero$usuarioArgs<ExtArgs>;
    turnos?: boolean | Prisma.Barbero$turnosArgs<ExtArgs>;
    _count?: boolean | Prisma.BarberoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BarberoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.Barbero$usuarioArgs<ExtArgs>;
};
export type BarberoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.Barbero$usuarioArgs<ExtArgs>;
};
export type $BarberoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Barbero";
    objects: {
        usuario: Prisma.$UsuarioPayload<ExtArgs> | null;
        turnos: Prisma.$TurnoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        telefono: string;
        especialidad: string;
        estado: boolean;
        usuarioId: number | null;
    }, ExtArgs["result"]["barbero"]>;
    composites: {};
};
export type BarberoGetPayload<S extends boolean | null | undefined | BarberoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BarberoPayload, S>;
export type BarberoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BarberoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BarberoCountAggregateInputType | true;
};
export interface BarberoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Barbero'];
        meta: {
            name: 'Barbero';
        };
    };
    findUnique<T extends BarberoFindUniqueArgs>(args: Prisma.SelectSubset<T, BarberoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BarberoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BarberoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BarberoFindFirstArgs>(args?: Prisma.SelectSubset<T, BarberoFindFirstArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BarberoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BarberoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BarberoFindManyArgs>(args?: Prisma.SelectSubset<T, BarberoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BarberoCreateArgs>(args: Prisma.SelectSubset<T, BarberoCreateArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BarberoCreateManyArgs>(args?: Prisma.SelectSubset<T, BarberoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BarberoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BarberoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BarberoDeleteArgs>(args: Prisma.SelectSubset<T, BarberoDeleteArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BarberoUpdateArgs>(args: Prisma.SelectSubset<T, BarberoUpdateArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BarberoDeleteManyArgs>(args?: Prisma.SelectSubset<T, BarberoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BarberoUpdateManyArgs>(args: Prisma.SelectSubset<T, BarberoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BarberoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BarberoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BarberoUpsertArgs>(args: Prisma.SelectSubset<T, BarberoUpsertArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BarberoCountArgs>(args?: Prisma.Subset<T, BarberoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BarberoCountAggregateOutputType> : number>;
    aggregate<T extends BarberoAggregateArgs>(args: Prisma.Subset<T, BarberoAggregateArgs>): Prisma.PrismaPromise<GetBarberoAggregateType<T>>;
    groupBy<T extends BarberoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BarberoGroupByArgs['orderBy'];
    } : {
        orderBy?: BarberoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BarberoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarberoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BarberoFieldRefs;
}
export interface Prisma__BarberoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.Barbero$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Barbero$usuarioArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    turnos<T extends Prisma.Barbero$turnosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Barbero$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BarberoFieldRefs {
    readonly id: Prisma.FieldRef<"Barbero", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Barbero", 'String'>;
    readonly telefono: Prisma.FieldRef<"Barbero", 'String'>;
    readonly especialidad: Prisma.FieldRef<"Barbero", 'String'>;
    readonly estado: Prisma.FieldRef<"Barbero", 'Boolean'>;
    readonly usuarioId: Prisma.FieldRef<"Barbero", 'Int'>;
}
export type BarberoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where: Prisma.BarberoWhereUniqueInput;
};
export type BarberoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where: Prisma.BarberoWhereUniqueInput;
};
export type BarberoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    cursor?: Prisma.BarberoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
export type BarberoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    cursor?: Prisma.BarberoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
export type BarberoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where?: Prisma.BarberoWhereInput;
    orderBy?: Prisma.BarberoOrderByWithRelationInput | Prisma.BarberoOrderByWithRelationInput[];
    cursor?: Prisma.BarberoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BarberoScalarFieldEnum | Prisma.BarberoScalarFieldEnum[];
};
export type BarberoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BarberoCreateInput, Prisma.BarberoUncheckedCreateInput>;
};
export type BarberoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BarberoCreateManyInput | Prisma.BarberoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BarberoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    data: Prisma.BarberoCreateManyInput | Prisma.BarberoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BarberoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BarberoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BarberoUpdateInput, Prisma.BarberoUncheckedUpdateInput>;
    where: Prisma.BarberoWhereUniqueInput;
};
export type BarberoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BarberoUpdateManyMutationInput, Prisma.BarberoUncheckedUpdateManyInput>;
    where?: Prisma.BarberoWhereInput;
    limit?: number;
};
export type BarberoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BarberoUpdateManyMutationInput, Prisma.BarberoUncheckedUpdateManyInput>;
    where?: Prisma.BarberoWhereInput;
    limit?: number;
    include?: Prisma.BarberoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BarberoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where: Prisma.BarberoWhereUniqueInput;
    create: Prisma.XOR<Prisma.BarberoCreateInput, Prisma.BarberoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BarberoUpdateInput, Prisma.BarberoUncheckedUpdateInput>;
};
export type BarberoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where: Prisma.BarberoWhereUniqueInput;
};
export type BarberoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BarberoWhereInput;
    limit?: number;
};
export type Barbero$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
};
export type Barbero$turnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BarberoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
};
export {};
