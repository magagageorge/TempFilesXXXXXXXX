import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalBarsComponent } from './vertical-bars.component';

describe('VerticalBarsComponent', () => {
  let component: VerticalBarsComponent;
  let fixture: ComponentFixture<VerticalBarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalBarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
