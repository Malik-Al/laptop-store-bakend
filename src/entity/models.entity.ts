import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Laptop } from './laptop.entity';
import { ApiProperty } from "@nestjs/swagger";


@Entity()
export class Models {
  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({example: 'name', description: 'Название модели'})
  @Column({nullable: false})
  name: string;

  @OneToMany(() => Laptop, (laptop) => laptop.category)
  laptop: Laptop[];
}
