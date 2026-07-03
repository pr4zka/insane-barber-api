import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { QuickCheckoutController } from './quick-checkout.controller';
import { QuickCheckoutRepository } from './quick-checkout.repository';
import { QuickCheckoutService } from './quick-checkout.service';

@Module({
  controllers: [QuickCheckoutController],
  providers: [QuickCheckoutService, QuickCheckoutRepository, PrismaService],
})
export class QuickCheckoutModule {}
