import { Component, OnInit } from '@angular/core';
import { AdsService } from '@app/ads-manager/services/ads.service';
import { AdObjective } from '@app/ads-manager/models/ad-objective';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdFormat, WB_AD_FORMATS } from '@app/ads-manager/models/ad-format';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  compaign_model: AdCompaignForm;
  selectedObjective: AdObjective = null;
  aud_ages: any[] = [];
  ad_formats: AdFormat[] = [];
  frm_objectiveGroup: FormGroup;
  frm_audienceGroup: FormGroup;
  frm_budgetscheduleGroup: FormGroup;
  frm_adformatGroup: FormGroup;
  money_placeholder: string = 'xxx';
  constructor(public adsService: AdsService, private formBuilder: FormBuilder) {
    var _this = this;
    this.getAges();
    this.adsService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (_this.adsService.ad_account != null) {
          _this.money_placeholder = _this.adsService.ad_account.currency + 'xxx';
          console.log(_this.money_placeholder);
        }
      }
    });
  }

  ngOnInit() {
    var _this = this;
    this.fillDefaultForm();
    this.setNextForm();
    this.frm_audienceGroup = this.formBuilder.group(
      {
        locations: ['', Validators.required],
        age_min: ['', Validators.required],
        age_max: ['', Validators.required],
        gender: ['', Validators.required],
      });

    this.frm_budgetscheduleGroup = this.formBuilder.group(
      {
        budget_type: ['', Validators.required],
        daily_budget: ['', Validators.required],
        total_budget: ['', Validators.required],
        start_date: ['', Validators.required],
        end_date: ['', Validators.required],
        date_schedule: ['', Validators.required],
      });
    this.frm_adformatGroup = this.formBuilder.group(
      {
        ad_format: ['', Validators.required],
      });
  }

  get aud() { return this.frm_audienceGroup.controls; }

  countAdsInType(typeCode: string) {
    var items = this.adsService.filterObjectiveByType(typeCode);
    return items.length;
  }

  selectObjective(objective: AdObjective) {
    this.adsService.unSelectAllObjectives();
    objective.selected = true;
    this.compaign_model.objective = objective.type_code;
    this.selectedObjective = objective;
    this.getAdFormats();
  }

  setNextForm() {
    if (this.compaign_model.currentForm == null || this.compaign_model.currentForm == '') {
      this.compaign_model.currentForm = 'Objective';
    } else {
      if (this.compaign_model.currentForm == 'Objective') {
        this.compaign_model.currentForm = 'Audience';
      } else if (this.compaign_model.currentForm == 'Audience') {
        this.compaign_model.currentForm = 'BudgetSchedule';
      } else if (this.compaign_model.currentForm == 'BudgetSchedule') {
        this.compaign_model.currentForm = 'AdFormat';
      } else if (this.compaign_model.currentForm == 'AdFormat') {
        this.compaign_model.currentForm = 'AdContent';
      } else { }
    }
  }

  setCurrentForm(form: string) {
    this.compaign_model.currentForm = form;
  }

  getAges() {
    for (var i = 15; i < 65; i++) {
      this.aud_ages.push({ key: i, value: i });
    }
    this.aud_ages.push({ key: 65, value: '65+' });
  }

  fillDefaultForm() {
    this.compaign_model = new AdCompaignForm();
    this.compaign_model.gender = 'All';
    this.compaign_model.aud_age_max = 65;
    this.compaign_model.aud_age_min = 15;
    this.compaign_model.budget_type = 'daily';
    this.compaign_model.date_schedule = 'continuous'
  }

  setAdGender(gender: string) {
    this.compaign_model.gender = gender;
  }

  getAdFormats() {
    var _this = this;
    this.ad_formats = [];
    WB_AD_FORMATS.forEach((ad_format: AdFormat) => {
      if (this.selectedObjective != null && ad_format.active==true) {
        if (ad_format.id == 'SINGLE_IMAGE' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC')
        ) {
          this.ad_formats.push(ad_format);
        } else if (ad_format.id == 'CAROUSEL_IMAGE' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC' ||
          this.selectedObjective.code == 'SELL_RENT')
        ) {
          this.ad_formats.push(ad_format);
        } else if (ad_format.id == 'MESSAGE_AD' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC' ||
          this.selectedObjective.code == 'SELL_RENT')
        ) {
          this.ad_formats.push(ad_format);
        } else if (ad_format.id == 'TEXT_AD' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC' ||
          this.selectedObjective.code == 'SELL_RENT')
        ) {
          this.ad_formats.push(ad_format);
        } else if (ad_format.id == 'SPOTLIGHT_AD' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC' ||
          this.selectedObjective.code == 'SELL_RENT')
        ) {
          this.ad_formats.push(ad_format);
        } else if (ad_format.id == 'FOLLOWER_AD' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC' ||
          this.selectedObjective.code == 'SELL_RENT')
        ) {
          this.ad_formats.push(ad_format);
        } else if (ad_format.id == 'VIDEO_AD' && (this.selectedObjective.code == 'APP_INSTALL' ||
          this.selectedObjective.code == 'BRAND_AWARE' ||
          this.selectedObjective.code == 'CONVERSION' ||
          this.selectedObjective.code == 'ENGAGE' ||
          this.selectedObjective.code == 'LEAD' ||
          this.selectedObjective.code == 'REACH' ||
          this.selectedObjective.code == 'TRAFFIC' ||
          this.selectedObjective.code == 'SELL_RENT' ||
          this.selectedObjective.code == 'VIDEO_VIEWS')
        ) {
          this.ad_formats.push(ad_format);
        } else { }
      }
    });

    if (this.ad_formats.length > 0) {
      this.setAdFormat(this.ad_formats[0]);
    }
  }

  setAdFormat(format: AdFormat) {
    this.ad_formats.forEach((f: AdFormat) => {
      if (format.id == f.id) {
        f.selected = true;
      } else {
        f.selected = false;
      }
    });
    this.compaign_model.ad_format = format.id;
  }

  saveAudience() {

  }

  saveBudgetSchedule() {

  }

  saveAdFormat() {

  }


}
