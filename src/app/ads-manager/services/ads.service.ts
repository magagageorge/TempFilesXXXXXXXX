import { Injectable, Inject } from '@angular/core';
import { getDeepFromObject } from '@app/@crud/helpers';
import { Router } from '@angular/router';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { AdsAccount } from '../models/ads-account';
import { ProfileService } from '@app/services/profile.service';
import { AdObjectiveType } from '../models/ad-objective-type';
import { AdObjective } from '../models/ad-objective';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ad_account: AdsAccount = null;
  ADS_LIST: any[] = [];
  ADS_OBJECTIVES: AdObjective[] = [];
  ADS_OBJECTIVES_TYPES: AdObjectiveType[] = [];
  service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  next_ads_page: number;
  loading_ads: boolean;
  loading_ads_manager: boolean = false;
  ad_form_open:boolean=false;
  private add_account_loaded: BehaviorSubject<boolean>;
  allowedExtensions: string[] = ['png', 'jpg', 'gif', 'jpeg'];
  

  constructor(service: CrudService, public profileService: ProfileService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_ads_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.ads.provider');
    this.add_account_loaded = new BehaviorSubject<boolean>(false);
    this.loadAdObjectives({});
  }

  /* function to change the account_loaded_state*/
  setAccountLoaded(newValue): void {
    this.add_account_loaded.next(newValue);
  }

  isAccountLoaded(): Observable<boolean> {
    return this.add_account_loaded.asObservable();
  }

  loadAdsAccount(params?: {}): any {
    var _this = this;
    this.loading_ads_manager = true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'ads/account/';
    return this.service.getone(this.provider, params).subscribe(results => {
      _this.loading_ads_manager = false;
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.ad_account = data.ad_acc as AdsAccount;
        if (data.ad_acc != null) {
          _this.router.navigateByUrl('adsmanager/ads');
        } else {
          _this.router.navigateByUrl('adsmanager/accounts');
        }
        this.setAccountLoaded(true);
      }
    });
  }

  public  validateFile(file: File): Boolean {
    if (this.allowedExtensions.length !== 0 && file instanceof File) {
      const ext = AdsService.getFileExtension(file.name);
      if (this.allowedExtensions.indexOf(ext) !== -1) {
        return true;
      }
    }
    return false;
  }

  loadAdObjectives(params?: {}): any {
    var _this = this;
    this.service.getProvider(this.provider).crudconfig.route_url = 'ads/objectives/';
    return this.service.getall(this.provider, params).subscribe(results => {
      if (results.isSuccess()) {
        var data = results.getResultData();
        _this.ADS_OBJECTIVES = data.objectives;
        _this.ADS_OBJECTIVES_TYPES = data.types;
      }
    });
  }

  filterObjectiveByType(type: string): AdObjective[] {
    return this.ADS_OBJECTIVES.filter((x: AdObjective) => x.type_code === type);
  }

  unSelectAllObjectives(){
    this.ADS_OBJECTIVES.forEach(objective => {
      objective.selected=false;
    });
  }

  closeAdContentFormModal(){
    this.ad_form_open=false;
  }


  openAdContentFormModal(){
    this.ad_form_open=true;
  }

  public static getFileExtension(filename: string): null|string {
    if (filename.indexOf('.') === -1) {
      return null;
    }
    return filename.split('.').pop();
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
