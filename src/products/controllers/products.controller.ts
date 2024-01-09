import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('api/products')
export class ProductsController {

    @Get()
    getAll(): string[] {
        return ['producto1', 'producto2', 'producto3',  'producto4'];
    }

    @Get(':id')
    getOne(@Param('id')id: number): number {
        return id;
    }

    @Post()
    create(@Body( ) body: any): any {
        return body.name;
    }

    @Put(':id')
    update(@Param('id')id: number, @Body() body: any): any {
        return {
            message: 'actualizado',
            id,
            body
        };
    }

    @Delete(':id') 
    delete(@Param('id')id: number): any {
        return {
            message: 'eliminado',
            id
        };
    }

}
