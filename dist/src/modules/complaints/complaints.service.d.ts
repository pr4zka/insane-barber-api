import { ComplaintsRepository } from './complaints.repository';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
export declare class ComplaintsService {
    private readonly complaintsRepository;
    constructor(complaintsRepository: ComplaintsRepository);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: CreateComplaintDto): Promise<any>;
    update(id: number, data: UpdateComplaintDto): Promise<any>;
    getFollowUps(reclamoId: number): Promise<any>;
    createFollowUp(reclamoId: number, data: CreateFollowUpDto): Promise<any>;
}
