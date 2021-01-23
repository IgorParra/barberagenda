"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColumnIsABarberToUsersTable1611061153739 = void 0;

var _typeorm = require("typeorm");

class AddColumnIsABarberToUsersTable1611061153739 {
  async up(queryRunner) {
    await queryRunner.addColumn('users', new _typeorm.TableColumn({
      name: 'isBarber',
      type: 'boolean',
      isNullable: false
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropColumn('users', 'isBarber');
  }

}

exports.AddColumnIsABarberToUsersTable1611061153739 = AddColumnIsABarberToUsersTable1611061153739;