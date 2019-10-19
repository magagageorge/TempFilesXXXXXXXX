import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeftNavWidgetComponent } from './profile-left-nav-widget.component';

describe('ProfileLeftNavWidgetComponent', () => {
  let component: ProfileLeftNavWidgetComponent;
  let fixture: ComponentFixture<ProfileLeftNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLeftNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeftNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
