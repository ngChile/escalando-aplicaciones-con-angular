import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

interface Group {
  id: string;
  value: string;
}

@Injectable()
export class GroupService {

  constructor(private http: HttpClient ) {}

  getGroups(): Promise<Group[]> {
    return this.http.get<Group[]>(environment.endpoint.groups).toPromise();
  }
}
