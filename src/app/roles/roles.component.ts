import { Component, OnInit } from '@angular/core';
import { RolesService } from './roles.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  role = { name: '', active: true };

  constructor(
    private rolesService: RolesService
  ) { }

  ngOnInit() {
  }
  submit() {
    this.rolesService.createRole(this.role)
      .subscribe();
  }
}
