-- AlterTable
ALTER TABLE "pagos" ADD COLUMN     "descuento_id" INTEGER,
ADD COLUMN     "monto_original" DECIMAL(12,0),
ADD COLUMN     "porcentaje_aplicado" DECIMAL(5,2),
ADD COLUMN     "promocion_id" INTEGER;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_promocion_id_fkey" FOREIGN KEY ("promocion_id") REFERENCES "promociones"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagos" ADD CONSTRAINT "pagos_descuento_id_fkey" FOREIGN KEY ("descuento_id") REFERENCES "descuentos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
