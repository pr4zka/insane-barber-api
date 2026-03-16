import { IsNumber, IsString, IsOptional, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBudgetDetailDto {
  @ApiProperty({ description: 'ID del servicio', example: 1 })
  @IsNumber()
  servicioId: number;

  @ApiProperty({ description: 'Cantidad de servicios', example: 1 })
  @IsNumber()
  cantidad: number;

  @ApiProperty({ description: 'Precio unitario del servicio en guaranies', example: 35000 })
  @IsNumber()
  precioUnitario: number;
}

export class CreateBudgetDto {
  @ApiProperty({ description: 'ID del cliente', example: 1 })
  @IsNumber()
  clienteId: number;

  @ApiPropertyOptional({ description: 'Observacion adicional del presupuesto', example: 'Presupuesto para evento corporativo' })
  @IsString()
  @IsOptional()
  observacion?: string;

  @ApiProperty({ description: 'Lista de detalles del presupuesto', type: [CreateBudgetDetailDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateBudgetDetailDto)
  detalles: CreateBudgetDetailDto[];
}
