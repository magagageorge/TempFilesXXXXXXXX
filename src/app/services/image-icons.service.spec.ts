import { TestBed } from '@angular/core/testing';

import { ImageIconsService } from './image-icons.service';

describe('ImageIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageIconsService = TestBed.get(ImageIconsService);
    expect(service).toBeTruthy();
  });
});
