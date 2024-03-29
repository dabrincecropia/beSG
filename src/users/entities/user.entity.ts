import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email:string;

    @Column()
    pwd:string;

    @Column()
    phoneNumber:string;


}