import { Component, OnInit, Input, Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Locations } from '@app/@crud/models/locations';
import { Comment } from '@models/feed/comment';
import { CommentReply } from '@models/feed/comment-reply';
import * as cloneDeep from 'lodash/cloneDeep';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';

import { CommentsService } from '@app/services/comments.service';
import { FeedService } from '@app/services/feed.service';
import { ProfileService } from '@app/services/profile.service';
import { HoverCardService } from '@app/libs/wf-hover-card/services/hover-card.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

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
  hovercardService: HoverCardService;
  urlViewerService: UrlViewerService;
  profileService: ProfileService;
  service: CrudService;
  crudprovider: CrudProvider;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  errors: string[];
  messages: string[];

  constructor(service: CrudService,commentService:CommentsService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, feedService: FeedService, profileService: ProfileService, router: Router, urlViewerService: UrlViewerService, hovercardService: HoverCardService, ) {
    this.hovercardService = hovercardService;
    this.urlViewerService = urlViewerService;
    this.profileService = profileService;
    this.feedService = feedService;
    this.profileService = profileService;
    this.commentService=commentService;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.submitted = false;
  }

  ngOnInit() {
  }

  delete() { }
  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}
