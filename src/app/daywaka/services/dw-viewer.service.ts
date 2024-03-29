import { Inject, Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CrudService, CrudProvider, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { getDeepFromObject } from '@app/@crud/helpers';
import { PageProfileViewer } from '@app/models/page-profile-viewer';
import { PageViewer } from '@app/models/page-viewer';
import { PageSummary } from '@app/models/page/page.model';
import { ProfileViewer } from '@app/models/profile-viewer';
import { Profile } from '@app/models/profile/profile';

@Injectable()
export class DwViewerService {

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
  loading_viewer: boolean = false;
  profile: any;
  VIEWER_URL: string = '';
  VIEWER_URL_PAGE: string = '';
  VIEWER_URL_ACTION: string = '';

  public PPVIEWER: PageProfileViewer = new PageProfileViewer();

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router, private title: Title, private meta: Meta) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.daywaka.provider');
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

  updateUrlParams(params: any) {
    if (params.dwurl_action != undefined) {
      this.VIEWER_URL_ACTION = params.dwurl_action;
    } else {
      this.VIEWER_URL_ACTION = '';
    }
    if (params.dwurl_page != undefined) {
      this.VIEWER_URL_PAGE = params.dwurl_page;
    } else {
      this.VIEWER_URL_PAGE = '';
    }
  }

  getViewer(url: string): any {
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/viewer/';
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
    this.title.setTitle('' + profile.name + ' | Woorbi Daywaka');
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
    this.title.setTitle('' + page.name + ' | Woorbi Daywaka');
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
      location: this.PPVIEWER.page.location,
      no_followers: this.PPVIEWER.page.no_followers,
      i_follow: this.PPVIEWER.page.i_follow
    };
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  };
}
