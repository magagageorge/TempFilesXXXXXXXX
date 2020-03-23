import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Profile } from '@app/models/profile/profile';
import { UrlViewerService } from './url-viewer.service';
import { FeedService } from './feed.service';
import { Feed } from '@app/models/feed/feed';
import { Comment } from '@app/models/feed/comment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  CONNECTIONS: Profile[] = [];
  CONNECT_SUGGESTIONS: Profile[] = [];
  CONNECT_REQUESTS: Profile[] = [];
  CONNECT_SENT_REQUESTS: Profile[] = [];
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
  loading_suggestions: boolean = false;
  next_suggestion_page: number;
  loading_requests: boolean = false;
  next_request_page: number;
  loading_sent_requests: boolean = false;
  next_sent_request_page: number;
  loading_connections: boolean = false;
  next_connections_page: number;
  done_loading_connections: boolean = false;
  urlViewerService: UrlViewerService;
  feedService: FeedService;

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, feedService: FeedService, urlViewerService: UrlViewerService, private _modalService: NgbModal, router: Router) {
    this.next_suggestion_page = 1;
    this.next_request_page = 1;
    this.next_connections_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.urlViewerService = urlViewerService;
    this.feedService = feedService;
    this.loadSuggestions({ page: this.next_suggestion_page });
    this.loadRequests({ page: this.next_request_page });
  }

  public onScrollUp(): void {
    if (this.loading_suggestions == false) {
      this.loadSuggestions({ page: this.next_suggestion_page });
    }
  }

  public onScrollDownSuggestions(): void {
    if (this.loading_suggestions == false) {
      this.loadSuggestions({ page: this.next_suggestion_page });
    }
  }

  public onScrollDownConnections(): void {
    if (this.loading_connections == false) {
      this.loadConnections({ page: this.next_connections_page });
    }
  }

  RemoveSuggestion(profile: Profile): void {
    this.clearSuggestion(profile);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.update(this.provider, { p: profile.user_id }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  Connect(profile: Profile): void {
    this.clearSuggestion(profile);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profile.user_id, a: 'connect' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          profile.connectStatus = data.connectStatus;
          _this.CONNECT_SENT_REQUESTS.push(profile);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  Accept(profile: Profile): void {
    this.clearRequest(profile);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profile.user_id, a: 'accept' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          profile.connectStatus = data.connectStatus;
          _this.CONNECTIONS.push(profile);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  Cancel(profile: Profile): void {
    this.clearSentRequest(profile);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profile.user_id, a: 'cancel' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          profile.connectStatus = data.connectStatus;
          _this.CONNECT_SUGGESTIONS.push(profile);
          _this.UpdateConnectionStatus(profile.user_id, data.connectStatus);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  Ignore(profile: Profile): void {
    this.clearRequest(profile);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profile.user_id, a: 'deny' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          _this.UpdateConnectionStatus(profile.user_id, data.connectStatus);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  Disconnect(profile: Profile): void {
    this.clearConnection(profile);
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profile.user_id, a: 'disconnect' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          _this.UpdateConnectionStatus(profile.user_id, data.connectStatus);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  ConnectById(profielId: number): void {
    var _this = this;
    this.searchSuggestions(String(profielId)).subscribe(request => {
      if (request) {
        _this.clearSuggestion(request);
      }
    });
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profielId, a: 'connect' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done = 1) {
          _this.CONNECT_SENT_REQUESTS.push(data.profile);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  AccpetById(profielId: number): void {
    var _this = this;
    this.searchRequests(String(profielId)).subscribe(request => {
      if (request) {
        _this.clearRequest(request);
      }
    });
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profielId, a: 'accept' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          _this.CONNECTIONS.push(data.profile);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  CancelById(profielId: number): void {
    var _this = this;
    this.searchSentRequests(String(profielId)).subscribe(request => {
      if (request) {
        _this.clearSentRequest(request);
      }
    });
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profielId, a: 'cancel' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data.done == 1) {
          _this.CONNECT_SUGGESTIONS.push(data.profile);
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }


  IgnoreById(profielId: number): void {
    var _this = this;
    this.searchSuggestions(String(profielId)).subscribe(suggestion => {
      if (suggestion) {
        _this.clearSuggestion(suggestion);
      }
    });
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profielId, a: 'deny' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }

  DisconnectById(profielId: number): void {
    var _this = this;
    this.searchConnections(String(profielId)).subscribe(suggestion => {
      if (suggestion) {
        _this.clearConnection(suggestion);
      }
    });
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    this.service.create(this.provider, { p: profielId, a: 'disconnect' }).subscribe(function (result) {
      if (result.isSuccess()) {
        var data = result.getResultData();
        if (data == true) {
        } else {
        }
      } else {
        _this.errors = result.getErrors();
      }
    });
  }



  loadSuggestions(params?: {}): any {
    this.loading_suggestions = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connect-suggestions/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_suggestions = false;
      if (results.isSuccess()) {
        _this.next_suggestion_page++;
        if (_this.CONNECT_SUGGESTIONS.length > 100) {
          _this.CONNECT_SUGGESTIONS = [];
        }
        _this.CONNECT_SUGGESTIONS = _this.CONNECT_SUGGESTIONS.concat(results.getResultData());
      }
    });
  }


  loadConnections(params?: {}): any {
    this.loading_connections = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/connections/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_connections = false;
      if (results.isSuccess()) {
        _this.next_connections_page++;
        _this.CONNECTIONS = _this.CONNECTIONS.concat(results.getResultData());
        _this.done_loading_connections = true;
      }
    });
  }

  loadRequests(params?: {}): any {
    this.loading_requests = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/invitations/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_requests = false;
      if (results.isSuccess()) {
        _this.next_request_page++;
        _this.CONNECT_REQUESTS = _this.CONNECT_REQUESTS.concat(results.getResultData());
      }
    });
  }

  loadSentRequests(params?: {}): any {
    this.loading_sent_requests = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'mynetwork/sent-invitations/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_sent_requests = false;
      if (results.isSuccess()) {
        _this.next_sent_request_page++;
        _this.CONNECT_SENT_REQUESTS = results.getResultData();
      }
    });
  }

  searchSuggestions(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.CONNECT_SUGGESTIONS.find((suggestion: Profile) => suggestion.user_id == n_id));
  }


  clearSuggestion(profile: Profile) {
    this.CONNECT_SUGGESTIONS = this.CONNECT_SUGGESTIONS.filter((x: any) => x.user_id !== profile.user_id);
  }

  searchConnections(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.CONNECTIONS.find((connection: Profile) => connection.user_id == n_id));
  }

  clearConnection(profile: Profile) {
    this.CONNECTIONS = this.CONNECTIONS.filter((x: any) => x.user_id !== profile.user_id);
  }

  searchRequests(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.CONNECT_REQUESTS.find((request: Profile) => request.user_id == n_id));
  }

  clearRequest(profile: Profile) {
    this.CONNECT_REQUESTS = this.CONNECT_REQUESTS.filter((x: any) => x.user_id !== profile.user_id);
  }

  searchSentRequests(id: string): Observable<Profile> {
    var n_id = Number(id);
    return of(this.CONNECT_SENT_REQUESTS.find((request: Profile) => request.user_id == n_id));
  }

  clearSentRequest(profile: Profile) {
    this.CONNECT_SENT_REQUESTS = this.CONNECT_SENT_REQUESTS.filter((x: any) => x.user_id !== profile.user_id);
  }

  UpdateConnectionStatus(profileId: number, connectionStatus: any) {
    if (this.urlViewerService.PPVIEWER.profile != null && this.urlViewerService.PPVIEWER.profile.user_id == profileId) {
      this.urlViewerService.PPVIEWER.profile.connectStatus = connectionStatus;
    }

    if (this.urlViewerService.PPVIEWER.profile.profile_views.length > 0) {
      this.searchProfileIN(this.urlViewerService.PPVIEWER.profile.profile_views, profileId).subscribe(found => {
        if (found) {
          found.connectStatus = connectionStatus;
        }
      });
    }

    if (this.CONNECTIONS.length > 0) {
      this.searchProfileIN(this.CONNECTIONS, profileId).subscribe(found => {
        if (found) {
          found.connectStatus = connectionStatus;
        }
      });
    }

    if (this.CONNECT_REQUESTS.length > 0) {
      this.searchProfileIN(this.CONNECT_REQUESTS, profileId).subscribe(found => {
        if (found) {
          found.connectStatus = connectionStatus;
        }
      });
    }

    if (this.CONNECT_SENT_REQUESTS.length > 0) {
      this.searchProfileIN(this.CONNECT_SENT_REQUESTS, profileId).subscribe(found => {
        if (found) {
          found.connectStatus = connectionStatus;
        }
      });
    }

    this.feedService.feeds.forEach((feed: Feed) => {
      if (feed.profile.user_id == profileId) {
        feed.profile.connectStatus = connectionStatus;
      }
      feed.comments.forEach((comment: any) => {
        if (comment.profile.user_id == profileId) {
          comment.profile.connectStatus = connectionStatus;
        }
      });
    });

    this.feedService.profileFeedService.feeds.forEach((feed: Feed) => {
      if (feed.profile.user_id == profileId) {
        feed.profile.connectStatus = connectionStatus;
      }
      feed.comments.forEach((comment: any) => {
        if (comment.profile.user_id == profileId) {
          comment.profile.connectStatus = connectionStatus;
        }
      });
    });


  }

  searchProfileIN(list: Profile[], profileId: number): Observable<Profile> {
    return of(list.find((profile: Profile) => profile.user_id == profileId));
  }

  searchProfileINFeed(list: Feed[], profileId: number): Observable<Feed> {
    return of(list.find((feed: Feed) => feed.profile.user_id == profileId));
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }
}
