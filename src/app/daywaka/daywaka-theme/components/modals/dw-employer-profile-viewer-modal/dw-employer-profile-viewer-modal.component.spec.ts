import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwEmployerProfileViewerModalComponent } from './dw-employer-profile-viewer-modal.component';

describe('DwEmployerProfileViewerModalComponent', () => {
  let component: DwEmployerProfileViewerModalComponent;
  let fixture: ComponentFixture<DwEmployerProfileViewerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwEmployerProfileViewerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwEmployerProfileViewerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
