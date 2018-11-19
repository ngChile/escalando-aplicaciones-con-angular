export class LoginFormModel {
  username: string;
  password: string;

  constructor(values: {
    [key: string]: string
  } = {}) {
    this.username = values.username;
    this.password = values.password;
  }
}