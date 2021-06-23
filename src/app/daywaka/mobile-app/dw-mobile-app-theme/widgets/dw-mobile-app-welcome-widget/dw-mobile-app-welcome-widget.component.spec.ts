import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwMobileAppWelcomeWidgetComponent } from './dw-mobile-app-welcome-widget.component';

describe('DwMobileAppWelcomeWidgetComponent', () => {
  let component: DwMobileAppWelcomeWidgetComponent;
  let fixture: ComponentFixture<DwMobileAppWelcomeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwMobileAppWelcomeWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwMobileAppWelcomeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
