import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMoviesWidgetComponent } from './profile-movies-widget.component';

describe('ProfileMoviesWidgetComponent', () => {
  let component: ProfileMoviesWidgetComponent;
  let fixture: ComponentFixture<ProfileMoviesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMoviesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMoviesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
