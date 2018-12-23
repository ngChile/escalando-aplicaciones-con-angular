import { HttpClient } from '@angular/common/http';
import { User } from './../../modules/login/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AdminService {

  users = [
    { fullName: 'Administrador', email: 'admin@app.com', password: 'admin' }
  ];

  constructor(
    private http: HttpClient
  ) {}

  createUser(user: User) {
    this.users.push(user);
  }

  listUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(environment.endpoint.user);
  }
}
