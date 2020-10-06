import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImagesOverlayViewComponent } from './page-images-overlay-view.component';

describe('PageImagesOverlayViewComponent', () => {
  let component: PageImagesOverlayViewComponent;
  let fixture: ComponentFixture<PageImagesOverlayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImagesOverlayViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImagesOverlayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
