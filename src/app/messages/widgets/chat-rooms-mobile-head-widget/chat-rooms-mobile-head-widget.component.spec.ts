import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomsMobileHeadWidgetComponent } from './chat-rooms-mobile-head-widget.component';

describe('ChatRoomsMobileHeadWidgetComponent', () => {
  let component: ChatRoomsMobileHeadWidgetComponent;
  let fixture: ComponentFixture<ChatRoomsMobileHeadWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomsMobileHeadWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomsMobileHeadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
