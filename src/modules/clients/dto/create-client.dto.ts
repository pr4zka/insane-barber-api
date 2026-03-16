import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty({ description: 'Nombre completo del cliente', example: 'Juan Perez' })
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @ApiProperty({ description: 'Telefono del cliente', example: '0981234567' })
  @IsString()
  @IsNotEmpty()
  telefono: string;

  @ApiProperty({ description: 'Email del cliente', example: 'juan.perez@email.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
