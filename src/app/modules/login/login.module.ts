import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreModule } from '../core';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GroupService } from './group.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [ CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatIconModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
  MatCheckboxModule,
  CoreModule,
  HttpClientModule,
  MatButtonModule,
  MatInputModule,
 ],
  providers: [LoginService, AuthGuard, GroupService]
})
export class LoginModule {}