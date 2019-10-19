import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLikesWidgetComponent } from './profile-likes-widget.component';

describe('ProfileLikesWidgetComponent', () => {
  let component: ProfileLikesWidgetComponent;
  let fixture: ComponentFixture<ProfileLikesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLikesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLikesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
