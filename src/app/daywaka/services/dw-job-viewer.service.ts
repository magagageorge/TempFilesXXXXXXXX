import { Inject, Injectable } from '@angular/core';
import { Params, Router } from '@angular/router';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { getDeepFromObject } from '@app/@crud/helpers';
import { BehaviorSubject, Observable } from 'rxjs';

export interface EngagingJob { status: boolean; action: string;}

export class DwJobViewerService {

  screenHeight: number;
  screenWidth: number;
  pageCoverWidth: number;
  pageCoverHeight: number;
  pageCoverHeaderHeight: number;
  last_page_url: string = '';
  //CONFIRMING_JOB: boolean = false;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  ENGAGING_JOB:EngagingJob = { status: false, action: ''};
  ENGAGING_JOB_OBSERVER: BehaviorSubject<EngagingJob> = new BehaviorSubject<EngagingJob>(this.ENGAGING_JOB);

  constructor(public service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.daywaka.provider');
    this.pageCoverWidth = 720;
    this.pageCoverHeight = 240;
    this.pageCoverHeaderHeight = 240;
  }

  checkLoadPageInfo(urlParams: Params) {
    var _this = this;
    if (urlParams.url != undefined && urlParams.url != '' && this.last_page_url != urlParams.url) {
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

  wantToEngageJob(status: boolean, action: string) {
    this.ENGAGING_JOB.status = status;
    this.ENGAGING_JOB.action = action;
    this.ENGAGING_JOB_OBSERVER.next(this.ENGAGING_JOB);
  }

  checkWantToEngageJob(): Observable<EngagingJob> {
    return this.ENGAGING_JOB_OBSERVER.asObservable();
  }


  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
