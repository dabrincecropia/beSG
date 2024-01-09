import { Module } from '@nestjs/common';
import { ProductsService } from './services/products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './controllers/products.controller';
import { Product } from './entities/product.entity';
import { ProductType } from './entities/productType.entity';
import { Deck } from './entities/deck.entity';
import { DeckType } from './entities/deckType.entity';


@Module({
  imports:[
    TypeOrmModule.forFeature([Product,ProductType,ProductType,Deck,DeckType]),
  ],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
