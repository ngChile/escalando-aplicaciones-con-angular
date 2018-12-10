import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {CoreModule } from '../core';

import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService, AuthGuard ],
  imports: [
    CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule,
    HttpClientModule, MatButtonModule, MatCheckboxModule, CoreModule
  ]

})

export class LoginModule {}
