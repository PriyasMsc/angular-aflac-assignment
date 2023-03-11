import { TestBed } from '@angular/core/testing';

import { ClaimsStatusService } from './claims-status.service';

describe('ClaimsStatusService', () => {
  let service: ClaimsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClaimsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
