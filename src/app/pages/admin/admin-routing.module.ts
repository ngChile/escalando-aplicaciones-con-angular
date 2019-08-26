import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminResolverService } from './admin-resolver.service';
import { AdminService } from './admin.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    resolve: {
      userModelData: AdminResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [
    AdminService
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
