interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'suporte@luhanalvesbarber.com.br',
      name: 'Equipe Luhan Alves Barber',
    },
  },
} as IMailConfig;
