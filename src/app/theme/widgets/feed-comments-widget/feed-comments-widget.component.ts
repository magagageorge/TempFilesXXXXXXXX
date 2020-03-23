import { Component, Input, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommentsService } from '@app/services/comments.service';
import { FeedService } from '@app/services/feed.service';
import { ProfileService } from '@app/services/profile.service';
import { Comment } from "@models/feed/comment";
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { Feed } from '@app/models/feed/feed';
import { ImageIconsService } from '@app/services/image-icons.service';
import { AppModalService } from '@app/services/app-modal.service';
import { CommentDeleteModalComponent } from '@app/theme/modals/comment-delete-modal/comment-delete-modal.component';
import { ReportContentModalComponent } from '@app/theme/modals/report-content-modal/report-content-modal.component';
import { LikesModalComponent } from '@app/theme/modals/likes-modal/likes-modal.component';

@Component({
  selector: 'app-feed-comments-widget',
  templateUrl: './feed-comments-widget.component.html',
  styleUrls: ['./feed-comments-widget.component.scss']
})
export class FeedCommentsWidgetComponent implements OnInit {
  @Input() feedId: number;
  @Input() feed: Feed;
  @Input() feedComments: Comment[];
  container_width: number;
  commentService: CommentsService
  feedService: FeedService;
  appModalService: AppModalService;
  hovercardService: HoverCardService;
  comment_model: Comment = new Comment();
  urlViewerService: UrlViewerService;
  profileService: ProfileService;
  imageIconsService: ImageIconsService;
  constructor(commentService: CommentsService, appModalService: AppModalService, feedService: FeedService, urlViewerService: UrlViewerService, hovercardService: HoverCardService, profileService: ProfileService, imageIconsService: ImageIconsService) {
    this.commentService = commentService;
    this.feedService = feedService;
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.profileService = profileService;
    this.imageIconsService = imageIconsService;
    this.appModalService = appModalService;
  }

  ngOnInit() {
    this.container_width = (this.commentService.feedContainerWidth > 170) ? 170 : this.commentService.feedContainerWidth;
  }

  comment() {
  }
  delete() { }

  ReplyComment(comm: Comment) {
    this.commentService.commentReply(comm);
  }

  CastComment(feedComment: any) {
    feedComment = feedComment as Comment;
  }

  getPictureHeight(width: number, height: number) {
    let ratio = width / height;
    let new_height = this.container_width / ratio;
    return new_height;
  }

  confirmDeleteComment(comment: Comment) {
    this.appModalService.modalRef = this.appModalService._modalService.open(CommentDeleteModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.comment = comment;
  }

  reportCommentContent(post_id: number) {
    this.appModalService.modalRef = this.appModalService._modalService.open(ReportContentModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(post_id, 'Comment');
  }

  showPostLikes(comment_id: number, no_likes: any) {
    this.appModalService.modalRef = this.appModalService._modalService.open(LikesModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(comment_id, 'Comment', no_likes);
  }


}
