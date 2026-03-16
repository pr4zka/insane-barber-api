import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateComplaintDto {
  @ApiProperty({ description: 'ID del cliente que realiza la queja', example: 1 })
  @IsInt()
  clienteId: number;

  @ApiProperty({ description: 'Descripcion detallada de la queja', example: 'El corte no quedo como lo solicite' })
  @IsString()
  descripcion: string;
}
