import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostImageViewComponent } from './profile-post-image-view.component';

describe('ProfilePostImageViewComponent', () => {
  let component: ProfilePostImageViewComponent;
  let fixture: ComponentFixture<ProfilePostImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePostImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePostImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
