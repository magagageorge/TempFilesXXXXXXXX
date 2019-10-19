import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCommentRepliesWidgetComponent } from './feed-comment-replies-widget.component';

describe('FeedCommentRepliesWidgetComponent', () => {
  let component: FeedCommentRepliesWidgetComponent;
  let fixture: ComponentFixture<FeedCommentRepliesWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCommentRepliesWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCommentRepliesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
