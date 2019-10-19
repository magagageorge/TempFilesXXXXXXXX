import { Component, OnInit,Input } from '@angular/core';
import { Notification } from "@models/notification";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { ConnectionsService } from '@app/services/connections.service';
import { NotificationsService } from '@app/services/notifications.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Component({
  selector: 'app-notification-widget',
  templateUrl: './notification-widget.component.html',
  styleUrls: ['./notification-widget.component.scss']
})
export class NotificationWidgetComponent implements OnInit {
  @Input() notification:Notification;
  hovercardService:HoverCardService;
  connectionsService:ConnectionsService;
  notificationsService:NotificationsService;
  urlViewerService:UrlViewerService;
  constructor(hovercardService:HoverCardService,urlViewerService:UrlViewerService,connectionsService:ConnectionsService,notificationsService:NotificationsService) {
    this.hovercardService=hovercardService;
    this.connectionsService=connectionsService;
    this.notificationsService=notificationsService;
    this.urlViewerService=urlViewerService;
   }

  ngOnInit() {
  }

}
