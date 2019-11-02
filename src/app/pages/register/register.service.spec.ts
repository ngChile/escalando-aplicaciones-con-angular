import { TestBed } from '@angular/core/testing';
import { RegisterService } from './register.service';
import { HttpClient } from '@angular/common/http';

class HttpClientMock {
  get = jasmine.createSpy();
}

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: HttpClient,
        useClass: HttpClientMock
      }
    ]
  }));

  it('should be created', () => {
    const service: RegisterService = TestBed.inject(RegisterService);
    expect(service).toBeTruthy();
  });
});
