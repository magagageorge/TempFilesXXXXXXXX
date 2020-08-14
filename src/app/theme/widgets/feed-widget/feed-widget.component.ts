import { Component, Input, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { PostingService } from '@app/services/posting.service';
import { CommentsService } from "@services/comments.service";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ImageIconsService } from '@app/services/image-icons.service';
import { ShowAdsService } from '@app/services/show-ads.service';

@Component({
  selector: 'app-feed-widget',
  templateUrl: './feed-widget.component.html',
  styleUrls: ['./feed-widget.component.scss']
})
export class FeedWidgetComponent implements AfterViewInit {
  @Input() profile: any;
  @ViewChild("feedContainer", { static: false })
  feedContainer: ElementRef;
  container_width: number;
  max_post_images_height: number;

  feedService: FeedService;
  commentService: CommentsService;
  constructor(feedService: FeedService, public showAdsService: ShowAdsService, postingService: PostingService, commentService: CommentsService, imageIconsService: ImageIconsService, urlViewerService: UrlViewerService, hovercardService: HoverCardService) {
    this.feedService = feedService;
    this.commentService = commentService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.container_width = this.feedContainer.nativeElement.clientWidth * 0.98;
    this.commentService.feedContainerWidth = this.feedContainer.nativeElement.clientWidth;
    //this.max_post_images_height=window.innerHeight * 0.8;
    this.max_post_images_height = this.container_width * 1;
  }

  nextAddIndex(post_index: number) {
    var index = 0;
    var k = post_index / 5;
    if (k < this.showAdsService.POST_ADS.length) {
      var index = k;
    } else {
      index = (k % this.showAdsService.POST_ADS.length);
    }
    return index;
  }

  delete() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

}
