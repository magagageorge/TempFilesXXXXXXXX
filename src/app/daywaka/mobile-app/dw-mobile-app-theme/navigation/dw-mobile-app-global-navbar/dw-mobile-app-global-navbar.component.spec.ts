import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMobileAppGlobalNavbarComponent } from './dw-mobile-app-global-navbar.component';

describe('DwMobileAppGlobalNavbarComponent', () => {
  let component: DwMobileAppGlobalNavbarComponent;
  let fixture: ComponentFixture<DwMobileAppGlobalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMobileAppGlobalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMobileAppGlobalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
