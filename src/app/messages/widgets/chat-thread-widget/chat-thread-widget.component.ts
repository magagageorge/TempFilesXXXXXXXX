import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';
import { ChatRoom } from '@app/messages/models/chat-room';
import { Observable, of } from 'rxjs';
import { Message } from '@app/messages/models/message';
import { Router } from '@angular/router';
import { Profile } from '@app/models/profile/profile';
import { MessageForm } from '@app/messages/models/message-form';

@Component({
  selector: 'app-chat-thread-widget',
  templateUrl: './chat-thread-widget.component.html',
  styleUrls: ['./chat-thread-widget.component.scss']
})
export class ChatThreadWidgetComponent implements AfterViewInit {

  @Input() chatroom: ChatRoom;
  @ViewChild("messagesContainer", { static: false })
  messagesContainer: ElementRef;
  @ViewChild("messageInput", { static: false })
  messageInput: ElementRef;
  messengerService: MessengerService;
  reached_end_of_messages: boolean = false;
  loading_messages: boolean;
  next_messages_page: number;
  messageInputHeight: number = 0;
  messageInputWidth: number = 0;
  filesToUpload: File[];
  errors: any[];
  messages: any[];
  router: Router;
  submitted: boolean = false;
  picture_preview_urls: any[] = [];
  link_preview_info: any;
  pushing_message: boolean = false;
  recipients: any[] = [];
  constructor(messengerService: MessengerService, router: Router) {
    this.messengerService = messengerService;
    this.router = router;
  }


  ngAfterViewInit() {
    this.messageInputWidth = this.messageInput.nativeElement.clientWidth;
    this.messageInputHeight = this.messageInput.nativeElement.clientHeight;
    this.next_messages_page = 2;
  }

  scrollMessagesToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (e) {
      console.error(e);
    }
  }

  messageFocus() {
     if(this.chatroom.form.message.trim()==''){
      this.chatroom.form.message=" ";
     }
  }

  OnBlurMessageBox(){
    if(this.chatroom.form.message.trim()==''){
      this.chatroom.form.message='';
     }   
  }

  pushMessage() {
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    if (this.chatroom.isNew && this.chatroom.profiles.length < 1) {
      return;
    }

    this.messengerService.service.getProvider(this.messengerService.provider).crudconfig.route_url = 'ms/chat/';
    if (this.chatroom.form.message == '' && files.length < 1 && this.picture_preview_urls.length < 1) {
      return false;
    }

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("ChatForm[upload_files][]", files[i], files[i]['name']);
      }
    }

    /*
    if (this.link_preview_info !== null) {
      this.link_preview_info.code = "";
      formData.append("link", JSON.stringify(this.link_preview_info));
    }
    */

    formData.append("roomId", this.chatroom.id);
    formData.append("isNewCR", this.chatroom.isNew);
    if (this.chatroom.isNew && this.chatroom.profiles.length) {
      this.recipients = [];
      this.chatroom.profiles.forEach((p: Profile) => {
        this.recipients.push({ id: p.user_id });
      });
    }
    formData.append("profiles", JSON.stringify(this.recipients));
    formData.append("message", this.chatroom.form.message.trim());
    if (this.submitted === false) {
      this.pushing_message = true;
      this.submitted = true;
      this.messengerService.service.create(this.messengerService.provider, formData, {}).subscribe(function (result) {
        _this.submitted = false;
        if (result.isSuccess()) {
          _this.messages = result.getMessages();
          var data = result.getResultData();
          var data_chatroom = data.chatroom as ChatRoom;
          var data_message = data.message;
          if (data.done == true) {
            //_this.messengerService.service.prependFeed(data.data);
            _this.filesToUpload = [];
            _this.picture_preview_urls = [];
            if (_this.chatroom.isNew && data_chatroom != null) {
              data_chatroom.form = new MessageForm();
              if (_this.router.url == '/messages/thread/new') {
                _this.messengerService.CURRENT_MESSENGER_CHATROOM = data_chatroom;
                return _this.router.navigateByUrl('messages/thread/' + data_chatroom.id + '');
              }
              _this.chatroom = data_chatroom;
            }
            if (data_message != null) {
              _this.chatroom.messages.push(data_message);
              _this.scrollMessagesToBottom();
            }
          }
        } else {
          _this.errors = result.getErrors();
        }
        _this.pushing_message = false;
      });
      _this.filesToUpload = [];
      _this.picture_preview_urls = [];
      this.clearMessageForm();
    }
  }

  clearMessageForm() {
    this.chatroom.form = new MessageForm();
  }


  onScrollUp() {
    this.loadThreadMessages({ room: this.chatroom.id, page: this.next_messages_page });
  }

  loadThreadMessages(params?: {}): any {
    var _this = this;
    if (this.reached_end_of_messages) {
      return;
    }
    var next_page: boolean = false;
    var end_ofthread: boolean = true;
    this.loading_messages = true;
    this.messengerService.service.getProvider(this.messengerService.provider).crudconfig.route_url = 'ms/chat/';
    return this.messengerService.service.getall(this.messengerService.provider, params).subscribe(results => {
      _this.loading_messages = false;
      if (results.isSuccess()) {
        var messages = results.getResultData() as Message[];
        if (messages.length > 0) {
          messages.forEach((message: Message) => {
            _this.searchMessage(message.id).subscribe((m: Message) => {
              if (m) { }
              else {
                _this.chatroom.messages.unshift(message);
                next_page = true;
                end_ofthread = false;
              }
            });
          });

          if (end_ofthread) {
            _this.reached_end_of_messages = true;
          }

          if (next_page) {
            _this.next_messages_page++;
          }

        } else {
          _this.reached_end_of_messages = true;
        }
      }
    });
  }

  searchMessage(id: number): Observable<Message> {
    return of(this.chatroom.messages.find((message: Message) => message.id == id));
  }

}
