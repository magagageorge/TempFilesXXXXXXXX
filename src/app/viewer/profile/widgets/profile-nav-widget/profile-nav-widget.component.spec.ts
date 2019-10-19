import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavWidgetComponent } from './profile-nav-widget.component';

describe('ProfileNavWidgetComponent', () => {
  let component: ProfileNavWidgetComponent;
  let fixture: ComponentFixture<ProfileNavWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNavWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
