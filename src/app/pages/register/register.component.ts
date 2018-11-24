import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { Validators } from '../../modules/core';

import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isLoading: boolean;
  form: FormGroup;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private registerService: RegisterService,
  ) {
    this.form = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
        Validators.maxLength(100)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      rePassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ], [
        Validators.equalsTo('password'),
      ]),
    });
  }

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.registerService.register(this.form.value).pipe(
        finalize(() => this.isLoading = false),
      ).subscribe(user => {
        this.router.navigate(['/login'], {
          queryParams: {
            email: user.email,
          },
        });
      }, errorResponse => {
        this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
      });
    }
  }

}
