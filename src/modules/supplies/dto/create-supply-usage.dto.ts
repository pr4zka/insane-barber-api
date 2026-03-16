import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSupplyUsageDto {
  @ApiProperty({ description: 'ID del turno', example: 1 })
  @IsNumber()
  turnoId: number;

  @ApiProperty({ description: 'ID del insumo', example: 1 })
  @IsNumber()
  insumoId: number;

  @ApiProperty({ description: 'Cantidad utilizada', example: 2 })
  @IsNumber()
  cantidad: number;
}
