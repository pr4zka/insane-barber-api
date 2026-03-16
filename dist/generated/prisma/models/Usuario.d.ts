import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UsuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$UsuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
    rolId: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
    rolId: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    email: string | null;
    password: string | null;
    rolId: number | null;
    estado: boolean | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    email: string | null;
    password: string | null;
    rolId: number | null;
    estado: boolean | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nombre: number;
    email: number;
    password: number;
    rolId: number;
    estado: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
    rolId?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
    rolId?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    email?: true;
    password?: true;
    rolId?: true;
    estado?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    email?: true;
    password?: true;
    rolId?: true;
    estado?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    email?: true;
    password?: true;
    rolId?: true;
    estado?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type UsuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithAggregationInput | Prisma.UsuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.UsuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nombre: string;
    email: string;
    password: string;
    rolId: number;
    estado: boolean;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type UsuarioWhereInput = {
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    email?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rolId?: Prisma.IntFilter<"Usuario"> | number;
    estado?: Prisma.BoolFilter<"Usuario"> | boolean;
    rol?: Prisma.XOR<Prisma.RolScalarRelationFilter, Prisma.RolWhereInput>;
    cajas?: Prisma.CajaListRelationFilter;
    barbero?: Prisma.XOR<Prisma.BarberoNullableScalarRelationFilter, Prisma.BarberoWhereInput> | null;
};
export type UsuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    rol?: Prisma.RolOrderByWithRelationInput;
    cajas?: Prisma.CajaOrderByRelationAggregateInput;
    barbero?: Prisma.BarberoOrderByWithRelationInput;
};
export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    OR?: Prisma.UsuarioWhereInput[];
    NOT?: Prisma.UsuarioWhereInput | Prisma.UsuarioWhereInput[];
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rolId?: Prisma.IntFilter<"Usuario"> | number;
    estado?: Prisma.BoolFilter<"Usuario"> | boolean;
    rol?: Prisma.XOR<Prisma.RolScalarRelationFilter, Prisma.RolWhereInput>;
    cajas?: Prisma.CajaListRelationFilter;
    barbero?: Prisma.XOR<Prisma.BarberoNullableScalarRelationFilter, Prisma.BarberoWhereInput> | null;
}, "id" | "email">;
export type UsuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.UsuarioCountOrderByAggregateInput;
    _avg?: Prisma.UsuarioAvgOrderByAggregateInput;
    _max?: Prisma.UsuarioMaxOrderByAggregateInput;
    _min?: Prisma.UsuarioMinOrderByAggregateInput;
    _sum?: Prisma.UsuarioSumOrderByAggregateInput;
};
export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.UsuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UsuarioScalarWhereWithAggregatesInput | Prisma.UsuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    password?: Prisma.StringWithAggregatesFilter<"Usuario"> | string;
    rolId?: Prisma.IntWithAggregatesFilter<"Usuario"> | number;
    estado?: Prisma.BoolWithAggregatesFilter<"Usuario"> | boolean;
};
export type UsuarioCreateInput = {
    nombre: string;
    email: string;
    password: string;
    estado?: boolean;
    rol: Prisma.RolCreateNestedOneWithoutUsuariosInput;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
    barbero?: Prisma.BarberoCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rolId: number;
    estado?: boolean;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
    barbero?: Prisma.BarberoUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rol?: Prisma.RolUpdateOneRequiredWithoutUsuariosNestedInput;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
    barbero?: Prisma.BarberoUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rolId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
    barbero?: Prisma.BarberoUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rolId: number;
    estado?: boolean;
};
export type UsuarioUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UsuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rolId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UsuarioListRelationFilter = {
    every?: Prisma.UsuarioWhereInput;
    some?: Prisma.UsuarioWhereInput;
    none?: Prisma.UsuarioWhereInput;
};
export type UsuarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type UsuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type UsuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
};
export type UsuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type UsuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type UsuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    rolId?: Prisma.SortOrder;
};
export type UsuarioNullableScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput | null;
    isNot?: Prisma.UsuarioWhereInput | null;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.UsuarioWhereInput;
    isNot?: Prisma.UsuarioWhereInput;
};
export type UsuarioCreateNestedManyWithoutRolInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutRolInput, Prisma.UsuarioUncheckedCreateWithoutRolInput> | Prisma.UsuarioCreateWithoutRolInput[] | Prisma.UsuarioUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutRolInput | Prisma.UsuarioCreateOrConnectWithoutRolInput[];
    createMany?: Prisma.UsuarioCreateManyRolInputEnvelope;
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
};
export type UsuarioUncheckedCreateNestedManyWithoutRolInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutRolInput, Prisma.UsuarioUncheckedCreateWithoutRolInput> | Prisma.UsuarioCreateWithoutRolInput[] | Prisma.UsuarioUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutRolInput | Prisma.UsuarioCreateOrConnectWithoutRolInput[];
    createMany?: Prisma.UsuarioCreateManyRolInputEnvelope;
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
};
export type UsuarioUpdateManyWithoutRolNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutRolInput, Prisma.UsuarioUncheckedCreateWithoutRolInput> | Prisma.UsuarioCreateWithoutRolInput[] | Prisma.UsuarioUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutRolInput | Prisma.UsuarioCreateOrConnectWithoutRolInput[];
    upsert?: Prisma.UsuarioUpsertWithWhereUniqueWithoutRolInput | Prisma.UsuarioUpsertWithWhereUniqueWithoutRolInput[];
    createMany?: Prisma.UsuarioCreateManyRolInputEnvelope;
    set?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    disconnect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    delete?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    update?: Prisma.UsuarioUpdateWithWhereUniqueWithoutRolInput | Prisma.UsuarioUpdateWithWhereUniqueWithoutRolInput[];
    updateMany?: Prisma.UsuarioUpdateManyWithWhereWithoutRolInput | Prisma.UsuarioUpdateManyWithWhereWithoutRolInput[];
    deleteMany?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
};
export type UsuarioUncheckedUpdateManyWithoutRolNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutRolInput, Prisma.UsuarioUncheckedCreateWithoutRolInput> | Prisma.UsuarioCreateWithoutRolInput[] | Prisma.UsuarioUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutRolInput | Prisma.UsuarioCreateOrConnectWithoutRolInput[];
    upsert?: Prisma.UsuarioUpsertWithWhereUniqueWithoutRolInput | Prisma.UsuarioUpsertWithWhereUniqueWithoutRolInput[];
    createMany?: Prisma.UsuarioCreateManyRolInputEnvelope;
    set?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    disconnect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    delete?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    connect?: Prisma.UsuarioWhereUniqueInput | Prisma.UsuarioWhereUniqueInput[];
    update?: Prisma.UsuarioUpdateWithWhereUniqueWithoutRolInput | Prisma.UsuarioUpdateWithWhereUniqueWithoutRolInput[];
    updateMany?: Prisma.UsuarioUpdateManyWithWhereWithoutRolInput | Prisma.UsuarioUpdateManyWithWhereWithoutRolInput[];
    deleteMany?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type UsuarioCreateNestedOneWithoutBarberoInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutBarberoInput, Prisma.UsuarioUncheckedCreateWithoutBarberoInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutBarberoInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneWithoutBarberoNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutBarberoInput, Prisma.UsuarioUncheckedCreateWithoutBarberoInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutBarberoInput;
    upsert?: Prisma.UsuarioUpsertWithoutBarberoInput;
    disconnect?: Prisma.UsuarioWhereInput | boolean;
    delete?: Prisma.UsuarioWhereInput | boolean;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutBarberoInput, Prisma.UsuarioUpdateWithoutBarberoInput>, Prisma.UsuarioUncheckedUpdateWithoutBarberoInput>;
};
export type UsuarioCreateNestedOneWithoutCajasInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutCajasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateOneRequiredWithoutCajasNestedInput = {
    create?: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
    connectOrCreate?: Prisma.UsuarioCreateOrConnectWithoutCajasInput;
    upsert?: Prisma.UsuarioUpsertWithoutCajasInput;
    connect?: Prisma.UsuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UsuarioUpdateToOneWithWhereWithoutCajasInput, Prisma.UsuarioUpdateWithoutCajasInput>, Prisma.UsuarioUncheckedUpdateWithoutCajasInput>;
};
export type UsuarioCreateWithoutRolInput = {
    nombre: string;
    email: string;
    password: string;
    estado?: boolean;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
    barbero?: Prisma.BarberoCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    estado?: boolean;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
    barbero?: Prisma.BarberoUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutRolInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutRolInput, Prisma.UsuarioUncheckedCreateWithoutRolInput>;
};
export type UsuarioCreateManyRolInputEnvelope = {
    data: Prisma.UsuarioCreateManyRolInput | Prisma.UsuarioCreateManyRolInput[];
    skipDuplicates?: boolean;
};
export type UsuarioUpsertWithWhereUniqueWithoutRolInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutRolInput, Prisma.UsuarioUncheckedUpdateWithoutRolInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutRolInput, Prisma.UsuarioUncheckedCreateWithoutRolInput>;
};
export type UsuarioUpdateWithWhereUniqueWithoutRolInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutRolInput, Prisma.UsuarioUncheckedUpdateWithoutRolInput>;
};
export type UsuarioUpdateManyWithWhereWithoutRolInput = {
    where: Prisma.UsuarioScalarWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyWithoutRolInput>;
};
export type UsuarioScalarWhereInput = {
    AND?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
    OR?: Prisma.UsuarioScalarWhereInput[];
    NOT?: Prisma.UsuarioScalarWhereInput | Prisma.UsuarioScalarWhereInput[];
    id?: Prisma.IntFilter<"Usuario"> | number;
    nombre?: Prisma.StringFilter<"Usuario"> | string;
    email?: Prisma.StringFilter<"Usuario"> | string;
    password?: Prisma.StringFilter<"Usuario"> | string;
    rolId?: Prisma.IntFilter<"Usuario"> | number;
    estado?: Prisma.BoolFilter<"Usuario"> | boolean;
};
export type UsuarioCreateWithoutBarberoInput = {
    nombre: string;
    email: string;
    password: string;
    estado?: boolean;
    rol: Prisma.RolCreateNestedOneWithoutUsuariosInput;
    cajas?: Prisma.CajaCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutBarberoInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rolId: number;
    estado?: boolean;
    cajas?: Prisma.CajaUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutBarberoInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutBarberoInput, Prisma.UsuarioUncheckedCreateWithoutBarberoInput>;
};
export type UsuarioUpsertWithoutBarberoInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutBarberoInput, Prisma.UsuarioUncheckedUpdateWithoutBarberoInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutBarberoInput, Prisma.UsuarioUncheckedCreateWithoutBarberoInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutBarberoInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutBarberoInput, Prisma.UsuarioUncheckedUpdateWithoutBarberoInput>;
};
export type UsuarioUpdateWithoutBarberoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rol?: Prisma.RolUpdateOneRequiredWithoutUsuariosNestedInput;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutBarberoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rolId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type UsuarioCreateWithoutCajasInput = {
    nombre: string;
    email: string;
    password: string;
    estado?: boolean;
    rol: Prisma.RolCreateNestedOneWithoutUsuariosInput;
    barbero?: Prisma.BarberoCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioUncheckedCreateWithoutCajasInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    rolId: number;
    estado?: boolean;
    barbero?: Prisma.BarberoUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type UsuarioCreateOrConnectWithoutCajasInput = {
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
};
export type UsuarioUpsertWithoutCajasInput = {
    update: Prisma.XOR<Prisma.UsuarioUpdateWithoutCajasInput, Prisma.UsuarioUncheckedUpdateWithoutCajasInput>;
    create: Prisma.XOR<Prisma.UsuarioCreateWithoutCajasInput, Prisma.UsuarioUncheckedCreateWithoutCajasInput>;
    where?: Prisma.UsuarioWhereInput;
};
export type UsuarioUpdateToOneWithWhereWithoutCajasInput = {
    where?: Prisma.UsuarioWhereInput;
    data: Prisma.XOR<Prisma.UsuarioUpdateWithoutCajasInput, Prisma.UsuarioUncheckedUpdateWithoutCajasInput>;
};
export type UsuarioUpdateWithoutCajasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rol?: Prisma.RolUpdateOneRequiredWithoutUsuariosNestedInput;
    barbero?: Prisma.BarberoUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutCajasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    rolId?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    barbero?: Prisma.BarberoUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioCreateManyRolInput = {
    id?: number;
    nombre: string;
    email: string;
    password: string;
    estado?: boolean;
};
export type UsuarioUpdateWithoutRolInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cajas?: Prisma.CajaUpdateManyWithoutUsuarioNestedInput;
    barbero?: Prisma.BarberoUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cajas?: Prisma.CajaUncheckedUpdateManyWithoutUsuarioNestedInput;
    barbero?: Prisma.BarberoUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioUncheckedUpdateManyWithoutRolInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type UsuarioCountOutputType = {
    cajas: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cajas?: boolean | UsuarioCountOutputTypeCountCajasArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountCajasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CajaWhereInput;
};
export type UsuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rolId?: boolean;
    estado?: boolean;
    rol?: boolean | Prisma.RolDefaultArgs<ExtArgs>;
    cajas?: boolean | Prisma.Usuario$cajasArgs<ExtArgs>;
    barbero?: boolean | Prisma.Usuario$barberoArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rolId?: boolean;
    estado?: boolean;
    rol?: boolean | Prisma.RolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rolId?: boolean;
    estado?: boolean;
    rol?: boolean | Prisma.RolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type UsuarioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    email?: boolean;
    password?: boolean;
    rolId?: boolean;
    estado?: boolean;
};
export type UsuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "email" | "password" | "rolId" | "estado", ExtArgs["result"]["usuario"]>;
export type UsuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rol?: boolean | Prisma.RolDefaultArgs<ExtArgs>;
    cajas?: boolean | Prisma.Usuario$cajasArgs<ExtArgs>;
    barbero?: boolean | Prisma.Usuario$barberoArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rol?: boolean | Prisma.RolDefaultArgs<ExtArgs>;
};
export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rol?: boolean | Prisma.RolDefaultArgs<ExtArgs>;
};
export type $UsuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Usuario";
    objects: {
        rol: Prisma.$RolPayload<ExtArgs>;
        cajas: Prisma.$CajaPayload<ExtArgs>[];
        barbero: Prisma.$BarberoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        email: string;
        password: string;
        rolId: number;
        estado: boolean;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UsuarioPayload, S>;
export type UsuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface UsuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Usuario'];
        meta: {
            name: 'Usuario';
        };
    };
    findUnique<T extends UsuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UsuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UsuarioFindManyArgs>(args?: Prisma.SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UsuarioCreateArgs>(args: Prisma.SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UsuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UsuarioDeleteArgs>(args: Prisma.SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UsuarioUpdateArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UsuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UsuarioUpsertArgs>(args: Prisma.SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__UsuarioClient<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UsuarioCountArgs>(args?: Prisma.Subset<T, UsuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends UsuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UsuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: UsuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UsuarioFieldRefs;
}
export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    rol<T extends Prisma.RolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RolDefaultArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cajas<T extends Prisma.Usuario$cajasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$cajasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CajaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    barbero<T extends Prisma.Usuario$barberoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Usuario$barberoArgs<ExtArgs>>): Prisma.Prisma__BarberoClient<runtime.Types.Result.GetResult<Prisma.$BarberoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UsuarioFieldRefs {
    readonly id: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Usuario", 'String'>;
    readonly email: Prisma.FieldRef<"Usuario", 'String'>;
    readonly password: Prisma.FieldRef<"Usuario", 'String'>;
    readonly rolId: Prisma.FieldRef<"Usuario", 'Int'>;
    readonly estado: Prisma.FieldRef<"Usuario", 'Boolean'>;
}
export type UsuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where?: Prisma.UsuarioWhereInput;
    orderBy?: Prisma.UsuarioOrderByWithRelationInput | Prisma.UsuarioOrderByWithRelationInput[];
    cursor?: Prisma.UsuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type UsuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
};
export type UsuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UsuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.UsuarioCreateManyInput | Prisma.UsuarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.UsuarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type UsuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UsuarioUpdateManyMutationInput, Prisma.UsuarioUncheckedUpdateManyInput>;
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
    include?: Prisma.UsuarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type UsuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.UsuarioCreateInput, Prisma.UsuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UsuarioUpdateInput, Prisma.UsuarioUncheckedUpdateInput>;
};
export type UsuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
    where: Prisma.UsuarioWhereUniqueInput;
};
export type UsuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
    limit?: number;
};
export type Usuario$cajasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CajaSelect<ExtArgs> | null;
    omit?: Prisma.CajaOmit<ExtArgs> | null;
    include?: Prisma.CajaInclude<ExtArgs> | null;
    where?: Prisma.CajaWhereInput;
    orderBy?: Prisma.CajaOrderByWithRelationInput | Prisma.CajaOrderByWithRelationInput[];
    cursor?: Prisma.CajaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CajaScalarFieldEnum | Prisma.CajaScalarFieldEnum[];
};
export type Usuario$barberoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BarberoSelect<ExtArgs> | null;
    omit?: Prisma.BarberoOmit<ExtArgs> | null;
    include?: Prisma.BarberoInclude<ExtArgs> | null;
    where?: Prisma.BarberoWhereInput;
};
export type UsuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioSelect<ExtArgs> | null;
    omit?: Prisma.UsuarioOmit<ExtArgs> | null;
    include?: Prisma.UsuarioInclude<ExtArgs> | null;
};
export {};
