import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ClienteModel = runtime.Types.Result.DefaultSelection<Prisma.$ClientePayload>;
export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type ClienteAvgAggregateOutputType = {
    id: number | null;
};
export type ClienteSumAggregateOutputType = {
    id: number | null;
};
export type ClienteMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    email: string | null;
    fechaRegistro: Date | null;
};
export type ClienteMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    telefono: string | null;
    email: string | null;
    fechaRegistro: Date | null;
};
export type ClienteCountAggregateOutputType = {
    id: number;
    nombre: number;
    telefono: number;
    email: number;
    fechaRegistro: number;
    _all: number;
};
export type ClienteAvgAggregateInputType = {
    id?: true;
};
export type ClienteSumAggregateInputType = {
    id?: true;
};
export type ClienteMinAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    fechaRegistro?: true;
};
export type ClienteMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    fechaRegistro?: true;
};
export type ClienteCountAggregateInputType = {
    id?: true;
    nombre?: true;
    telefono?: true;
    email?: true;
    fechaRegistro?: true;
    _all?: true;
};
export type ClienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClienteCountAggregateInputType;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCliente[P]> : Prisma.GetScalarType<T[P], AggregateCliente[P]>;
};
export type ClienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithAggregationInput | Prisma.ClienteOrderByWithAggregationInput[];
    by: Prisma.ClienteScalarFieldEnum[] | Prisma.ClienteScalarFieldEnum;
    having?: Prisma.ClienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _avg?: ClienteAvgAggregateInputType;
    _sum?: ClienteSumAggregateInputType;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type ClienteGroupByOutputType = {
    id: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro: Date;
    _count: ClienteCountAggregateOutputType | null;
    _avg: ClienteAvgAggregateOutputType | null;
    _sum: ClienteSumAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]>;
}>>;
export type ClienteWhereInput = {
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    id?: Prisma.IntFilter<"Cliente"> | number;
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    telefono?: Prisma.StringFilter<"Cliente"> | string;
    email?: Prisma.StringFilter<"Cliente"> | string;
    fechaRegistro?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    turnos?: Prisma.TurnoListRelationFilter;
    reclamos?: Prisma.ReclamoListRelationFilter;
    presupuestos?: Prisma.PresupuestoListRelationFilter;
};
export type ClienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    turnos?: Prisma.TurnoOrderByRelationAggregateInput;
    reclamos?: Prisma.ReclamoOrderByRelationAggregateInput;
    presupuestos?: Prisma.PresupuestoOrderByRelationAggregateInput;
};
export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    OR?: Prisma.ClienteWhereInput[];
    NOT?: Prisma.ClienteWhereInput | Prisma.ClienteWhereInput[];
    nombre?: Prisma.StringFilter<"Cliente"> | string;
    telefono?: Prisma.StringFilter<"Cliente"> | string;
    email?: Prisma.StringFilter<"Cliente"> | string;
    fechaRegistro?: Prisma.DateTimeFilter<"Cliente"> | Date | string;
    turnos?: Prisma.TurnoListRelationFilter;
    reclamos?: Prisma.ReclamoListRelationFilter;
    presupuestos?: Prisma.PresupuestoListRelationFilter;
}, "id">;
export type ClienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    _count?: Prisma.ClienteCountOrderByAggregateInput;
    _avg?: Prisma.ClienteAvgOrderByAggregateInput;
    _max?: Prisma.ClienteMaxOrderByAggregateInput;
    _min?: Prisma.ClienteMinOrderByAggregateInput;
    _sum?: Prisma.ClienteSumOrderByAggregateInput;
};
export type ClienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClienteScalarWhereWithAggregatesInput | Prisma.ClienteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Cliente"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    telefono?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Cliente"> | string;
    fechaRegistro?: Prisma.DateTimeWithAggregatesFilter<"Cliente"> | Date | string;
};
export type ClienteCreateInput = {
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    turnos?: Prisma.TurnoCreateNestedManyWithoutClienteInput;
    reclamos?: Prisma.ReclamoCreateNestedManyWithoutClienteInput;
    presupuestos?: Prisma.PresupuestoCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutClienteInput;
    reclamos?: Prisma.ReclamoUncheckedCreateNestedManyWithoutClienteInput;
    presupuestos?: Prisma.PresupuestoUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUpdateManyWithoutClienteNestedInput;
    reclamos?: Prisma.ReclamoUpdateManyWithoutClienteNestedInput;
    presupuestos?: Prisma.PresupuestoUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutClienteNestedInput;
    reclamos?: Prisma.ReclamoUncheckedUpdateManyWithoutClienteNestedInput;
    presupuestos?: Prisma.PresupuestoUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateManyInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
};
export type ClienteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
};
export type ClienteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ClienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
};
export type ClienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
};
export type ClienteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ClienteScalarRelationFilter = {
    is?: Prisma.ClienteWhereInput;
    isNot?: Prisma.ClienteWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClienteCreateNestedOneWithoutTurnosInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutTurnosInput, Prisma.ClienteUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutTurnosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutTurnosNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutTurnosInput, Prisma.ClienteUncheckedCreateWithoutTurnosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutTurnosInput;
    upsert?: Prisma.ClienteUpsertWithoutTurnosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutTurnosInput, Prisma.ClienteUpdateWithoutTurnosInput>, Prisma.ClienteUncheckedUpdateWithoutTurnosInput>;
};
export type ClienteCreateNestedOneWithoutReclamosInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutReclamosInput, Prisma.ClienteUncheckedCreateWithoutReclamosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutReclamosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutReclamosNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutReclamosInput, Prisma.ClienteUncheckedCreateWithoutReclamosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutReclamosInput;
    upsert?: Prisma.ClienteUpsertWithoutReclamosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutReclamosInput, Prisma.ClienteUpdateWithoutReclamosInput>, Prisma.ClienteUncheckedUpdateWithoutReclamosInput>;
};
export type ClienteCreateNestedOneWithoutPresupuestosInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutPresupuestosInput, Prisma.ClienteUncheckedCreateWithoutPresupuestosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutPresupuestosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateOneRequiredWithoutPresupuestosNestedInput = {
    create?: Prisma.XOR<Prisma.ClienteCreateWithoutPresupuestosInput, Prisma.ClienteUncheckedCreateWithoutPresupuestosInput>;
    connectOrCreate?: Prisma.ClienteCreateOrConnectWithoutPresupuestosInput;
    upsert?: Prisma.ClienteUpsertWithoutPresupuestosInput;
    connect?: Prisma.ClienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ClienteUpdateToOneWithWhereWithoutPresupuestosInput, Prisma.ClienteUpdateWithoutPresupuestosInput>, Prisma.ClienteUncheckedUpdateWithoutPresupuestosInput>;
};
export type ClienteCreateWithoutTurnosInput = {
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    reclamos?: Prisma.ReclamoCreateNestedManyWithoutClienteInput;
    presupuestos?: Prisma.PresupuestoCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutTurnosInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    reclamos?: Prisma.ReclamoUncheckedCreateNestedManyWithoutClienteInput;
    presupuestos?: Prisma.PresupuestoUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutTurnosInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutTurnosInput, Prisma.ClienteUncheckedCreateWithoutTurnosInput>;
};
export type ClienteUpsertWithoutTurnosInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutTurnosInput, Prisma.ClienteUncheckedUpdateWithoutTurnosInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutTurnosInput, Prisma.ClienteUncheckedCreateWithoutTurnosInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutTurnosInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutTurnosInput, Prisma.ClienteUncheckedUpdateWithoutTurnosInput>;
};
export type ClienteUpdateWithoutTurnosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reclamos?: Prisma.ReclamoUpdateManyWithoutClienteNestedInput;
    presupuestos?: Prisma.PresupuestoUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutTurnosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reclamos?: Prisma.ReclamoUncheckedUpdateManyWithoutClienteNestedInput;
    presupuestos?: Prisma.PresupuestoUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutReclamosInput = {
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    turnos?: Prisma.TurnoCreateNestedManyWithoutClienteInput;
    presupuestos?: Prisma.PresupuestoCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutReclamosInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutClienteInput;
    presupuestos?: Prisma.PresupuestoUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutReclamosInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutReclamosInput, Prisma.ClienteUncheckedCreateWithoutReclamosInput>;
};
export type ClienteUpsertWithoutReclamosInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutReclamosInput, Prisma.ClienteUncheckedUpdateWithoutReclamosInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutReclamosInput, Prisma.ClienteUncheckedCreateWithoutReclamosInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutReclamosInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutReclamosInput, Prisma.ClienteUncheckedUpdateWithoutReclamosInput>;
};
export type ClienteUpdateWithoutReclamosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUpdateManyWithoutClienteNestedInput;
    presupuestos?: Prisma.PresupuestoUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutReclamosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutClienteNestedInput;
    presupuestos?: Prisma.PresupuestoUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCreateWithoutPresupuestosInput = {
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    turnos?: Prisma.TurnoCreateNestedManyWithoutClienteInput;
    reclamos?: Prisma.ReclamoCreateNestedManyWithoutClienteInput;
};
export type ClienteUncheckedCreateWithoutPresupuestosInput = {
    id?: number;
    nombre: string;
    telefono: string;
    email: string;
    fechaRegistro?: Date | string;
    turnos?: Prisma.TurnoUncheckedCreateNestedManyWithoutClienteInput;
    reclamos?: Prisma.ReclamoUncheckedCreateNestedManyWithoutClienteInput;
};
export type ClienteCreateOrConnectWithoutPresupuestosInput = {
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutPresupuestosInput, Prisma.ClienteUncheckedCreateWithoutPresupuestosInput>;
};
export type ClienteUpsertWithoutPresupuestosInput = {
    update: Prisma.XOR<Prisma.ClienteUpdateWithoutPresupuestosInput, Prisma.ClienteUncheckedUpdateWithoutPresupuestosInput>;
    create: Prisma.XOR<Prisma.ClienteCreateWithoutPresupuestosInput, Prisma.ClienteUncheckedCreateWithoutPresupuestosInput>;
    where?: Prisma.ClienteWhereInput;
};
export type ClienteUpdateToOneWithWhereWithoutPresupuestosInput = {
    where?: Prisma.ClienteWhereInput;
    data: Prisma.XOR<Prisma.ClienteUpdateWithoutPresupuestosInput, Prisma.ClienteUncheckedUpdateWithoutPresupuestosInput>;
};
export type ClienteUpdateWithoutPresupuestosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUpdateManyWithoutClienteNestedInput;
    reclamos?: Prisma.ReclamoUpdateManyWithoutClienteNestedInput;
};
export type ClienteUncheckedUpdateWithoutPresupuestosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    turnos?: Prisma.TurnoUncheckedUpdateManyWithoutClienteNestedInput;
    reclamos?: Prisma.ReclamoUncheckedUpdateManyWithoutClienteNestedInput;
};
export type ClienteCountOutputType = {
    turnos: number;
    reclamos: number;
    presupuestos: number;
};
export type ClienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turnos?: boolean | ClienteCountOutputTypeCountTurnosArgs;
    reclamos?: boolean | ClienteCountOutputTypeCountReclamosArgs;
    presupuestos?: boolean | ClienteCountOutputTypeCountPresupuestosArgs;
};
export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteCountOutputTypeSelect<ExtArgs> | null;
};
export type ClienteCountOutputTypeCountTurnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TurnoWhereInput;
};
export type ClienteCountOutputTypeCountReclamosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReclamoWhereInput;
};
export type ClienteCountOutputTypeCountPresupuestosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PresupuestoWhereInput;
};
export type ClienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    fechaRegistro?: boolean;
    turnos?: boolean | Prisma.Cliente$turnosArgs<ExtArgs>;
    reclamos?: boolean | Prisma.Cliente$reclamosArgs<ExtArgs>;
    presupuestos?: boolean | Prisma.Cliente$presupuestosArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    fechaRegistro?: boolean;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    fechaRegistro?: boolean;
}, ExtArgs["result"]["cliente"]>;
export type ClienteSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    telefono?: boolean;
    email?: boolean;
    fechaRegistro?: boolean;
};
export type ClienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "telefono" | "email" | "fechaRegistro", ExtArgs["result"]["cliente"]>;
export type ClienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    turnos?: boolean | Prisma.Cliente$turnosArgs<ExtArgs>;
    reclamos?: boolean | Prisma.Cliente$reclamosArgs<ExtArgs>;
    presupuestos?: boolean | Prisma.Cliente$presupuestosArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ClienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ClientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cliente";
    objects: {
        turnos: Prisma.$TurnoPayload<ExtArgs>[];
        reclamos: Prisma.$ReclamoPayload<ExtArgs>[];
        presupuestos: Prisma.$PresupuestoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        telefono: string;
        email: string;
        fechaRegistro: Date;
    }, ExtArgs["result"]["cliente"]>;
    composites: {};
};
export type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClientePayload, S>;
export type ClienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
};
export interface ClienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cliente'];
        meta: {
            name: 'Cliente';
        };
    };
    findUnique<T extends ClienteFindUniqueArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClienteFindFirstArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClienteFindManyArgs>(args?: Prisma.SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClienteCreateArgs>(args: Prisma.SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClienteCreateManyArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClienteDeleteArgs>(args: Prisma.SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClienteUpdateArgs>(args: Prisma.SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClienteUpdateManyArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClienteUpsertArgs>(args: Prisma.SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma.Prisma__ClienteClient<runtime.Types.Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClienteCountArgs>(args?: Prisma.Subset<T, ClienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClienteCountAggregateOutputType> : number>;
    aggregate<T extends ClienteAggregateArgs>(args: Prisma.Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>;
    groupBy<T extends ClienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClienteGroupByArgs['orderBy'];
    } : {
        orderBy?: ClienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClienteFieldRefs;
}
export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    turnos<T extends Prisma.Cliente$turnosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$turnosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TurnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reclamos<T extends Prisma.Cliente$reclamosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$reclamosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReclamoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    presupuestos<T extends Prisma.Cliente$presupuestosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Cliente$presupuestosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PresupuestoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClienteFieldRefs {
    readonly id: Prisma.FieldRef<"Cliente", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Cliente", 'String'>;
    readonly telefono: Prisma.FieldRef<"Cliente", 'String'>;
    readonly email: Prisma.FieldRef<"Cliente", 'String'>;
    readonly fechaRegistro: Prisma.FieldRef<"Cliente", 'DateTime'>;
}
export type ClienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where?: Prisma.ClienteWhereInput;
    orderBy?: Prisma.ClienteOrderByWithRelationInput | Prisma.ClienteOrderByWithRelationInput[];
    cursor?: Prisma.ClienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
export type ClienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
};
export type ClienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.ClienteCreateManyInput | Prisma.ClienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type ClienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClienteUpdateManyMutationInput, Prisma.ClienteUncheckedUpdateManyInput>;
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type ClienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClienteCreateInput, Prisma.ClienteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClienteUpdateInput, Prisma.ClienteUncheckedUpdateInput>;
};
export type ClienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
    where: Prisma.ClienteWhereUniqueInput;
};
export type ClienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClienteWhereInput;
    limit?: number;
};
export type Cliente$turnosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cliente$reclamosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Cliente$presupuestosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PresupuestoSelect<ExtArgs> | null;
    omit?: Prisma.PresupuestoOmit<ExtArgs> | null;
    include?: Prisma.PresupuestoInclude<ExtArgs> | null;
    where?: Prisma.PresupuestoWhereInput;
    orderBy?: Prisma.PresupuestoOrderByWithRelationInput | Prisma.PresupuestoOrderByWithRelationInput[];
    cursor?: Prisma.PresupuestoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PresupuestoScalarFieldEnum | Prisma.PresupuestoScalarFieldEnum[];
};
export type ClienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClienteSelect<ExtArgs> | null;
    omit?: Prisma.ClienteOmit<ExtArgs> | null;
    include?: Prisma.ClienteInclude<ExtArgs> | null;
};
export {};
