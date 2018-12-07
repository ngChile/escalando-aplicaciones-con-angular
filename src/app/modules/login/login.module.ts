import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from '../core';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from './login.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { GroupService } from './group.service';

@NgModule({
  declarations : [ LoginComponent ],
  providers : [
    LoginService,
     AuthGuard,
     GroupService ],
  imports: [
    CommonModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
  ]
})

export class LoginModule { }
