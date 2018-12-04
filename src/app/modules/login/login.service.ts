import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User = <any>{ fullName: 'Admin' };

  fallbackUrl = '';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient,
  ) { }

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

  logout(): Observable<boolean> {
    this.user = null;
    return of(this.isLoggedIn);
  }
}

export interface User {
  fullName: string;
  email: string;
  password: string;
}
