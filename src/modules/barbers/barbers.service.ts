import { Injectable } from '@nestjs/common';
import { BarbersRepository } from './barbers.repository';
import { CreateBarberDto } from './dto/create-barber.dto';

@Injectable()
export class BarbersService {
  constructor(private readonly barbersRepository: BarbersRepository) {}

  async findAll() {
    return this.barbersRepository.findAll();
  }

  async create(dto: CreateBarberDto) {
    return this.barbersRepository.create(dto);
  }
}
