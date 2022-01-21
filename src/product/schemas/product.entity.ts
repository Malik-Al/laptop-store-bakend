import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../../category/schemas/category.entity';

//Model
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  name: string;

  @Column({nullable: false})
  description: string;

  @Column({nullable: false})
  picture: string;

  @Column({nullable: false})
  price: number;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
}
