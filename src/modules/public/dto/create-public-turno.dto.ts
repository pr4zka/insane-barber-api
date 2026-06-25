import {
  IsString,
  IsEmail,
  IsOptional,
  IsInt,
  Matches,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePublicTurnoDto {
  @ApiProperty({ description: 'Nombre del cliente', example: 'Juan Perez' })
  @IsString()
  @MinLength(2)
  nombre: string;

  @ApiProperty({ description: 'Correo del cliente', example: 'juan@mail.com' })
  @IsEmail()
  correo: string;

  @ApiProperty({ description: 'Telefono del cliente', example: '+595 981 123 456' })
  @IsString()
  @MinLength(5)
  numero: string;

  @ApiProperty({ description: 'Fecha del turno (YYYY-MM-DD)', example: '2026-07-01' })
  @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'fecha debe tener formato YYYY-MM-DD' })
  fecha: string;

  @ApiProperty({ description: 'Hora del turno (HH:mm)', example: '10:30' })
  @Matches(/^\d{2}:\d{2}$/, { message: 'hora debe tener formato HH:mm' })
  hora: string;

  @ApiPropertyOptional({ description: 'ID de servicio (opcional)', example: 1 })
  @IsOptional()
  @IsInt()
  servicioId?: number;

  @ApiPropertyOptional({ description: 'ID de barbero (opcional)', example: 1 })
  @IsOptional()
  @IsInt()
  barberoId?: number;
}
