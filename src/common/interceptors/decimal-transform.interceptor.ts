import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Convierte recursivamente los objetos Prisma Decimal a number
 * para que el JSON serializado envíe números en lugar de strings.
 */
function convertDecimals(obj: unknown): unknown {
  if (obj === null || obj === undefined) return obj;

  // Prisma Decimal: tiene toNumber() y d/e/s properties
  if (
    typeof obj === 'object' &&
    typeof (obj as any).toNumber === 'function' &&
    typeof (obj as any).toFixed === 'function'
  ) {
    return (obj as any).toNumber();
  }

  if (Array.isArray(obj)) {
    return obj.map(convertDecimals);
  }

  if (obj instanceof Date) return obj;

  if (typeof obj === 'object') {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      result[key] = convertDecimals(value);
    }
    return result;
  }

  return obj;
}

@Injectable()
export class DecimalTransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map((data) => convertDecimals(data)));
  }
}
