import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayPostViewWidgetComponent } from './overlay-post-view-widget.component';

describe('OverlayPostViewWidgetComponent', () => {
  let component: OverlayPostViewWidgetComponent;
  let fixture: ComponentFixture<OverlayPostViewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayPostViewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayPostViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
