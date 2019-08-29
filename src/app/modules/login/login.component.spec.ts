//  Librerias Core de Angular y Utilidades para Testing
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

//  Modulo Material Design de Angular
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//  Librería para Pruebas de Integración
import { render } from '@testing-library/angular';

//  Código del proyecto
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';
import { GroupService } from './group.service';
import { CoreModule } from '@app/modules/core';
import { FilterActivesPipe } from '@app/modules/core/filter-actives.pipe';

//  Mocks
class LoginServiceMock {
  authenticate = jasmine.createSpy('loginService.authenticate');
}
class GroupServiceMock {
  getGroups = jasmine.createSpy('groupService.getGroups');
}
class ActivatedRouteMock {
  data = null;
  snapshot = { queryParams: {} };
}
class FilterActivesPipeMock {
  transform = jasmine.createSpy('filterActives.transform');
}

// mock instances
let loginServiceMock: LoginServiceMock;
let groupServiceMock: GroupServiceMock;
let activateRouteMock: ActivatedRouteMock;

//  Pruebas Unitarias
describe('LoginComponent Unit Testing', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        NoopAnimationsModule,
        CoreModule,

        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatCardModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: GroupService,
          useClass: GroupServiceMock,
        },
        {
          provide: LoginService,
          useClass: LoginServiceMock,
        },
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock
        },
        {
          provide: FilterActivesPipe,
          useClass: FilterActivesPipeMock
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    loginServiceMock = TestBed.get(LoginService);
    groupServiceMock = TestBed.get(GroupService);
    activateRouteMock = TestBed.get(ActivatedRoute);

    loginServiceMock.authenticate.and.returnValue(of({}));
    activateRouteMock.data = of({
      groups: []
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // https://codecraft.tv/courses/angular/unit-testing/asynchronous/

  it('should submit and call authenticate method when the loginForm it is valid', async(() => {
    // "A"rrange
    loginServiceMock.authenticate.and.returnValue(of(true));

    fixture.whenStable()
      .then(() => {
        // "A"rrange
        component.loginForm.setValue({
          email: 'g.pincheira.a@gmail.com',
          password: 'superscret123765',
          group: 'A',
          rememberMe: true
        });
        // "A"ct -- Mostrar como esto produce en la terminal :
        // WARN LOG: 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
        // WARN: 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
        // Explicar que quiere decir haciendo switch en karma conf de version headless a chrome

        component.submit();

        // "A"ssert
        expect(loginServiceMock.authenticate).toHaveBeenCalled();
        // mostrar como se puede dar más cobertura y fidelidad a la prueba
        // pero que esto no sera reflejado en las métricas.
        // Agregar cobertura para variable loading
      });
  }));

  // EJERCICIO PARA AUMENTAR BRANCHES COVERAGE
  // Mostrar como mejorar la calidad del test corroborando
  // que el loader se cerro para el caso donde retornamos false
  // para la versión authenticate

  // it('should not call submit and not authenticate method when the loginForm it is invalid ', async(() => {
  //   authenticateSpy.and.returnValue(Promise.resolve(true));

  //   fixture.whenStable().then(() => {
  //     component.submit();

  //     expect(authenticateSpy).not.toHaveBeenCalled();
  //   });
  // }));

  // Aumentar cobertura para caso donde authenticate retorne una promesa
  // rechazada. Acá haremos mock de snackbar y generaremos un objeto Error
  // it('should handle error when authenticate method returns error ', async(() => {
  //   authenticateSpy.and.returnValue(Promise.reject('El sistema está abajo'));

  //   fixture.whenStable().then(() => {
  //     component.submit();

  //     expect(authenticateSpy).not.toHaveBeenCalled();
  //   });
  // }));
});

////////// Pruebas de Integración ////////

describe('LoginComponent Integrations test Form Interaction', () => {
  const componentDependencies = {
    imports: [
      FormsModule,
      RouterTestingModule,
      HttpClientTestingModule,
      NoopAnimationsModule,

      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
      MatCardModule,
      CoreModule,
      MatCheckboxModule,
      MatButtonModule,
      MatInputModule,
      MatSnackBarModule
    ],
    declarations: [ LoginComponent ],
    providers: [
      {
        provide: GroupService,
        useClass: GroupServiceMock,
      },
      {
        provide: LoginService,
        useClass: LoginServiceMock,
      },
      {
        provide: ActivatedRoute,
        useClass: ActivatedRouteMock
      },
      {
        provide: FilterActivesPipe,
        useClass: FilterActivesPipeMock
      }
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
  };

  it('should render counter', async () => {
    loginServiceMock = new LoginServiceMock();
    loginServiceMock.authenticate.and.returnValue(of({}));
    activateRouteMock = new ActivatedRouteMock();
    activateRouteMock.data = of({
      groups: []
    });
    const { container, getByText, fixture } = await render(LoginComponent, {
      ...componentDependencies,
      componentProviders: [
        {
          provide: LoginService,
          useValue: loginServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: activateRouteMock,
        },
      ],
    });

    // Mejorar Accesibilidad

    getByText('Register').click();
    fixture.detectChanges();

    expect(container.querySelectorAll('mat-form-field.ng-invalid').length).toBe(3);
  });
});
