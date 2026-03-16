import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateDiscountDto {
  @ApiProperty({ description: 'Nombre del descuento', example: 'Descuento cliente frecuente' })
  @IsString()
  nombre: string;

  @ApiProperty({ description: 'Descripcion del descuento', example: 'Descuento para clientes con mas de 10 visitas' })
  @IsString()
  descripcion: string;

  @ApiProperty({ description: 'Porcentaje de descuento', example: 15 })
  @IsNumber()
  porcentaje: number;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del descuento', example: true })
  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
