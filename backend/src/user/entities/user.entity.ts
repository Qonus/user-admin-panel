import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 20})
    username: string;

    @Column({ type: 'varchar', length: 40 })
    email: string;
}