import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePromotionDto {
  @ApiProperty({ description: 'Nombre de la promocion', example: 'Promo Verano' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripcion de la promocion', example: 'Descuento especial en cortes durante el verano' })
  @IsString()
  descripcion: string;

  @ApiProperty({ description: 'Porcentaje de descuento', example: 20 })
  @IsNumber()
  porcentaje: number;

  @ApiProperty({ description: 'Fecha de inicio (YYYY-MM-DD)', example: '2026-01-01' })
  @IsString()
  fechaInicio: string;

  @ApiProperty({ description: 'Fecha de fin (YYYY-MM-DD)', example: '2026-03-31' })
  @IsString()
  fechaFin: string;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo de la promocion', example: true })
  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
