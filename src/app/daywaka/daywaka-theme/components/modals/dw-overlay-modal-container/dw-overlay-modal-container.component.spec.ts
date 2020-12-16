import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwOverlayModalContainerComponent } from './dw-overlay-modal-container.component';

describe('DwOverlayModalContainerComponent', () => {
  let component: DwOverlayModalContainerComponent;
  let fixture: ComponentFixture<DwOverlayModalContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DwOverlayModalContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DwOverlayModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
