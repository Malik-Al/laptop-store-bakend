import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Models } from './models.entity';
import {ApiProperty} from "@nestjs/swagger";


@Entity()
export class Laptop {
  @ApiProperty({example: 'id', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({example: 'name', description: 'Название ноутбука'})
  @Column({nullable: false})
  name: string;

  @ApiProperty({example: 'description', description: 'Описание ноутбука'})
  @Column({nullable: false})
  description: string;

  @ApiProperty({example: 'picture', description: 'Фото ноутбука'})
  @Column({nullable: false})
  picture: string;

  @ApiProperty({example: 'price', description: 'Цена ноутбука'})
  @Column({nullable: false})
  price: number;

  @ManyToOne(() => Models, (models) => models.laptop)
  model: Models;
}
