import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileEducationWidgetComponent } from './edit-profile-education-widget.component';

describe('EditProfileEducationWidgetComponent', () => {
  let component: EditProfileEducationWidgetComponent;
  let fixture: ComponentFixture<EditProfileEducationWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileEducationWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileEducationWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
