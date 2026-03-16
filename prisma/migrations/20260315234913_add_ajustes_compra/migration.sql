-- CreateTable
CREATE TABLE "ajustes_compra" (
    "id" SERIAL NOT NULL,
    "orden_compra_id" INTEGER NOT NULL,
    "tipo" VARCHAR(20) NOT NULL,
    "descripcion" TEXT NOT NULL,
    "monto_anterior" DECIMAL(12,0) NOT NULL,
    "monto_nuevo" DECIMAL(12,0) NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ajustes_compra_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ajustes_compra" ADD CONSTRAINT "ajustes_compra_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "ordenes_compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
