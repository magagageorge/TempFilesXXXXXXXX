import { TestBed } from '@angular/core/testing';

import { ProfilePhotosService } from './profile-photos.service';

describe('ProfilePhotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfilePhotosService = TestBed.get(ProfilePhotosService);
    expect(service).toBeTruthy();
  });
});
