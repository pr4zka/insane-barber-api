import { Module } from '@nestjs/common';
import { DiscountsController } from './discounts.controller';
import { DiscountsService } from './discounts.service';
import { DiscountsRepository } from './discounts.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [DiscountsController],
  providers: [DiscountsService, DiscountsRepository, PrismaService],
  exports: [DiscountsService],
})
export class DiscountsModule {}
