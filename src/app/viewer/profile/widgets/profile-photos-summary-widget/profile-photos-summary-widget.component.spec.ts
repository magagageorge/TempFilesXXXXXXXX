import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePhotosSummaryWidgetComponent } from './profile-photos-summary-widget.component';

describe('ProfilePhotosSummaryWidgetComponent', () => {
  let component: ProfilePhotosSummaryWidgetComponent;
  let fixture: ComponentFixture<ProfilePhotosSummaryWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePhotosSummaryWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePhotosSummaryWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
