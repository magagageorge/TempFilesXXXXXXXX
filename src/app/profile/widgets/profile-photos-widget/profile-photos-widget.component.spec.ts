import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotosWidgetComponent } from './profile-photos-widget.component';

describe('ProfilePhotosWidgetComponent', () => {
  let component: ProfilePhotosWidgetComponent;
  let fixture: ComponentFixture<ProfilePhotosWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotosWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhotosWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
