import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ServicesController } from './services.controller';
import { ServicesRepository } from './services.repository';
import { ServicesService } from './services.service';

@Module({
  controllers: [ServicesController],
  providers: [ServicesService, ServicesRepository, PrismaService],
  exports: [ServicesService],
})
export class ServicesModule {}
