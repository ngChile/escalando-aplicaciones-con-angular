import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { of } from 'rxjs';

import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { FilterActivesPipe } from '../../modules/core/filter-actives.pipe';
import { User } from '../../models/domain/user';
import { Group } from '../../models/domain/group';

class ActivatedRouteMock {
    data = null;
}
class FilterActivesPipeMock {
    transform = jest.fn();
}

class AdminServiceMock { }

describe('AdminComponent', () => {
    let component: AdminComponent;
    let fixture: ComponentFixture<AdminComponent>;
    let activateRouteMock: ActivatedRouteMock;
    let filterActivesPipeMock: FilterActivesPipeMock;
    let users: User[];
    let groups: Group[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                RouterTestingModule,
                HttpClientTestingModule,
                NoopAnimationsModule,

                MatFormFieldModule,
                MatSnackBarModule,
                MatTableModule,
                MatSelectModule,
                MatInputModule
            ],
            declarations: [AdminComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useClass: ActivatedRouteMock
                },
                {
                    provide: FilterActivesPipe,
                    useClass: FilterActivesPipeMock
                },
                {
                    provide: AdminService,
                    useClass: AdminServiceMock
                }
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();

        fixture = TestBed.createComponent(AdminComponent);
        component = fixture.componentInstance;

        activateRouteMock = TestBed.inject(ActivatedRoute);
        filterActivesPipeMock = TestBed.inject(FilterActivesPipe) as any;
    }));

    beforeEach(() => {
        users = [
            { fullName: 'Jaco', email: 'jaco@bass.org', password: 'xxx', group: 'A' },
            { fullName: 'Herbie', email: 'herbie@piano.org', password: 'zzz', group: 'B' },
        ];
        groups = [
            { id: 'A', value: 'Grupo A', active: true },
            { id: 'B', value: 'Grupo B', active: true },
        ];
        activateRouteMock.data = of({
            userModelData: { groups, users },
        });

        filterActivesPipeMock.transform.mockImplementation((data) => data)

        fixture.detectChanges();
    });

    it('should create', async(() => {
        fixture.whenStable()
            .then(() => {
                expect(component.groups).toEqual(groups);
                expect(component.users).toEqual(users);
                expect(component.usersSource.data).toEqual(users);
            });
    }));
});
