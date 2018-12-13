import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface Group {
  id: string;
  value: string;
}

@Injectable()
export class GroupService {
groups = []
  constructor(
    private http: HttpClient
  ) { }

  setGroups(list){

  }
  getStoredGroups(){
    return this.groups
  }
  getGroups(): Promise<Group[]> {
    return this.http.get<Group[]>(environment.endpoint.groups)
      .toPromise();
  }
}
