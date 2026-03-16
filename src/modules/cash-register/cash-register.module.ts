import { Module } from '@nestjs/common';
import { CashRegisterController } from './cash-register.controller';
import { CashRegisterService } from './cash-register.service';
import { CashRegisterRepository } from './cash-register.repository';

@Module({
  controllers: [CashRegisterController],
  providers: [CashRegisterService, CashRegisterRepository],
  exports: [CashRegisterService],
})
export class CashRegisterModule {}
