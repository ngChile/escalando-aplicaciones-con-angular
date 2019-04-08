import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(
    private http: HttpClient
  ) { }

  createRole(role) {
    return this.http
      .post(environment.endpoint.roles, role);
  }

  getRoles(): Observable<any[]> {
    return this.http
      .get<any>(environment.endpoint.roles);
  }
}
