-- AlterTable: campos fiscales en ordenes_compra
ALTER TABLE "ordenes_compra"
  ADD COLUMN     "tipo_comprobante" VARCHAR(20) NOT NULL DEFAULT 'factura',
  ADD COLUMN     "nro_comprobante" VARCHAR(30) NOT NULL DEFAULT '',
  ADD COLUMN     "timbrado" VARCHAR(20) NOT NULL DEFAULT '',
  ADD COLUMN     "condicion" VARCHAR(10) NOT NULL DEFAULT 'contado',
  ADD COLUMN     "tasa_iva" INTEGER NOT NULL DEFAULT 10;

-- AlterTable: campos fiscales en libro_compras
ALTER TABLE "libro_compras"
  ADD COLUMN     "ruc_proveedor" VARCHAR(30) NOT NULL DEFAULT '',
  ADD COLUMN     "tipo_comprobante" VARCHAR(20) NOT NULL DEFAULT 'factura',
  ADD COLUMN     "nro_comprobante" VARCHAR(30) NOT NULL DEFAULT '',
  ADD COLUMN     "timbrado" VARCHAR(20) NOT NULL DEFAULT '',
  ADD COLUMN     "condicion" VARCHAR(10) NOT NULL DEFAULT 'contado',
  ADD COLUMN     "tasa_iva" INTEGER NOT NULL DEFAULT 10,
  ADD COLUMN     "gravado_10" DECIMAL(12,0) NOT NULL DEFAULT 0,
  ADD COLUMN     "iva_10" DECIMAL(12,0) NOT NULL DEFAULT 0,
  ADD COLUMN     "gravado_5" DECIMAL(12,0) NOT NULL DEFAULT 0,
  ADD COLUMN     "iva_5" DECIMAL(12,0) NOT NULL DEFAULT 0,
  ADD COLUMN     "exento" DECIMAL(12,0) NOT NULL DEFAULT 0;
