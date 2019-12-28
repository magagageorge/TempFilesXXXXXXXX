import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTopCardWidgetComponent } from './profile-top-card-widget.component';

describe('ProfileTopCardWidgetComponent', () => {
  let component: ProfileTopCardWidgetComponent;
  let fixture: ComponentFixture<ProfileTopCardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTopCardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTopCardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
