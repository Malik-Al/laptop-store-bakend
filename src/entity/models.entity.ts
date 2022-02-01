import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
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

  // @OneToMany(() => Laptop, (laptop: Laptop) => laptop.models)
  @OneToMany(() => Laptop,
      (laptop) => laptop.models,
      {eager: true, cascade: ['insert', 'update']}
      )
  // @JoinColumn([{name: 'laptop', referencedColumnName: "id" }])
  laptop: Laptop[];
}
