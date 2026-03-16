import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Ocurrio un error inesperado en el servidor. Intente nuevamente.';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message =
        typeof res === 'string'
          ? res
          : (res as any).message || exception.message;

      // Si message es un array (validaciones de class-validator), unirlo
      if (Array.isArray(message)) {
        message = message.join('. ');
      }
    } else if (
      exception &&
      typeof exception === 'object' &&
      'code' in exception
    ) {
      // Errores de Prisma
      const prismaError = exception as any;
      switch (prismaError.code) {
        case 'P2002':
          status = HttpStatus.CONFLICT;
          const field = prismaError.meta?.target?.[0] ?? 'campo';
          message = `Ya existe un registro con ese valor de "${field}". Utilice un valor diferente.`;
          break;
        case 'P2003':
          status = HttpStatus.BAD_REQUEST;
          message =
            'No se puede completar la operacion porque hace referencia a un registro que no existe.';
          break;
        case 'P2025':
          status = HttpStatus.NOT_FOUND;
          message = 'El registro que intenta modificar no fue encontrado.';
          break;
        default:
          console.error('[PrismaError]', prismaError.code, prismaError.message);
          message =
            'Error al procesar la operacion en la base de datos. Intente nuevamente.';
      }
    } else {
      console.error('[UnhandledException]', exception);
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
