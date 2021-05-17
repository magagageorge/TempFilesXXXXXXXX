import { TestBed } from '@angular/core/testing';

import { DwProfileService } from './dw-profile.service';

describe('DwProfileService', () => {
  let service: DwProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
