import { TestBed } from '@angular/core/testing';

import { PagePhotosService } from './page-photos.service';

describe('PagePhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagePhotosService = TestBed.get(PagePhotosService);
    expect(service).toBeTruthy();
  });
});
