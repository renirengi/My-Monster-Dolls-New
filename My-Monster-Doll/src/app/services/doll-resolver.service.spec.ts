import { TestBed } from '@angular/core/testing';

import { DollResolverService } from './doll-resolver.service';

describe('DollResolverService', () => {
  let service: DollResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DollResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
