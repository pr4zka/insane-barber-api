import { CreditDebitNotesRepository } from './credit-debit-notes.repository';
import { CreateNoteDto } from './dto/create-note.dto';
export declare class CreditDebitNotesService {
    private readonly creditDebitNotesRepository;
    constructor(creditDebitNotesRepository: CreditDebitNotesRepository);
    findAll(): Promise<any>;
    create(dto: CreateNoteDto): Promise<any>;
}
