"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesBookModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const sales_book_controller_1 = require("./sales-book.controller");
const sales_book_repository_1 = require("./sales-book.repository");
const sales_book_service_1 = require("./sales-book.service");
let SalesBookModule = class SalesBookModule {
};
exports.SalesBookModule = SalesBookModule;
exports.SalesBookModule = SalesBookModule = __decorate([
    (0, common_1.Module)({
        controllers: [sales_book_controller_1.SalesBookController],
        providers: [sales_book_service_1.SalesBookService, sales_book_repository_1.SalesBookRepository, prisma_service_1.PrismaService],
        exports: [sales_book_service_1.SalesBookService],
    })
], SalesBookModule);
//# sourceMappingURL=sales-book.module.js.map