import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private img: string;

    @Column()
    private types: [];

    @Column()
    private stats: [];

    @Column()
    private moves: [];

    constructor(name: string, img: string, types: [] , stats: [], moves: []){
        
    }


}