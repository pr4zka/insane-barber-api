import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdjustmentDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  ordenCompraId: number;

  @ApiProperty({ example: 'cantidad' })
  @IsString()
  tipo: string;

  @ApiProperty({ example: 'Correccion de cantidad recibida' })
  @IsString()
  descripcion: string;

  @ApiProperty({ example: 150000 })
  @IsNumber()
  montoAnterior: number;

  @ApiProperty({ example: 120000 })
  @IsNumber()
  montoNuevo: number;
}
