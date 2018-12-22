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
    group : new FormControl('', [Validators.required])
  });
  groups = [];
  constructor(
    private route: ActivatedRoute,
    private filterActives: FilterActivesPipe
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { groups: [] }) => {
        this.groups = this.filterActives.transform(data.groups);
      });
  }

}
