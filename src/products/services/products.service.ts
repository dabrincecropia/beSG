import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entities/product.entity';    

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(Product) private readonly productRepo:Repository<Product>,
    ){}


    findAll():Promise<Product[]>{  
       return this.productRepo.find();
    }

    findOne(id:number):Promise<Product>{
        return this.productRepo.findOneById(id);
    }

    create(body:any){
        const newProduct = this.productRepo.create(body);
        return this.productRepo.save(newProduct);
    }

    async update(id:number , body:any){
        const data= await this.productRepo.findOneById(id);
        this.productRepo.merge(data,body);
        return this.productRepo.save(data);
    }

    async delete(id:number){
        await this.productRepo.delete(id);
        return true;
    }
}
