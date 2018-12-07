export class LoginFormModel {
  email: string;
  password: string;
  Recuerdame: boolean;

  constructor(values: {
    [key: string]: string
  } = {}) {
    this.email = values.email;
    this.password = values.password;
  }
  constructor(values: {
    [key: boolean]: boolean
  } = {}) {
    this.Recuerdame = values.Recuerdame;
  }

}
