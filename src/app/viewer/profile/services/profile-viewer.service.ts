import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ProfileConnectionsService } from '@app/services/profile-connections.service';
import { UrlViewerService } from '@app/services/url-viewer.service';
import { ProfileFeedService } from './profile-feed.service';
import { ProfilePhotosService } from './profile-photos.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileViewerService {
  screenHeight: number;
  screenWidth: number;
  profileCoverWidth: number;
  profileCoverHeight: number;
  profileCoverHeaderHeight: number;
  last_profile_url: string = '';
  constructor(public urlviewerService: UrlViewerService, public profileFeedService: ProfileFeedService, public profilePhotosService: ProfilePhotosService, public profileConnectionsService: ProfileConnectionsService) {
    this.profileCoverWidth = 720;
    this.profileCoverHeight = 240;
    this.profileCoverHeaderHeight = 250;
  }

  calculateCoverDimensions(profileCoverWidth: number) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    this.profileCoverWidth = profileCoverWidth;
    this.profileCoverHeight = this.profileCoverWidth / 3;
    this.profileCoverHeaderHeight = (this.screenWidth > 767) ? (this.profileCoverHeight + 50) : (this.profileCoverHeight + 50);
  }

  checkLoadProfileInfo(urlParams: Params) {
    var _this = this;
    if (urlParams.url_page != undefined) {
      _this.urlviewerService.VIEWER_URL_PAGE = urlParams.url_page;
    } else {
      _this.urlviewerService.VIEWER_URL_PAGE = '';
    }
    if (urlParams.url != undefined && urlParams.url != '' && this.last_profile_url != urlParams.url) {
      this.loadProfileDetails();
      this.last_profile_url = urlParams.url;
    }
  }

  loadProfileDetails() {
    this.profileFeedService.feeds = [];
    this.profilePhotosService.feeds = [];
    this.profilePhotosService.profilePhotos = [];
    this.profileConnectionsService.CONNECTIONS = [];
    this.profileFeedService.profile_url = this.urlviewerService.VIEWER_URL;
    this.profilePhotosService.profile_url = this.urlviewerService.VIEWER_URL;
    this.profileConnectionsService.profile_url = this.urlviewerService.VIEWER_URL;
    this.profileFeedService.loadFeed({ url: this.urlviewerService.VIEWER_URL, page: 1 });
    this.profilePhotosService.loadPhotos({ url: this.urlviewerService.VIEWER_URL, page: 1 });
    this.profileConnectionsService.loadConnections({ url: this.urlviewerService.VIEWER_URL, page: 1 });
  }

}
