import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedCommentsWidgetComponent } from './feed-comments-widget.component';

describe('FeedCommentsWidgetComponent', () => {
  let component: FeedCommentsWidgetComponent;
  let fixture: ComponentFixture<FeedCommentsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedCommentsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCommentsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
