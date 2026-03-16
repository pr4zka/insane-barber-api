-- CreateTable
CREATE TABLE "proveedores" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "ruc" VARCHAR(30) NOT NULL,
    "telefono" VARCHAR(30) NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "estado" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "proveedores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ordenes_compra" (
    "id" SERIAL NOT NULL,
    "proveedor_id" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'pendiente',
    "total" DECIMAL(12,0) NOT NULL DEFAULT 0,
    "observacion" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "ordenes_compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalles_orden_compra" (
    "id" SERIAL NOT NULL,
    "orden_compra_id" INTEGER NOT NULL,
    "insumo_id" INTEGER NOT NULL,
    "cantidad" DECIMAL(10,2) NOT NULL,
    "precio_unitario" DECIMAL(12,0) NOT NULL,
    "subtotal" DECIMAL(12,0) NOT NULL,

    CONSTRAINT "detalles_orden_compra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "libro_compras" (
    "id" SERIAL NOT NULL,
    "orden_compra_id" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "concepto" VARCHAR(255) NOT NULL,
    "monto" DECIMAL(12,0) NOT NULL,
    "proveedor" VARCHAR(100) NOT NULL,

    CONSTRAINT "libro_compras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas_remision" (
    "id" SERIAL NOT NULL,
    "orden_compra_id" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "observacion" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "notas_remision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas_cd_compra" (
    "id" SERIAL NOT NULL,
    "orden_compra_id" INTEGER NOT NULL,
    "tipo" VARCHAR(10) NOT NULL,
    "monto" DECIMAL(12,0) NOT NULL,
    "motivo" TEXT NOT NULL,
    "estado" VARCHAR(20) NOT NULL DEFAULT 'emitida',
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "notas_cd_compra_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "libro_compras_orden_compra_id_key" ON "libro_compras"("orden_compra_id");

-- CreateIndex
CREATE UNIQUE INDEX "notas_remision_orden_compra_id_key" ON "notas_remision"("orden_compra_id");

-- AddForeignKey
ALTER TABLE "ordenes_compra" ADD CONSTRAINT "ordenes_compra_proveedor_id_fkey" FOREIGN KEY ("proveedor_id") REFERENCES "proveedores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalles_orden_compra" ADD CONSTRAINT "detalles_orden_compra_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "ordenes_compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalles_orden_compra" ADD CONSTRAINT "detalles_orden_compra_insumo_id_fkey" FOREIGN KEY ("insumo_id") REFERENCES "insumos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "libro_compras" ADD CONSTRAINT "libro_compras_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "ordenes_compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas_remision" ADD CONSTRAINT "notas_remision_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "ordenes_compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas_cd_compra" ADD CONSTRAINT "notas_cd_compra_orden_compra_id_fkey" FOREIGN KEY ("orden_compra_id") REFERENCES "ordenes_compra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
