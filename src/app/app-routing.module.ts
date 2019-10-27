import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';

import { PageNotFoundComponent } from './modules/core';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';
import { RolesComponent } from './roles/roles.component';
import { ScholarshipPostulationsComponent } from './scholarship-postulations/scholarship-postulations.component';
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
    loadChildren: () => import('./pages/register/register.module')
      .then(m => m.RegisterModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module')
      .then(m => m.AdminModule),
  },
  {
    path: 'scholarship-form',
    component: ScholarshipFormComponent,
  },
  {
    path: 'roles',
    component: RolesComponent,
  },
  {
    path: 'scholarship-postulations',
    component: ScholarshipPostulationsComponent,
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule),
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
