import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: 'Nombre completo del usuario', example: 'Carlos Lopez' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Email del usuario', example: 'carlos@insanebarber.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ description: 'Contrasena del usuario', example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ description: 'ID del rol asignado', example: 1 })
  @IsInt()
  rolId: number;

  @ApiPropertyOptional({ description: 'Estado del usuario', example: true, default: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean = true;
}
