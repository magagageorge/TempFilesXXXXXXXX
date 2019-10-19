import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSkillsWidgetComponent } from './profile-skills-widget.component';

describe('ProfileSkillsWidgetComponent', () => {
  let component: ProfileSkillsWidgetComponent;
  let fixture: ComponentFixture<ProfileSkillsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSkillsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSkillsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
