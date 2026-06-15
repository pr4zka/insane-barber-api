import { IsString, IsNumber, IsOptional, IsBoolean, IsIn } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdatePromotionDto {
  @ApiPropertyOptional({ description: 'Nombre de la promocion', example: 'Promo Verano' })
  @IsOptional()
  @IsString()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Descripcion de la promocion', example: 'Descuento especial en cortes durante el verano' })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiPropertyOptional({ description: 'Tipo de promocion', enum: ['porcentaje', 'monto_fijo'], example: 'porcentaje' })
  @IsOptional()
  @IsIn(['porcentaje', 'monto_fijo'])
  tipo?: string;

  @ApiPropertyOptional({ description: 'Porcentaje de descuento (si tipo = porcentaje)', example: 20 })
  @IsOptional()
  @IsNumber()
  porcentaje?: number;

  @ApiPropertyOptional({ description: 'Monto fijo en guaranies (si tipo = monto_fijo)', example: 5000 })
  @IsOptional()
  @IsNumber()
  monto?: number;

  @ApiPropertyOptional({ description: 'Fecha de inicio (YYYY-MM-DD)', example: '2026-01-01' })
  @IsOptional()
  @IsString()
  fechaInicio?: string;

  @ApiPropertyOptional({ description: 'Fecha de fin (YYYY-MM-DD)', example: '2026-03-31' })
  @IsOptional()
  @IsString()
  fechaFin?: string;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo de la promocion', example: true })
  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
