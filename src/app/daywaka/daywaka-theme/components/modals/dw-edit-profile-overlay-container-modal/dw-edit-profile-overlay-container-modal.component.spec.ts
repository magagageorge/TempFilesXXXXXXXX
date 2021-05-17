import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEditProfileOverlayContainerModalComponent } from './dw-edit-profile-overlay-container-modal.component';

describe('DwEditProfileOverlayContainerModalComponent', () => {
  let component: DwEditProfileOverlayContainerModalComponent;
  let fixture: ComponentFixture<DwEditProfileOverlayContainerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEditProfileOverlayContainerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEditProfileOverlayContainerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
