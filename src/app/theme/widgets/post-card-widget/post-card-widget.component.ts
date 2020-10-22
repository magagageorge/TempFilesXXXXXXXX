import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FeedService } from '@app/services/feed.service';
import { PostingService } from '@app/services/posting.service';
import { CommentsService } from '@app/services/comments.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ImageIconsService } from '@app/services/image-icons.service';
import { AppModalService } from '@app/services/app-modal.service';
import { ReportContentModalComponent } from '@app/theme/modals/report-content-modal/report-content-modal.component';
import { PostDeleteModalComponent } from '@app/theme/modals/post-delete-modal/post-delete-modal.component';
import { LikesModalComponent } from '@app/theme/modals/likes-modal/likes-modal.component';
import { VISIBILITY_ICONS } from '@app/data/visibilities';
import { Feed } from '@app/models/feed/feed';

@Component({
  selector: 'app-post-card-widget',
  templateUrl: './post-card-widget.component.html',
  styleUrls: ['./post-card-widget.component.scss']
})
export class PostCardWidgetComponent implements OnInit {

  @Input() feed: any;
  @Input() container_width: number;
  @Input() max_post_images_height: number;

  feedService: FeedService;
  postingService: PostingService;
  commentService: CommentsService;
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  imageIconsService: ImageIconsService;
  appModalService:AppModalService;
  VISIBILITY_ICONS:any = VISIBILITY_ICONS;
  constructor(feedService: FeedService, postingService: PostingService, commentService: CommentsService,appModalService:AppModalService, imageIconsService: ImageIconsService, urlViewerService: UrlViewerService, hovercardService: HoverCardService) {
    this.feedService = feedService;
    this.postingService = postingService;
    this.commentService = commentService;
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.imageIconsService = imageIconsService;
    this.appModalService=appModalService;
  }

  ngOnInit() {
  }

  reportPostContent(post_id: number) {
    this.appModalService.modalRef = this.appModalService._modalService.open(ReportContentModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(post_id, 'Post');
  }

  confirmDeletePost(post_id: number) {
    this.appModalService.modalRef = this.appModalService._modalService.open(PostDeleteModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setFeedId(post_id);
  }

  showPostLikes(post_id: number, no_likes: any) {
    this.appModalService.modalRef = this.appModalService._modalService.open(LikesModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(post_id, 'Post', no_likes);
  }

  wantToShareAs(post:Feed){
    this.postingService.postingAs='Profile';
    this.postingService.shareThisPost(post);
  }

}
