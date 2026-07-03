export declare class CreateQuickCheckoutDto {
    clienteNombre: string;
    clienteTelefono: string;
    clienteEmail?: string;
    servicioIds: number[];
    otroServicio?: string;
    precioTotal: number;
    metodoPago: string;
    platformId?: number;
    promocionId?: number;
    descuentoId?: number;
}
