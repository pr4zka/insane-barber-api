import { IsString, IsNumber, IsOptional, IsInt, IsPositive } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// Gasto / servicio directo en el libro de compras (sin orden de compra ni stock).
export class CreateExpenseDto {
  @ApiProperty({ description: 'Proveedor / prestador', example: 'Tapiceria Lopez' })
  @IsString()
  proveedor: string;

  @ApiProperty({ description: 'Monto total en guaranies (IVA incluido)', example: 350000 })
  @IsNumber()
  @IsPositive()
  monto: number;

  @ApiPropertyOptional({ description: 'Categoria de la compra (key)', example: 'equipos' })
  @IsString()
  @IsOptional()
  categoria?: string;

  @ApiPropertyOptional({ description: 'Detalle libre', example: 'Tapizado de sofa de espera' })
  @IsString()
  @IsOptional()
  detalle?: string;

  @ApiPropertyOptional({ description: 'Fecha del gasto (ISO). Por defecto hoy.', example: '2026-06-08' })
  @IsString()
  @IsOptional()
  fecha?: string;

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
