import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdsService } from '../services/ads.service';
import { Router } from '@angular/router';
import { SysFunctions } from '@app/libs/utilities/common-functions';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  tabname: string = 'ads';
  constructor(private title: Title, public adsService: AdsService, public router: Router) { }

  ngOnInit() {
    this.title.setTitle('Ads Manager | Woorbi');
    this.adsService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (this.adsService.ad_account != null && this.adsService.ad_account.compaigns.length < 1) {
          this.router.navigateByUrl('adsmanager/compaigns/create');
        }
      } else {
        if (this.adsService.loading_ads_manager == false && this.adsService.ad_account == null) {
          this.adsService.loadAdsAccount({});
        }
      }
    });
  }

  ucwords(str: string) {
    return SysFunctions.ucwords(str);
  }

  UpdateSelectedCompaign(event: any) {

  }

}
