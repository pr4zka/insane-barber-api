import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/http-exception.filter';
import { DecimalTransformInterceptor } from './common/interceptors/decimal-transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());
  app.useGlobalInterceptors(new DecimalTransformInterceptor());

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Insane Barber API')
    .setDescription(
      'API REST del sistema de gestion para barberia Insane Barber. ' +
        'Incluye gestion de servicios, agenda de turnos, clientes, caja, cobros, reportes y mas.',
    )
    .setVersion('1.0')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
      'JWT',
    )
    .addTag('Auth', 'Autenticacion y sesion')
    .addTag('Users', 'Gestion de usuarios del sistema')
    .addTag('Clients', 'Gestion de clientes')
    .addTag('Barbers', 'Gestion de barberos')
    .addTag('Services', 'Catalogo de servicios')
    .addTag('Appointments', 'Agenda y turnos')
    .addTag('Promotions', 'Promociones')
    .addTag('Discounts', 'Descuentos')
    .addTag('Complaints', 'Reclamos y seguimiento')
    .addTag('Budgets', 'Presupuestos')
    .addTag('Supplies', 'Insumos y uso')
    .addTag('Cash Register', 'Caja y movimientos')
    .addTag('Payments', 'Cobros y pagos')
    .addTag('Credit Debit Notes', 'Notas de credito y debito')
    .addTag('Sales Book', 'Libro de ventas')
    .addTag('Reports', 'Reportes e informes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Insane Barber API running on port ${port}`);
  console.log(`Swagger docs: http://localhost:${port}/api/docs`);
}
bootstrap();
