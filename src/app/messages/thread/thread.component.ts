import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ChatRoom } from '../models/chat-room';
import { MessageForm } from '../models/message-form';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  messengerService: MessengerService;
  router: Router;
  route: ActivatedRoute;
  loading_thread: boolean;
  constructor(messengerService: MessengerService, route: ActivatedRoute, router: Router) {
    this.messengerService = messengerService;
    this.router = router;
    this.route = route;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadChatDetails(params.id);
    });
  }

  loadChatDetails(threadId: number) {
    this.messengerService.CURRENT_MESSENGER_CHATROOM = new ChatRoom();
    this.messengerService.searchChatRoom(threadId).subscribe(chatroom => {
      if (chatroom) {
        chatroom.form = new MessageForm();
        this.messengerService.CURRENT_MESSENGER_CHATROOM = chatroom;
        if (chatroom.lastMessage != null && this.messengerService.CURRENT_MESSENGER_CHATROOM.messages.length == 0) {
          this.messengerService.CURRENT_MESSENGER_CHATROOM.messages.push(chatroom.lastMessage);
        }
      }
      if (!chatroom || (chatroom && chatroom.messages.length < 2)) {
        this.loadThread(threadId);
      }
    });
  }

  loadThread(threadId: number) {
    var _this = this;
    this.messengerService.service.getProvider(this.messengerService.provider).crudconfig.route_url = 'ms/c-rooms/';
    _this.loading_thread = true;
    _this.messengerService.loading_thread_messages = true;
    var tmp_form = this.messengerService.CURRENT_MESSENGER_CHATROOM.form;
    return this.messengerService.service.getone(this.messengerService.provider, { id: threadId }).subscribe(results => {
      _this.loading_thread = false;
      if (results.isSuccess()) {
        var chatroom = results.getResultData() as ChatRoom;
        this.messengerService.CURRENT_MESSENGER_CHATROOM = chatroom;
        this.messengerService.CURRENT_MESSENGER_CHATROOM.form = tmp_form;

        if (this.messengerService.CHATROOMS.length > 0) {
          this.messengerService.searchChatRoom(chatroom.id).subscribe((chatR: ChatRoom) => {
            if (chatR) {
              chatR.messages = chatroom.messages;
            } else {
              if (chatroom.messages.length > 0) {
                chatroom.lastMessage = chatroom.messages[chatroom.messages.length - 1];
              }
              this.messengerService.CHATROOMS.push(chatroom);
            }
          });
        }
        _this.messengerService.loading_thread_messages = false;
      }
    });
  }


}
