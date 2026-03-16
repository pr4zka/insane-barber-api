import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CloseRegisterDto {
  @ApiProperty({ description: 'Monto final al cierre de caja en guaranies', example: 1250000 })
  @IsNumber()
  montoFinal: number;
}
