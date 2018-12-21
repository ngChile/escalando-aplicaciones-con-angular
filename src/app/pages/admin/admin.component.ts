import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form = new FormGroup({
    fullName: new FormControl('', []),
    email: new FormControl('', []),
    password: new FormControl('', [])
  })

  constructor() { }

  ngOnInit() {
  }

}
