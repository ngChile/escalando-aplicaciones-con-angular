import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs/operators';

import { AdminService } from './admin.service';
import { User } from '@app/models/domain/user';
import { FilterActivesPipe } from '@app/modules/core/filter-actives.pipe';
import { Group } from '@app/models/domain/group';
import { AdminResolverDataModel } from './admin-resolver.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
    form: FormGroup;
    users: User[] = [];
    groups: Group[] = [];
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
    usersSource = new MatTableDataSource<User>();
    headers = ['name', 'email', 'group'];

    constructor(
        private route: ActivatedRoute,
        private filterActives: FilterActivesPipe,
        private adminService: AdminService,
        private formBuilder: FormBuilder
    ) {
        this.form = this.formBuilder.group({
            fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            group: new FormControl('', [Validators.required]),
            roles: new FormControl('', [Validators.required])
        });
    }

    ngOnInit() {
        this.route.data
            .pipe(
                map((data: Data) => data.userModelData),
            )
            .subscribe((userModelData: AdminResolverDataModel) => {
                this.groups = this.filterActives.transform(userModelData.groups);
                this.users = userModelData.users;
                this.usersSource.data = [ ...this.users ];
            });
    }

    onSubmit() {
        if (this.form.valid) {
            this.adminService
                .createUser(this.form.value)
                .subscribe((userResponse: User) => {
                    this.usersSource.data = [
                        ...this.users,
                        userResponse
                    ];
                });
        }
    }
}
