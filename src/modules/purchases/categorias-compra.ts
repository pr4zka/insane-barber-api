// Categorias fijas para el Libro de Compras.
// La clave (key) se guarda en la base; la etiqueta (label) es lo que se muestra.
export const CATEGORIAS_COMPRA: Record<string, string> = {
  insumos: 'Insumos de peluquería',
  descartables: 'Descartables',
  cosmeticos: 'Cosméticos y coloración',
  limpieza: 'Limpieza y desinfección',
  equipos: 'Equipos y herramientas',
  gastos_fijos: 'Gastos fijos (luz, agua, alquiler)',
  otros: 'Otros',
};

export const CATEGORIA_KEYS = Object.keys(CATEGORIAS_COMPRA);

export function categoriaLabel(key: string): string {
  return CATEGORIAS_COMPRA[key] ?? CATEGORIAS_COMPRA.otros;
}

// ── IVA (Paraguay) ──
// Los precios incluyen IVA. Dada la tasa, se discrimina el total en base gravada + IVA.
// Convencion SET: Total = Gravado + IVA (por bracket). Guaranies sin decimales.
export interface IvaBreakdown {
  gravado10: number;
  iva10: number;
  gravado5: number;
  iva5: number;
  exento: number;
}

export function calcularIva(total: number, tasa: number): IvaBreakdown {
  const breakdown: IvaBreakdown = {
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
  } else if (tasa === 5) {
    const gravado = Math.round(total / 1.05);
    breakdown.gravado5 = gravado;
    breakdown.iva5 = total - gravado;
  } else {
    breakdown.exento = total;
  }

  return breakdown;
}
