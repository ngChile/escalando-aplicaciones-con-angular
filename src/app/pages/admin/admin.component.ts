import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GroupService } from 'src/app/modules/login/group.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  frmAdmin: FormGroup;
  groups: [];
  constructor(
    private groupService: GroupService
  ) {
    this.frmAdmin = new FormGroup(
      {
        'fullName': new FormControl('',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ]
        ),
        'email': new FormControl('',
          [
            Validators.required,
            Validators.email,
             Validators.minLength(5),
             Validators.maxLength(40)
          ]
        ),
        'password': new FormControl('',
          [
            Validators.minLength(4),
            Validators.maxLength(15),
            Validators.required
          ],
        ),
        'group': new FormControl(this.groups,
          [
            Validators.required
          ]
        ),
      }
    );
  }

  ngOnInit() {
    this.groupService
    .getGroups()
    .then((response: any) => {
      this.groups = response.list;
    });
  }
  submitForm() {
    const formulario = this.frmAdmin.value;
    console.log(formulario);
    console.log(this.frmAdmin);
  }
}
