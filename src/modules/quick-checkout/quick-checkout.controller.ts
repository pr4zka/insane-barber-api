import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import { QuickCheckoutService } from './quick-checkout.service';
import { CreateQuickCheckoutDto } from './dto/create-quick-checkout.dto';

@ApiTags('Quick Checkout')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('quick-checkout')
export class QuickCheckoutController {
  constructor(private readonly quickCheckoutService: QuickCheckoutService) {}

  @Post()
  @Roles('barbero')
  @ApiOperation({
    summary: 'Registrar cliente + servicio + cobro en un solo paso (flujo rapido de barbero)',
  })
  @ApiResponse({ status: 201, description: 'Cliente, turno y cobro registrados exitosamente' })
  create(
    @CurrentUser('sub') usuarioId: number,
    @Body() dto: CreateQuickCheckoutDto,
  ) {
    return this.quickCheckoutService.create(usuarioId, dto);
  }
}
