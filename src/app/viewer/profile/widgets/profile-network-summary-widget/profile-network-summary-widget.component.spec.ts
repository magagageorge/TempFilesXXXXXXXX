import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNetworkSummaryWidgetComponent } from './profile-network-summary-widget.component';

describe('ProfileNetworkSummaryWidgetComponent', () => {
  let component: ProfileNetworkSummaryWidgetComponent;
  let fixture: ComponentFixture<ProfileNetworkSummaryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNetworkSummaryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNetworkSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
