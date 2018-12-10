export class LoginFormModel {
  email: string;
  password: string;
  grupo: string;
  rememberMe: any;

  constructor(values: {
    [key: string]: any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.grupo = values.grupo;
    this.rememberMe = values.rememberMe;
  }
}
