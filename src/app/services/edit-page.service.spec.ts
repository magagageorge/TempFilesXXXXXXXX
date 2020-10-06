import { TestBed } from '@angular/core/testing';

import { EditPageService } from './edit-page.service';

describe('EditPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditPageService = TestBed.get(EditPageService);
    expect(service).toBeTruthy();
  });
});
