import { TestBed } from '@angular/core/testing';

import { AdsModalsService } from './ads-modals.service';

describe('AdsModalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdsModalsService = TestBed.get(AdsModalsService);
    expect(service).toBeTruthy();
  });
});
