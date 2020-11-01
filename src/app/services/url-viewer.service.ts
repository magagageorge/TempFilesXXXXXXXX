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
import { ProfileFeedService } from '../viewer/profile/services/profile-feed.service';
import { ProfileConnectionsService } from './profile-connections.service';
import { Title, Meta } from '@angular/platform-browser';
import { PageSummary } from '@app/models/page/page.model';
import { ProfilePhotosService } from '@app/viewer/profile/services/profile-photos.service';
import { PageFeedService } from '@app/viewer/page/services/page-feed.service';


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

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router, private title: Title, private meta: Meta) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
  }

  /* Load the Page-Profile Details and set it to the viewer*/
  setViewer(url: string) {
    var _this = this;
    if (url.trim() == this.VIEWER_URL) {
      return;
    }
    this.loading_viewer = true;
    this.VIEWER_URL = url.trim();    
    this.getViewer(url).subscribe(view => {
      var results = view.getResultData();
      if (_this.PPVIEWER.type == '' || (_this.PPVIEWER.type == 'profile' && results.profile != null && (_this.PPVIEWER.profile.url == results.profile.url)) || (_this.PPVIEWER.type == 'page' && results.page != null && (_this.PPVIEWER.page.url == results.page.url))) {
        _this.loading_viewer = false;
        _this.PPVIEWER = results as PageProfileViewer;
        if (_this.PPVIEWER.type == 'profile') {
          _this.meta.updateTag({ name: 'description', content: _this.PPVIEWER.profile.title });
        }
        if (_this.PPVIEWER.type == 'page') {
          _this.meta.updateTag({ name: 'description', content: _this.PPVIEWER.page.about });
        }
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

  setPage(page: PageSummary) {
    /* Return and do nothing when a user is trying to browse the same profile page */
    if (this.PPVIEWER.page != undefined && (page.url == this.PPVIEWER.page.url)) {
      return false;
    }
    this.PPVIEWER = { type: 'page', profile: new ProfileViewer, page: new PageViewer };
    this.PPVIEWER.profile = null;
    this.title.setTitle('' + page.name + ' | Woorbi');
    this.meta.updateTag({ name: 'description', content: page.about });
    this.PPVIEWER.page.id = page.id;
    this.PPVIEWER.page.name = page.name;
    this.PPVIEWER.page.url = page.url;
    this.PPVIEWER.page.street = page.street;
    this.PPVIEWER.page.address = page.address;
    this.PPVIEWER.page.about = page.about;
    this.PPVIEWER.page.phone = page.phone;
    this.PPVIEWER.page.my_page = page.my_page;
    this.PPVIEWER.page.picture = page.picture;
    this.PPVIEWER.page.cover = page.cover;
    this.PPVIEWER.page.category = page.category;
    this.PPVIEWER.page.location = page.location;
    this.PPVIEWER.page.website = page.website;
    this.PPVIEWER.page.email = page.email;
    this.PPVIEWER.page.no_followers = page.no_followers;
    this.PPVIEWER.page.i_follow = page.i_follow;
    return true;
  }

  get pageSummary(): PageSummary {
    return {
      id: this.PPVIEWER.page.id,
      name: this.PPVIEWER.page.name,
      url: this.PPVIEWER.page.url,
      street: this.PPVIEWER.page.street,
      address: this.PPVIEWER.page.address,
      about: this.PPVIEWER.page.about,
      phone: this.PPVIEWER.page.phone,
      my_page: this.PPVIEWER.page.my_page,
      picture: this.PPVIEWER.page.picture,
      cover: this.PPVIEWER.page.cover,
      category: this.PPVIEWER.page.category,
      website: this.PPVIEWER.page.website,
      email: this.PPVIEWER.page.email,
      mobile: this.PPVIEWER.page.mobile,
      location:this.PPVIEWER.page.location,
      no_followers:this.PPVIEWER.page.no_followers,
      i_follow:this.PPVIEWER.page.i_follow
    };
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}
