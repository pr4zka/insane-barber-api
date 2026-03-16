import { IsInt, IsString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAppointmentDto {
  @ApiProperty({ description: 'ID del cliente', example: 1 })
  @IsInt()
  clienteId: number;

  @ApiProperty({ description: 'ID del barbero', example: 1 })
  @IsInt()
  barberoId: number;

  @ApiProperty({ description: 'ID del servicio', example: 1 })
  @IsInt()
  servicioId: number;

  @ApiProperty({ description: 'Fecha de la cita (YYYY-MM-DD)', example: '2026-03-20' })
  @IsString()
  fecha: string;

  @ApiProperty({ description: 'Hora de la cita (HH:mm)', example: '10:30' })
  @IsString()
  hora: string;

  @ApiPropertyOptional({ description: 'Observacion adicional', example: 'Prefiere corte con tijera' })
  @IsOptional()
  @IsString()
  observacion?: string;
}
