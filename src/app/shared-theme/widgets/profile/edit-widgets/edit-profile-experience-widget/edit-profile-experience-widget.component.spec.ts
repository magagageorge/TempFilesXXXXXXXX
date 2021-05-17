import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileExperienceWidgetComponent } from './edit-profile-experience-widget.component';

describe('EditProfileExperienceWidgetComponent', () => {
  let component: EditProfileExperienceWidgetComponent;
  let fixture: ComponentFixture<EditProfileExperienceWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileExperienceWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileExperienceWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
