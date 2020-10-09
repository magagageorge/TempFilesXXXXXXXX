import { TestBed } from '@angular/core/testing';

import { PageNotificationService } from './page-notification.service';

describe('PageNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageNotificationService = TestBed.get(PageNotificationService);
    expect(service).toBeTruthy();
  });
});
