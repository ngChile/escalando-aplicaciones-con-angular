import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  isLoading = false;

  constructor(
    private registerService: RegisterService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.form.valid) {
      this.isLoading = true;
      this.registerService
        .register(this.form.value)
        .subscribe(response => {
          this.isLoading = false;
          alert(response);
        }, reason => {
          this.isLoading = false;
          alert(JSON.stringify(reason, null, 2));
        });
    }
  }
}
