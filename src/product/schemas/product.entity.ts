import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../../category/schemas/category.entity';
import {ApiProperty} from "@nestjs/swagger";

//Model
@Entity()
export class Product {
  @ApiProperty({example: 'id', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({example: 'name', description: 'Название продукта'})
  @Column({nullable: false})
  name: string;

  @ApiProperty({example: 'description', description: 'Описание продукта'})
  @Column({nullable: false})
  description: string;

  @ApiProperty({example: 'picture', description: 'Фото продукта'})
  @Column({nullable: false})
  picture: string;

  @ApiProperty({example: 'price', description: 'Цена продукта'})
  @Column({nullable: false})
  price: number;

  @ManyToOne(() => Category, (category) => category.product)
  category: Category;
}
