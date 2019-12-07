import { TestBed } from '@angular/core/testing';

import { ProfileViewerService } from './profile-viewer.service';

describe('ProfileViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileViewerService = TestBed.get(ProfileViewerService);
    expect(service).toBeTruthy();
  });
});
