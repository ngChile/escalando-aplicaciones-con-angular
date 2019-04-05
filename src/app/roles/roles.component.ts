import { Component, OnInit } from '@angular/core';
import { RolesService } from './../roles.service'

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  role = { name: '', active: true}
  constructor(
    private roleSer: RolesService
  ) { }

  ngOnInit() {
  }
  submit() {
    console.log(this.roleSer)
    this.roleSer.createRole(this.role)
    console.log(this.role)
  }
}
