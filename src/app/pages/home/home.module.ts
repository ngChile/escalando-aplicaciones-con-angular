import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CoreModule } from 'src/app/modules';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashComponent } from './pages/dash/dash.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    HomeRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class HomeModule { }
