export declare class CreatePurchaseOrderDetailDto {
    insumoId: number;
    cantidad: number;
    precioUnitario: number;
}
export declare class CreatePurchaseOrderDto {
    proveedorId: number;
    observacion?: string;
    categoria?: string;
    detalle?: string;
    tipoComprobante?: string;
    nroComprobante?: string;
    timbrado?: string;
    condicion?: string;
    tasaIva?: number;
    detalles: CreatePurchaseOrderDetailDto[];
}
