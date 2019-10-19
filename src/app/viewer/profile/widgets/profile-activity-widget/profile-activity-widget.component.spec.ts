import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActivityWidgetComponent } from './profile-activity-widget.component';

describe('ProfileActivityWidgetComponent', () => {
  let component: ProfileActivityWidgetComponent;
  let fixture: ComponentFixture<ProfileActivityWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileActivityWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileActivityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
