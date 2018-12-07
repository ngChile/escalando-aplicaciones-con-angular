import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CoreModule } from '../core';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { GroupService} from './group.service';




@NgModule({
  declarations: [ LoginComponent ],
  providers: [
    AuthGuard,
    LoginService,
    GroupService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatCheckboxModule,
    CoreModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class LoginModule { }
