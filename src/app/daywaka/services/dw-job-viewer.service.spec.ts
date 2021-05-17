import { TestBed } from '@angular/core/testing';

import { DwJobViewerService } from './dw-job-viewer.service';

describe('DwJobViewerService', () => {
  let service: DwJobViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwJobViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
