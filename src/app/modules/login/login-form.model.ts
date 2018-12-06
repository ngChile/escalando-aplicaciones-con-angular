export class LoginFormModel {
  email: string;
  password: string;
  grupo: string;

  constructor(values: {
    [key: string]: string
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.grupo = values.grupo;
  }
}
