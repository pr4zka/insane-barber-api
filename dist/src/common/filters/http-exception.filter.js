"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let GlobalExceptionFilter = class GlobalExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Ocurrio un error inesperado en el servidor. Intente nuevamente.';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            message =
                typeof res === 'string'
                    ? res
                    : res.message || exception.message;
            if (Array.isArray(message)) {
                message = message.join('. ');
            }
        }
        else if (exception &&
            typeof exception === 'object' &&
            'code' in exception) {
            const prismaError = exception;
            switch (prismaError.code) {
                case 'P2002':
                    status = common_1.HttpStatus.CONFLICT;
                    const field = prismaError.meta?.target?.[0] ?? 'campo';
                    message = `Ya existe un registro con ese valor de "${field}". Utilice un valor diferente.`;
                    break;
                case 'P2003':
                    status = common_1.HttpStatus.BAD_REQUEST;
                    message =
                        'No se puede completar la operacion porque hace referencia a un registro que no existe.';
                    break;
                case 'P2025':
                    status = common_1.HttpStatus.NOT_FOUND;
                    message = 'El registro que intenta modificar no fue encontrado.';
                    break;
                default:
                    console.error('[PrismaError]', prismaError.code, prismaError.message);
                    message =
                        'Error al procesar la operacion en la base de datos. Intente nuevamente.';
            }
        }
        else {
            console.error('[UnhandledException]', exception);
        }
        response.status(status).json({
            statusCode: status,
            message,
            timestamp: new Date().toISOString(),
        });
    }
};
exports.GlobalExceptionFilter = GlobalExceptionFilter;
exports.GlobalExceptionFilter = GlobalExceptionFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionFilter);
//# sourceMappingURL=http-exception.filter.js.map