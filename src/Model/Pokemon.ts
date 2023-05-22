import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pokemon {
    @PrimaryGeneratedColumn("uuid")
    private id: string;

    @Column()
    private name: string;

    @Column()
    private img: string;

    @Column()
    private types: [{}];

    @Column()
    private stats: [{}];

    @Column()
    private moves: [{}];

    constructor(name: string, img: string, types: [{}] , stats: [{}], moves: [{}]){
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


public getTypes(): [{}] {
    return this.types;
}

public setTypes(types: [{}]): void {
    this.types = types;
}


public getStats(): [{}] {
    return this.stats;
}

public setStats(stats: [{}]): void {
    this.stats = stats;
}


public getMoves(): [{}] {
    return this.moves;
}

public setMoves(moves: [{}]): void {
    this.moves = moves;
}


}