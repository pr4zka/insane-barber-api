-- AlterTable
ALTER TABLE "barberos" ADD COLUMN "usuario_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "barberos_usuario_id_key" ON "barberos"("usuario_id");

-- AddForeignKey
ALTER TABLE "barberos" ADD CONSTRAINT "barberos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Link existing barbers to users by matching names
UPDATE "barberos" b SET "usuario_id" = u.id
FROM "usuarios" u
INNER JOIN "roles" r ON u.rol_id = r.id
WHERE r.nombre = 'barbero' AND LOWER(b.nombre) = LOWER(u.nombre);
