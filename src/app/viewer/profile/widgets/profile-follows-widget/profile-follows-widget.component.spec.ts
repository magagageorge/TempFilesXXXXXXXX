import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFollowsWidgetComponent } from './profile-follows-widget.component';

describe('ProfileFollowsWidgetComponent', () => {
  let component: ProfileFollowsWidgetComponent;
  let fixture: ComponentFixture<ProfileFollowsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFollowsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFollowsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
