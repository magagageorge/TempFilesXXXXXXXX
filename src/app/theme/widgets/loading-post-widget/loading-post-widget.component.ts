import { Component, OnInit } from '@angular/core';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-loading-post-widget',
  templateUrl: './loading-post-widget.component.html',
  styleUrls: ['./loading-post-widget.component.scss']
})
export class LoadingPostWidgetComponent implements OnInit {

  feedService:FeedService;
  constructor(feedService:FeedService) {
    this.feedService=feedService;
   }

  ngOnInit() {
  }

}
