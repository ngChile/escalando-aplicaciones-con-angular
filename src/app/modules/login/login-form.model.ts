export class LoginFormModel {
  email: string;
  password: string;
  group: string;
  RememberMe: boolean;

  constructor(values: {
    [key: string]: any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    this.RememberMe = values.chk_Remember;
  }
}
