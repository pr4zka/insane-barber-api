import { IsNumber, IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePurchaseOrderDetailDto {
  @ApiProperty({ description: 'ID del insumo', example: 1 })
  @IsNumber()
  insumoId: number;

  @ApiProperty({ description: 'Cantidad', example: 10 })
  @IsNumber()
  cantidad: number;

  @ApiProperty({ description: 'Precio unitario en guaranies', example: 15000 })
  @IsNumber()
  precioUnitario: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty({ description: 'ID del proveedor', example: 1 })
  @IsNumber()
  proveedorId: number;

  @ApiPropertyOptional({ description: 'Observacion', example: 'Pedido urgente' })
  @IsString()
  @IsOptional()
  observacion?: string;

  @ApiProperty({ description: 'Detalles de la orden', type: [CreatePurchaseOrderDetailDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseOrderDetailDto)
  detalles: CreatePurchaseOrderDetailDto[];
}
