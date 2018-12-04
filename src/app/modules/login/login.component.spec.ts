import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authenticateSpy = jasmine.createSpy('loginService.authenticate');

  class LoginServiceStub {
    // se maneja de esta forma porque loginService es privado
    authenticate = authenticateSpy;
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: LoginService,
          useClass: LoginServiceStub,
        }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));

  beforeEach(() => {
    authenticateSpy.calls.reset();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // https://codecraft.tv/courses/angular/unit-testing/asynchronous/
  // This async function executes the code inside it’s body in a special async test zone.
  // This intercepts and keeps track of all promises created in it’s body.

  it('should submit and call authenticate method when the loginForm it is valid', async(() => {
    // "A"rrange
    authenticateSpy.and.returnValue(Promise.resolve(true));

    fixture.whenStable()
      .then(() => {
        // "A"rrange
        component.loginForm.setValue({
          email: 'g.pincheira.a@gmail.com',
          password: 'superscret123765',
        });

        // "A"ct -- Mostrar como esto produce en la terminal :
        // WARN LOG: 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
        // WARN: 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
        // Explicar que quiere decir haciendo switch en karma conf de version headless a chrome

        component.submit();

        // "A"ssert
        expect(authenticateSpy).toHaveBeenCalled();
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
