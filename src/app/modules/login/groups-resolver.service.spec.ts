import { TestBed } from '@angular/core/testing';

import { GroupsResolverService } from './groups-resolver.service';

describe('GroupsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupsResolverService = TestBed.get(GroupsResolverService);
    expect(service).toBeTruthy();
  });
});
