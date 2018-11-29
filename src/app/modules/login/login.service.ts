import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User;

  fallbackUrl = '';

  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient,
  ) { }

  authenticate(email: String, password: String): Promise<boolean> {
    return this.http.post<User>(environment.endpoint.auth, {
        email, password
    }).toPromise()
      .then(user => {
        this.user = user;
        return this.isLoggedIn;
      });
  }
    // return this.http.post<User>(environment.endpoint.auth, {
    //   email, password
    // }).pipe(
    //   map(user => {
    //     this.user = user;
    //     return this.isLoggedIn;
    //   })
    // );
}

export interface User {
  fullName: string;
  email: string;
  password: string;
}
