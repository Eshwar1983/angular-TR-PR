import { TestBed } from '@angular/core/testing';

import { HostDirectiveService } from './host-directive.service';

describe('HostDirectiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HostDirectiveService = TestBed.get(HostDirectiveService);
    expect(service).toBeTruthy();
  });
});
