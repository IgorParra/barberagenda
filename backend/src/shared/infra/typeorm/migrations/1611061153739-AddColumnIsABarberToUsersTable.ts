import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
export class AddColumnIsABarberToUsersTable1611061153739
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'isBarber',
        type: 'boolean',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'isBarber');
  }
}
