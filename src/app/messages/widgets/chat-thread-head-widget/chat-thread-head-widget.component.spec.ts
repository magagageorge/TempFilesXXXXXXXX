import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatThreadHeadWidgetComponent } from './chat-thread-head-widget.component';

describe('ChatThreadHeadWidgetComponent', () => {
  let component: ChatThreadHeadWidgetComponent;
  let fixture: ComponentFixture<ChatThreadHeadWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatThreadHeadWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatThreadHeadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
