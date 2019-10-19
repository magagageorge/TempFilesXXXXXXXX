import { TestBed, inject } from '@angular/core/testing';

import { HoverCardService } from './hover-card.service';

describe('HoverCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoverCardService]
    });
  });

  it('should be created', inject([HoverCardService], (service: HoverCardService) => {
    expect(service).toBeTruthy();
  }));
});
