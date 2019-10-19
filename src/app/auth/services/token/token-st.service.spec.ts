import { TestBed, inject } from '@angular/core/testing';

import { TokenStService } from './token-st.service';

describe('TokenStService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStService]
    });
  });

  it('should be created', inject([TokenStService], (service: TokenStService) => {
    expect(service).toBeTruthy();
  }));
});
