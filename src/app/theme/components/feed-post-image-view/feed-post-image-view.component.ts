import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { FeedService } from '@app/services/feed.service';

@Component({
  selector: 'app-feed-post-image-view',
  templateUrl: './feed-post-image-view.component.html',
  styleUrls: ['./feed-post-image-view.component.scss']
})
export class FeedPostImageViewComponent implements AfterViewInit {

  @ViewChild("OvelayViewProfilePicture", { static: false })
  OvelayViewProfilePicture: ElementRef;
  feedService: FeedService;
  constructor(feedService: FeedService) {
    this.feedService = feedService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.feedService.viewerHeight = this.OvelayViewProfilePicture.nativeElement.clientHeight;
    this.feedService.viewerWidth = this.OvelayViewProfilePicture.nativeElement.clientWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }
}