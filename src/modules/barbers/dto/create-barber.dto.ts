import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBarberDto {
  @ApiProperty({ description: 'Nombre completo del barbero', example: 'Miguel Rodriguez' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Telefono del barbero', example: '0971234567' })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({ description: 'Especialidad del barbero', example: 'Cortes modernos y degradados' })
  @IsString()
  @IsNotEmpty()
  especialidad: string;

  @ApiPropertyOptional({ description: 'Estado activo/inactivo del barbero', example: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
