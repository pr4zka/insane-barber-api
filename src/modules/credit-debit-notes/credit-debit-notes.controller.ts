import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CreditDebitNotesService } from './credit-debit-notes.service';
import { CreateNoteDto } from './dto/create-note.dto';

@ApiTags('Credit Debit Notes')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('credit-debit-notes')
export class CreditDebitNotesController {
  constructor(
    private readonly creditDebitNotesService: CreditDebitNotesService,
  ) {}

  @Get()
  @Roles('administrador')
  @ApiOperation({ summary: 'Listar todas las notas de credito/debito' })
  @ApiResponse({ status: 200, description: 'Lista de notas de credito/debito' })
  findAll() {
    return this.creditDebitNotesService.findAll();
  }

  @Post()
  @Roles('administrador')
  @ApiOperation({ summary: 'Crear una nota de credito o debito' })
  @ApiResponse({ status: 201, description: 'Nota creada exitosamente' })
  create(@Body() dto: CreateNoteDto) {
    return this.creditDebitNotesService.create(dto);
  }
}
