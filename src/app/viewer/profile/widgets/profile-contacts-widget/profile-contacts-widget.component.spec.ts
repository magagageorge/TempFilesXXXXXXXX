import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactsWidgetComponent } from './profile-contacts-widget.component';

describe('ProfileContactsWidgetComponent', () => {
  let component: ProfileContactsWidgetComponent;
  let fixture: ComponentFixture<ProfileContactsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileContactsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileContactsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
