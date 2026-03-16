import { Injectable, NotFoundException } from '@nestjs/common';
import { ServicesRepository } from './services.repository';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private readonly servicesRepository: ServicesRepository) {}

  async findAll() {
    return this.servicesRepository.findAll();
  }

  async findById(id: number) {
    const service = await this.servicesRepository.findById(id);
    if (!service) {
      throw new NotFoundException(
        `El servicio #${id} no existe o fue eliminado.`,
      );
    }
    return service;
  }

  async create(dto: CreateServiceDto) {
    return this.servicesRepository.create(dto);
  }

  async update(id: number, dto: UpdateServiceDto) {
    await this.findById(id);
    return this.servicesRepository.update(id, dto);
  }

  async remove(id: number) {
    await this.findById(id);
    return this.servicesRepository.remove(id);
  }
}
