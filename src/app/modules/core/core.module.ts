import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    LoadingComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
