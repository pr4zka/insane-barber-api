import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SuppliesRepository } from './supplies.repository';
import { CreateSupplyDto } from './dto/create-supply.dto';
import { UpdateSupplyDto } from './dto/update-supply.dto';
import { CreateSupplyUsageDto } from './dto/create-supply-usage.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SuppliesService {
  constructor(
    private readonly suppliesRepository: SuppliesRepository,
    private readonly prisma: PrismaService,
  ) {}

  async findAll() {
    return this.suppliesRepository.findAll();
  }

  async create(dto: CreateSupplyDto) {
    return this.suppliesRepository.create(dto);
  }

  async update(id: number, dto: UpdateSupplyDto) {
    const insumo = await this.prisma.insumo.findUnique({ where: { id } });
    if (!insumo) {
      throw new NotFoundException(`El insumo #${id} no existe.`);
    }
    return this.suppliesRepository.update(id, dto);
  }

  async registerUsage(dto: CreateSupplyUsageDto) {
    const insumo = await this.prisma.insumo.findUnique({
      where: { id: dto.insumoId },
    });

    if (!insumo) {
      throw new NotFoundException(
        `El insumo #${dto.insumoId} no existe.`,
      );
    }

    if (Number(insumo.stock) < dto.cantidad) {
      throw new BadRequestException(
        `Stock insuficiente del insumo "${insumo.nombre}". Stock disponible: ${insumo.stock} ${insumo.unidad}. Cantidad solicitada: ${dto.cantidad} ${insumo.unidad}.`,
      );
    }

    return this.suppliesRepository.registerUsage(dto);
  }

  async getUsageByTurno(turnoId: number) {
    return this.suppliesRepository.getUsageByTurno(turnoId);
  }
}
