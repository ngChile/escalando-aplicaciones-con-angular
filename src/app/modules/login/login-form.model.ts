export class LoginFormModel {
  email: string;
  password: string;
  group: string;
  rememberMe: boolean;
  constructor(values: { [key: string]: any } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    this.rememberMe = values.rememberMe;
  }
  /*
  constructor(email: string, password: string, group: string, rememberMe: boolean) {
    this.email = email;
    this.password = password;
    this.group = group;
    this.rememberMe = rememberMe;
  }
  constructor(values: { [key: string]: string } = {}, rememberMe: boolean) {
    this.email = values.email;
    this.password = values.password;
    this.group = values.group;
    this.rememberMe = rememberMe;
  }
  */
}
