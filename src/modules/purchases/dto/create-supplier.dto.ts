import { IsString, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSupplierDto {
  @ApiProperty({ example: 'Distribuidora Capilar PY' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: '80012345-6' })
  @IsString()
  ruc: string;

  @ApiProperty({ example: '0981123456' })
  @IsString()
  telefono: string;

  @ApiPropertyOptional({ example: 'proveedor@email.com' })
  @IsString()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'Av. Mariscal Lopez 1234' })
  @IsString()
  @IsOptional()
  direccion?: string;

  @ApiPropertyOptional({ example: true })
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
}
