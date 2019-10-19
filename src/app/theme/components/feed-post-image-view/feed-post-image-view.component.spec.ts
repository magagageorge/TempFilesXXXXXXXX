import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedPostImageViewComponent } from './feed-post-image-view.component';

describe('FeedPostImageViewComponent', () => {
  let component: FeedPostImageViewComponent;
  let fixture: ComponentFixture<FeedPostImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedPostImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedPostImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
