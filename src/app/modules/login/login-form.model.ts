export class LoginFormModel {
  email: string;
  password: string;
  group: string;
  rememberMe: any;

  constructor(values: {
    [key: string]: any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    this.rememberMe = values.rememberMe;
  }
}
