import { Component, OnInit } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';
import { ChatRoom } from '@app/messages/models/chat-room';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  messengerService:MessengerService;
  constructor(messengerService:MessengerService) {
    this.messengerService=messengerService;
   }


  ngOnInit() {
    this.messengerService.CURRENT_MESSENGER_CHATROOM=new ChatRoom();
  }

}
