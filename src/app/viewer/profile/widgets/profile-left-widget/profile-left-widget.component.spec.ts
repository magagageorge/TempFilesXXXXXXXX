import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLeftWidgetComponent } from './profile-left-widget.component';

describe('ProfileLeftWidgetComponent', () => {
  let component: ProfileLeftWidgetComponent;
  let fixture: ComponentFixture<ProfileLeftWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLeftWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLeftWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
