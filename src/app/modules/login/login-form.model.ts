export class LoginFormModel {
  email: string;
  password: string;
  Recuerdame: boolean;

  constructor(values: {
    [key: string]: any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.Recuerdame = values.Recuerdame;
  }
}
