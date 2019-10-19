import { Component, OnInit } from '@angular/core';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-feed-images-overlay-view',
  templateUrl: './feed-images-overlay-view.component.html',
  styleUrls: ['./feed-images-overlay-view.component.scss']
})
export class FeedImagesOverlayViewComponent implements OnInit {

  feedService: FeedService;
  constructor(feedService: FeedService) {
    this.feedService = feedService;
  }

  ngOnInit() {
  }

}
