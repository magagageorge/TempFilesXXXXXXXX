import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { UtilitiesService } from '@app/services/utilities.service';
import { MyProfile } from '@app/models/profile/my-profile';
import { Profile } from '@app/models/profile/profile';
import { PageProfileViewer } from '@app/models/page-profile-viewer';
import { ProfileViewer } from '@app/models/profile-viewer';
import { PageViewer } from '@app/models/page-viewer';
import { ProfileFeedService } from './profile-feed.service';
import { ProfilePhotosService } from './profile-photos.service';
import { ProfileConnectionsService } from './profile-connections.service';
import { Title, Meta } from '@angular/platform-browser';


@Injectable({
  providedIn: 'root'
})
export class UrlViewerService {

  service: CrudService;
  crudprovider: CrudProvider;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean;
  errors: string[];
  messages: string[];
  public MYPROFILE: MyProfile = new MyProfile();
  public PROFILE_PAGE_VIEWER: Profile = new Profile();
  loading_viewer: boolean = false;
  profile: any;
  VIEWER_URL: string = '';
  VIEWER_URL_PAGE: string = '';

  public PPVIEWER: PageProfileViewer = new PageProfileViewer();
  profileFeedService: ProfileFeedService;
  profilePhotosService: ProfilePhotosService;
  profileConnectionsService: ProfileConnectionsService;

  constructor(service: CrudService, profileFeedService: ProfileFeedService, profilePhotosService: ProfilePhotosService, profileConnectionsService: ProfileConnectionsService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router, private title: Title, private meta: Meta) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.profileFeedService = profileFeedService;
    this.profilePhotosService = profilePhotosService;
    this.profileConnectionsService = profileConnectionsService;
  }

  /* Load the Page-Profile Details and set it to the viewer*/
  setViewer(url: string) {
    var _this = this;
    if (url.trim() == this.VIEWER_URL) {
      return;
    }
    this.loading_viewer = true;
    this.VIEWER_URL = url.trim();
    this.profileFeedService.feeds = [];
    this.profilePhotosService.feeds = [];
    this.profilePhotosService.profilePhotos = [];
    this.profileConnectionsService.CONNECTIONS = [];
    this.profileFeedService.profile_url = this.VIEWER_URL;
    this.profilePhotosService.profile_url = this.VIEWER_URL;
    this.profileConnectionsService.profile_url = this.VIEWER_URL;
    this.profileFeedService.loadFeed({ url: this.VIEWER_URL, page: 1 });
    this.profilePhotosService.loadPhotos({ url: this.VIEWER_URL, page: 1 });
    this.profileConnectionsService.loadConnections({ url: this.VIEWER_URL, page: 1 });
    this.getViewer(url).subscribe(view => {
      var results = view.getResultData();
      if (_this.PPVIEWER.type == '' || (_this.PPVIEWER.type == 'profile' && (_this.PPVIEWER.profile.url == results.profile.url)) || (_this.PPVIEWER.type == 'page' && (_this.PPVIEWER.page.url == results.page.url))) {
        _this.loading_viewer = false;
        _this.PPVIEWER = results as PageProfileViewer;
        _this.meta.updateTag({ name: 'description', content: _this.PPVIEWER.profile.title });
      }
    });
  }

  getViewer(url: string): any {
    this.provider = this.getConfigValue('forms.getone.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'urlviewer/default/';
    return this.service.getall(this.provider, { url: url });
  }

  resetViewer() {
    this.PPVIEWER = new PageProfileViewer();
  }

  setProfile(profile: Profile) {
    /* Return and do nothing when a user is trying to browse the same profile page */
    if (this.PPVIEWER.profile != undefined && (profile.url == this.PPVIEWER.profile.url)) {
      return false;
    }
    this.PPVIEWER = { type: 'profile', profile: new ProfileViewer, page: new PageViewer };
    //this.PPVIEWER.profile=profile;  
    this.title.setTitle('' + profile.name + ' | Woorbi');
    this.meta.updateTag({ name: 'description', content: profile.title });
    this.PPVIEWER.profile.name = profile.name;
    this.PPVIEWER.profile.url = profile.url;
    this.PPVIEWER.profile.firstname = profile.firstname;
    this.PPVIEWER.profile.lastname = profile.lastname;
    this.PPVIEWER.profile.about = profile.about;
    this.PPVIEWER.profile.my_profile = profile.my_profile;
    this.PPVIEWER.profile.short_info = profile.short_info;
    this.PPVIEWER.profile.title = profile.title;
    this.PPVIEWER.profile.avatar = profile.avatar;
    this.PPVIEWER.profile.cover = profile.cover;
    this.PPVIEWER.profile.location = profile.location;
    this.PPVIEWER.profile.connectStatus = profile.connectStatus;
    return true;
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}
