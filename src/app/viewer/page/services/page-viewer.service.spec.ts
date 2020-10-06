import { TestBed } from '@angular/core/testing';

import { PageViewerService } from './page-viewer.service';

describe('PageViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageViewerService = TestBed.get(PageViewerService);
    expect(service).toBeTruthy();
  });
});
