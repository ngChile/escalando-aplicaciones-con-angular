import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroupService {

  constructor(
    private http: HttpClient
  ) { }

  getGroups() {
    return this.http.get(environment.endpoint.groups)
    .toPromise();
  }

}
