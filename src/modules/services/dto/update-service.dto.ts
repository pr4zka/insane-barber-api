import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateServiceDto {
  @ApiPropertyOptional({ description: 'Nombre del servicio', example: 'Corte de cabello' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Descripcion del servicio', example: 'Corte clasico con tijera y maquina' })
  @IsString()
  @IsOptional()
  descripcion?: string;

  @ApiPropertyOptional({ description: 'Precio del servicio en guaranies', example: 35000 })
  @IsNumber()
  @IsOptional()
  precio?: number;

  @ApiPropertyOptional({ description: 'Duracion del servicio en minutos', example: 30 })
  @IsNumber()
  @IsOptional()
  duracionMin?: number;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del servicio', example: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
