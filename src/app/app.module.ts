import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './modules/core/core.module';

import { AppComponent } from './app.component';
import { ScholarshipFormComponent } from './scholarship-form/scholarship-form.component';
import { ScholarshipPostulationsComponent } from './scholarship-postulations/scholarship-postulations.component';

@NgModule({
  declarations: [
    AppComponent,
    ScholarshipFormComponent,
    ScholarshipPostulationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
