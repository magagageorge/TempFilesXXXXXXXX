import { EventEmitter, Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Link } from '../../wf-linkify'
import { LinkPreview } from '../';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';

@Injectable()
export class WfLinkPreviewService {

  private _accessKey = '5b54e80a65c77848ceaa4630331e8384950e09d392365';
  protected service: CrudService;
  protected crudconfig: {};
  provider: string;
  link_Preview: LinkPreview;

  onLinkFound: EventEmitter<Array<Link>> = new EventEmitter<Array<Link>>();

  links: Link[] = [];
  mentions: Link[] = [];
  hashtags: Link[] = [];

  constructor(private http: HttpClient, service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions) {
    this.onLinkFound.subscribe((links: Array<Link>) => {
      this.links=[];
      links.forEach(link => {
        if (link.type == 'url') {
          this.searchLink(this.links, link.value).subscribe(lin => {
            if (!lin) {
              this.links.push(link);
            }
          });
        }
        if (link.type == 'mention') {
          this.searchLink(this.mentions, link.value).subscribe(lin => {
            if (!lin) {
              this.mentions.push(link);
            }
          });
        }
        if (link.type == 'hashtag') {
          this.searchLink(this.hashtags, link.value).subscribe(lin => {
            if (!lin) {
              this.hashtags.push(link);
            }
          });
        }
      });
    });
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.provider = this.getConfigValue('forms.getall.provider');
  }

  searchLink(object: Link[], value: string): Observable<Link> {
    return of(object.find((link: Link) => link.value == value));
  }

  fetchLink(url: string): Observable<LinkPreview> {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'crawler/';
    return this.service.getall(this.provider, { 'key': _this._accessKey, 'url': url }).pipe(map(value => value.getResultData() as LinkPreview));
  }

  fetchHashTags(url: string): Observable<LinkPreview> {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'hashtags/';
    return this.service.getall(this.provider, { 'key': _this._accessKey, 'url': url }).pipe(map(value => value.getResultData() as LinkPreview));
  }

  fetchMentions(url: string): Observable<LinkPreview> {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'mentions/';
    return this.service.getall(this.provider, { 'key': _this._accessKey, 'url': url }).pipe(map(value => value.getResultData() as LinkPreview));
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
