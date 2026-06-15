"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const decimal_transform_interceptor_1 = require("./common/interceptors/decimal-transform.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: process.env.CORS_ORIGINS
            ? process.env.CORS_ORIGINS.split(',')
            : ['https://app.pr4zka.online', 'http://localhost:3000'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    app.useGlobalFilters(new http_exception_filter_1.GlobalExceptionFilter());
    app.useGlobalInterceptors(new decimal_transform_interceptor_1.DecimalTransformInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Insane Barber API')
        .setDescription('API REST del sistema de gestion para barberia Insane Barber. ' +
        'Incluye gestion de servicios, agenda de turnos, clientes, caja, cobros, reportes y mas.')
        .setVersion('1.0')
        .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'JWT')
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
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document, {
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
//# sourceMappingURL=main.js.map