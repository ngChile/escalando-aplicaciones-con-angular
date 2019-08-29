import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { AdminService } from './admin.service';
import { GroupService } from '@app/modules/login/group.service';
import { Group } from '@app/models/domain/group';
import { User } from '@app/models/domain/user';
import { map } from 'rxjs/operators';

export interface AdminResolverDataModel {
  groups: Group[];
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class AdminResolverService implements Resolve<AdminResolverDataModel> {
  constructor(
    private groupService: GroupService,
    private adminService: AdminService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AdminResolverDataModel> {
    return forkJoin([
        this.groupService.getGroups(),
        this.adminService.listUsers(),
    ])
        .pipe(
            map(([ groups, users]) => ({ groups, users }))
        );
  }
}
