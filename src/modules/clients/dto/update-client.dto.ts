import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateClientDto {
  @ApiPropertyOptional({ description: 'Nombre completo del cliente', example: 'Juan Perez' })
  @IsString()
  @IsOptional()
  nombre?: string;

  @ApiPropertyOptional({ description: 'Telefono del cliente', example: '0981234567' })
  @IsString()
  @IsOptional()
  telefono?: string;

  @ApiPropertyOptional({ description: 'Email del cliente', example: 'juan.perez@email.com' })
  @IsEmail()
  @IsOptional()
  email?: string;
}
