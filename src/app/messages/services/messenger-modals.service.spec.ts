import { TestBed } from '@angular/core/testing';

import { MessengerModalsService } from './messenger-modals.service';

describe('MessengerModalsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessengerModalsService = TestBed.get(MessengerModalsService);
    expect(service).toBeTruthy();
  });
});
