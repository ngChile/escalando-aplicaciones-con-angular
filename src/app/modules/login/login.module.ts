import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
<<<<<<< HEAD
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
=======
import { MatSelectModule } from '@angular/material/select';
>>>>>>> c2f21a7a8c520672a04f0717cabdaf86ffcb2bd8

import { CoreModule } from '../core';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    AuthGuard
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
<<<<<<< HEAD
    MatSnackBarModule,
    MatSelectModule,
  ],
  exports: [
    LoginComponent
=======
>>>>>>> c2f21a7a8c520672a04f0717cabdaf86ffcb2bd8
  ]
})
export class LoginModule { }
