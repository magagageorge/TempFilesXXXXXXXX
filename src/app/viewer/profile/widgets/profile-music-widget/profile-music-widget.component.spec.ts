import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMusicWidgetComponent } from './profile-music-widget.component';

describe('ProfileMusicWidgetComponent', () => {
  let component: ProfileMusicWidgetComponent;
  let fixture: ComponentFixture<ProfileMusicWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMusicWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMusicWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
