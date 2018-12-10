import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CoreModule } from '../core';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GroupService } from './group.service';




@NgModule({
  declarations: [
    LoginComponent
  ],
  providers: [
    LoginService,
    AuthGuard,
    GroupService
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
     MatCheckboxModule,
     MatOptionModule,
     MatSelectModule,
     MatIconModule,
      MatCardModule,
      CoreModule,
      HttpClientModule,
     MatButtonModule,
     MatInputModule,
     
  ],
})
export class LoginModule { }