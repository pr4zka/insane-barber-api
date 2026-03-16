# Insane Barber - Backend API

API REST del sistema de gestion para barberia **Insane Barber**, desarrollado como tesis de grado.

## Stack tecnologico

| Tecnologia | Version | Uso |
|---|---|---|
| Node.js | 20+ | Runtime |
| NestJS | 10 | Framework backend |
| Prisma | 7 | ORM |
| PostgreSQL | 16 | Base de datos |
| JWT | - | Autenticacion |
| Swagger | - | Documentacion API |
| Docker | - | Contenedor de BD |
| TypeScript | 5 | Lenguaje |

## Arquitectura

El proyecto sigue el patron de **Arquitectura Limpia** con tres capas por modulo:

```
src/
├── common/                        # Utilidades transversales
│   ├── decorators/                # @Roles, @CurrentUser
│   ├── guards/                    # JwtAuthGuard, RolesGuard
│   └── filters/                   # GlobalExceptionFilter
├── prisma/                        # Capa de infraestructura (BD)
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── modules/
│   ├── auth/                      # Autenticacion
│   ├── users/                     # Usuarios
│   ├── clients/                   # Clientes
│   ├── barbers/                   # Barberos
│   ├── services/                  # Servicios
│   ├── appointments/              # Turnos/Agenda
│   ├── promotions/                # Promociones
│   ├── discounts/                 # Descuentos
│   ├── complaints/                # Reclamos + seguimiento
│   ├── budgets/                   # Presupuestos
│   ├── supplies/                  # Insumos
│   ├── cash-register/             # Caja + movimientos
│   ├── payments/                  # Cobros + Dpago
│   ├── credit-debit-notes/        # Notas de credito/debito
│   ├── sales-book/                # Libro de ventas
│   └── reports/                   # Reportes
├── app.module.ts
└── main.ts
```

### Estructura de cada modulo

```
modulo/
├── dto/              # Validacion de entrada (class-validator + Swagger)
├── controller.ts     # Capa de presentacion (HTTP, rutas)
├── service.ts        # Capa de aplicacion (logica de negocio)
├── repository.ts     # Capa de datos (acceso via Prisma)
└── module.ts         # Registro en NestJS
```

## Requisitos previos

- Node.js 20+
- Docker y Docker Compose
- npm

## Instalacion

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar PostgreSQL con Docker
docker compose up -d

# 3. Generar el cliente Prisma
npx prisma generate

# 4. Ejecutar migracion inicial
npx prisma migrate dev --name init

# 5. Cargar datos de prueba
npx ts-node prisma/seed.ts
```

## Ejecucion

```bash
# Desarrollo (con hot reload)
npm run start:dev

# Produccion
npm run build
npm run start:prod
```

El servidor se inicia en `http://localhost:3000`.

## Documentacion API (Swagger)

Una vez corriendo el servidor, acceder a:

```
http://localhost:3000/api/docs
```

Desde ahi se puede:
- Ver todos los endpoints organizados por modulo
- Probar cada endpoint directamente
- Autenticarse con JWT (boton "Authorize")

## Variables de entorno

Crear un archivo `.env` en la raiz del backend:

```env
DATABASE_URL="postgresql://insane_barber:insane_barber_2024@localhost:5432/insane_barber?schema=public"
JWT_SECRET="insane-barber-jwt-secret-key-2024"
PORT=3000
DPAGO_API_URL=https://api.dpago.com
DPAGO_PUBLIC_TOKEN=your-public-token
DPAGO_COMMERCE_ID=1
```

## Base de datos

### Entidades (17 tablas)

| Tabla | Descripcion |
|---|---|
| `roles` | Roles del sistema |
| `usuarios` | Usuarios con autenticacion |
| `clientes` | Clientes de la barberia |
| `barberos` | Barberos/empleados |
| `servicios` | Catalogo de servicios |
| `turnos` | Agenda de citas |
| `promociones` | Promociones vigentes |
| `descuentos` | Descuentos disponibles |
| `reclamos` | Reclamos de clientes |
| `seguimientos_reclamo` | Historial de seguimiento |
| `presupuestos` | Presupuestos |
| `detalles_presupuesto` | Lineas de detalle |
| `insumos` | Inventario de insumos |
| `insumos_utilizados` | Registro de uso |
| `cajas` | Apertura/cierre de caja |
| `movimientos_caja` | Ingresos y egresos |
| `pagos` | Cobros realizados |
| `notas_credito_debito` | Notas de ajuste |
| `libro_ventas` | Registro de ventas |

### Comandos Prisma

```bash
# Generar cliente
npx prisma generate

# Crear migracion
npx prisma migrate dev --name nombre_migracion

# Reset completo (borra datos)
npx prisma migrate reset

# Abrir Prisma Studio (GUI)
npx prisma studio

# Cargar seed
npx ts-node prisma/seed.ts
```

## Endpoints API

### Auth
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| POST | `/api/auth/login` | Iniciar sesion | Publico |
| GET | `/api/auth/me` | Usuario actual | Autenticado |

### Usuarios
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/users` | Listar usuarios | Admin |
| POST | `/api/users` | Crear usuario | Admin |

### Clientes
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/clients` | Listar clientes | Autenticado |
| POST | `/api/clients` | Crear cliente | Autenticado |
| PATCH | `/api/clients/:id` | Actualizar cliente | Autenticado |

### Barberos
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/barbers` | Listar barberos | Autenticado |
| POST | `/api/barbers` | Crear barbero | Autenticado |

### Servicios
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/services` | Listar servicios | Autenticado |
| POST | `/api/services` | Crear servicio | Autenticado |
| PATCH | `/api/services/:id` | Actualizar servicio | Autenticado |
| DELETE | `/api/services/:id` | Desactivar servicio | Autenticado |

### Turnos / Agenda
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/appointments` | Listar turnos | Autenticado |
| POST | `/api/appointments` | Crear turno | Autenticado |
| PATCH | `/api/appointments/:id` | Actualizar turno | Autenticado |
| PATCH | `/api/appointments/:id/confirm` | Confirmar turno | Autenticado |
| PATCH | `/api/appointments/:id/cancel` | Cancelar turno | Autenticado |
| PATCH | `/api/appointments/:id/reschedule` | Reagendar turno | Autenticado |

### Promociones
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/promotions` | Listar promociones | Autenticado |
| POST | `/api/promotions` | Crear promocion | Autenticado |
| PATCH | `/api/promotions/:id` | Actualizar promocion | Autenticado |

### Descuentos
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/discounts` | Listar descuentos | Autenticado |
| POST | `/api/discounts` | Crear descuento | Autenticado |

### Reclamos
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/complaints` | Listar reclamos | Autenticado |
| POST | `/api/complaints` | Crear reclamo | Autenticado |
| PATCH | `/api/complaints/:id` | Actualizar reclamo | Autenticado |
| GET | `/api/complaints/:id/follow-ups` | Ver seguimientos | Autenticado |
| POST | `/api/complaints/:id/follow-ups` | Agregar seguimiento | Autenticado |

### Presupuestos
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/budgets` | Listar presupuestos | Autenticado |
| POST | `/api/budgets` | Crear presupuesto | Autenticado |
| GET | `/api/budgets/:id` | Ver detalle | Autenticado |
| GET | `/api/budgets/:id/pdf` | Descargar PDF | Autenticado |

### Insumos
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/supplies` | Listar insumos | Autenticado |
| POST | `/api/supplies` | Crear insumo | Autenticado |
| PATCH | `/api/supplies/:id` | Actualizar insumo | Autenticado |
| POST | `/api/supplies/usage` | Registrar uso | Autenticado |
| GET | `/api/supplies/usage` | Uso por turno | Autenticado |

### Caja
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/cash-register/current` | Caja actual | Autenticado |
| POST | `/api/cash-register/open` | Abrir caja | Autenticado |
| POST | `/api/cash-register/close` | Cerrar caja | Autenticado |
| GET | `/api/cash-register/collections` | Recaudaciones | Autenticado |
| POST | `/api/cash-movements` | Crear movimiento | Autenticado |
| GET | `/api/cash-movements` | Listar movimientos | Autenticado |

### Cobros / Pagos
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/payments` | Listar pagos | Autenticado |
| POST | `/api/payments` | Registrar cobro | Autenticado |
| GET | `/api/payments/pending` | Pagos pendientes | Autenticado |
| GET | `/api/payments/:id/receipt` | Comprobante | Autenticado |
| POST | `/api/payments/dpago` | Cobro via Dpago | Autenticado |
| POST | `/api/payments/dpago/link` | Link de pago | Autenticado |
| GET | `/api/payments/dpago/:reference` | Estado Dpago | Autenticado |

### Notas de Credito/Debito
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/credit-debit-notes` | Listar notas | Autenticado |
| POST | `/api/credit-debit-notes` | Crear nota | Autenticado |

### Libro de Ventas
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/sales-book` | Consultar (con filtros) | Autenticado |

### Reportes
| Metodo | Ruta | Descripcion | Acceso |
|---|---|---|---|
| GET | `/api/reports/daily-income` | Ingresos diarios | Autenticado |
| GET | `/api/reports/monthly-income` | Ingresos mensuales | Autenticado |
| GET | `/api/reports/appointments` | Turnos por barbero | Autenticado |
| GET | `/api/reports/services` | Servicios mas solicitados | Autenticado |
| GET | `/api/reports/complaints` | Reclamos | Autenticado |
| GET | `/api/reports/sales-book` | Resumen de ventas | Autenticado |
| GET | `/api/reports/supplies` | Uso de insumos | Autenticado |

## Roles del sistema

| Rol | Permisos |
|---|---|
| **Administrador** | Acceso total al sistema |
| **Recepcionista** | Clientes, turnos, cobros, caja |
| **Barbero** | Ver turnos, registrar atencion |

## Credenciales de prueba (seed)

| Rol | Email | Password |
|---|---|---|
| Administrador | admin@insanebarber.com | admin123 |
| Recepcionista | recepcion@insanebarber.com | recep123 |
| Barbero | carlos@insanebarber.com | barbero123 |

## Scripts disponibles

```bash
npm run start:dev      # Desarrollo con hot reload
npm run build          # Compilar para produccion
npm run start:prod     # Ejecutar produccion
npm run lint           # Linter
npm run format         # Formatear codigo
npm run prisma:generate # Generar cliente Prisma
npm run prisma:migrate  # Ejecutar migraciones
npm run prisma:seed     # Cargar datos de prueba
npm run db:setup        # Setup completo de BD
```
