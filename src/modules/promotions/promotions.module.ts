import { Module } from '@nestjs/common';
import { PromotionsController } from './promotions.controller';
import { PromotionsService } from './promotions.service';
import { PromotionsRepository } from './promotions.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [PromotionsController],
  providers: [PromotionsService, PromotionsRepository, PrismaService],
  exports: [PromotionsService],
})
export class PromotionsModule {}
