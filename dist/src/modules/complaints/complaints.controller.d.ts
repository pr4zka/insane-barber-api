import { ComplaintsService } from './complaints.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
export declare class ComplaintsController {
    private readonly complaintsService;
    constructor(complaintsService: ComplaintsService);
    findAll(): Promise<any>;
    create(dto: CreateComplaintDto): Promise<any>;
    update(id: number, dto: UpdateComplaintDto): Promise<any>;
    getFollowUps(id: number): Promise<any>;
    createFollowUp(id: number, dto: CreateFollowUpDto): Promise<any>;
}
