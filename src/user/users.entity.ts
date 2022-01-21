import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  firstname: string;

  @Column({nullable: false})
  lastname: string;

  @Column({unique: true, nullable: false})
  email: string;

  @Column({nullable: false})
  password: string;

}
