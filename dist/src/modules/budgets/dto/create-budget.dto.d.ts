export declare class CreateBudgetDetailDto {
    servicioId: number;
    cantidad: number;
    precioUnitario: number;
}
export declare class CreateBudgetDto {
    clienteId: number;
    observacion?: string;
    detalles: CreateBudgetDetailDto[];
}
