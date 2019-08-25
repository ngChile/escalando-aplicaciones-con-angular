import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs/operators';

import { AdminService } from './admin.service';
import { User } from '@app/models/user';
import { FilterActivesPipe } from '@app/modules/core/filter-actives.pipe';

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
      .pipe(
        tap((data: { groups: [] }) => {
          this.groups = this.filterActives.transform(data.groups);
        }),
        switchMap(() => this.adminService.listUsers())
      )
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
