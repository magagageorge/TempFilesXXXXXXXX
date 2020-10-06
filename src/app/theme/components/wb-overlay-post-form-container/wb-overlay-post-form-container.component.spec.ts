import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WbOverlayPostFormContainerComponent } from './wb-overlay-post-form-container.component';

describe('WbOverlayPostFormContainerComponent', () => {
  let component: WbOverlayPostFormContainerComponent;
  let fixture: ComponentFixture<WbOverlayPostFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WbOverlayPostFormContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WbOverlayPostFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
