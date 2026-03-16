import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { BarbersModule } from './modules/barbers/barbers.module';
import { ServicesModule } from './modules/services/services.module';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { PromotionsModule } from './modules/promotions/promotions.module';
import { DiscountsModule } from './modules/discounts/discounts.module';
import { ComplaintsModule } from './modules/complaints/complaints.module';
import { BudgetsModule } from './modules/budgets/budgets.module';
import { SuppliesModule } from './modules/supplies/supplies.module';
import { CashRegisterModule } from './modules/cash-register/cash-register.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { CreditDebitNotesModule } from './modules/credit-debit-notes/credit-debit-notes.module';
import { SalesBookModule } from './modules/sales-book/sales-book.module';
import { ReportsModule } from './modules/reports/reports.module';
import { PurchasesModule } from './modules/purchases/purchases.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    ClientsModule,
    BarbersModule,
    ServicesModule,
    AppointmentsModule,
    PromotionsModule,
    DiscountsModule,
    ComplaintsModule,
    BudgetsModule,
    SuppliesModule,
    CashRegisterModule,
    PaymentsModule,
    CreditDebitNotesModule,
    SalesBookModule,
    ReportsModule,
    PurchasesModule,
  ],
})
export class AppModule {}
