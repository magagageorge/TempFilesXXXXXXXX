import { TestBed } from '@angular/core/testing';

import { LoadSubmitProgressService } from './load-submit-progress.service';

describe('LoadSubmitProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadSubmitProgressService = TestBed.get(LoadSubmitProgressService);
    expect(service).toBeTruthy();
  });
});
