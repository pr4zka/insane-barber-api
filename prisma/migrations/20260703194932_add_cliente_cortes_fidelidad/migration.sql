-- DropForeignKey
ALTER TABLE "libro_compras" DROP CONSTRAINT "libro_compras_orden_compra_id_fkey";

-- AlterTable
ALTER TABLE "clientes" ADD COLUMN     "cortes_fidelidad" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "email" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "libro_compras" ADD CONSTRAINT "libro_compras_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "ordenes_compra"("id") ON DELETE SET NULL ON UPDATE CASCADE;
