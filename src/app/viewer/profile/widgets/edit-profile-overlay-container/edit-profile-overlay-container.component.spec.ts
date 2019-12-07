import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileOverlayContainerComponent } from './edit-profile-overlay-container.component';

describe('EditProfileOverlayContainerComponent', () => {
  let component: EditProfileOverlayContainerComponent;
  let fixture: ComponentFixture<EditProfileOverlayContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfileOverlayContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileOverlayContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
