import { Injectable } from '@nestjs/common';
import { CreditDebitNotesRepository } from './credit-debit-notes.repository';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class CreditDebitNotesService {
  constructor(
    private readonly creditDebitNotesRepository: CreditDebitNotesRepository,
  ) {}

  async findAll() {
    return this.creditDebitNotesRepository.findAll();
  }

  async create(dto: CreateNoteDto) {
    return this.creditDebitNotesRepository.create(dto);
  }
}
