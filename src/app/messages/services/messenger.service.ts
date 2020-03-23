import { Injectable, Inject } from '@angular/core';
import { ChatRoom } from '../models/chat-room';
import { getDeepFromObject } from '@app/@crud/helpers';
import { Router } from '@angular/router';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { MessageForm } from '../models/message-form';


@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  CHATROOMS: ChatRoom[] = [];
  FILTERED_CHATROOMS: ChatRoom[] = [];
  CURRENT_MESSENGER_CHATROOM: ChatRoom;
  service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  next_chatrooms_page: number;
  loading_chatrooms: boolean;
  loading_more_chatrooms: boolean;
  reached_end_of_chatrooms: boolean;
  loading_thread_messages: boolean = false;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_chatrooms_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.messenger.provider');
    this.CURRENT_MESSENGER_CHATROOM = new ChatRoom();
    this.loadChatRooms({ page: this.next_chatrooms_page });
  }

  loadNewChatRoom(params?: {}): any {
    var _this = this;
    this.loading_chatrooms = true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'ms/c-rooms/';
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_chatrooms = false;
      if (results.isSuccess()) {
        _this.next_chatrooms_page++;
        _this.CHATROOMS = _this.CHATROOMS.concat(results.getResultData());
      }
    });
  }

  loadChatRooms(params?: {}): any {
    var _this = this;
    if (this.reached_end_of_chatrooms) {
      return;
    }
    this.loading_chatrooms = true;
    this.loading_more_chatrooms = true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'ms/c-rooms/';
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_chatrooms = false;
      _this.loading_more_chatrooms = false;
      if (results.isSuccess()) {
        var chatrooms = results.getResultData() as ChatRoom[];
        if (chatrooms.length) {
          _this.searchChatRoom(chatrooms[0].id).subscribe(chatroom => {
            if (chatroom) {
              _this.reached_end_of_chatrooms = true;
            } else {
              _this.CHATROOMS = _this.CHATROOMS.concat(chatrooms);
              _this.setDefaultChatRoom();
              _this.next_chatrooms_page++;
            }
          });
        } else {
          _this.reached_end_of_chatrooms = true;
        }
      }
    });
  }

  setDefaultChatRoom() {
    if (this.router.url == '/messages') {
      var tmp_chat = this.CHATROOMS[0];
      tmp_chat.form = new MessageForm();
      this.CURRENT_MESSENGER_CHATROOM = tmp_chat;
    }
  }

  searchChatRoom(id: number): Observable<ChatRoom> {
    return of(this.CHATROOMS.find((chatroom: ChatRoom) => chatroom.id == id));
  }

  searchFilteredChatRoom(id: number): Observable<ChatRoom> {
    return of(this.FILTERED_CHATROOMS.find((chatroom: ChatRoom) => chatroom.id == id));
  }

  clearThreadMessages(threadId: number) {
    if (this.CURRENT_MESSENGER_CHATROOM.id == threadId) {
      this.CURRENT_MESSENGER_CHATROOM.messages = [];
      this.CURRENT_MESSENGER_CHATROOM.lastMessage = null;
    }
    this.searchChatRoom(threadId).subscribe((cRoom: ChatRoom) => {
      if (cRoom) {
        cRoom.messages = [];
        cRoom.lastMessage = null;
      }
    })
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
