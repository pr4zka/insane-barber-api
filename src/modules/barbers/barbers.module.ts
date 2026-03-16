import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { BarbersController } from './barbers.controller';
import { BarbersRepository } from './barbers.repository';
import { BarbersService } from './barbers.service';

@Module({
  controllers: [BarbersController],
  providers: [BarbersService, BarbersRepository, PrismaService],
  exports: [BarbersService],
})
export class BarbersModule {}
