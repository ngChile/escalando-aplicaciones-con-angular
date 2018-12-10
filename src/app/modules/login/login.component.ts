import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';

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
  rememberMe: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private groupService: GroupService
  ) {
    // this.grupo =  [{id: 'A', value: 'Grupo A'}, {id: 'B', value: 'Grupo B'}];
    this.formModel = new LoginFormModel({
      email: this.route.snapshot.queryParams.email,
      rememberMe: false});
  }

  ngOnInit() {
    this.groupService.getGroups()
    .then((groupsObject: any) => {
      this.groups = groupsObject.list;
      console.log(this.groups);
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService
        .authenticate(this.formModel.email, this.formModel.password)
        .then(isLoggedIn => {
          if (isLoggedIn) {
            this.router.navigateByUrl(this.loginService.fallbackUrl);
          }
        }).catch(errorResponse => {
          this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
        });
    }
  }

}
