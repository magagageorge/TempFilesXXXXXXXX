import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRoomsWidgetComponent } from './chat-rooms-widget.component';

describe('ChatRoomsWidgetComponent', () => {
  let component: ChatRoomsWidgetComponent;
  let fixture: ComponentFixture<ChatRoomsWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRoomsWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRoomsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
