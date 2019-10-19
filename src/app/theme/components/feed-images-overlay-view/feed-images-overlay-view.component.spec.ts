import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedImagesOverlayViewComponent } from './feed-images-overlay-view.component';

describe('FeedImagesOverlayViewComponent', () => {
  let component: FeedImagesOverlayViewComponent;
  let fixture: ComponentFixture<FeedImagesOverlayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedImagesOverlayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedImagesOverlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
