import { MatTableDataSource } from '@angular/material/table';
import { AdminService } from './admin.service';
import { User } from './../../modules/login/login.service';
import { FilterActivesPipe } from './../../modules/core/filter-actives.pipe';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    group : new FormControl('', [Validators.required]),
    roles : new FormControl('', [Validators.required])
  });
  groups = [];
  roles = [
    {
      id: 1, value: 'director',
    },
    {
      id: 2, value: 'secretaria',
    },
    {
      id: 3, value: 'profesor'
    }
  ];
  users: User[];
  usersSource = new MatTableDataSource();
  headers = [ 'name', 'email', 'group' ];

  constructor(
    private route: ActivatedRoute,
    private filterActives: FilterActivesPipe,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { groups: [] }) => {
        this.groups = this.filterActives.transform(data.groups);
      });
    this.adminService
      .listUsers()
      .subscribe(users => this.usersSource.data = users);
  }

  onSubmit() {
    // get user
    if (this.form.valid) {
      let user: User;
      user = this.form.value as User;
      this.adminService
        .createUser(user)
        .subscribe(userResponse => {
          this.usersSource.data = [ ...this.usersSource.data, userResponse ];
        });
    }
  }
}
