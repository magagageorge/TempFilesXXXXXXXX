import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedOverlayModalContainerComponent } from './shared-overlay-modal-container.component';

describe('SharedOverlayModalContainerComponent', () => {
  let component: SharedOverlayModalContainerComponent;
  let fixture: ComponentFixture<SharedOverlayModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedOverlayModalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedOverlayModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
