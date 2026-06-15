"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIA_KEYS = exports.CATEGORIAS_COMPRA = void 0;
exports.categoriaLabel = categoriaLabel;
exports.calcularIva = calcularIva;
exports.CATEGORIAS_COMPRA = {
    insumos: 'Insumos de peluquería',
    descartables: 'Descartables',
    cosmeticos: 'Cosméticos y coloración',
    limpieza: 'Limpieza y desinfección',
    equipos: 'Equipos y herramientas',
    gastos_fijos: 'Gastos fijos (luz, agua, alquiler)',
    otros: 'Otros',
};
exports.CATEGORIA_KEYS = Object.keys(exports.CATEGORIAS_COMPRA);
function categoriaLabel(key) {
    return exports.CATEGORIAS_COMPRA[key] ?? exports.CATEGORIAS_COMPRA.otros;
}
function calcularIva(total, tasa) {
    const breakdown = {
        gravado10: 0,
        iva10: 0,
        gravado5: 0,
        iva5: 0,
        exento: 0,
    };
    if (tasa === 10) {
        const gravado = Math.round(total / 1.1);
        breakdown.gravado10 = gravado;
        breakdown.iva10 = total - gravado;
    }
    else if (tasa === 5) {
        const gravado = Math.round(total / 1.05);
        breakdown.gravado5 = gravado;
        breakdown.iva5 = total - gravado;
    }
    else {
        breakdown.exento = total;
    }
    return breakdown;
}
//# sourceMappingURL=categorias-compra.js.map