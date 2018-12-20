import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from './group.service';
import { Group } from '../core/models/group-interface';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Group[]> {
  constructor(
    private groupService: GroupService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Group[]> {
    return this.groupService.getGroups();
  }
}
