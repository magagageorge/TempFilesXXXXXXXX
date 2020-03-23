import { Component, OnInit } from '@angular/core';
import { MessengerService } from './services/messenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  messengerService: MessengerService;
  router: Router;
  constructor(messengerService: MessengerService, router: Router) {
    this.messengerService = messengerService;
    this.router = router;
  }

  ngOnInit() {
    if (this.messengerService.CHATROOMS.length > 0) {
      //return this.router.navigateByUrl('messages/thread/'+this.messengerService.CHATROOMS[0].id+'');
      this.messengerService.CURRENT_MESSENGER_CHATROOM = this.messengerService.CHATROOMS[0];
      this.messengerService.CURRENT_MESSENGER_CHATROOM.messages.push(this.messengerService.CHATROOMS[0].lastMessage);
    }
  }

}
