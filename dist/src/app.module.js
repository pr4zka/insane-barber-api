"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./modules/auth/auth.module");
const users_module_1 = require("./modules/users/users.module");
const clients_module_1 = require("./modules/clients/clients.module");
const barbers_module_1 = require("./modules/barbers/barbers.module");
const services_module_1 = require("./modules/services/services.module");
const appointments_module_1 = require("./modules/appointments/appointments.module");
const promotions_module_1 = require("./modules/promotions/promotions.module");
const discounts_module_1 = require("./modules/discounts/discounts.module");
const complaints_module_1 = require("./modules/complaints/complaints.module");
const budgets_module_1 = require("./modules/budgets/budgets.module");
const supplies_module_1 = require("./modules/supplies/supplies.module");
const cash_register_module_1 = require("./modules/cash-register/cash-register.module");
const payments_module_1 = require("./modules/payments/payments.module");
const credit_debit_notes_module_1 = require("./modules/credit-debit-notes/credit-debit-notes.module");
const sales_book_module_1 = require("./modules/sales-book/sales-book.module");
const reports_module_1 = require("./modules/reports/reports.module");
const purchases_module_1 = require("./modules/purchases/purchases.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            clients_module_1.ClientsModule,
            barbers_module_1.BarbersModule,
            services_module_1.ServicesModule,
            appointments_module_1.AppointmentsModule,
            promotions_module_1.PromotionsModule,
            discounts_module_1.DiscountsModule,
            complaints_module_1.ComplaintsModule,
            budgets_module_1.BudgetsModule,
            supplies_module_1.SuppliesModule,
            cash_register_module_1.CashRegisterModule,
            payments_module_1.PaymentsModule,
            credit_debit_notes_module_1.CreditDebitNotesModule,
            sales_book_module_1.SalesBookModule,
            reports_module_1.ReportsModule,
            purchases_module_1.PurchasesModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map