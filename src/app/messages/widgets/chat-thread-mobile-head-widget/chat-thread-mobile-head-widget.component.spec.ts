import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadMobileHeadWidgetComponent } from './chat-thread-mobile-head-widget.component';

describe('ChatThreadMobileHeadWidgetComponent', () => {
  let component: ChatThreadMobileHeadWidgetComponent;
  let fixture: ComponentFixture<ChatThreadMobileHeadWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatThreadMobileHeadWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThreadMobileHeadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
