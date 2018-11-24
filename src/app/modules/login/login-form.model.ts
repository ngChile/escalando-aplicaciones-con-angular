export class LoginFormModel {
  email: string;
  password: string;

  constructor(values: {
    [key: string]: string
  } = {}) {
    this.email = values.email;
    this.password = values.password;
  }
}