import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileAboutWidgetComponent } from './edit-profile-about-widget.component';

describe('ProfileAboutWidgetComponent', () => {
  let component: EditProfileAboutWidgetComponent;
  let fixture: ComponentFixture<EditProfileAboutWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileAboutWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileAboutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
