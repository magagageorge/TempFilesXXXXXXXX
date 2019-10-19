import { TestBed, inject } from '@angular/core/testing';

import { WfLinkifyService } from './wf-linkify.service';

describe('WfLinkifyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WfLinkifyService]
    });
  });

  it('should be created', inject([WfLinkifyService], (service: WfLinkifyService) => {
    expect(service).toBeTruthy();
  }));
});
