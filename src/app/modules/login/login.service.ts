import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private user: User;

  fallbackUrl: string = '';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient,
  ) { }

  authenticate(username: String, password: String): Observable<boolean> {
    return this.http.post<User>(environment.endpoint.auth, {
      username, password
    }).pipe(
      map(user => {
        this.user = user;
        return this.isLoggedIn;
      })
    );
  }
}

interface User {
  username: string;
  password: string;
}