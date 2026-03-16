export declare class CreatePurchaseOrderDetailDto {
    insumoId: number;
    cantidad: number;
    precioUnitario: number;
}
export declare class CreatePurchaseOrderDto {
    proveedorId: number;
    observacion?: string;
    detalles: CreatePurchaseOrderDetailDto[];
}
