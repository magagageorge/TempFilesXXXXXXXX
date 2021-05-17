import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileSkillsWidgetComponent } from './edit-profile-skills-widget.component';

describe('EditProfileSkillsWidgetComponent', () => {
  let component: EditProfileSkillsWidgetComponent;
  let fixture: ComponentFixture<EditProfileSkillsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileSkillsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileSkillsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
