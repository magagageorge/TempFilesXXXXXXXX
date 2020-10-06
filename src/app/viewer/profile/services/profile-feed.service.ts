import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Feed } from '@models/feed/feed';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { FeedService } from '@app/services/feed.service';
import { UrlViewerService } from '@app/services/url-viewer.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileFeedService {
  feeds: Feed[] = [];
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  errors: string[];
  modalRef: any;
  messages: string[];
  loading_feeds: boolean = false;
  loading_new_post: boolean = false;
  next_feed_page: number;
  profile_url: string = '';
  reached_end_of_feed: boolean = false;

  constructor(public feedService: FeedService, public urlViewerService: UrlViewerService, public route: ActivatedRoute) {
    this.next_feed_page = 1;
  }

  public onScrollUp(): void {
    if (this.loading_feeds == false) {
      this.loadFeed({ url: this.profile_url, page: this.next_feed_page });
    }
  }

  public onScrollDown(): void {
    if (this.reached_end_of_feed) {
      return;
    }
    if (this.loading_feeds == false) {
      this.loadFeed({ url: this.profile_url, page: this.next_feed_page });
    }
  }

  loadNewFeed(params?: {}): any {
    this.loading_feeds = true;
    this.feedService.provider = this.feedService.getConfigValue('forms.getall.provider');
    this.feedService.service.getProvider(this.feedService.provider).crudconfig.route_url = 'feed/feed/';
    var _this = this;
    return this.feedService.service.getall(this.feedService.provider, params).subscribe(results => {
      _this.loading_feeds = false;
      if (results.isSuccess()) {
        _this.next_feed_page++;
        _this.feeds = _this.feeds.concat(results.getResultData());
      }
    });
  }

  loadFeed(params?: {}): any {
    if (this.profile_url == '') {
      return;
    }
    this.loading_feeds = true;
    this.feedService.provider = this.feedService.getConfigValue('forms.getall.provider');
    this.feedService.service.getProvider(this.feedService.provider).crudconfig.route_url = 'feed/profile-feed/';
    var _this = this;
    return this.feedService.service.getall(this.feedService.provider, params).subscribe(results => {
      _this.loading_feeds = false;
      if (results.isSuccess()) {
        var posts = results.getResultData() as Feed[];
        if (posts.length) {
          _this.searchFeed(posts[0].id).subscribe(feed => {
            if (feed) {
              _this.reached_end_of_feed = true;
            } else {
              _this.next_feed_page++;
              _this.feeds = _this.feeds.concat(posts);
            }
          });
        } else {
          _this.reached_end_of_feed = true;
        }
      }
    });
  }

  searchFeed(id: number): Observable<Feed> {
    return of(this.feeds.find((feed: Feed) => feed.id == id));
  }


  hidePost(post_id: number) {
    var _this = this;
    this.searchFeed(post_id).subscribe(feed => {
      if (feed) {
        feed.hidden_post = true;
      }
    });
  }

  unhidePost(post_id: number) {
    var _this = this;
    this.errors = this.messages = [];
    this.searchFeed(post_id).subscribe(feed => {
      if (feed) {
        feed.unhidding_post = false;
        feed.hidden_post = false;
      }
    });
  }

  clearFeed(feed_id: number) {
    this.feeds = this.feeds.filter((x: any) => x.id !== feed_id);
  }

  prependFeed(feed: Feed, search_remove_first: boolean) {
    var profileOpen = this.isProfileOpen as string;
    if (feed.profile != null && profileOpen != null && feed.profile.url == profileOpen) {
      if (search_remove_first) {
        this.clearFeed(feed.id);
      }
      this.feeds.unshift(feed);
    }
  }

  pushFeed(feed: Feed) {
    var profileOpen = this.isProfileOpen as string;
    if (feed.profile != null && profileOpen != null && feed.profile.url == profileOpen) {
      this.feeds = this.feeds.concat(feed);
    }
  }

  pushComment(feedId, comment: any) {
    this.searchFeed(feedId).subscribe(feed => {
      if (feed) {
        feed.comments.unshift(comment);
        feed.no_comments = Number(feed.no_comments) + 1;
      }
    });
  }

  pushComments(feedId: any, comments: []) {
    this.searchFeed(feedId).subscribe((feed: Feed) => {
      if (feed) {
        feed.comments = feed.comments.concat(comments);
      }
    });
  }

  feedLike(feed: Feed, action: string) {
    if (feed.sending_like == true) {
      return;
    }
    this.updateFeedLike(feed, action);
    var _this = this;
    this.errors = this.messages = [];
    this.feedService.service.getProvider(this.feedService.provider).crudconfig.route_url = 'feed/feed-like/';
    feed.sending_like = true;
    if (action == "like") {
      this.feedService.service.create(this.feedService.provider, { object_id: feed.id, target_id: feed.profile.user_id }, {}).subscribe(function (result) {
        _this.submitted = false;
        feed.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateFeedLike(feed, 'unlike');
          }
        }
        else {
          _this.errors = result.getErrors();
          _this.updateFeedLike(feed, 'unlike');
        }
      });
    } else {
      this.feedService.service.delete(this.feedService.provider, { id: feed.id }).subscribe(function (result) {
        feed.sending_like = false;
        if (result.isSuccess()) {
          var data = result.getResultData();
          if (data != true) {
            _this.updateFeedLike(feed, 'like');
          }
        } else {
          _this.errors = result.getErrors();
          _this.updateFeedLike(feed, 'like');
        }
      });
    }
  }

  updateFeedLike(feed: Feed, action: string) {
    this.searchFeed(feed.id).subscribe((feed: Feed) => {
      if (feed) {
        if (action == 'like') {
          feed.no_likes = Number(feed.no_likes) + 1;
          feed.i_like = true;
        } else {
          if (Number(feed.no_likes) > 0) {
            feed.no_likes = Number(feed.no_likes) - 1;
            feed.i_like = false;
          }
        }
      }
    });
  }

  get isProfileOpen() {
    if (this.urlViewerService.PPVIEWER.type == 'profile' && this.urlViewerService.PPVIEWER.profile != null) {
      return this.urlViewerService.PPVIEWER.profile.url;
    }
    return null;
  }

}
