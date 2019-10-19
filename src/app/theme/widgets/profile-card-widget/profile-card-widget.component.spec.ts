import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardWidgetComponent } from './profile-card-widget.component';

describe('ProfileCardWidgetComponent', () => {
  let component: ProfileCardWidgetComponent;
  let fixture: ComponentFixture<ProfileCardWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCardWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
