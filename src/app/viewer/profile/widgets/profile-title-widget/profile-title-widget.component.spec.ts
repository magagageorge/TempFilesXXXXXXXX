import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTitleWidgetComponent } from './profile-title-widget.component';

describe('ProfileTitleWidgetComponent', () => {
  let component: ProfileTitleWidgetComponent;
  let fixture: ComponentFixture<ProfileTitleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTitleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTitleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
