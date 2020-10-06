import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFeedWidgetComponent } from './page-feed-widget.component';

describe('PageFeedWidgetComponent', () => {
  let component: PageFeedWidgetComponent;
  let fixture: ComponentFixture<PageFeedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFeedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
