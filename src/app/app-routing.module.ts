import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './modules/login';

import { PageNotFoundComponent } from './modules/core';
import { LoginComponent, AuthGuard } from './modules/login';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminModule } from './pages/admin/admin.module';
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
    path: '',
    loadChildren: './pages/home/home.module#HomeModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LoginModule,
    AdminModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
