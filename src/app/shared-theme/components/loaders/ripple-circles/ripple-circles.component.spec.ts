import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RippleCirclesComponent } from './ripple-circles.component';

describe('RippleCirclesComponent', () => {
  let component: RippleCirclesComponent;
  let fixture: ComponentFixture<RippleCirclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RippleCirclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RippleCirclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
