import { Injectable, Inject } from '@angular/core';
import { getDeepFromObject } from '@app/@crud/helpers';
import { Router } from '@angular/router';
import { CrudService, CRUD_OPTIONS, CrudOptions } from '@app/@crud';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { ProfileService } from '@app/services/profile.service';
import { ShowAdContent } from '@app/models/ads/ad-models';


@Injectable({
  providedIn: 'root'
})
export class ShowAdsService {

  ADS_LIST: any[] = [];
  TEXT_ADS:ShowAdContent[]=[];
  POST_ADS:ShowAdContent[]=[];
  SPOTLIGHT_AD:ShowAdContent[]=[];
  FOLLOWER_AD:ShowAdContent[]=[];
  service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  next_ads_page: number;
  loading_ads: boolean;


  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.next_ads_page = 1;
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.provider = this.getConfigValue('forms.ads.provider');
    this.loadAds({});
  }

  loadAds(params?: {}): any {
    var _this = this;
    this.loading_ads = true;
    this.service.getProvider(this.provider).crudconfig.route_url = 'ads/show/';
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_ads = false;
      _this.TEXT_ADS=[];
      _this.POST_ADS=[];
      _this.SPOTLIGHT_AD=[];
      if (results.isSuccess()) {
        var data = results.getResultData() as ShowAdContent[];
        data.forEach((ad:ShowAdContent) => {
            if(ad.ad_format=='SINGLE_IMAGE' || ad.ad_format=='CAROUSEL_IMAGE' || ad.ad_format=='VIDEO_AD'){
              _this.POST_ADS.push(ad);
            }else if(ad.ad_format=='TEXT_AD'){
              _this.TEXT_ADS.push(ad);
            }else if(ad.ad_format=='SPOTLIGHT_AD' || ad.ad_format=='FOLLOWER_AD'){           

            }else{}
        });
         console.log(data);
         data=null;
      }
    });
  }

  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
