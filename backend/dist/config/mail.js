"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      email: 'suporte@luhanalvesbarber.com.br',
      name: 'Equipe Luhan Alves Barber'
    }
  }
};
exports.default = _default;