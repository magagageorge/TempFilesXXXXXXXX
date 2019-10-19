import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutSummaryWidgetComponent } from './profile-about-summary-widget.component';

describe('ProfileAboutSummaryWidgetComponent', () => {
  let component: ProfileAboutSummaryWidgetComponent;
  let fixture: ComponentFixture<ProfileAboutSummaryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAboutSummaryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAboutSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
