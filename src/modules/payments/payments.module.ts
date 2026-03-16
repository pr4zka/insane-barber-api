import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { PaymentsController } from './payments.controller';
import { PaymentsRepository } from './payments.repository';
import { PaymentsService } from './payments.service';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, PaymentsRepository, PrismaService],
  exports: [PaymentsService],
})
export class PaymentsModule {}
