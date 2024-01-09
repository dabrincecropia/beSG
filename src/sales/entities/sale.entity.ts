import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Sale{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    totalPrice: number;

}