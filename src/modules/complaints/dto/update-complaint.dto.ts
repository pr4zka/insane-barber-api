import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateComplaintDto {
  @ApiPropertyOptional({ description: 'Estado de la queja', example: 'resuelta' })
  @IsOptional()
  @IsString()
  estado?: string;

  @ApiPropertyOptional({ description: 'Descripcion actualizada de la queja', example: 'Se resolvio con un nuevo corte gratuito' })
  @IsOptional()
  @IsString()
  descripcion?: string;
}
