import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

import { GroupService } from './group.service';
import { HttpClient } from '@angular/common/http';

class HttpClientMock {
  get = jasmine.createSpy();
}

fdescribe('Group service', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: HttpClient,
          useClass: HttpClientMock
        },
        GroupService
      ]
    });

    service = TestBed.get(GroupService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('Should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should return groups', () => {
    httpClientMock.get.and.returnValue({
      toPromise: () => null
    });

    const result = service.getGroups();

    expect(result).toBe(null);
    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
  });

  it('should set and get', () => {
    const list = [1, 2, 3];

    service.setGroups(list);

    expect(service.getStoredGroups()).toEqual(list);
  });
});
