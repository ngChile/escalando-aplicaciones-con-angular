import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { GroupService } from './group.service'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'
import { of } from 'rxjs'

class HttpClientMock {  
  get = jasmine.createSpy();
}

fdescribe('Group Service', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        GroupService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.get(GroupService)
    httpClientMock = TestBed.get(HttpClient)
  })

  it('should be created', () => {
    expect(service).toBeDefined();
  })
  
  it('should call http get service', () => {
    httpClientMock.get.and.returnValue(of({ list:[]}))
    service.getGroups();
    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups)
  })
})
