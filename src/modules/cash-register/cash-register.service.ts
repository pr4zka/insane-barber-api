import { Injectable, BadRequestException } from '@nestjs/common';
import { CashRegisterRepository } from './cash-register.repository';
import { OpenRegisterDto } from './dto/open-register.dto';
import { CloseRegisterDto } from './dto/close-register.dto';
import { CreateMovementDto } from './dto/create-movement.dto';

@Injectable()
export class CashRegisterService {
  constructor(
    private readonly cashRegisterRepository: CashRegisterRepository,
  ) {}

  async getCurrent() {
    return this.cashRegisterRepository.findCurrent();
  }

  async open(usuarioId: number, dto: OpenRegisterDto) {
    const current = await this.cashRegisterRepository.findCurrent();
    if (current) {
      throw new BadRequestException(
        'Ya hay una caja abierta. Debe cerrar la caja actual antes de abrir una nueva.',
      );
    }
    return this.cashRegisterRepository.open(usuarioId, dto);
  }

  async close(dto: CloseRegisterDto) {
    const current = await this.cashRegisterRepository.findCurrent();
    if (!current) {
      throw new BadRequestException(
        'No hay ninguna caja abierta para cerrar. Primero debe abrir una caja.',
      );
    }
    return this.cashRegisterRepository.close(current.id, dto);
  }

  async getMovements() {
    const current = await this.cashRegisterRepository.findCurrent();
    if (!current) {
      return [];
    }
    return this.cashRegisterRepository.getMovements(current.id);
  }

  async createMovement(dto: CreateMovementDto) {
    const current = await this.cashRegisterRepository.findCurrent();
    if (!current) {
      throw new BadRequestException(
        'No se puede registrar un movimiento porque no hay caja abierta. Abra la caja primero desde la seccion "Caja".',
      );
    }
    return this.cashRegisterRepository.createMovement(current.id, dto);
  }

  async getCollections() {
    return this.cashRegisterRepository.getCollections();
  }
}
