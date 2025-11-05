import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCompaniesAndUsers1761857844031
  implements MigrationInterface
{
  name = 'CreateCompaniesAndUsers1761857844031';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TYPE "public"."companies_service_enum" AS ENUM('Website Development', 'Mobile Development', 'Consulting', 'Design', 'Marketing')`,
    );
    await queryRunner.query(
      `CREATE TABLE "companies" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "service" "public"."companies_service_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "capital" numeric(15,2) NOT NULL, "detail" text NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "companies"`);
    await queryRunner.query(`DROP TYPE "public"."companies_service_enum"`);
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
