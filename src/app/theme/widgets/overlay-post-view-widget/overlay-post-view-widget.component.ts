import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { CommentsService } from '@app/services/comments.service';
import { PostingService } from '@app/services/posting.service';
import { ImageIconsService } from '@app/services/image-icons.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';

@Component({
  selector: 'app-overlay-post-view-widget',
  templateUrl: './overlay-post-view-widget.component.html',
  styleUrls: ['./overlay-post-view-widget.component.scss']
})
export class OverlayPostViewWidgetComponent implements AfterViewInit {

  @Input() profile: any;
  @ViewChild("OverlayfeedContainer", { static: false })
  OverlayfeedContainer: ElementRef;
  container_width: number;
  max_post_images_height: number;

  feedService: FeedService;
  commentService: CommentsService;
  constructor(feedService: FeedService, postingService: PostingService, commentService: CommentsService, imageIconsService: ImageIconsService, urlViewerService: UrlViewerService, hovercardService: HoverCardService) {
    this.feedService = feedService;
    this.commentService = commentService;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.container_width = this.OverlayfeedContainer.nativeElement.clientWidth * 0.98;
    //this.commentService.OverlayfeedContainerWidth = this.OverlayfeedContainer.nativeElement.clientWidth;
    //this.max_post_images_height=window.innerHeight * 0.8;
    this.max_post_images_height = this.container_width * 1;
  }

  delete() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }


}
