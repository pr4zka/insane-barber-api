import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuickCheckoutDto {
  @ApiProperty({ description: 'Nombre y apellido del cliente', example: 'Juan Perez' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  clienteNombre: string;

  @ApiProperty({
    description: 'Telefono del cliente. Si ya existe un cliente con este telefono, se reutiliza.',
    example: '0981234567',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  clienteTelefono: string;

  @ApiPropertyOptional({ description: 'Email del cliente (opcional)', example: 'juan@email.com' })
  @IsEmail()
  @IsOptional()
  clienteEmail?: string;

  @ApiProperty({
    description:
      'IDs de servicios del catalogo marcados, en el orden del catalogo (asc por id). El primero se usa como servicio principal del turno.',
    example: [1, 4],
  })
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true })
  servicioIds: number[];

  @ApiPropertyOptional({ description: 'Texto libre del checkbox "Otro"', example: 'Diseño de barba' })
  @IsString()
  @IsOptional()
  @MaxLength(200)
  otroServicio?: string;

  @ApiProperty({ description: 'Precio total a cobrar en guaranies', example: 90000 })
  @IsNumber()
  @IsPositive()
  precioTotal: number;

  @ApiProperty({ description: 'Metodo de pago', example: 'efectivo' })
  @IsIn(['efectivo', 'dpago'])
  metodoPago: string;

  @ApiPropertyOptional({ description: 'ID de plataforma Dpago (solo si metodoPago=dpago)', example: 1 })
  @IsInt()
  @IsOptional()
  platformId?: number;

  @ApiPropertyOptional({ description: 'ID de la promocion a aplicar', example: 1 })
  @IsInt()
  @IsOptional()
  promocionId?: number;

  @ApiPropertyOptional({ description: 'ID del descuento a aplicar', example: 1 })
  @IsInt()
  @IsOptional()
  descuentoId?: number;
}
