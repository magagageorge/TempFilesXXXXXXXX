import { TestBed } from '@angular/core/testing';

import { ProfileConnectionsService } from './profile-connections.service';

describe('ProfileConnectionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileConnectionsService = TestBed.get(ProfileConnectionsService);
    expect(service).toBeTruthy();
  });
});
