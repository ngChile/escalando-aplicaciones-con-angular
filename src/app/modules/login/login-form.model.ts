export class LoginFormModel {
  email: string;
  password: string;
  group: string;
  recuerdame: boolean;

  constructor(values: {
    [key: string]: string
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    this.recuerdame = this.recuerdame;
  }
}
