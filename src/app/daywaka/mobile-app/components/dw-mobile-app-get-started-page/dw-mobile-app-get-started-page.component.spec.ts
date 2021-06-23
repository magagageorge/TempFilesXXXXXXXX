import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMobileAppGetStartedPageComponent } from './dw-mobile-app-get-started-page.component';

describe('DwMobileAppGetStartedPageComponent', () => {
  let component: DwMobileAppGetStartedPageComponent;
  let fixture: ComponentFixture<DwMobileAppGetStartedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMobileAppGetStartedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMobileAppGetStartedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
