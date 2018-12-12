import { TestBed } from '@angular/core/testing';
import { GroupService } from './group.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

class HttpClientMock {

  get = jasmine.createSpy();

}

fdescribe('Group Service', () => {

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

  it('should be created an instance', () => {
    expect(service).toBeDefined();
  });

  it('test', () => {

    httpClientMock.get.and.returnValue({
      toPromise: () => null
    });

    const result = service.getGroups();

    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
    expect(result).toBe(null);

  });

  it('should be set an arry of gruops and expose a getter', () =>{
    const list = [1, 2, 3];

    service.setGroups(list);

    expect(service.getStoredGroups()).toEqual(list);
  })

});