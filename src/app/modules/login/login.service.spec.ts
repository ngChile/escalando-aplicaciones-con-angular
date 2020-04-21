import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

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
    // Arrange: Preparar los datos necesarios para la ejecución del método
    // y para la respuesta a la llamada XHR
    const email = 'herbie.hancock@gmail.com';
    const password = `masterOfJazzSince50's`;
    const bodyResponse = {
      fullName: 'Herbie',
      lastName: 'Hancock'
    };

    // Act: ejecutar el método objetivo -> LoginService.authenticate
    // y desdencadenar la respuesta a una llamada XHR a través de un objeto de tipo "Mock"
    // provisto por httpTestingController
    service
      .authenticate(email, password)
      .subscribe(isLoggedIn => {
        // Assert 2: corroboraciones sobre el comportamiento del método
        // DESPUÉS de recibir el resultado de la llamada HTTP
        expect(isLoggedIn).toBe(true);
        expect(service.user).toEqual(bodyResponse);
        done();
      });
    const requestMock: TestRequest = httpTestingController
      .expectOne(environment.endpoint.auth);
    requestMock.flush(bodyResponse);

    // Assert 1: corroboraciones respecto de lo que sucede en método objetivo
    // ANTES del resultado a la llamada HTTP.
    expect(requestMock.request.method).toEqual('POST');
    expect(requestMock.request.body).toEqual({ email, password });
  });
});
