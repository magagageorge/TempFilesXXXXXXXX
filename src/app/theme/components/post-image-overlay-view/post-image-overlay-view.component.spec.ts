import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImageOverlayViewComponent } from './post-image-overlay-view.component';

describe('PostImageOverlayViewComponent', () => {
  let component: PostImageOverlayViewComponent;
  let fixture: ComponentFixture<PostImageOverlayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostImageOverlayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostImageOverlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
