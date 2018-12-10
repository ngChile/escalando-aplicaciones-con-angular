import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CoreModule } from '../core';
import { LoginService } from './login.service';
import { AuthGuard } from './auth.guard';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthGuard,
        LoginService
    ],
    imports: [
        CoreModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatCardModule
    ]
})

export class LoginModule { }
