import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVideosSummaryWidgetComponent } from './profile-videos-summary-widget.component';

describe('ProfileVideosSummaryWidgetComponent', () => {
  let component: ProfileVideosSummaryWidgetComponent;
  let fixture: ComponentFixture<ProfileVideosSummaryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileVideosSummaryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVideosSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
