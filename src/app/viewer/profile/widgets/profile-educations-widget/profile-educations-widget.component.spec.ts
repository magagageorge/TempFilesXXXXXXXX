import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEducationsWidgetComponent } from './profile-educations-widget.component';

describe('ProfileEducationsWidgetComponent', () => {
  let component: ProfileEducationsWidgetComponent;
  let fixture: ComponentFixture<ProfileEducationsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEducationsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEducationsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
