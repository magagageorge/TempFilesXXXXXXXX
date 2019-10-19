import { Component, OnInit, Injectable, Inject, ɵLocaleDataIndex } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Feed } from '@models/feed/feed';
import { Post } from '@models/post';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { PostDeleteModalComponent } from '@app/theme/modals/post-delete-modal/post-delete-modal.component';
import { ReportContentModalComponent } from '@app/theme/modals/report-content-modal/report-content-modal.component';
import { LikesModalComponent } from '@app/theme/modals/likes-modal/likes-modal.component';
import { Comment } from '@app/models/feed/comment';
import { PostPhoto } from '@app/models/post-photo';

const MODALS = {
  deletePost: PostDeleteModalComponent,
  reportContent: ReportContentModalComponent,
  postLikes: LikesModalComponent

};


@Injectable({
  providedIn: 'root'
})
export class ProfilePhotosService {
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
  profilePhotos: PostPhoto[] = [];
  currentViewImage: PostPhoto = null;
  currentViewImageIndex: any = -1;
  viewerHeight: number = 0;
  viewerWidth: number = 0;
  reached_end_of_feed:boolean=false;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_feed_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
  }

  public onScrollUp(): void {
    if (this.loading_feeds == false) {
      this.loadPhotos({ url: this.profile_url, page: this.next_feed_page });
    }
  }

  public onScrollDown(): void {
    if(this.reached_end_of_feed){
      return;
    }
    if (this.loading_feeds == false) {
      this.loadPhotos({ url: this.profile_url, page: this.next_feed_page });
    }
  }

  loadNewFeed(params?: {}): any {
    this.loading_feeds = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/photos/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_feeds = false;
      if (results.isSuccess()) {
        _this.next_feed_page++;
        _this.feeds = _this.feeds.concat(results.getResultData());
      }
    });
  }

  loadPhotos(params?: {}): any {
    if (this.profile_url == '') {
      return;
    }
    this.loading_feeds = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/photos/';
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
              _this.pushProfilePhotos(posts);
            }
          });
        } else {
          _this.reached_end_of_feed = true;
        }
      }
    });
  }

  pushProfilePhotos(feeds: Feed[]) {
    var _this = this;
    feeds.forEach(feed => {
      feed.images.forEach(photo => {
        var p = new PostPhoto();
        p.post_id = Number(feed.id);
        p.data = photo.data;
        p.id = photo.id;
        _this.profilePhotos.push(p);
      });
    });
  }

  viewPhotoInModal(photo: PostPhoto, index: Number) {
    this.currentViewImage = photo;
    this.currentViewImageIndex = index;
  }

  /* Navigate the Next Picture in Array when user click right-arrow/Next button from view modal*/
  viewNextPhotoInModal() {
    if (this.profilePhotos.length && this.profilePhotos.length > (this.currentViewImageIndex+1)) {
     this.viewPhotoInModal(this.profilePhotos[this.currentViewImageIndex+1],Number(this.currentViewImageIndex+1));
    }
  }

  /* Navigate the Previous Picture in Array when user click left-arrow/Previous button from view modal*/
  viewPreviousPhotoInModal() {
    if(this.currentViewImageIndex>0){
      this.viewPhotoInModal(this.profilePhotos[this.currentViewImageIndex-1],Number(this.currentViewImageIndex-1));
    }
  }

  closePhotoViewModal() {
    this.currentViewImage = null;
    this.currentViewImageIndex = -1;
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
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed-hide/';
    this.service.create(this.provider, { object_id: post_id }, {}).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data != true) {
          _this.searchFeed(id).subscribe(feed => {
            if (feed) {
              feed.hidden_post = false;
            }
          });
        }
      }
      else {
        _this.errors = result.getErrors();

      }
    });
  }

  unhidePost(post_id: number) {
    var _this = this;
    this.errors = this.messages = [];
    let id = String(post_id);
    this.searchFeed(id).subscribe(feed => {
      if (feed) {
        feed.unhidding_post = true;
      }
    });
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed-hide/';
    this.service.delete(this.provider, { id: post_id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
          let id = String(post_id);
          _this.searchFeed(id).subscribe(feed => {
            if (feed) {
              feed.unhidding_post = false;
              feed.hidden_post = false;
            }
          });
        } else {

        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  confirmDeletePost(post_id: number) {
    this.modalRef = this._modalService.open(MODALS['deletePost'], { centered: true });
    this.modalRef.componentInstance.feedId = post_id;
  }

  reportPostContent(post_id: number) {
    this.modalRef = this._modalService.open(MODALS['reportContent'], { centered: true });
    this.modalRef.componentInstance.setModel(post_id, 'Post');
  }

  showPostLikes(post_id: number, no_likes: any) {
    this.modalRef = this._modalService.open(MODALS['postLikes'], { centered: true });
    this.modalRef.componentInstance.setModel(post_id, 'Post', no_likes);
  }

  deletePost(id: number) {
    //let elem:Element = document.getElementById("comment_item_"+comment.object_id+"_"+comment.id);
    let elem: HTMLElement = document.querySelector("#feed_item_" + id);
    elem.style.opacity = '0.6';
    this.clearFeed(id);
    var _this = this;
    this.errors = this.messages = [];
    this.modalRef.close();
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/p/';
    this.service.delete(this.provider, { id: id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
          elem.style.opacity = '1';
        }
      } else {
        _this.errors = result.getErrors();
        elem.style.opacity = '1';
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
