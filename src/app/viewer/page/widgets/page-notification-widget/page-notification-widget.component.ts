import { Component, Input, OnInit } from '@angular/core';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { ConnectionsService } from '@app/services/connections.service';
import { FeedService } from '@app/services/feed.service';
import { NotificationsService } from '@app/services/notifications.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Notification } from "@models/notification";
import { PageNotificationService } from '../../services/page-notification.service';

@Component({
  selector: 'app-page-notification-widget',
  templateUrl: './page-notification-widget.component.html',
  styleUrls: ['./page-notification-widget.component.scss']
})
export class PageNotificationWidgetComponent implements OnInit {

  @Input() notification: Notification;
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  feedService: FeedService;
  constructor(hovercardService: HoverCardService,public notificationsService:PageNotificationService, feedService: FeedService, urlViewerService: UrlViewerService) {
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.feedService = feedService;
  }

  ngOnInit() {
  }


  showNotificationDetails(notification: Notification) {
    if (notification.post_id != null && (notification.class == "NewPagePostComment" || notification.class == "NewPagePostLike" || notification.class == "NewPageCommentLike" || notification.class == "NewPageCommentReply" || notification.class == "NewPageReplyLike")) {
       this.feedService.OpenOverlayPost(notification.post_id);
       notification.seen=1;
    }

  }


}
