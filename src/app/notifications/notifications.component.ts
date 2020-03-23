import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '@app/services/notifications.service';
import { Title, Meta } from '@angular/platform-browser';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notificationsService: NotificationsService;
  feedService:FeedService;

  constructor(notificationsService: NotificationsService,feedService:FeedService, private title: Title, private meta: Meta) {
    this.notificationsService = notificationsService;
    this.feedService=feedService;
  }

  ngOnInit() {
    this.title.setTitle('Woorbi - Notifications')
  }

}
