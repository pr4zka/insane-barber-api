import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateLibroComprasDto {
  @ApiPropertyOptional({ description: 'Categoria de la compra (key)', example: 'cosmeticos' })
  @IsString()
  @IsOptional()
  categoria?: string;

  @ApiPropertyOptional({ description: 'Detalle libre de la compra', example: 'Tinturas y decolorante' })
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

  @ApiPropertyOptional({ description: 'RUC del proveedor', example: '80012345-6' })
  @IsString()
  @IsOptional()
  rucProveedor?: string;

  @ApiPropertyOptional({ description: 'Tasa de IVA (10, 5 o 0 para exento)', example: 10 })
  @IsInt()
  @IsOptional()
  tasaIva?: number;
}
