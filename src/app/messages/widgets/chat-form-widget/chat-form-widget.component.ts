import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';
import { ChatRoom } from '@app/messages/models/chat-room';
import { MessageForm } from '@app/messages/models/message-form';
import { Profile } from '@app/models/profile/profile';
import { Message } from '@app/messages/models/message';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-chat-form-widget',
  templateUrl: './chat-form-widget.component.html',
  styleUrls: ['./chat-form-widget.component.scss']
})
export class ChatFormWidgetComponent implements AfterViewInit {

  @Input() chatroom: ChatRoom;
  @ViewChild("messageInput", { static: false })
  messageInput: ElementRef;
  messageInputHeight:number=0;
  messageInputWidth:number=0;
  messengerService: MessengerService;
  filesToUpload: File[];
  errors: any[];
  messages: any[];
  router:Router;
  submitted: boolean = false;
  picture_preview_urls: any[] = [];
  link_preview_info: any;
  pushing_message: boolean = false;
  recipients: any[] = [];
  constructor(messengerService: MessengerService,router:Router) {
    this.messengerService = messengerService;
    this.router=router;
  }

  ngAfterViewInit() {
    this.messageInputWidth = this.messageInput.nativeElement.clientWidth;
    this.messageInputHeight = this.messageInput.nativeElement.clientHeight;
  }

  messageFocus() {

  }

  pushMessage() {
    var _this = this;
    this.errors = this.messages = [];
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
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
              if(_this.router.url=='/messages/thread/new'){
                _this.messengerService.CURRENT_MESSENGER_CHATROOM=data_chatroom;
                return _this.router.navigateByUrl('messages/thread/'+data_chatroom.id+'');
              }
              _this.chatroom = data_chatroom;
            }
            if (data_message != null) {
              _this.chatroom.messages.push(data_message);
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

  onResizeEnd(event: ResizeEvent): void {
    //console.log('Element was resized', event);
  }
}
