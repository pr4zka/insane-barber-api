-- Permitir registros de gasto/servicio directo (sin orden de compra)
ALTER TABLE "libro_compras" ALTER COLUMN "orden_compra_id" DROP NOT NULL;
