import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExperienceWidgetComponent } from './profile-experience-widget.component';

describe('ProfileExperienceWidgetComponent', () => {
  let component: ProfileExperienceWidgetComponent;
  let fixture: ComponentFixture<ProfileExperienceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileExperienceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExperienceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
