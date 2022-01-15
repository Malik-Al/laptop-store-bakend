import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../../product/schemas/product.entity';

//Model
@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
