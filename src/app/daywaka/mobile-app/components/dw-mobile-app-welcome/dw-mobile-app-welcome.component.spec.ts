import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMobileAppWelcomeComponent } from './dw-mobile-app-welcome.component';

describe('DwMobileAppWelcomeComponent', () => {
  let component: DwMobileAppWelcomeComponent;
  let fixture: ComponentFixture<DwMobileAppWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMobileAppWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMobileAppWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
