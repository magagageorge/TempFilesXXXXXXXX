import { Inject, Injectable } from '@angular/core';
import { JobCategory } from '../models/job.model';
import { getDeepFromObject } from '@app/@crud/helpers';
import { Router } from '@angular/router';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { DwConfigs } from '../models/dw.configs';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageSummary } from '@app/models/page/page.model';
import { AuthService } from '@app/auth';

@Injectable()
export class DaywakaService {

  JOB_CATEGORIES: JobCategory[] = [];
  DW_CONFIGS: DwConfigs = new DwConfigs();
  DW_CURRENCIES: any[] = [];
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  private dw_account_loaded: BehaviorSubject<boolean>;
  loading_daywaka: boolean = false;
  wait_processing_request: boolean = false;
  wait_processing_request_message: string = '';
  constructor(public service: CrudService, private authService: AuthService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, router: Router) {
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.daywaka.provider');
    this.dw_account_loaded = new BehaviorSubject<boolean>(false);
    this.setCurrencies();
    this.loadModuleConfigurations();
  }

  loadModuleConfigurations() {
    var _this = this;
    this.loadJobCategories({});    
    this.authService.isAuthenticated().subscribe(authenticated => {
      if (authenticated==true) {
      _this.loadDaywakaAccount({});
      } else {

      }
    })
  }

  /* function to change the account_loaded_state*/
  setAccountLoaded(newValue): void {
    this.dw_account_loaded.next(newValue);
  }

  isAccountLoaded(): Observable<boolean> {
    return this.dw_account_loaded.asObservable();
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

  loadDaywakaAccount(params?: {}): any {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/dw-configs/';
    this.loading_daywaka = true;
    return this.service.getone(this.provider, params).subscribe(results => {
      _this.loading_daywaka = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.DW_CONFIGS = data;
      }
      _this.setAccountLoaded(true);
    });
  }

  setCurrencies() {
    this.DW_CURRENCIES = [{ code: 'TZS' }, { code: 'KES' }, { code: 'UGS' }, { code: 'USD' }];
  }

  switchPage(page: PageSummary) {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'daywaka/default-page/';
    this.loading_daywaka = true;
    this.WaitProcessingRequest(true, 'Redirecting,Please wait...');
    return this.service.update(this.provider, null, { page_id: page.id }).subscribe(results => {
      _this.loading_daywaka = false;
      _this.WaitProcessingRequest(false, '');
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.DW_CONFIGS = data;
        if (_this.DW_CONFIGS.defaultPage != null) {
          _this.router.navigateByUrl('/' + _this.DW_CONFIGS.defaultPage.url);
        }
      }
      _this.setAccountLoaded(true);
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
