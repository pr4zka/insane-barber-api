import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {
  @ApiProperty({ description: 'ID del pago asociado', example: 1 })
  @IsNumber()
  @IsNotEmpty()
  pagoId: number;

  @ApiProperty({ description: 'Tipo de nota', example: 'credito', enum: ['credito', 'debito'] })
  @IsString()
  @IsIn(['credito', 'debito'])
  tipo: string;

  @ApiProperty({ description: 'Monto de la nota en guaranies', example: 10000 })
  @IsNumber()
  @IsNotEmpty()
  monto: number;

  @ApiProperty({ description: 'Motivo de la nota', example: 'Devolucion por servicio no realizado' })
  @IsString()
  @IsNotEmpty()
  motivo: string;
}
