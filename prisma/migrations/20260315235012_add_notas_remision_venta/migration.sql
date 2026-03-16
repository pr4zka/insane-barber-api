-- CreateTable
CREATE TABLE "notas_remision_venta" (
    "id" SERIAL NOT NULL,
    "turno_id" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacion" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "notas_remision_venta_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notas_remision_venta_turno_id_key" ON "notas_remision_venta"("turno_id");

-- AddForeignKey
ALTER TABLE "notas_remision_venta" ADD CONSTRAINT "notas_remision_venta_turno_id_fkey" FOREIGN KEY ("turno_id") REFERENCES "turnos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
