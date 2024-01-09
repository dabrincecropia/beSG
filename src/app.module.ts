import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { SalesModule } from './sales/sales.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ProductsModule, 
    UsersModule, 
    SalesModule,
    TypeOrmModule.forRoot({ // TypeOrmModule.forRoot() configures the connection to the database    
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5432, // database host
      username: 'dab', // username
      password: '123', // user password
      database: 'bdSG', // name of our database,
      entities: ['dist/**/*.entity{.ts,.js}'], // entities to load
      synchronize: false, // synchronize database schema with typeorm entities,
      retryDelay: 3000,
      retryAttempts: 10,  
    }),],

  controllers: [],
  providers: [],
})
export class AppModule {}
