import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';

import { PageNotFoundComponent } from './modules/core';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';
import { LoginComponent, AuthGuard } from './modules/login';
import { ResolverService } from './modules/login/resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {
      groups: ResolverService
    }
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule',
  },
  {
    path: 'admin',
    loadChildren: './pages/admin/admin.module#AdminModule',
    resolve: {
      groups: ResolverService
    }
  },
  {
    path: 'scholarship-form',
    component: ScholarshipFormComponent,
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
