import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../../modules/login/login.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class AdminService {

  users = [];

  constructor(
    private http: HttpClient
  ) {}

  createUser(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http
      .post(environment.endpoint.users, user, httpOptions);
  }

  listUsers(): Observable<User[]> {
    return this.http
      .get<any>(environment.endpoint.users)
      .pipe(
        map(users => users.list as User[])
      );
  }
}
