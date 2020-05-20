import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { MessengerService } from '@app/messages/services/messenger.service';

@Component({
  selector: 'app-message-image-view-widget',
  templateUrl: './message-image-view-widget.component.html',
  styleUrls: ['./message-image-view-widget.component.scss']
})
export class MessageImageViewWidgetComponent implements AfterViewInit {

  @ViewChild("OvelayViewMessagePicture", { static: false })
  OvelayViewMessagePicture: ElementRef;
  messengerService: MessengerService;
  constructor(messengerService: MessengerService) {
    this.messengerService = messengerService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.messengerService.viewerHeight = this.OvelayViewMessagePicture.nativeElement.clientHeight;
    this.messengerService.viewerWidth = this.OvelayViewMessagePicture.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }
}
