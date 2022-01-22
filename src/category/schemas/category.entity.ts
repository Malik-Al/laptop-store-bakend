import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../../product/schemas/product.entity';
import { ApiProperty } from "@nestjs/swagger";

//Model
@Entity()
export class Category {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({example: 'name', description: 'Название категорий'})
  @Column({nullable: false})
  name: string;

  @OneToMany(() => Product, (product) => product.category)
  product: Product[];
}
