import {Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Laptop} from "./laptop.entity";


@Entity()
export class BasketEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => Laptop, (laptop: Laptop) => laptop.models)
    @JoinColumn([{name: 'laptop', referencedColumnName: "id" }])
    laptop: Laptop[];
}