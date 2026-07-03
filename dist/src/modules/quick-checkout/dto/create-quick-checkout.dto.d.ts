export declare class CreateQuickCheckoutDto {
    clienteId?: number;
    clienteNombre: string;
    clienteTelefono: string;
    clienteEmail?: string;
    servicioIds: number[];
    otroServicio?: string;
    fecha?: string;
    hora?: string;
    precioTotal: number;
    metodoPago: string;
    platformId?: number;
    promocionId?: number;
    descuentoId?: number;
}
