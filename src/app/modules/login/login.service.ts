import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {
  user = null;
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

  authenticate(email, password) {
    const postData = {
      email, password
    };
    return this.http.post(
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

  logout() {
    return this.http.post(environment.endpoint.logout, {});
  }
}
