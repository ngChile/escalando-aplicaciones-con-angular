import { User } from './../../modules/login/login.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminService {

  users = [
    { fullName: 'Administrador', email: 'admin@app.com', password: 'admin' }
  ];

  constructor() {}

  createUser(user: User) {
    this.users.push(user);
  }

  listUsers(): User[] {
    return this.users;
  }
}
