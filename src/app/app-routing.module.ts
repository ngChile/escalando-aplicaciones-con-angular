import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';

import { PageNotFoundComponent } from './modules/core';
import { LoginComponent, AuthGuard } from './modules/login';
import { GroupsResolverService } from './modules/login/groups-resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      groups: GroupsResolverService
    }
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule'
  },
  {
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
