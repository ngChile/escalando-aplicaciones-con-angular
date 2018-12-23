import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient
  ) { }


  register(user): Observable<any> {
    return this.http
    .post<any>(environment.endpoint.register, user)
    .pipe(
      retry(2),
      map(response => {
        return response.fullName;
      })
    );
  }
}
