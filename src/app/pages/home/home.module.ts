import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
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
    FormsModule,
    CoreModule,
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
  ]
})
export class HomeModule { }
