import { Component, OnInit, Input } from '@angular/core';
import { ChatRoom } from '@app/messages/models/chat-room';

@Component({
  selector: 'app-chat-rooms-room-widget',
  templateUrl: './chat-rooms-room-widget.component.html',
  styleUrls: ['./chat-rooms-room-widget.component.scss']
})
export class ChatRoomsRoomWidgetComponent implements OnInit {

  @Input() chatrooms: ChatRoom[];
  @Input() activeThreadId:number;

  constructor() { }

  ngOnInit() {
  }

}
