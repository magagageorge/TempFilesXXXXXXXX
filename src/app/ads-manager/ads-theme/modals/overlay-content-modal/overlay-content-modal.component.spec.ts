import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayContentModalComponent } from './overlay-content-modal.component';

describe('OverlayContentModalComponent', () => {
  let component: OverlayContentModalComponent;
  let fixture: ComponentFixture<OverlayContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
