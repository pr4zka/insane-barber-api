import { IsInt, IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAppointmentDto {
  @ApiPropertyOptional({ description: 'ID del cliente', example: 1 })
  @IsOptional()
  @IsInt()
  clienteId?: number;

  @ApiPropertyOptional({ description: 'ID del barbero', example: 1 })
  @IsOptional()
  @IsInt()
  barberoId?: number;

  @ApiPropertyOptional({ description: 'ID del servicio', example: 1 })
  @IsOptional()
  @IsInt()
  servicioId?: number;

  @ApiPropertyOptional({ description: 'Fecha de la cita (YYYY-MM-DD)', example: '2026-03-20' })
  @IsOptional()
  @IsString()
  fecha?: string;

  @ApiPropertyOptional({ description: 'Hora de la cita (HH:mm)', example: '10:30' })
  @IsOptional()
  @IsString()
  hora?: string;

  @ApiPropertyOptional({ description: 'Estado de la cita', example: 'confirmada' })
  @IsOptional()
  @IsString()
  estado?: string;

  @ApiPropertyOptional({ description: 'Observacion adicional', example: 'Prefiere corte con tijera' })
  @IsOptional()
  @IsString()
  observacion?: string;
}
