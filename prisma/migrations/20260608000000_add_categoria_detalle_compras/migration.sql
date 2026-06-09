-- AlterTable
ALTER TABLE "ordenes_compra" ADD COLUMN     "categoria" VARCHAR(50) NOT NULL DEFAULT 'otros',
ADD COLUMN     "detalle" VARCHAR(255) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "libro_compras" ADD COLUMN     "categoria" VARCHAR(50) NOT NULL DEFAULT 'otros',
ADD COLUMN     "detalle" VARCHAR(255) NOT NULL DEFAULT '';
