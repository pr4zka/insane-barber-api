import { IsNumber, IsString, IsOptional, IsArray, IsInt, ValidateNested } from 'class-validator';
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

  @ApiPropertyOptional({ description: 'Categoria de la compra (key)', example: 'insumos' })
  @IsString()
  @IsOptional()
  categoria?: string;

  @ApiPropertyOptional({ description: 'Detalle libre de la compra', example: 'Shampoo y ceras' })
  @IsString()
  @IsOptional()
  detalle?: string;

  @ApiPropertyOptional({ description: 'Tipo de comprobante', example: 'factura' })
  @IsString()
  @IsOptional()
  tipoComprobante?: string;

  @ApiPropertyOptional({ description: 'Numero de comprobante', example: '001-001-0001234' })
  @IsString()
  @IsOptional()
  nroComprobante?: string;

  @ApiPropertyOptional({ description: 'Timbrado SET', example: '12345678' })
  @IsString()
  @IsOptional()
  timbrado?: string;

  @ApiPropertyOptional({ description: 'Condicion de compra', example: 'contado' })
  @IsString()
  @IsOptional()
  condicion?: string;

  @ApiPropertyOptional({ description: 'Tasa de IVA (10, 5 o 0 para exento)', example: 10 })
  @IsInt()
  @IsOptional()
  tasaIva?: number;

  @ApiProperty({ description: 'Detalles de la orden', type: [CreatePurchaseOrderDetailDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePurchaseOrderDetailDto)
  detalles: CreatePurchaseOrderDetailDto[];
}
