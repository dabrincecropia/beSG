import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class DeckType{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    imgUrl:string;
}
