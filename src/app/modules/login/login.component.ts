import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
// import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

import { LoginFormModel } from './login-form.model';
import { GroupService } from './group.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;

  formModel: LoginFormModel;
  isLoading: boolean;
  groups: [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private groupService: GroupService
  ) {
    this.formModel = new LoginFormModel({
      email: this.route.snapshot.queryParams.email,
      group: '',
      rememberMe: true,
    });
  }

  ngOnInit() {
    this.groupService
        .getGroups()
        .then((response: any) => {
          this.groups = response.list;
        });
  }
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
