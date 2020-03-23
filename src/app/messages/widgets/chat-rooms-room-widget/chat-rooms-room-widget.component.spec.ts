import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomsRoomWidgetComponent } from './chat-rooms-room-widget.component';

describe('ChatRoomsRoomWidgetComponent', () => {
  let component: ChatRoomsRoomWidgetComponent;
  let fixture: ComponentFixture<ChatRoomsRoomWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomsRoomWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomsRoomWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
