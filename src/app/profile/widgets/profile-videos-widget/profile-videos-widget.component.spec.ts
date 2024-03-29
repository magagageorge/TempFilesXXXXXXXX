import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileVideosWidgetComponent } from './profile-videos-widget.component';

describe('ProfileVideosWidgetComponent', () => {
  let component: ProfileVideosWidgetComponent;
  let fixture: ComponentFixture<ProfileVideosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileVideosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileVideosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
