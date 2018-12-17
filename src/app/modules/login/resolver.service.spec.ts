import { TestBed } from '@angular/core/testing';

import { ResolverService } from './resolver.service';

describe('ResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverService = TestBed.get(ResolverService);
    expect(service).toBeTruthy();
  });
});
