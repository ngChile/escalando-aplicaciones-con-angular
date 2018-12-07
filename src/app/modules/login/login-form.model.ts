export class LoginFormModel {
  email: string;
  password: string;
  group: string;
  remember: string;
  constructor(values: {
    [key: string]: string
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    this.remember = values.remember;
  }
}
