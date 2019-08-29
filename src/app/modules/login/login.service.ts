import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '@app/models/domain/user';

@Injectable()
export class LoginService {
  user: User;
  fallbackUrl = '';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient,
  ) { }

  clearUser() {
    this.user = null;
  }

  authenticate(email: String, password: String): Observable<boolean> {
     return this.http.post<User>(environment.endpoint.auth, {
       email, password
     }).pipe(
       map(user => {
         this.user = user;
         return this.isLoggedIn;
       })
    );
  }

  logout(): Promise<any> {
    return this.http.post(environment.endpoint.logout, {})
      .toPromise();
  }
}
