import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AdsService } from '../services/ads.service';
import { Router } from '@angular/router';
import { AdsModalsService } from '../services/ads-modals.service';
import { CreateAdAccountFormModalComponent } from '../ads-theme/modals/create-ad-account-form-modal/create-ad-account-form-modal.component';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  tabname: string = 'accounts';
  account_name: string;
  create_form_displayed: boolean = false;
  constructor(private title: Title, public adsService: AdsService, public adsModalsService: AdsModalsService, public router: Router) { }

  ngOnInit() {
    var _this = this;
    this.title.setTitle('Ads Manager | Woorbi');
    this.account_name = this.adsService.profileService.MYPROFILE.name;
    this.adsService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (this.adsService.loading_ads_manager == false && this.adsService.ad_account == null) {
          this.loadAccountCreateForm();
        }
      } else {
        if (this.adsService.loading_ads_manager == false && this.adsService.ad_account == null) {
          this.adsService.loadAdsAccount({});
        }
      }
    });
    //this.adsService.ad_account.
  }

  loadAccountCreateForm() {
    this.adsModalsService.modalRef = this.adsModalsService._modalService.open(CreateAdAccountFormModalComponent, { centered: true });
    this.adsModalsService.modalRef.componentInstance.setModel(this.account_name, 'USD');
    this.create_form_displayed = true;
  }

}
