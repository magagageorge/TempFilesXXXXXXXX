import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileActionButtonsWidgetComponent } from './profile-action-buttons-widget.component';

describe('ProfileActionButtonsWidgetComponent', () => {
  let component: ProfileActionButtonsWidgetComponent;
  let fixture: ComponentFixture<ProfileActionButtonsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileActionButtonsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileActionButtonsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
