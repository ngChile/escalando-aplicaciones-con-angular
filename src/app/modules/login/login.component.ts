import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
// import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

import { LoginFormModel } from './login-form.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  formModel: LoginFormModel;
  isLoading: boolean;
  grupos: Array<any>;
  rememberMe: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
  ) {
    this.formModel = new LoginFormModel({
      email: this.route.snapshot.queryParams.email,
      rememberMe: true
    });
    this.grupos = [{
      id: 'A',
      value: 'Grupo A'
    }, {
      id: 'B',
      value: 'Grupo B'
    }];
  }

  ngOnInit() {}

  submit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService
        .authenticate(this.formModel.email, this.formModel.password)
        // trabajando con promesas (que serán explicadas la primera clase)
        // la idea es que en la 4ta clase ya contaremos porque usar Observable
        // y explicar la teoría de estos y como ejercicio cambiar este código
        // a la versión con observables
          .then(isLoggedIn => {
            this.isLoading = false;
            if (isLoggedIn) {
              this.router.navigateByUrl(this.loginService.fallbackUrl);
            }
          })
          .catch(errorResponse => {
            // La idea es que acá exista un bug
            // el loader no se está cerrando.
            // en la version con observables
            // resolveremos este bug usando finalize
            this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
          });
        // observables
        // .pipe(
        //   finalize(() => this.isLoading = false),
        // )
        // .subscribe(_ => {
        //   this.router.navigateByUrl(this.loginService.fallbackUrl);
        // }, errorResponse => {
        //   this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
        // });
    }
  }

}
