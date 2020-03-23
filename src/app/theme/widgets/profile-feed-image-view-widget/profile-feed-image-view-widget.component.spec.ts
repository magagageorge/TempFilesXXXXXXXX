import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFeedImageViewWidgetComponent } from './profile-feed-image-view-widget.component';

describe('ProfileFeedImageViewWidgetComponent', () => {
  let component: ProfileFeedImageViewWidgetComponent;
  let fixture: ComponentFixture<ProfileFeedImageViewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFeedImageViewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFeedImageViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
