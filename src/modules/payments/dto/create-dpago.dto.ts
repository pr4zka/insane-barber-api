import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDpagoDto {
  @ApiProperty({ description: 'ID del turno asociado al pago', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  turnoId: number;

  @ApiProperty({ description: 'Monto del pago en guaranies', example: 35000 })
  @IsNumber()
  @IsNotEmpty()
  monto: number;

  @ApiProperty({ description: 'ID de la plataforma dPago', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  platformId: number;

  @ApiPropertyOptional({ description: 'ID de la promocion a aplicar', example: 1 })
  @IsNumber()
  @IsOptional()
  promocionId?: number;

  @ApiPropertyOptional({ description: 'ID del descuento a aplicar', example: 1 })
  @IsNumber()
  @IsOptional()
  descuentoId?: number;
}
