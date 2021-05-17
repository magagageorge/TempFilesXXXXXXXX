import { TestBed } from '@angular/core/testing';

import { DwProfileViewerService } from './dw-profile-viewer.service';

describe('DwProfileViewerService', () => {
  let service: DwProfileViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwProfileViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
