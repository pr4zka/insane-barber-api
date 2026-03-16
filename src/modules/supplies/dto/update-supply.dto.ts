import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateSupplyDto {
  @ApiPropertyOptional({ description: 'Nombre del insumo', example: 'Gel para cabello' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Descripcion del insumo', example: 'Gel fijador extra fuerte 500ml' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiPropertyOptional({ description: 'Unidad de medida', example: 'unidad' })
  @IsString()
  @IsOptional()
  unidad?: string;

  @ApiPropertyOptional({ description: 'Stock disponible', example: 50 })
  @IsNumber()
  @IsOptional()
  stock?: number;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del insumo', example: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
