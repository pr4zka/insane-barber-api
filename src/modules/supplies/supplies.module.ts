import { Module } from '@nestjs/common';
import { SuppliesController } from './supplies.controller';
import { SuppliesService } from './supplies.service';
import { SuppliesRepository } from './supplies.repository';

@Module({
  controllers: [SuppliesController],
  providers: [SuppliesService, SuppliesRepository],
  exports: [SuppliesService],
})
export class SuppliesModule {}
