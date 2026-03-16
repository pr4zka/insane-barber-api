import { Injectable, NotFoundException } from '@nestjs/common';
import { PaymentsRepository } from './payments.repository';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { CreateDpagoDto } from './dto/create-dpago.dto';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async findAll() {
    return this.paymentsRepository.findAll();
  }

  async findById(id: number) {
    const payment = await this.paymentsRepository.findById(id);
    if (!payment) {
      throw new NotFoundException(
        `No se encontró el pago #${id}. Es posible que haya sido eliminado.`,
      );
    }
    return payment;
  }

  async findPending() {
    return this.paymentsRepository.findPending();
  }

  async create(dto: CreatePaymentDto) {
    return this.paymentsRepository.create(dto);
  }

  async createDpago(dto: CreateDpagoDto) {
    return this.paymentsRepository.create({
      turnoId: dto.turnoId,
      metodoPago: 'dpago',
      monto: dto.monto,
      promocionId: dto.promocionId,
      descuentoId: dto.descuentoId,
    });
  }

  async generateDpagoLink(dto: CreateDpagoDto) {
    const reference = `DPAGO-${Date.now()}-${dto.platformId}`;
    return {
      link: `https://dpago.example.com/pay/${reference}`,
      reference,
      monto: dto.monto,
      platformId: dto.platformId,
    };
  }

  async findAllDeliveryNotes() {
    return this.paymentsRepository.findAllDeliveryNotes();
  }

  async createDeliveryNote(turnoId: number, observacion: string) {
    return this.paymentsRepository.createDeliveryNote(turnoId, observacion);
  }

  async findByDpagoRef(reference: string) {
    const payment = await this.paymentsRepository.findByDpagoRef(reference);
    if (!payment) {
      throw new NotFoundException(
        `No se encontró ningun pago con la referencia Dpago "${reference}".`,
      );
    }
    return payment;
  }

  async getReceipt(id: number) {
    const payment = await this.findById(id);
    return {
      ...payment,
      receiptGenerated: true,
      message: 'Recibo generado correctamente',
    };
  }
}
