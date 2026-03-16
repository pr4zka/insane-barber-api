import { IsString, IsNumber, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovementDto {
  @ApiProperty({ description: 'Tipo de movimiento', example: 'ingreso', enum: ['ingreso', 'egreso'] })
  @IsString()
  @IsIn(['ingreso', 'egreso'])
  tipo: string;

  @ApiProperty({ description: 'Concepto del movimiento', example: 'Pago de servicio de corte' })
  @IsString()
  concepto: string;

  @ApiProperty({ description: 'Monto del movimiento en guaranies', example: 35000 })
  @IsNumber()
  monto: number;
}
