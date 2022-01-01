import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Product} from "../../product/schemas/product.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Product, product => product.category)
    product: Product[];
}