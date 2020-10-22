import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, EventEmitter } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';
import { ChatRoom } from '@app/messages/models/chat-room';
import { Observable, of, fromEvent, Subscription } from 'rxjs';
import { Message } from '@app/messages/models/message';
import { Router } from '@angular/router';
import { Profile } from '@app/models/profile/profile';
import { MessageForm } from '@app/messages/models/message-form';
import { MathService } from '@app/services/math.service';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Link, WfLinkifyService } from '@app/libs/wf-linkify';
import { WfLinkPreviewService } from '@app/libs/wf-link-preview/services/wf-link-preview.service';
import { LinkPreview } from '@app/libs/wf-link-preview';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { NgxImageCompressService } from 'ngx-image-compress';


export interface PreviewPicture {
  url: string;
  width: number;
  height: number;
  file: File;
}

export interface PreviewFile {
  name: string;
  size: string;
  extention: string;
  file: File;
}


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
  messagesBoxWidth: number = 0;
  maxMessageImageWidth: number = 0;
  errors: any[];
  messages: any[];
  router: Router;
  submitted: boolean = false;
  link_preview_info: any;
  pushing_message: boolean = false;
  recipients: any[] = [];
  filesToUpload: Array<File> = [];
  image_preview_urls: PreviewPicture[] = [];
  file_preview_list: PreviewFile[] = [];
  allowedExtensions: string[] = ['doc', 'docx', 'csv', 'xls', 'xlsx', 'pdf', 'txt', 'png', 'jpg', 'gif', 'jpeg'];
  extentionIcons: any = { 'doc': 'fa fa-file-word-o', 'docx': 'fa fa-file-word-o', 'pdf': 'fa fa-file-pdf-o', 'csv': 'fa fa-file-o', 'xls': 'fa fa-file-excel-o', 'xlsx': 'fa fa-file-excel-o', 'txt': 'fa fa-file-text-o' };

  onLinkFound: EventEmitter<Array<Link>> = new EventEmitter<Array<Link>>();

  links: Link[] = [];
  mentions: Link[] = [];
  hashtags: Link[] = [];
  linkPreview: LinkPreview = null;

  constructor(messengerService: MessengerService, public imageCompress: NgxImageCompressService, public linkifyService: WfLinkifyService,
    public linkPreviewService: WfLinkPreviewService, router: Router) {
    this.messengerService = messengerService;
    this.router = router;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
    this._init();
    this.next_messages_page = 2;
  }

  getDimensions() {
    this.messagesBoxWidth = this.messageInputWidth = this.messageInput.nativeElement.clientWidth;
    this.maxMessageImageWidth = Math.round(this.messagesBoxWidth * 0.83);
    this.messageInputHeight = this.messageInput.nativeElement.clientHeight;
  }

  scrollMessagesToBottom() {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (e) {
      console.error(e);
    }
  }

  messageFocus() {
    if (this.chatroom.form.message.trim() == '') {
      this.chatroom.form.message = " ";
    }
  }

  OnBlurMessageBox() {
    if (this.chatroom.form.message.trim() == '') {
      this.chatroom.form.message = '';
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
    if (this.chatroom.form.message == '' && files.length < 1 && this.image_preview_urls.length < 1) {
      return false;
    }

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formData.append("ChatMessageForm[upload_files][]", files[i], files[i]['name']);
      }
    }

    if (this.linkPreview !== null) {
      this.linkPreview.code = "";
      formData.append("link", JSON.stringify(this.linkPreview));
    }

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
            _this.image_preview_urls = [];
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
      _this.image_preview_urls = [];
      _this.file_preview_list = [];
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

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      //this.filesToUpload = this.filesToUpload.concat(<Array<File>>event.target.files);
      var filesAmount = event.target.files.length;
      let files = event.target.files;
      for (let i = 0; i < filesAmount; i++) {
        var f = files[i];
        if (this.validateFile(f)) {
          // Process Valid Files.
          if (f.type.match('image.*')) {
            this.PushPreviewImages(<File>f);
          } else {
            this.file_preview_list.push({ name: f.name, size: MathService.BitesToSize(f.size), extention: MessengerService.getFileExtension(f.name), file: f });
            this.filesToUpload.push(<File>f);
          }
        } else {
          continue;
        }
      }
    }
  }

  PushPreviewImages(f: File) {
    var fileReader = new FileReader();
    var i_url;
    var _this = this;
    fileReader.onload = (e) => {
      if (e) {
        i_url = (<FileReader>e.target).result;
        SysFunctions.getImageCompressionRates(i_url, 'MESSAGE_IMAGE').then(rts => {
          SysFunctions.getImageOrientation(f).then(orientation => {
            _this.imageCompress.compressFile(i_url, orientation, rts.ratio, rts.quality).then(
              processedImageDataUrl => {
                var loadedImage = new Image();
                loadedImage.onload = (event) => {
                  if (event) {
                    console.log(rts)
                    var imgFile = SysFunctions.DataUrlToFile(processedImageDataUrl);
                    _this.filesToUpload.push(imgFile);
                    _this.image_preview_urls.push({ url: processedImageDataUrl, width: loadedImage.width, height: loadedImage.height, file: imgFile });
                  }
                }
                loadedImage.src = processedImageDataUrl;
              });
          });

        });
      }
    }
    fileReader.readAsDataURL(<File>f);
  }

  RemovePreviewImage(preview: PreviewPicture) {
    this.image_preview_urls = this.image_preview_urls.filter((x: PreviewPicture) => x.url !== preview.url);
    if (preview.file !== null) {
      this.filesToUpload = this.filesToUpload.filter((x: File) => x !== <File>preview.file);
    }
  }

  RemoveFilePreview(file_preview: PreviewFile) {
    this.file_preview_list = this.file_preview_list.filter((x: PreviewFile) => x.file !== file_preview.file);
    if (file_preview.file !== null) {
      this.filesToUpload = this.filesToUpload.filter((x: File) => x !== <File>(file_preview.file));
    }
  }

  SelectUploadAttachment(): void {
    var elem: HTMLElement = document.querySelector('#message_upload_input_id');
    if (elem != null) {
      elem.click();
    }
  }

  validateFile(file: File): Boolean {
    if (this.allowedExtensions.length !== 0 && file instanceof File) {
      const ext = MessengerService.getFileExtension(file.name);
      if (this.allowedExtensions.indexOf(ext) !== -1) {
        return true;
      }
    }
    return false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

  private _init() {
    fromEvent(document, 'input')
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        map(event => {
          const data = event.target['innerHTML'];
          const links: Link[] = this.linkifyService.find(data);
          //console.log('data: ', data);
          //console.log('links: ', links);
          //event.target['innerHTML'] = this.linkifyService.linkify(data);
          return links;
        })).subscribe((links) => {
          this.onLinkFound.emit(links);
        });

    this.onLinkFound.subscribe((links: Array<Link>) => {
      this.links = [];
      links.forEach(link => {
        if (link.type == 'url') {
          this.linkPreviewService.searchLink(this.links, link.value).subscribe(lin => {
            if (!lin) {
              this.links.push(link);
            }
          });
        }
        if (link.type == 'mention') {
          this.linkPreviewService.searchLink(this.mentions, link.value).subscribe(lin => {
            if (!lin) {
              this.mentions.push(link);
            }
          });
        }
        if (link.type == 'hashtag') {
          this.linkPreviewService.searchLink(this.hashtags, link.value).subscribe(lin => {
            if (!lin) {
              this.hashtags.push(link);
            }
          });
        }
      });
    });

  }

  updateLinkPreview(prev: LinkPreview) {
    this.linkPreview = prev;
  }

}
