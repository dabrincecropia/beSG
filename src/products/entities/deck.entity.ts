import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Deck{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    idType: number;

    @Column()
    cardsQuantity: number;

    @Column()
    imgUrl:string;
}