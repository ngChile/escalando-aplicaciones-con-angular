export class LoginFormModel {
  email: string;
  password: string;
  group:string;

  constructor(values: {
    [key: string]: string
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
  }
}
