import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Feed } from '@models/feed/feed';
import { Post } from '@models/post';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';

@Injectable({
  providedIn: 'root'
})
export class ProfileFeedService {
  feeds: Feed[] = [];
  service: CrudService;
  crudprovider: CrudProvider;
  protected crudconfig: {};
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

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_feed_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
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
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
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
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/profile-feed/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
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

  searchFeed(id: string): Observable<Feed> {
    return of(this.feeds.find((feed: Feed) => feed.id == id));
  }


  hidePost(post_id: number) {
    var _this = this;
    let id = String(post_id);
    this.searchFeed(id).subscribe(feed => {
      if (feed) {
        feed.hidden_post = true;
      }
    });
  }

  unhidePost(post_id: number) {
    var _this = this;
    this.errors = this.messages = [];
    let id = String(post_id);
    this.searchFeed(id).subscribe(feed => {
      if (feed) {
        feed.unhidding_post = false;
        feed.hidden_post = false;
      }
    });
  }

  clearFeed(feed_id: number) {
    this.feeds = this.feeds.filter((x: any) => x.id !== feed_id);
  }

  prependFeed(feed: Feed) {
    this.feeds.unshift(feed);
  }
  pushFeed(feed: Feed) {
    this.feeds = this.feeds.concat(feed);
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
    this.searchFeed(String(feedId)).subscribe((feed: Feed) => {
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
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed-like/';
    feed.sending_like = true;
    if (action == "like") {
      this.service.create(this.provider, { object_id: feed.id, target_id: feed.profile.user_id }, {}).subscribe(function (result) {
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
      this.service.delete(this.provider, { id: feed.id }).subscribe(function (result) {
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

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
