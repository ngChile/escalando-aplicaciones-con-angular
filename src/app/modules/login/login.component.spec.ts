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
    authenticate = authenticateSpy;
  };

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

  it('should submit and call authenticate method when the loginForm it is valid', async(() => {
    fixture.whenStable().then(() => {
      
      component.loginForm.setValue({
        email: 'g.pincheira.a@gmail.com',
        password: 'superscret123765',
      });
      
      component.submit();

      expect(authenticateSpy).toHaveBeenCalled();
    });
  }));

  //EJERCICIO PARA AUMENTAR COVERAGE DE 20% A 30%

  // it('should not call submit and not authenticate method when the loginForm it is invalid ', async(() => {
  //   fixture.whenStable().then(() => {
  //     component.submit();

  //     expect(authenticateSpy).not.toHaveBeenCalled();
  //   });
  // }));

});
