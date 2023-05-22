import { DataSource } from 'typeorm';
import { Pokemon } from '../Model/Pokemon';
import { User } from '../Model/User';
import "dotenv/config"

export const AppDataSource = new DataSource({
  type: 'postgres',
  username:process.env.DB_USER,
  host:"localhost",
  // host:process.env.DB_HOST,
  database:process.env.DB_DATABASE,
  password:process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  entities: [User, Pokemon],
  migrations: ['./Database/Migration/*.{ts,js}'],
  synchronize: true
});