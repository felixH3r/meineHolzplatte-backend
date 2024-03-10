import { MigrationInterface, QueryRunner } from "typeorm"

export class BasePriceMigration1710102627306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"line_item\"" +
            " ADD COLUMN \"basePrice\" CHAR(255)"
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE \"line_item\" DROP COLUMN \"basePrice\""
        )
    }

}
