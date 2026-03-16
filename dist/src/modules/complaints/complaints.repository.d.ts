import { PrismaService } from '../../prisma/prisma.service';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';
export declare class ComplaintsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: CreateComplaintDto): Promise<any>;
    update(id: number, data: UpdateComplaintDto): Promise<any>;
    getFollowUps(reclamoId: number): Promise<any>;
    createFollowUp(reclamoId: number, data: CreateFollowUpDto): Promise<any>;
}
