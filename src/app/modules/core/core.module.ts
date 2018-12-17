import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LoadingComponent } from './loading/loading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { FilterActivesPipe } from './filter-actives.pipe';

@NgModule({
  declarations: [
    LoadingComponent,
    PageNotFoundComponent,
    HighlightDirective,
    UnlessDirective,
    FilterActivesPipe
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatCardModule
  ],
  exports: [
    LoadingComponent,
    PageNotFoundComponent,
    HighlightDirective,
    UnlessDirective,
    FilterActivesPipe
  ],
  providers: [
    FilterActivesPipe
  ]
})
export class CoreModule { }
