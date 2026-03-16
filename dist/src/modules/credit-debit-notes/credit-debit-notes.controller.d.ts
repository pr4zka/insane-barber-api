import { CreditDebitNotesService } from './credit-debit-notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
export declare class CreditDebitNotesController {
    private readonly creditDebitNotesService;
    constructor(creditDebitNotesService: CreditDebitNotesService);
    findAll(): Promise<any>;
    create(dto: CreateNoteDto): Promise<any>;
}
