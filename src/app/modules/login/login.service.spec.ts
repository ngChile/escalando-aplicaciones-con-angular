import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
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
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
