import { UUID } from "crypto";

import { Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Pokemon } from "./Pokemon";


@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    private id!: string;    

    private name: string;

  
    private email: string;


    private password: string;

    private gender: string;

    @OneToMany(()=> Pokemon, pokemon => pokemon.user)
    pokemons: Pokemon[];

    constructor(name: string, email: string , password: string , gender: string){
        this.name = name;
        this.email=email;
        this.password=password;
        this.gender=gender;
    }


    public getName(): string {
        return this.name;
    }
    
    public setName(name: string): void {
        this.name = name;
    }
    
    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }
    public getPassword(): string {
        return this.password;
    }
    
    public setPassword(password: string): void {
        this.password = password;
    }
    public getGender(): string {
        return this.gender;
    }
    
    public setGender(gender: string): void {
        this.gender = gender;
    }




}