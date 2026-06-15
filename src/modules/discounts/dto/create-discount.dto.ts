import { IsString, IsNumber, IsOptional, IsBoolean, IsIn } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDiscountDto {
  @ApiProperty({ description: 'Nombre del descuento', example: 'Descuento cliente frecuente' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripcion del descuento', example: 'Descuento para clientes con mas de 10 visitas' })
  @IsString()
  descripcion: string;

  @ApiPropertyOptional({ description: 'Tipo de descuento', enum: ['porcentaje', 'monto_fijo'], example: 'porcentaje' })
  @IsOptional()
  @IsIn(['porcentaje', 'monto_fijo'])
  tipo?: string;

  @ApiPropertyOptional({ description: 'Porcentaje de descuento (si tipo = porcentaje)', example: 15 })
  @IsOptional()
  @IsNumber()
  porcentaje?: number;

  @ApiPropertyOptional({ description: 'Monto fijo en guaranies (si tipo = monto_fijo)', example: 5000 })
  @IsOptional()
  @IsNumber()
  monto?: number;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del descuento', example: true })
  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
