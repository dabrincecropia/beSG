import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [ProductsModule, UsersModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
