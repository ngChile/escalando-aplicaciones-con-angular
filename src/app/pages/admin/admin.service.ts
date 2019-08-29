import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from '@app/models/domain/user';
import { UserResponse } from '@app/models/rest/user';

@Injectable()
export class AdminService {
  users: User[] = [];

  constructor(
    private http: HttpClient
  ) {}

  createUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http
      .post<User>(environment.endpoint.users, user, httpOptions);
  }

  listUsers(): Observable<User[]> {
    return this.http
      .get<UserResponse>(environment.endpoint.users)
      .pipe(
        map((users: UserResponse) => users.list)
      );
  }
}
