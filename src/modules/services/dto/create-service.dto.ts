import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateServiceDto {
  @ApiProperty({ description: 'Nombre del servicio', example: 'Corte de cabello' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Descripcion del servicio', example: 'Corte clasico con tijera y maquina' })
  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @ApiProperty({ description: 'Precio del servicio en guaranies', example: 35000 })
  @IsNumber()
  @IsNotEmpty()
  precio: number;

  @ApiProperty({ description: 'Duracion del servicio en minutos', example: 30 })
  @IsNumber()
  @IsNotEmpty()
  duracionMin: number;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del servicio', example: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
