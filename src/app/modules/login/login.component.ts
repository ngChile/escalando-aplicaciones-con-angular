import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { LoginService } from './login.service';
import { LoginFormModel } from './login-form.model';
import { FilterActivesPipe } from '@app/modules/core/filter-actives.pipe';
import { Group } from '@app/models/domain/group';

interface JSONResponse {
  groups: Group[];
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm', { static: true }) loginForm: NgForm;

  formModel: LoginFormModel;
  isLoading: boolean;
  groups = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private filterActives: FilterActivesPipe
  ) {
    this.formModel = new LoginFormModel({
      email: this.route.snapshot.queryParams.email,
      group: '',
      rememberMe: true,
    });
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { groups: [] }) => {
        this.groups = this.filterActives.transform(data.groups);
      });
  }
  submit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginService
        .authenticate(this.formModel.email, this.formModel.password)
        .pipe(
           finalize(() => this.isLoading = false),
         )
         .subscribe(_ => {
           this.router.navigateByUrl(this.loginService.fallbackUrl);
         }, errorResponse => {
           this.snackBar.open(errorResponse.error.message, null, { duration: 5000 });
         });
    }
  }
}
