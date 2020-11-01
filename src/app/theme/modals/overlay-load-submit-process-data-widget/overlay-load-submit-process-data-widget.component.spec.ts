import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayLoadSubmitProcessDataWidgetComponent } from './overlay-load-submit-process-data-widget.component';

describe('OverlayLoadSubmitProcessDataWidgetComponent', () => {
  let component: OverlayLoadSubmitProcessDataWidgetComponent;
  let fixture: ComponentFixture<OverlayLoadSubmitProcessDataWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayLoadSubmitProcessDataWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayLoadSubmitProcessDataWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
