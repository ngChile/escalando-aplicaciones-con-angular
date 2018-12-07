import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { CoreModule } from '../core';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
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
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    CoreModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LoginModule { }
