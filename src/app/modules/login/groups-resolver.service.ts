import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class GroupsResolverService implements Resolve<Group[]> {

  constructor(private groupService: GroupService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Group[]> {
    return this.groupService.getGroups();
  }
}

interface Group {
  id: string;
  value: string;
  active: boolean;
}
