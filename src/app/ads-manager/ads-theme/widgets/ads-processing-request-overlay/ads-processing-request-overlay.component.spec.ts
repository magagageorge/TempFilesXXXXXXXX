import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsProcessingRequestOverlayComponent } from './ads-processing-request-overlay.component';

describe('AdsProcessingRequestOverlayComponent', () => {
  let component: AdsProcessingRequestOverlayComponent;
  let fixture: ComponentFixture<AdsProcessingRequestOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsProcessingRequestOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsProcessingRequestOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
