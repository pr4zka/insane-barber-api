import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { ClientsService } from './clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService, ClientsRepository, PrismaService],
  exports: [ClientsService],
})
export class ClientsModule {}
