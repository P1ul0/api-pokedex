import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Pokemon1684697166847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"pokemons",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true,
                        generationStrategy:"uuid",
                        default:"uuid_generate_v4()"
                    },
                    {
                        name:"name",
                        type:"varchar(50)"
                    },
                    {
                        name:"img",
                        type: "varchar(200)"
                    },
                    {
                        name:"types",
                        type:"jsonb",
                        isArray:true,
                        isNullable:true
                    },
                    {
                        name:"stats",
                        type:"jsonb",
                        isArray:true,
                        isNullable:true
                    },
                    {
                        name:"moves",
                        type:"jsonb",
                        isArray:true,
                        isNullable:true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pokemons")
    }

}
