import { Module } from '@nestjs/common';
import { SalesService } from './services/sales.service';
import { SalesController } from './controllers/sales.controller';

@Module({
  providers: [SalesService],
  controllers: [SalesController]
})
export class SalesModule {}
