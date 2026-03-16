import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type RolModel = runtime.Types.Result.DefaultSelection<Prisma.$RolPayload>;
export type AggregateRol = {
    _count: RolCountAggregateOutputType | null;
    _avg: RolAvgAggregateOutputType | null;
    _sum: RolSumAggregateOutputType | null;
    _min: RolMinAggregateOutputType | null;
    _max: RolMaxAggregateOutputType | null;
};
export type RolAvgAggregateOutputType = {
    id: number | null;
};
export type RolSumAggregateOutputType = {
    id: number | null;
};
export type RolMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
};
export type RolMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
};
export type RolCountAggregateOutputType = {
    id: number;
    nombre: number;
    _all: number;
};
export type RolAvgAggregateInputType = {
    id?: true;
};
export type RolSumAggregateInputType = {
    id?: true;
};
export type RolMinAggregateInputType = {
    id?: true;
    nombre?: true;
};
export type RolMaxAggregateInputType = {
    id?: true;
    nombre?: true;
};
export type RolCountAggregateInputType = {
    id?: true;
    nombre?: true;
    _all?: true;
};
export type RolAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolWhereInput;
    orderBy?: Prisma.RolOrderByWithRelationInput | Prisma.RolOrderByWithRelationInput[];
    cursor?: Prisma.RolWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RolCountAggregateInputType;
    _avg?: RolAvgAggregateInputType;
    _sum?: RolSumAggregateInputType;
    _min?: RolMinAggregateInputType;
    _max?: RolMaxAggregateInputType;
};
export type GetRolAggregateType<T extends RolAggregateArgs> = {
    [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRol[P]> : Prisma.GetScalarType<T[P], AggregateRol[P]>;
};
export type RolGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolWhereInput;
    orderBy?: Prisma.RolOrderByWithAggregationInput | Prisma.RolOrderByWithAggregationInput[];
    by: Prisma.RolScalarFieldEnum[] | Prisma.RolScalarFieldEnum;
    having?: Prisma.RolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolCountAggregateInputType | true;
    _avg?: RolAvgAggregateInputType;
    _sum?: RolSumAggregateInputType;
    _min?: RolMinAggregateInputType;
    _max?: RolMaxAggregateInputType;
};
export type RolGroupByOutputType = {
    id: number;
    nombre: string;
    _count: RolCountAggregateOutputType | null;
    _avg: RolAvgAggregateOutputType | null;
    _sum: RolSumAggregateOutputType | null;
    _min: RolMinAggregateOutputType | null;
    _max: RolMaxAggregateOutputType | null;
};
type GetRolGroupByPayload<T extends RolGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolGroupByOutputType[P]>;
}>>;
export type RolWhereInput = {
    AND?: Prisma.RolWhereInput | Prisma.RolWhereInput[];
    OR?: Prisma.RolWhereInput[];
    NOT?: Prisma.RolWhereInput | Prisma.RolWhereInput[];
    id?: Prisma.IntFilter<"Rol"> | number;
    nombre?: Prisma.StringFilter<"Rol"> | string;
    usuarios?: Prisma.UsuarioListRelationFilter;
};
export type RolOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    usuarios?: Prisma.UsuarioOrderByRelationAggregateInput;
};
export type RolWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.RolWhereInput | Prisma.RolWhereInput[];
    OR?: Prisma.RolWhereInput[];
    NOT?: Prisma.RolWhereInput | Prisma.RolWhereInput[];
    usuarios?: Prisma.UsuarioListRelationFilter;
}, "id" | "nombre">;
export type RolOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    _count?: Prisma.RolCountOrderByAggregateInput;
    _avg?: Prisma.RolAvgOrderByAggregateInput;
    _max?: Prisma.RolMaxOrderByAggregateInput;
    _min?: Prisma.RolMinOrderByAggregateInput;
    _sum?: Prisma.RolSumOrderByAggregateInput;
};
export type RolScalarWhereWithAggregatesInput = {
    AND?: Prisma.RolScalarWhereWithAggregatesInput | Prisma.RolScalarWhereWithAggregatesInput[];
    OR?: Prisma.RolScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RolScalarWhereWithAggregatesInput | Prisma.RolScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Rol"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Rol"> | string;
};
export type RolCreateInput = {
    nombre: string;
    usuarios?: Prisma.UsuarioCreateNestedManyWithoutRolInput;
};
export type RolUncheckedCreateInput = {
    id?: number;
    nombre: string;
    usuarios?: Prisma.UsuarioUncheckedCreateNestedManyWithoutRolInput;
};
export type RolUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarios?: Prisma.UsuarioUpdateManyWithoutRolNestedInput;
};
export type RolUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    usuarios?: Prisma.UsuarioUncheckedUpdateManyWithoutRolNestedInput;
};
export type RolCreateManyInput = {
    id?: number;
    nombre: string;
};
export type RolUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
};
export type RolAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RolMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
};
export type RolMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
};
export type RolSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type RolScalarRelationFilter = {
    is?: Prisma.RolWhereInput;
    isNot?: Prisma.RolWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type RolCreateNestedOneWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.RolCreateWithoutUsuariosInput, Prisma.RolUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.RolCreateOrConnectWithoutUsuariosInput;
    connect?: Prisma.RolWhereUniqueInput;
};
export type RolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.RolCreateWithoutUsuariosInput, Prisma.RolUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.RolCreateOrConnectWithoutUsuariosInput;
    upsert?: Prisma.RolUpsertWithoutUsuariosInput;
    connect?: Prisma.RolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RolUpdateToOneWithWhereWithoutUsuariosInput, Prisma.RolUpdateWithoutUsuariosInput>, Prisma.RolUncheckedUpdateWithoutUsuariosInput>;
};
export type RolCreateWithoutUsuariosInput = {
    nombre: string;
};
export type RolUncheckedCreateWithoutUsuariosInput = {
    id?: number;
    nombre: string;
};
export type RolCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.RolWhereUniqueInput;
    create: Prisma.XOR<Prisma.RolCreateWithoutUsuariosInput, Prisma.RolUncheckedCreateWithoutUsuariosInput>;
};
export type RolUpsertWithoutUsuariosInput = {
    update: Prisma.XOR<Prisma.RolUpdateWithoutUsuariosInput, Prisma.RolUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.RolCreateWithoutUsuariosInput, Prisma.RolUncheckedCreateWithoutUsuariosInput>;
    where?: Prisma.RolWhereInput;
};
export type RolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: Prisma.RolWhereInput;
    data: Prisma.XOR<Prisma.RolUpdateWithoutUsuariosInput, Prisma.RolUncheckedUpdateWithoutUsuariosInput>;
};
export type RolUpdateWithoutUsuariosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolUncheckedUpdateWithoutUsuariosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type RolCountOutputType = {
    usuarios: number;
};
export type RolCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs;
};
export type RolCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolCountOutputTypeSelect<ExtArgs> | null;
};
export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UsuarioWhereInput;
};
export type RolSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    usuarios?: boolean | Prisma.Rol$usuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RolCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rol"]>;
export type RolSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
}, ExtArgs["result"]["rol"]>;
export type RolSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
}, ExtArgs["result"]["rol"]>;
export type RolSelectScalar = {
    id?: boolean;
    nombre?: boolean;
};
export type RolOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>;
export type RolInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | Prisma.Rol$usuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RolCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RolIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type RolIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $RolPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Rol";
    objects: {
        usuarios: Prisma.$UsuarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
    }, ExtArgs["result"]["rol"]>;
    composites: {};
};
export type RolGetPayload<S extends boolean | null | undefined | RolDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolPayload, S>;
export type RolCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolCountAggregateInputType | true;
};
export interface RolDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Rol'];
        meta: {
            name: 'Rol';
        };
    };
    findUnique<T extends RolFindUniqueArgs>(args: Prisma.SelectSubset<T, RolFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RolFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RolFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RolFindFirstArgs>(args?: Prisma.SelectSubset<T, RolFindFirstArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RolFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RolFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RolFindManyArgs>(args?: Prisma.SelectSubset<T, RolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RolCreateArgs>(args: Prisma.SelectSubset<T, RolCreateArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RolCreateManyArgs>(args?: Prisma.SelectSubset<T, RolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RolCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RolDeleteArgs>(args: Prisma.SelectSubset<T, RolDeleteArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RolUpdateArgs>(args: Prisma.SelectSubset<T, RolUpdateArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RolDeleteManyArgs>(args?: Prisma.SelectSubset<T, RolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RolUpdateManyArgs>(args: Prisma.SelectSubset<T, RolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RolUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RolUpsertArgs>(args: Prisma.SelectSubset<T, RolUpsertArgs<ExtArgs>>): Prisma.Prisma__RolClient<runtime.Types.Result.GetResult<Prisma.$RolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RolCountArgs>(args?: Prisma.Subset<T, RolCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolCountAggregateOutputType> : number>;
    aggregate<T extends RolAggregateArgs>(args: Prisma.Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>;
    groupBy<T extends RolGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RolGroupByArgs['orderBy'];
    } : {
        orderBy?: RolGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RolFieldRefs;
}
export interface Prisma__RolClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuarios<T extends Prisma.Rol$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RolFieldRefs {
    readonly id: Prisma.FieldRef<"Rol", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Rol", 'String'>;
}
export type RolFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where: Prisma.RolWhereUniqueInput;
};
export type RolFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where: Prisma.RolWhereUniqueInput;
};
export type RolFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where?: Prisma.RolWhereInput;
    orderBy?: Prisma.RolOrderByWithRelationInput | Prisma.RolOrderByWithRelationInput[];
    cursor?: Prisma.RolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolScalarFieldEnum | Prisma.RolScalarFieldEnum[];
};
export type RolFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where?: Prisma.RolWhereInput;
    orderBy?: Prisma.RolOrderByWithRelationInput | Prisma.RolOrderByWithRelationInput[];
    cursor?: Prisma.RolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolScalarFieldEnum | Prisma.RolScalarFieldEnum[];
};
export type RolFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where?: Prisma.RolWhereInput;
    orderBy?: Prisma.RolOrderByWithRelationInput | Prisma.RolOrderByWithRelationInput[];
    cursor?: Prisma.RolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolScalarFieldEnum | Prisma.RolScalarFieldEnum[];
};
export type RolCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolCreateInput, Prisma.RolUncheckedCreateInput>;
};
export type RolCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RolCreateManyInput | Prisma.RolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RolCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    data: Prisma.RolCreateManyInput | Prisma.RolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RolUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolUpdateInput, Prisma.RolUncheckedUpdateInput>;
    where: Prisma.RolWhereUniqueInput;
};
export type RolUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RolUpdateManyMutationInput, Prisma.RolUncheckedUpdateManyInput>;
    where?: Prisma.RolWhereInput;
    limit?: number;
};
export type RolUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RolUpdateManyMutationInput, Prisma.RolUncheckedUpdateManyInput>;
    where?: Prisma.RolWhereInput;
    limit?: number;
};
export type RolUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where: Prisma.RolWhereUniqueInput;
    create: Prisma.XOR<Prisma.RolCreateInput, Prisma.RolUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RolUpdateInput, Prisma.RolUncheckedUpdateInput>;
};
export type RolDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
    where: Prisma.RolWhereUniqueInput;
};
export type RolDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolWhereInput;
    limit?: number;
};
export type Rol$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type RolDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolSelect<ExtArgs> | null;
    omit?: Prisma.RolOmit<ExtArgs> | null;
    include?: Prisma.RolInclude<ExtArgs> | null;
};
export {};
