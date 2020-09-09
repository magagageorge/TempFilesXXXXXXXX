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
import { AdCompaignForm } from '../models/ad-compaign-form';
import { AdCompaign } from '../models/ad-compaign';
import { AdContent, AdContentForm, AdContentCard, AdContentCardForm } from '../models/ad-content';
import { WB_AD_FORMATS, AdFormat } from '../models/ad-format';
import { CallToAction, call_to_actions } from '../models/call-to-action';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  ad_account: AdsAccount = null;
  ADS_LIST: any[] = [];
  ADS_OBJECTIVES: AdObjective[] = [];
  ADS_OBJECTIVES_TYPES: AdObjectiveType[] = [];
  compaign_in_edit: AdCompaignForm = null;
  service: CrudService;
  callActions: CallToAction[];
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  next_ads_page: number;
  loading_ads: boolean;
  loading_ads_manager: boolean = false;
  loading_ads_objectives: boolean = false;
  ad_form_open: boolean = false;
  private add_account_loaded: BehaviorSubject<boolean>;
  allowedExtensions: string[] = ['png', 'jpg', 'gif', 'jpeg'];
  wait_processing_request: boolean = false;
  wait_processing_request_message: string = '';

  constructor(service: CrudService, public profileService: ProfileService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_ads_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.ads.provider');
    this.add_account_loaded = new BehaviorSubject<boolean>(false);
    this.loadAdObjectives({});
    this.callActions = call_to_actions;
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
          if (this.router.url == '/adsmanager') {
            _this.router.navigateByUrl('adsmanager/compaigns');
          }
        } else {
          _this.router.navigateByUrl('adsmanager/accounts');
        }
        this.setAccountLoaded(true);
      }
    });
  }

  public validateFile(file: File): Boolean {
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
    this.loading_ads_objectives = true;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_ads_objectives = false;
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

  unSelectAllObjectives() {
    this.ADS_OBJECTIVES.forEach(objective => {
      objective.selected = false;
    });
  }

  SelectObjective(code: string) {
    this.ADS_OBJECTIVES.forEach((obj: AdObjective) => {
      if (obj.code == code) {
        obj.selected = true;
      } else {
        obj.selected = false;
      }
    });
  }

  closeAdContentFormModal() {
    this.ad_form_open = false;
  }


  openAdContentFormModal() {
    this.ad_form_open = true;
  }

  public static getFileExtension(filename: string): null | string {
    if (filename.indexOf('.') === -1) {
      return null;
    }
    return filename.split('.').pop();
  }

  searchCTA(call_to_action: string): Observable<CallToAction> {
    return of(this.callActions.find((cta: CallToAction) => cta.code === call_to_action));
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

  setCompaingInEdit(compaign: AdCompaignForm) {
    this.compaign_in_edit = compaign;
  }

  setCompaignModelForm(compaign: AdCompaign) {
    var compaign_model = new AdCompaignForm();
    compaign_model.id = compaign.id;
    compaign_model.account_id = compaign.account_id;
    compaign_model.objective = compaign.objective.code;
    compaign_model.selected_objective = compaign.objective;
    compaign_model.compaign_name = compaign.compaign_name;
    compaign_model.gender = compaign.aud_gender;
    compaign_model.aud_age_max = compaign.aud_age_max;
    compaign_model.aud_age_min = compaign.aud_age_min;
    compaign_model.gender = compaign.aud_gender;
    compaign_model.aud_locations = compaign.aud_locations;
    compaign_model.currentForm = compaign.current_form;
    compaign_model.status = compaign.status;
    compaign_model.ads = this.adsContentToContentForm(compaign.ads);
    if (compaign.budget_schedule != null) {
      compaign_model.budget_type = compaign.budget_schedule.budget_type;
      if (compaign.budget_schedule.budget_type == 'total') {
        compaign_model.total_budget = compaign.budget_schedule.total_budget;
        compaign_model.daily_budget = '';
      } else {
        compaign_model.daily_budget = compaign.budget_schedule.daily_budget;
        compaign_model.total_budget = '';
      }
      if (compaign.budget_schedule.end_date != null && compaign.budget_schedule.end_date != '') {
        compaign_model.date_schedule = 'start_end';
      } else {
        compaign_model.date_schedule = 'continuous';
      }
      compaign_model.start_date = compaign.budget_schedule.start_date;
      compaign_model.end_date = compaign.budget_schedule.end_date;
    } else {
      compaign_model.budget_type = 'daily';
      compaign_model.date_schedule = 'continuous';
    }
    return compaign_model;
  }

  adsContentToContentForm(ads: AdContent[]) {
    var _this = this;
    var ads_forms = [] as AdContentForm[];
    ads.forEach((ad: AdContent) => {
      ads_forms.push(_this.setAdContentForm(ad));
    });
    return ads_forms;
  }

  setAdContentForm(adContent: AdContent) {
    var form_model = new AdContentForm();
    form_model.id = adContent.id;
    form_model.introduction = adContent.introduction;
    form_model.name = adContent.name;
    form_model.one_destination = adContent.one_destination;
    form_model.destination_url = adContent.destination_url;
    form_model.page_id = (adContent.page != null) ? adContent.page.id : null;
    form_model.ad_format = adContent.ad_format;
    form_model.call_to_action = adContent.call_to_action;
    form_model.cards = this.setAdCardForms(adContent.cards);
    form_model.compaign_id = adContent.compaign_id;
    form_model.status = adContent.status;
    this.searchCTA(adContent.call_to_action).subscribe((cta: CallToAction) => {
      if (cta) {
        form_model.selectedCTA = cta;
      } else {
        form_model.selectedCTA = null;
      }
    });
    form_model.selected_page = adContent.page;
    return form_model;
  }

  setAdCardForms(adCards: AdContentCard[]): AdContentCardForm[] {
    var card_forms: AdContentCardForm[] = [];
    var sn = 1;
    adCards.forEach(card => {
      card_forms.push({
        id: card.id,
        sn: sn,
        headline: card.headline,
        description: card.description,
        destination_url: card.destination_url,
        media: card.media,
        upload_media: false,
        media_file: null,
        media_width: card.media_width,
        media_height: card.media_height,
        media_wh_ratio: 0,
        media_size: card.media_size,
        media_ext: card.media_ext
      });
      sn++;
    });

    return card_forms;
  }

  searchAdInCompaign(ads: any[], adId: number): Observable<AdContent> {
    return of(ads.find((ad: AdContent) => ad.id == adId));
  }

  searchAdInCompaignForm(ads: AdContentForm[], adId: number): Observable<AdContentForm> {
    return of(ads.find((ad: AdContentForm) => ad.id == adId));
  }

  getAdFormats(selectedObjective: AdObjective) {
    var _this = this;
    var ad_formats = [];
    WB_AD_FORMATS.forEach((ad_format: AdFormat) => {
      if (selectedObjective != null && ad_format.active == true) {
        if (ad_format.id == 'SINGLE_IMAGE' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC')
        ) {
          ad_formats.push(ad_format);
        } else if (ad_format.id == 'CAROUSEL_IMAGE' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC' ||
          selectedObjective.code == 'SELL_RENT')
        ) {
          ad_formats.push(ad_format);
        } else if (ad_format.id == 'MESSAGE_AD' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC' ||
          selectedObjective.code == 'SELL_RENT')
        ) {
          ad_formats.push(ad_format);
        } else if (ad_format.id == 'TEXT_AD' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC' ||
          selectedObjective.code == 'SELL_RENT')
        ) {
          ad_formats.push(ad_format);
        } else if (ad_format.id == 'SPOTLIGHT_AD' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC' ||
          selectedObjective.code == 'SELL_RENT')
        ) {
          ad_formats.push(ad_format);
        } else if (ad_format.id == 'FOLLOWER_AD' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC' ||
          selectedObjective.code == 'SELL_RENT')
        ) {
          ad_formats.push(ad_format);
        } else if (ad_format.id == 'VIDEO_AD' && (selectedObjective.code == 'APP_INSTALL' ||
          selectedObjective.code == 'BRAND_AWARE' ||
          selectedObjective.code == 'CONVERSION' ||
          selectedObjective.code == 'ENGAGE' ||
          selectedObjective.code == 'LEAD' ||
          selectedObjective.code == 'REACH' ||
          selectedObjective.code == 'TRAFFIC' ||
          selectedObjective.code == 'SELL_RENT' ||
          selectedObjective.code == 'VIDEO_VIEWS')
        ) {
          ad_formats.push(ad_format);
        } else { }
      }
    });

    return ad_formats;
  }

  get CompaingInEdit() {
    return this.compaign_in_edit;
  }

  removeDeletedAd(ad_id: number) {
    this.CompaingInEdit.ads = this.CompaingInEdit.ads.filter((ad: AdContentForm) => ad.id !== ad_id);
  }

  removeDeletedCompaign(id: number) {
    this.ad_account.compaigns = this.ad_account.compaigns.filter((ad: AdCompaign) => ad.id !== id);
  }

  UpdateAdStatus(id:number,status:string) {

  }

  UpdateCompaignStatus(id:number,status:string){

  }

  WaitProcessingRequest(status: boolean, message: string) {
    this.wait_processing_request = status;
    this.wait_processing_request_message = message;
  }

}
