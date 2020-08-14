import { TestBed } from '@angular/core/testing';

import { ShowAdsService } from './show-ads.service';

describe('ShowAdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowAdsService = TestBed.get(ShowAdsService);
    expect(service).toBeTruthy();
  });
});
