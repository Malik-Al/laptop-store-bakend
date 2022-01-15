import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('increment', { name: 'userId' })
  userId: number;

  @Column({ name: 'firstname' })
  firstName: string;

  @Column({ name: 'lastname' })
  lastName: string;

  @Column({ name: 'email' })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, name: 'refreshtoken' })
  refreshtoken: string;

  @Column({ type: 'date', nullable: true, name: 'refreshtokenexp' })
  refreshtokenexp: string;
}
