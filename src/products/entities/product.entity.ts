import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    typeId: number;

    @Column()
    description: string;

    @Column()
    isOnSomeDeck:boolean;

    @Column()
    imgUrl:string;
}