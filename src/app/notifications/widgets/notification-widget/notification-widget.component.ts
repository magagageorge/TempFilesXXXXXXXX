import { Component, OnInit, Input } from '@angular/core';
import { Notification } from "@models/notification";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { ConnectionsService } from '@app/services/connections.service';
import { NotificationsService } from '@app/services/notifications.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-notification-widget',
  templateUrl: './notification-widget.component.html',
  styleUrls: ['./notification-widget.component.scss']
})
export class NotificationWidgetComponent implements OnInit {
  @Input() notification: Notification;
  hovercardService: HoverCardService;
  connectionsService: ConnectionsService;
  notificationsService: NotificationsService;
  urlViewerService: UrlViewerService;
  feedService: FeedService;
  constructor(hovercardService: HoverCardService, feedService: FeedService, urlViewerService: UrlViewerService, connectionsService: ConnectionsService, notificationsService: NotificationsService) {
    this.hovercardService = hovercardService;
    this.connectionsService = connectionsService;
    this.notificationsService = notificationsService;
    this.urlViewerService = urlViewerService;
    this.feedService = feedService;
  }

  ngOnInit() {
  }


  showNotificationDetails(notification: Notification) {
    if (notification.post_id != null && (notification.class == "NewPostCommentNotification" || notification.class == "NewPostLikeNotification" || notification.class == "NewCommentLikeNotification" || notification.class == "NewCommentReplyNotification" || notification.class == "NewReplyLikeNotification")) {
       this.feedService.OpenOverlayPost(notification.post_id);
       notification.seen=1;
    }

  }

}
