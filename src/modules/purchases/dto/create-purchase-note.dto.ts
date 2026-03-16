import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseNoteDto {
  @ApiProperty({ description: 'ID de la orden de compra', example: 1 })
  @IsNumber()
  ordenCompraId: number;

  @ApiProperty({ description: 'Tipo: credito o debito', example: 'credito' })
  @IsString()
  tipo: string;

  @ApiProperty({ description: 'Monto en guaranies', example: 50000 })
  @IsNumber()
  monto: number;

  @ApiProperty({ description: 'Motivo de la nota', example: 'Devolucion de productos defectuosos' })
  @IsString()
  motivo: string;
}
