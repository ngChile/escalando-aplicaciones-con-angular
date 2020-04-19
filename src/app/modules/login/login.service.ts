import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { User } from '@app/models/domain/user';

@Injectable()
export class LoginService {
  user: User;
  fallbackUrl = '';

  constructor(
    private http: HttpClient,
  ) { }

  clearUser() {
    this.user = null;
  }

  isLoggedIn() {
    return !!this.user;
  }

  authenticate(email: String, password: String): Observable<boolean> {
    const postData = {
      email, password
    };
    return this.http.post<User>(
      environment.endpoint.auth,
      postData
    )
      .pipe(
        tap(user => {
          this.user = user;
        }),
        map(() => this.isLoggedIn())
      );
  }

  logout(): Observable<any> {
    return this.http.post(environment.endpoint.logout, {});
  }
}
