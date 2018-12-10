export class LoginFormModel {
  email: string;
  password: string;
  grupo: string;
  remenberMe: boolean;

  constructor(values: {
    [key: string]: any
  } = {}) {
    this.email = values.email;
    this.password = values.password;
    this.grupo = values.grupo;
    this.remenberMe = values.remenberMe;
  }
}
