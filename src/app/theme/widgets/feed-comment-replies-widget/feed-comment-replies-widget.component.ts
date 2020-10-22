import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Comment } from '@models/feed/comment';
import { CommentReply } from '@models/feed/comment-reply';
import { CommentsService } from '@app/services/comments.service';
import { FeedService } from '@app/services/feed.service';
import { ProfileService } from '@app/services/profile.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { AppModalService } from '@app/services/app-modal.service';
import { CommentReplyDeleteModalComponent } from '@app/theme/modals/comment-reply-delete-modal/comment-reply-delete-modal.component';
import { ReportContentModalComponent } from '@app/theme/modals/report-content-modal/report-content-modal.component';

@Component({
  selector: 'app-feed-comment-replies-widget',
  templateUrl: './feed-comment-replies-widget.component.html',
  styleUrls: ['./feed-comment-replies-widget.component.scss']
})
export class FeedCommentRepliesWidgetComponent implements OnInit {

  @Input() commentId: number;
  @Input() feedComment:Comment;
  @Input() commentReplies: CommentReply[];
  commentService: CommentsService
  feedService: FeedService;
  appModalService:AppModalService;
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  profileService: ProfileService;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  errors: string[];
  messages: string[];

  constructor(appModalService:AppModalService,commentService:CommentsService,feedService: FeedService, profileService: ProfileService, router: Router, urlViewerService: UrlViewerService, hovercardService: HoverCardService, ) {
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.profileService = profileService;
    this.feedService = feedService;
    this.profileService = profileService;
    this.commentService=commentService;
    this.submitted = false;
    this.appModalService=appModalService;
  }

  ngOnInit() {
  }

  delete() { }

  confirmDeleteCommentReply(comment: Comment, reply: CommentReply) {
    this.appModalService.modalRef = this.appModalService._modalService.open(CommentReplyDeleteModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.commentReply = reply;
    this.appModalService.modalRef.componentInstance.comment = comment;
  }

  reportCommentContentReply(post_id: number) {
    this.appModalService.modalRef = this.appModalService._modalService.open(ReportContentModalComponent, { centered: true });
    this.appModalService.modalRef.componentInstance.setModel(post_id, 'CommentReply');
  }

}
