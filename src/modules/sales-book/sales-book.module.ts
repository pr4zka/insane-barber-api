import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SalesBookController } from './sales-book.controller';
import { SalesBookRepository } from './sales-book.repository';
import { SalesBookService } from './sales-book.service';

@Module({
  controllers: [SalesBookController],
  providers: [SalesBookService, SalesBookRepository, PrismaService],
  exports: [SalesBookService],
})
export class SalesBookModule {}
