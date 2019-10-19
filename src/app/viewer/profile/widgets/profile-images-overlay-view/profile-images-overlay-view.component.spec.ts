import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImagesOverlayViewComponent } from './profile-images-overlay-view.component';

describe('ProfileImagesOverlayViewComponent', () => {
  let component: ProfileImagesOverlayViewComponent;
  let fixture: ComponentFixture<ProfileImagesOverlayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileImagesOverlayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileImagesOverlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
