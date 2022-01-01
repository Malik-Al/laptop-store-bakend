import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Category} from "../../category/schemas/category.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    picture: string;

    @Column()
    price: number;

    @ManyToOne(() => Category, category => category.product)
    category: Category;

}