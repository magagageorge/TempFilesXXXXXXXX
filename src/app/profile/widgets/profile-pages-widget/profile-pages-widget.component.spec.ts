import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePagesWidgetComponent } from './profile-pages-widget.component';

describe('ProfilePagesWidgetComponent', () => {
  let component: ProfilePagesWidgetComponent;
  let fixture: ComponentFixture<ProfilePagesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePagesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePagesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
