import { Module } from '@nestjs/common';
import { ComplaintsController } from './complaints.controller';
import { ComplaintsService } from './complaints.service';
import { ComplaintsRepository } from './complaints.repository';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ComplaintsController],
  providers: [ComplaintsService, ComplaintsRepository, PrismaService],
  exports: [ComplaintsService],
})
export class ComplaintsModule {}
