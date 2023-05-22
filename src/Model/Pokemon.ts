import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User";

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn("uuid")
    private id: string;

    @Column()
    private name: string;

    @Column()
    private img: string;

    @Column()
    private types: [String];

    @Column()
    private stats: [String];

    @Column()
    private moves: [String];

    @ManyToOne(() => User, (user) => user.pokemons)
     user:User

    constructor(name: string, img: string, types: [String] , stats: [String], moves: [String]){
        this.name = name;
        this.img = img;
        this.types= types;
        this.stats = stats;
        this.moves = moves;
    }
    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }


public getName(): string {
    return this.name;
}

public setName(name: string): void {
    this.name = name;
}


public getImg(): string {
    return this.img;
}

public setImg(img: string): void {
    this.img = img;
}


public getTypes(): [String] {
    return this.types;
}

public setTypes(types: [String]): void {
    this.types = types;
}


public getStats(): [String] {
    return this.stats;
}

public setStats(stats: [String]): void {
    this.stats = stats;
}


public getMoves(): [String] {
    return this.moves;
}

public setMoves(moves: [String]): void {
    this.moves = moves;
}



}