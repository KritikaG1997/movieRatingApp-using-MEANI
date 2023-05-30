import { TestBed } from '@angular/core/testing';

import { DatatransferServiceService } from './datatransfer-service.service';

describe('DatatransferServiceService', () => {
  let service: DatatransferServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatransferServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
