import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewsWidgetComponent } from './profile-views-widget.component';

describe('ProfileViewsWidgetComponent', () => {
  let component: ProfileViewsWidgetComponent;
  let fixture: ComponentFixture<ProfileViewsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileViewsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
