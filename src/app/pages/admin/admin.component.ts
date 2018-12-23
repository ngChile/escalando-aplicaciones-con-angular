import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/modules';
import { AdminService } from './admin.service';
import { GroupService } from 'src/app/modules/login/group.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})



export class AdminComponent implements OnInit {

  create: boolean;
  groups = [];
  users = [];

  form = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required)
  })

  constructor(private admin: AdminService, private group: GroupService) {     
  }

  ngOnInit() {
    this.group.getGroups().subscribe(data => {
      this.groups = data
    });



    this.admin.listUsers().subscribe((data) => {
      this.users = data
    });
  }

  onSubmit(){
    this.admin.createUser(this.form.value)
    .subscribe(response => {
      this.create = true;
      alert(JSON.stringify(response));
    },
    (reason) => {
      this.create = false;
      alert(JSON.stringify(reason));
    });
  }
}
