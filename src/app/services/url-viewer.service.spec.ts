import { TestBed, inject } from '@angular/core/testing';

import { UrlViewerService } from './url-viewer.service';

describe('UrlViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlViewerService]
    });
  });

  it('should be created', inject([UrlViewerService], (service: UrlViewerService) => {
    expect(service).toBeTruthy();
  }));
});
