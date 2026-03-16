import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSupplyDto {
  @ApiProperty({ description: 'Nombre del insumo', example: 'Gel para cabello' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripcion del insumo', example: 'Gel fijador extra fuerte 500ml' })
  @IsString()
  descripcion: string;

  @ApiProperty({ description: 'Unidad de medida', example: 'unidad' })
  @IsString()
  unidad: string;

  @ApiProperty({ description: 'Stock disponible', example: 50 })
  @IsNumber()
  stock: number;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del insumo', example: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
