export declare const CATEGORIAS_COMPRA: Record<string, string>;
export declare const CATEGORIA_KEYS: string[];
export declare function categoriaLabel(key: string): string;
export interface IvaBreakdown {
    gravado10: number;
    iva10: number;
    gravado5: number;
    iva5: number;
    exento: number;
}
export declare function calcularIva(total: number, tasa: number): IvaBreakdown;
