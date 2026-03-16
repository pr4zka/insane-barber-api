"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalTransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
function convertDecimals(obj) {
    if (obj === null || obj === undefined)
        return obj;
    if (typeof obj === 'object' &&
        typeof obj.toNumber === 'function' &&
        typeof obj.toFixed === 'function') {
        return obj.toNumber();
    }
    if (Array.isArray(obj)) {
        return obj.map(convertDecimals);
    }
    if (obj instanceof Date)
        return obj;
    if (typeof obj === 'object') {
        const result = {};
        for (const [key, value] of Object.entries(obj)) {
            result[key] = convertDecimals(value);
        }
        return result;
    }
    return obj;
}
let DecimalTransformInterceptor = class DecimalTransformInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.map)((data) => convertDecimals(data)));
    }
};
exports.DecimalTransformInterceptor = DecimalTransformInterceptor;
exports.DecimalTransformInterceptor = DecimalTransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], DecimalTransformInterceptor);
//# sourceMappingURL=decimal-transform.interceptor.js.map