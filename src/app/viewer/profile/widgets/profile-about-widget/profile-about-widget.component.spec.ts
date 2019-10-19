import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAboutWidgetComponent } from './profile-about-widget.component';

describe('ProfileAboutWidgetComponent', () => {
  let component: ProfileAboutWidgetComponent;
  let fixture: ComponentFixture<ProfileAboutWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAboutWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAboutWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
