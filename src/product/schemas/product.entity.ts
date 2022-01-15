import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../../category/schemas/category.entity';

//Model
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @Column()
  price: number;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
}
