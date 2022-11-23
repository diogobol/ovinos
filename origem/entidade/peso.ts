import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Peso extends BaseEntity{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    data!: Date;

    @Column()
    peso!: Date;

    @Column()
    id_animal!: number;

}