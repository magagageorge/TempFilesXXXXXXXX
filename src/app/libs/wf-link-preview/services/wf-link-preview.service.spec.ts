import { TestBed, inject } from '@angular/core/testing';

import { WfLinkPreviewService } from './wf-link-preview.service';

describe('WfLinkPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WfLinkPreviewService]
    });
  });

  it('should be created', inject([WfLinkPreviewService], (service: WfLinkPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
