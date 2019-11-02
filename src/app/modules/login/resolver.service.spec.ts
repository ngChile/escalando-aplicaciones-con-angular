import { TestBed } from '@angular/core/testing';
import { ResolverService } from './resolver.service';
import { GroupService } from './group.service';

class GroupServiceMock {
  getGroups = jasmine.createSpy();
}
describe('ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: GroupService,
        useClass: GroupServiceMock
      }
    ]
  }));

  it('should be created', () => {
    const service: ResolverService = TestBed.inject(ResolverService);
    expect(service).toBeTruthy();
  });
});
