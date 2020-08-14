import { TestBed } from '@angular/core/testing';

import { LinkProcessingService } from './link-processing.service';

describe('LinkProcessingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkProcessingService = TestBed.get(LinkProcessingService);
    expect(service).toBeTruthy();
  });
});
