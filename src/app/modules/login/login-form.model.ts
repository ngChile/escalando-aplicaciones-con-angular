export class LoginFormModel {
  email: string;
  password: string;
  group: string;

  constructor(values: {
    [key: string]: string //any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
  }
}
