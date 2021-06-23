import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMobileAppSingupComponent } from './dw-mobile-app-singup.component';

describe('DwMobileAppSingupComponent', () => {
  let component: DwMobileAppSingupComponent;
  let fixture: ComponentFixture<DwMobileAppSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMobileAppSingupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMobileAppSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
