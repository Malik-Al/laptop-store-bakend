import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";


@Entity()
export class User {
  @ApiProperty({example: 'id', description: 'Уникальный идентификатор'})
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({example: 'firstname', description: 'имя'})
  @Column({nullable: false})
  firstname: string;

  @ApiProperty({example: 'lastname', description: 'фамилия'})
  @Column({nullable: false})
  lastname: string;

  @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
  @Column({unique: true, nullable: false})
  email: string;

  @ApiProperty({example: '123456789', description: 'Пароль'})
  @Column({nullable: false})
  password: string;

}
