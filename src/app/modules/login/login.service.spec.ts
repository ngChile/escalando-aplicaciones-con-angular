import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpResponse } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        LoginService
      ]
    });
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should map the post response to login state if user it is set', (done) => {
    // Arrange
    const email = 'herbie.hancock@gmail.com';
    const password = `masterOfJazzSince50's`;
    const user = {
      name: 'Herbie',
      lastName: 'Hancock'
    };
    const expectedResponse = new HttpResponse({
      status: 201,
      statusText: 'Created',
      body: user
    });

    // Act: the target method is LoginService.authenticate
    service
      .authenticate(email, password)
      .subscribe(isLoggedIn => {
        // Assert (async assert using done jasmine callback)

        // asserts for code design that call the endpoint URL with post body
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual({ email, password });

        // asserts for check the expected behaviour for authenticate method
        expect(isLoggedIn).toBe(true);
        expect(service.user).toEqual(user);
        done();
      });
    const req = httpTestingController.expectOne(environment.endpoint.auth);
    req.event(expectedResponse);
  });
});
