import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs';
import { GroupService } from './group.service';
import { Group } from '@app/models/domain/group';

class HttpClientMock {
  get = jest.fn();
}

describe('Group Service', () => {
  let service: GroupService;
  let httpClientMock: HttpClientMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        GroupService,
        {
          provide: HttpClient,
          useClass: HttpClientMock
        }
      ]
    });
    service = TestBed.inject(GroupService);
    httpClientMock = TestBed.inject(HttpClient) as any;
  });

  it('Should create an instance', () => {
    expect(service).toBeDefined();
  });

  it('should call http get service', () => {
    httpClientMock.get.mockReturnValue(of({ list: [] }));
    service.getGroups();
    expect(httpClientMock.get).toHaveBeenCalledWith(environment.endpoint.groups);
  });

  it('should set and get', () => {
    const list: Group[] = [
      { id: 'A', value: 'Grupo A', active: true },
      { id: 'B', value: 'Grupo B', active: true },
    ];

    service.setGroups(list);

    expect(service.getStoredGroups()).toEqual(list);
  });
});
