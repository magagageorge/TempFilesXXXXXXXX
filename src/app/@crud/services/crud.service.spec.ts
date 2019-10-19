import { TestBed, inject } from '@angular/core/testing';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  beforeEach(() => {
    TestBed.crudconfigureTestingModule({
      providers: [CrudService]
    });
  });

  it('should be created', inject([CrudService], (service: CrudService) => {
    expect(service).toBeTruthy();
  }));
});
