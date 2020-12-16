import { TestBed } from '@angular/core/testing';

import { DaywakaService } from './daywaka.service';

describe('DaywakaService', () => {
  let service: DaywakaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaywakaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
