import { MigrationInterface, QueryRunner, Table} from "typeorm"


export class User1684697122933 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"users",
            columns:[
                {
                    name: "id",
                    type:"uuid",
                    isPrimary: true,
                    generationStrategy:"uuid",
                    default:"uuid_generate_v4()"
                },
                {
                    name: "name",
                    type:"varchar(200)"
                },
                {
                    name:"email",
                    type:"varchar(200)",
                    isUnique: true
                },
                {
                    name:"password",
                    type:"varchar(200)"
                },
                {
                    name:"gender",
                    type:"varchar(200)"
                },
                {
                    name:"pokemon_id",
                    type:"varchar",
                    isArray:true,
                    default:"array[]"
                }
            ],
            foreignKeys:[
                {
                    name:"pokemonUser",
                    referencedTableName:"pokemons",
                    referencedColumnNames:["id"],
                    columnNames:["pokemon_id"],
                    onDelete:"CASCADE",
                    onUpdate:"CASCADE"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
