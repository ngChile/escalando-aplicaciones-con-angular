import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanLoad {

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    const url = `/${route.path}`;
    return this.checkLogin(url);
  }

  private checkLogin(url: string): boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    }
    this.loginService.fallbackUrl = url;
    this.router.navigateByUrl('/login');
    return false;
  }

}
