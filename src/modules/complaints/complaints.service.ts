import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { ComplaintsRepository } from './complaints.repository';
import { CreateComplaintDto } from './dto/create-complaint.dto';
import { UpdateComplaintDto } from './dto/update-complaint.dto';
import { CreateFollowUpDto } from './dto/create-follow-up.dto';

@Injectable()
export class ComplaintsService {
  constructor(private readonly complaintsRepository: ComplaintsRepository) {}

  async findAll() {
    return this.complaintsRepository.findAll();
  }

  async findById(id: number) {
    const reclamo = await this.complaintsRepository.findById(id);
    if (!reclamo) {
      throw new NotFoundException(`El reclamo #${id} no existe.`);
    }
    return reclamo;
  }

  async create(data: CreateComplaintDto) {
    return this.complaintsRepository.create(data);
  }

  async update(id: number, data: UpdateComplaintDto) {
    await this.findById(id);
    return this.complaintsRepository.update(id, data);
  }

  async getFollowUps(reclamoId: number) {
    await this.findById(reclamoId);
    return this.complaintsRepository.getFollowUps(reclamoId);
  }

  async createFollowUp(reclamoId: number, data: CreateFollowUpDto) {
    const reclamo = await this.findById(reclamoId);

    if (reclamo.estado === 'resuelto') {
      throw new BadRequestException(
        'Este reclamo ya fue resuelto. No se pueden agregar mas seguimientos.',
      );
    }

    return this.complaintsRepository.createFollowUp(reclamoId, data);
  }
}
