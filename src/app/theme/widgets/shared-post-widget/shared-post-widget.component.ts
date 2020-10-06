import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { PostingService } from '@app/services/posting.service';
import { CommentsService } from '@app/services/comments.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ImageIconsService } from '@app/services/image-icons.service';
import { Feed } from '@app/models/feed/feed';
import { VISIBILITY_ICONS } from '@app/data/visibilities';

@Component({
  selector: 'app-shared-post-widget',
  templateUrl: './shared-post-widget.component.html',
  styleUrls: ['./shared-post-widget.component.scss']
})
export class SharedPostWidgetComponent implements AfterViewInit, OnInit {
  @Input() post: Feed;
  @ViewChild("sharePostContainer", { static: false })
  sharePostContainer: ElementRef;
  container_width: number;
  max_post_images_height: number;

  feedService: FeedService;
  postingService: PostingService;
  commentService: CommentsService;
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  imageIconsService: ImageIconsService;
  VISIBILITY_ICONS:any = VISIBILITY_ICONS;
  constructor(feedService: FeedService, postingService: PostingService, commentService: CommentsService, imageIconsService: ImageIconsService, urlViewerService: UrlViewerService, hovercardService: HoverCardService) {
    this.postingService = postingService;
    this.commentService = commentService;
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.imageIconsService = imageIconsService;
  }

  ngOnInit() {

  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.getDimensions();
    }, 0);
  }

  getDimensions() {
    this.container_width = this.sharePostContainer.nativeElement.clientWidth * 0.98;
    this.max_post_images_height = this.container_width * 1;
  }

  delete() {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getDimensions();
  }

}
