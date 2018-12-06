export class LoginFormModel {
  email: string;
  password: string;
  rememberMe: boolean;

  constructor(values: {
    [key: string]: any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.rememberMe = values.rememberMe;
  }
}
