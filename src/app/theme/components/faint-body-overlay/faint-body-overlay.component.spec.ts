import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaintBodyOverlayComponent } from './faint-body-overlay.component';

describe('FaintBodyOverlayComponent', () => {
  let component: FaintBodyOverlayComponent;
  let fixture: ComponentFixture<FaintBodyOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaintBodyOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaintBodyOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
