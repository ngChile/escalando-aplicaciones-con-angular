import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class GroupService {
  constructor(
    private http: HttpClient
) { }

getGroups() {
  return this.http.get(environment.endpoint.groups).toPromise();
}
}
