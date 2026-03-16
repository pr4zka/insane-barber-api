import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';
import * as bcrypt from 'bcryptjs';
import 'dotenv/config';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding database...');

  // Roles
  const adminRole = await prisma.rol.upsert({
    where: { nombre: 'administrador' },
    update: {},
    create: { nombre: 'administrador' },
  });

  const recepRole = await prisma.rol.upsert({
    where: { nombre: 'recepcionista' },
    update: {},
    create: { nombre: 'recepcionista' },
  });

  const barberoRole = await prisma.rol.upsert({
    where: { nombre: 'barbero' },
    update: {},
    create: { nombre: 'barbero' },
  });

  console.log('Roles created:', { adminRole, recepRole, barberoRole });

  // Admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.usuario.upsert({
    where: { email: 'admin@insanebarber.com' },
    update: {},
    create: {
      nombre: 'Administrador',
      email: 'admin@insanebarber.com',
      password: hashedPassword,
      rolId: adminRole.id,
      estado: true,
    },
  });

  // Recepcionista user
  const recep = await prisma.usuario.upsert({
    where: { email: 'recepcion@insanebarber.com' },
    update: {},
    create: {
      nombre: 'Recepcionista',
      email: 'recepcion@insanebarber.com',
      password: await bcrypt.hash('recep123', 10),
      rolId: recepRole.id,
      estado: true,
    },
  });

  console.log('Users created:', { admin: admin.email, recep: recep.email });

  // Barbers
  const barbero1 = await prisma.barbero.create({
    data: {
      nombre: 'Carlos Lopez',
      telefono: '0981123456',
      especialidad: 'Corte clasico',
      estado: true,
    },
  });

  const barbero2 = await prisma.barbero.create({
    data: {
      nombre: 'Miguel Torres',
      telefono: '0982654321',
      especialidad: 'Barba y afeitado',
      estado: true,
    },
  });

  // Barbero user
  await prisma.usuario.upsert({
    where: { email: 'carlos@insanebarber.com' },
    update: {},
    create: {
      nombre: 'Carlos Lopez',
      email: 'carlos@insanebarber.com',
      password: await bcrypt.hash('barbero123', 10),
      rolId: barberoRole.id,
      estado: true,
    },
  });

  console.log('Barbers created:', { barbero1: barbero1.nombre, barbero2: barbero2.nombre });

  // Services
  const servicios = await Promise.all([
    prisma.servicio.create({
      data: {
        nombre: 'Corte de cabello',
        descripcion: 'Corte de cabello clasico o moderno',
        precio: 35000,
        duracionMin: 30,
        estado: true,
      },
    }),
    prisma.servicio.create({
      data: {
        nombre: 'Corte + Barba',
        descripcion: 'Corte de cabello con arreglo de barba',
        precio: 55000,
        duracionMin: 45,
        estado: true,
      },
    }),
    prisma.servicio.create({
      data: {
        nombre: 'Afeitado clasico',
        descripcion: 'Afeitado con navaja y toalla caliente',
        precio: 30000,
        duracionMin: 25,
        estado: true,
      },
    }),
    prisma.servicio.create({
      data: {
        nombre: 'Tinte de cabello',
        descripcion: 'Coloracion completa de cabello',
        precio: 80000,
        duracionMin: 60,
        estado: true,
      },
    }),
    prisma.servicio.create({
      data: {
        nombre: 'Tratamiento capilar',
        descripcion: 'Tratamiento de hidratacion y nutricion',
        precio: 45000,
        duracionMin: 40,
        estado: true,
      },
    }),
  ]);

  console.log('Services created:', servicios.length);

  // Clients
  const clientes = await Promise.all([
    prisma.cliente.create({
      data: {
        nombre: 'Juan Perez',
        telefono: '0981111111',
        email: 'juan@email.com',
      },
    }),
    prisma.cliente.create({
      data: {
        nombre: 'Pedro Gonzalez',
        telefono: '0982222222',
        email: 'pedro@email.com',
      },
    }),
    prisma.cliente.create({
      data: {
        nombre: 'Luis Martinez',
        telefono: '0983333333',
        email: 'luis@email.com',
      },
    }),
  ]);

  console.log('Clients created:', clientes.length);

  // Supplies
  await Promise.all([
    prisma.insumo.create({
      data: {
        nombre: 'Gel para cabello',
        descripcion: 'Gel fijador profesional',
        unidad: 'ml',
        stock: 5000,
        estado: true,
      },
    }),
    prisma.insumo.create({
      data: {
        nombre: 'Cera para cabello',
        descripcion: 'Cera moldeadora mate',
        unidad: 'g',
        stock: 3000,
        estado: true,
      },
    }),
    prisma.insumo.create({
      data: {
        nombre: 'Aceite para barba',
        descripcion: 'Aceite hidratante para barba',
        unidad: 'ml',
        stock: 2000,
        estado: true,
      },
    }),
  ]);

  console.log('Supplies created');
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
