import { TestBed } from '@angular/core/testing';

import { DwViewerService } from './dw-viewer.service';

describe('DwViewerService', () => {
  let service: DwViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DwViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
