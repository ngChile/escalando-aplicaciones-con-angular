//  Librerias Core de Angular y Utilidades para Testing
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router } from '@angular/router';
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
import { CoreModule } from '@app/modules/core';
import { FilterActivesPipe } from '@app/modules/core/filter-actives.pipe';

//  Mocks
const activateRouteMock = {
  data: of({
    groups: []
  }),
  snapshot: { queryParams: {} }
};
const componentDependenciesBase = {
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
    LoginService,
    FilterActivesPipe,
    {
      provide: ActivatedRoute,
      useValue: activateRouteMock
    },
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
};

//  Pruebas Unitarias
describe('LoginComponent Unit Testing', () => {
  it('should create', async () => {
    const { fixture } = await render(LoginComponent, componentDependenciesBase);
    expect(fixture.componentInstance).toBeTruthy();
  });

// https://codecraft.tv/courses/angular/unit-testing/asynchronous/

  it('should submit and call authenticate method when the loginForm it is valid', async () => {
    // "A"rrange
    const loginServiceMock = {
      authenticate: jasmine.createSpy('LoginService.authenticate')
        .and.returnValue(of(true))
    };
    const { fixture } = await render(LoginComponent, {
      ...componentDependenciesBase,
      componentProviders: [
        { provide: LoginService, useValue: loginServiceMock },
      ],
    });

    // "A"ct -- Mostrar como esto produce en la terminal :
    // WARN LOG: 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
    // WARN: 'Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?'
    // Solucion: con fixture.ngZone.run(() => {});
    const component = fixture.componentInstance;
    component.loginForm.setValue({
      email: 'g.pincheira.a@gmail.com',
      password: 'superscret123765',
      group: 'A',
      rememberMe: true
    });

    // Acá utilizamos submit porque nos interesa lo que hace .submit a nivel de diseño de código, su firma y comportamiento
    component.submit();

    // "A"ssert
    expect(loginServiceMock.authenticate).toHaveBeenCalled();
    // Forzar a no romper la firma con esto
    // expect(loginServiceMock.authenticate).toHaveBeenCalledWith(component.formModel.email, component.formModel.password);

    // Mostrar como se puede dar más cobertura y fidelidad a la prueba
    // pero que esto no sera reflejado en las métricas.
    // Agregar cobertura para variable loading
  });

  it('should set invalid fields', async () => {
    const { container, getByText, fixture } = await render(LoginComponent, componentDependenciesBase);

    // Acá utilizamos hacemos submit desde el template ya que nos interesa analizar la interacción con el template
    // que esta escondida de la implementación a través de Angular Material
    getByText('Login').click();
    fixture.detectChanges();

    const requiredFieldsWithErrors = container.querySelectorAll(
      'mat-form-field.ng-invalid *[aria-invalid="true"][required]'
    );
    expect(requiredFieldsWithErrors.length).toBe(3);
  });

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
