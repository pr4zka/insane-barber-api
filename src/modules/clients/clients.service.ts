import { Injectable, NotFoundException } from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientsService {
  constructor(private readonly clientsRepository: ClientsRepository) {}

  async findAll() {
    return this.clientsRepository.findAll();
  }

  async findById(id: number) {
    const client = await this.clientsRepository.findById(id);
    if (!client) {
      throw new NotFoundException(
        `El cliente #${id} no existe o fue eliminado.`,
      );
    }
    return client;
  }

  async create(dto: CreateClientDto) {
    return this.clientsRepository.create(dto);
  }

  async update(id: number, dto: UpdateClientDto) {
    await this.findById(id);
    return this.clientsRepository.update(id, dto);
  }
}
