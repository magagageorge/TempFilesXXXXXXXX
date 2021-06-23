import { TestBed } from '@angular/core/testing';

import { DwPageViewerService } from './dw-page-viewer.service';

describe('DwPageViewerService', () => {
  let service: DwPageViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwPageViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
