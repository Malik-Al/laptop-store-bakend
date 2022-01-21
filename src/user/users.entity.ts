import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: true})
  firstname: string;

  @Column({nullable: true})
  lastname: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

}
