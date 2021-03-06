import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedWidgetComponent } from './feed-widget.component';

describe('FeedWidgetComponent', () => {
  let component: FeedWidgetComponent;
  let fixture: ComponentFixture<FeedWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
