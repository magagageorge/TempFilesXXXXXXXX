import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFeedWidgetComponent } from './profile-feed-widget.component';

describe('ProfileFeedWidgetComponent', () => {
  let component: ProfileFeedWidgetComponent;
  let fixture: ComponentFixture<ProfileFeedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFeedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
