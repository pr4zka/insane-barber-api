import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class OpenRegisterDto {
  @ApiProperty({ description: 'Monto inicial de apertura de caja en guaranies', example: 500000 })
  @IsNumber()
  montoInicial: number;
}
