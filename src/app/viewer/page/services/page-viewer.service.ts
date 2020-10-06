import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { PageFeedService } from './page-feed.service';
import { PagePhotosService } from './page-photos.service';

@Injectable({
  providedIn: 'root'
})
export class PageViewerService {

  screenHeight: number;
  screenWidth: number;
  pageCoverWidth: number;
  pageCoverHeight: number;
  pageCoverHeaderHeight: number;
  last_page_url: string = '';
  constructor(public urlviewerService: UrlViewerService, public pageFeedService: PageFeedService, public pagePhotosService: PagePhotosService) {
    this.pageCoverWidth = 720;
    this.pageCoverHeight = 240;
    this.pageCoverHeaderHeight = 240;
  }

  checkLoadPageInfo(urlParams: Params) {
    var _this = this;
    if (urlParams.url_page != undefined) {
      _this.urlviewerService.VIEWER_URL_PAGE = urlParams.url_page;
    } else {
      _this.urlviewerService.VIEWER_URL_PAGE = '';
    }
    if (urlParams.url != undefined && urlParams.url != '' && this.last_page_url != urlParams.url) {
      this.loadPageDetails();
      this.last_page_url = urlParams.url;
    }
  }

  calculateCoverDimensions(pageCoverWidth: number) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.pageCoverWidth = pageCoverWidth;
    this.pageCoverHeight = this.pageCoverWidth / 3;
    this.pageCoverHeaderHeight = (this.screenWidth > 767) ? (this.pageCoverHeight + 100) : (this.pageCoverHeight + 40);
  }

  loadPageDetails() {
    this.pageFeedService.feeds = [];
    this.pagePhotosService.feeds = [];
    this.pagePhotosService.pagePhotos = [];
    this.pageFeedService.page_id = this.urlviewerService.PPVIEWER.page.id;
    this.pagePhotosService.page_id = this.urlviewerService.PPVIEWER.page.id;
    this.pageFeedService.loadFeed({ p: this.urlviewerService.PPVIEWER.page.id, page: 1 });
    this.pagePhotosService.loadPhotos({ p: this.urlviewerService.PPVIEWER.page.id, page: 1 });
  }
}
