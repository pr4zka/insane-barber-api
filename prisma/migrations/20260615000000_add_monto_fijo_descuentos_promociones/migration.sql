-- Soporte de descuento por monto fijo (ademas del porcentaje) en promociones y descuentos.
-- tipo: "porcentaje" | "monto_fijo". porcentaje pasa a ser opcional; monto es el descuento fijo en guaranies.

-- AlterTable promociones
ALTER TABLE "promociones" ADD COLUMN "tipo" VARCHAR(20) NOT NULL DEFAULT 'porcentaje',
ADD COLUMN "monto" DECIMAL(12,0);
ALTER TABLE "promociones" ALTER COLUMN "porcentaje" DROP NOT NULL;

-- AlterTable descuentos
ALTER TABLE "descuentos" ADD COLUMN "tipo" VARCHAR(20) NOT NULL DEFAULT 'porcentaje',
ADD COLUMN "monto" DECIMAL(12,0);
ALTER TABLE "descuentos" ALTER COLUMN "porcentaje" DROP NOT NULL;
