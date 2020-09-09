import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Profile } from '@app/models/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  PEOPLE: Profile[] = [];
  POSTS: Profile[] = [];
  PAGES: Profile[] = [];
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
  loading_posts: boolean = false;
  next_post_page: number;
  loading_pages: boolean = false;
  next_page_page: number;
  loading_sent_pages: boolean = false;
  next_sent_page_page: number;
  loading_people: boolean = false;
  next_people_page: number;
  done_loading_people: boolean = false;
  search_query: string = "";
  loading_search: boolean = false;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_post_page = 1;
    this.next_page_page = 1;
    this.next_people_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
  }

  public onScrollUp(): void {
    if (this.loading_posts == false) {
      this.loadPosts({ page: this.next_post_page });
    }
  }

  public onPostsScrollDown(): void {
    if (this.loading_posts == false) {
      this.loadPosts({ page: this.next_post_page });
    }
  }

  public onPeopleScrollDown(): void {
    if (this.loading_people == false) {
      this.loadPeople({ page: this.next_people_page });
    }
  }

  public onScrollDownSearch(): void {
    if (this.loading_people == false) {
      this.loadSearch({ page: this.next_people_page });
    }
  }

  loadSearch(params?: {}): any {
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'search/default/';
    var _this = this;

    if (this.search_query.trim().length > 2) {
      this.loading_search = true;
      return this.service.getall(this.provider, { query: this.search_query.trim() }).subscribe(results => {
        if (results.isSuccess()) {
          var data = results.getResultData();

          _this.next_people_page++;
          _this.PEOPLE = data.people;

          _this.next_post_page++;
          _this.POSTS = data.posts;

          _this.next_page_page++;
          _this.PAGES = data.pages;

        }
        _this.loading_search = false;
      });
    } else {
      this.PEOPLE = [];
      this.PAGES = [];
      this.POSTS = [];
    }

  }

  loadPosts(params?: {}): any {
    this.loading_posts = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'search/posts/';
    var _this = this;
    return this.service.getall(this.provider, { query: this.search_query.trim(), page: this.next_post_page }).subscribe(results => {
      _this.loading_posts = false;
      if (results.isSuccess()) {
        _this.next_post_page++;
        var data = results.getResultData();
        _this.POSTS = _this.POSTS.concat(data.posts);
      }
    });
  }

  loadPeople(params?: {}): any {
    this.loading_people = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'search/people/';
    var _this = this;
    return this.service.getall(this.provider, { query: this.search_query.trim(), page: this.next_people_page }).subscribe(results => {
      _this.loading_people = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        if (data.length) {
          _this.next_people_page++;
          _this.PEOPLE = _this.PEOPLE.concat(data);
        }
      }
    });
  }

  searchAll() {
    if (this.search_query.trim().length > 2) {
      this.router.navigateByUrl('/search/top/' + this.search_query.trim());
    }
  }

  clearQuery() {
    this.search_query = "";
    this.PEOPLE = [];
    this.PAGES = [];
    this.POSTS = [];
  }

  loadPages(params?: {}): any {
    this.loading_pages = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'search/invitations/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_pages = false;
      if (results.isSuccess()) {
        _this.next_page_page++;
        _this.PAGES = _this.PAGES.concat(results.getResultData());
      }
    });
  }

  searchPosts(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.POSTS.find((post: Profile) => post.user_id == n_id));
  }


  clearPost(profile: Profile) {
    this.POSTS = this.POSTS.filter((x: any) => x.user_id !== profile.user_id);
  }

  searchSearch(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.PEOPLE.find((connection: Profile) => connection.user_id == n_id));
  }

  clearConnection(profile: Profile) {
    this.PEOPLE = this.PEOPLE.filter((x: any) => x.user_id !== profile.user_id);
  }

  searchPages(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.PAGES.find((page: Profile) => page.user_id == n_id));
  }

  clearPage(profile: Profile) {
    this.PAGES = this.PAGES.filter((x: any) => x.user_id !== profile.user_id);
  }

  searchSentPages(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.PAGES.find((page: Profile) => page.user_id == n_id));
  }

  clearSentPage(profile: Profile) {
    this.PAGES = this.PAGES.filter((x: any) => x.user_id !== profile.user_id);
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }
}
