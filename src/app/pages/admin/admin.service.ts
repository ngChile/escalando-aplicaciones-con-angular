import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  listUsers(): Observable<User[]>{
    return this.http
    .get<any>(environment.endpoint.users)
    .pipe(
      map(data => data)
    )
  }

  createUser(data:User): Observable<User>{
    return this.http
    .post<any>(environment.endpoint.users, data)
    .pipe(
      retry(2),
      map(response => {
        return response.fullName;
      })
    );
  }
}


export interface User{
  fullName: string;
  email: string;
  password: string;
  group: string;
}
