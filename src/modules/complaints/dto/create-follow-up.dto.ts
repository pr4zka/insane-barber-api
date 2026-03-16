import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFollowUpDto {
  @ApiProperty({ description: 'Comentario del seguimiento', example: 'Se contacto al cliente para resolver el problema' })
  @IsString()
  comentario: string;

  @ApiProperty({ description: 'Nuevo estado de la queja', example: 'en_proceso' })
  @IsString()
  estadoNuevo: string;
}
