import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreditDebitNotesController } from './credit-debit-notes.controller';
import { CreditDebitNotesRepository } from './credit-debit-notes.repository';
import { CreditDebitNotesService } from './credit-debit-notes.service';

@Module({
  controllers: [CreditDebitNotesController],
  providers: [CreditDebitNotesService, CreditDebitNotesRepository, PrismaService],
  exports: [CreditDebitNotesService],
})
export class CreditDebitNotesModule {}
