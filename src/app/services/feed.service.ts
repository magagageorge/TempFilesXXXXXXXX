import { Injectable, Inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { Feed } from '@models/feed/feed';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { PostPhoto } from '@app/models/post-photo';
import { OverlayPost } from '@app/models/feed/overlay-post';
import { AuthService } from '@app/auth';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
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
  feedPhotos: PostPhoto[] = [];
  currentViewImage: PostPhoto = null;
  currentViewImageIndex: any = -1;
  viewerHeight: number = 0;
  viewerWidth: number = 0;
  reached_end_of_feed: boolean = false;
  OVERLAY_FEED: OverlayPost;


  constructor(service: CrudService, public authService: AuthService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_feed_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.OVERLAY_FEED = new OverlayPost();
    this.loadFeed({ page: this.next_feed_page });
  }

  public onScrollUp(): void {
    if (this.loading_feeds == false) {
      this.loadFeed({ page: this.next_feed_page });
    }
  }

  public onScrollDown(): void {
    if (this.reached_end_of_feed) {
      return;
    }
    if (this.loading_feeds == false) {
      this.loadFeed({ page: this.next_feed_page });
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
    this.loading_feeds = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed/';
    var _this = this;

    /* only load feed when the user is a loggedin user */
    this.authService.isAuthenticated().subscribe(is_authenticated => {
      if (is_authenticated) {
        return _this.service.getall(this.provider, params).subscribe(results => {
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
    });
  }

  searchFeed(id: number): Observable<Feed> {
    return of(this.feeds.find((feed: Feed) => feed.id == id));
  }

  deletePost(id: number) {
    /** THIS FUNCTION IS TO BE REMOVED */
  }

  clearFeed(feed_id: number) {
    //this.profileFeedService.clearFeed(feed_id);
    this.feeds = this.feeds.filter((x: any) => x.id !== feed_id);
  }

  prependFeed(feed: Feed, search_remove_first: boolean) {
    if (search_remove_first) {
      this.clearFeed(feed.id);
    }
    this.feeds.unshift(feed);
  }

  pushFeed(feed: Feed) {
    this.feeds = this.feeds.concat(feed);
  }

  pushComment(feedId, comment: any) {
    /* check and update comment in overlay post in case it is open */
    if (this.OVERLAY_FEED.feed != null && feedId == this.OVERLAY_FEED.feed.id) {
      this.OVERLAY_FEED.feed.comments.unshift(comment);
      this.OVERLAY_FEED.feed.no_comments = Number(this.OVERLAY_FEED.feed.no_comments) + 1;
    }
    //this.profileFeedService.pushComment(feedId, comment);
    this.searchFeed(feedId).subscribe(feed => {
      if (feed) {
        feed.comments.unshift(comment);
        feed.no_comments = Number(feed.no_comments) + 1;
      }
    });
  }

  pushComments(feedId: any, comments: []) {
    /* check and update comment in overlay post in case it is open */
    if (this.OVERLAY_FEED.feed != null && feedId == this.OVERLAY_FEED.feed.id) {
      this.OVERLAY_FEED.feed.comments = this.OVERLAY_FEED.feed.comments.concat(comments);
    }
    //this.profileFeedService.pushComments(feedId, comments);
    this.searchFeed(feedId).subscribe((feed: Feed) => {
      if (feed) {
        feed.comments = feed.comments.concat(comments);
      }
    });
  }

  /* Functions to view Post Image in Modal */

  viewPostPhotoInModal(feed: Feed, index: number) {
    var _this = this;
    var i = 0;
    feed.images.forEach(photo => {
      var p = new PostPhoto();
      p.post_id = Number(feed.id);
      p.data = photo.data;
      p.id = photo.id;
      _this.feedPhotos.push(p);
      if (index == i) {
        this.viewPhotoInModal(p, index);
      }
      i++;
    });
  }

  viewPhotoInModal(photo: PostPhoto, index: Number) {
    this.currentViewImage = photo;
    this.currentViewImageIndex = index;
  }

  /* Navigate the Next Picture in Array when user click right-arrow/Next button from view modal*/
  viewNextPhotoInModal() {
    if (this.feedPhotos.length && this.feedPhotos.length > (this.currentViewImageIndex + 1)) {
      this.viewPhotoInModal(this.feedPhotos[this.currentViewImageIndex + 1], Number(this.currentViewImageIndex + 1));
    }
  }

  /* Navigate the Previous Picture in Array when user click left-arrow/Previous button from view modal*/
  viewPreviousPhotoInModal() {
    if (this.currentViewImageIndex > 0) {
      this.viewPhotoInModal(this.feedPhotos[this.currentViewImageIndex - 1], Number(this.currentViewImageIndex - 1));
    }
  }

  closePhotoViewModal() {
    this.currentViewImage = null;
    this.currentViewImageIndex = -1;
    this.feedPhotos = [];
  }
  /*------------------------ */


  loadOverlayPost(params?: {}): any {
    this.loading_feeds = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'feed/feed/';
    var _this = this;
    this.OVERLAY_FEED.loadingFeed = true;
    return this.service.getone(this.provider, params).subscribe(results => {
      _this.OVERLAY_FEED.loadingFeed = false;
      if (results.isSuccess()) {
        var post = results.getResultData() as Feed;
        if (post) {
          _this.OVERLAY_FEED.feed = post;
        } else {
          _this.closeOverlayPost();
        }
      }
    });
  }

  OpenOverlayPost(postId: number) {
    this.loadOverlayPost({ id: postId });
    this.OVERLAY_FEED.visible = true;
  }

  closeOverlayPost() {
    this.OVERLAY_FEED.visible = false;
    this.OVERLAY_FEED.feed = null;
  }


  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
