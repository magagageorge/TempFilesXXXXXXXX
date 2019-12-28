import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayModalContainerComponent } from './overlay-modal-container.component';

describe('OverlayModalContainerComponent', () => {
  let component: OverlayModalContainerComponent;
  let fixture: ComponentFixture<OverlayModalContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayModalContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayModalContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
