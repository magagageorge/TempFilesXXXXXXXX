import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedImageViewWidgetComponent } from './feed-image-view-widget.component';

describe('FeedImageViewWidgetComponent', () => {
  let component: FeedImageViewWidgetComponent;
  let fixture: ComponentFixture<FeedImageViewWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedImageViewWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedImageViewWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
