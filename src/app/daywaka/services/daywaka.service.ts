import { Inject, Injectable } from '@angular/core';
import { JobCategory } from '../models/job.model';
import { getDeepFromObject } from '@app/@crud/helpers';
import { Router } from '@angular/router';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';

@Injectable()
export class DaywakaService {

  JOB_CATEGORIES:JobCategory[]=[];
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  wait_processing_request: boolean = false;
  wait_processing_request_message: string = '';
  constructor(public service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.daywaka.provider');
    this.loadJobCategories({});
  }

  loadJobCategories(params?: {}): any {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/job-categories/';
    return this.service.getall(this.provider, params).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.JOB_CATEGORIES = data as JobCategory[];
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

  WaitProcessingRequest(status: boolean, message: string) {
    this.wait_processing_request = status;
    this.wait_processing_request_message = message;
  }


}
