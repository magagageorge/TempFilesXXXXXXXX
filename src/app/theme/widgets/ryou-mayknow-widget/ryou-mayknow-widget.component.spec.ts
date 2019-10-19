import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyouMayknowWidgetComponent } from './ryou-mayknow-widget.component';

describe('RyouMayknowWidgetComponent', () => {
  let component: RyouMayknowWidgetComponent;
  let fixture: ComponentFixture<RyouMayknowWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyouMayknowWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyouMayknowWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
