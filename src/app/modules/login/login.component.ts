import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
  ) {
    this.formModel = new LoginFormModel({
      email: this.route.snapshot.queryParams.email
    });
  }

  ngOnInit() {}

  submit() {
    if (this.loginForm.valid) {
      // this.isLoading = true;
      this.loginService
        .authenticate(this.formModel.email, this.formModel.password)
        // Que tal quitar esto y pedir como historia de usuario que en el error debe mostrar el snack
        // en el final apagar el loader, en success cambiar la url
        // .pipe(
        //   finalize(() => this.isLoading = false),
        // )
        // .subscribe(_ => {
        //   this.router.navigateByUrl(this.loginService.fallbackUrl);
        // }, errorResponse => {
        //   this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
        // });

        // en caso de no quitarlo hacer la logica del loading bien simple para poder
        // explicar como testear y mockear esto para abarcar branches, etc

        //En lo personal prefiero la opción 2.
    }
  }

}
