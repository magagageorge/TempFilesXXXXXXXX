import { Component, OnInit } from '@angular/core';
import { AdsService } from '@app/ads-manager/services/ads.service';
import { AdObjective } from '@app/ads-manager/models/ad-objective';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AdFormat, WB_AD_FORMATS } from '@app/ads-manager/models/ad-format';
import { GeoLocation, GeoLocationShort } from '@app/models/location';
import { UtilitiesService } from '@app/services/utilities.service';
import { Observable, of } from 'rxjs';
import { ArrayValidators } from '@app/libs/utilities/array.validators';
import { PageService } from '@app/services/page.service';
import { PageSummary } from '@app/models/page/page.model';
import { DatePipe } from '@angular/common';
import { SysFunctions } from '@app/libs/utilities/common-functions';
import { AdCompaign } from '@app/ads-manager/models/ad-compaign';
import { Router, ActivatedRoute } from '@angular/router';
import { AdContentForm } from '@app/ads-manager/models/ad-content';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [DatePipe]
})
export class CreateComponent implements OnInit {

  compaign_model: AdCompaignForm;
  ad_model: AdContentForm;
  selectedObjective: AdObjective = null;
  aud_ages: any[] = [];
  ad_formats: AdFormat[] = [];
  frm_objectiveGroup: FormGroup;
  frm_audienceGroup: FormGroup;
  frm_budgetscheduleGroup: FormGroup;
  frm_adformatGroup: FormGroup;
  frm_identityGroup: FormGroup;
  money_placeholder: string = 'xxx';
  location_search_query: string = '';
  loading_location_search: boolean = false;
  searchedLocationsList: GeoLocation[] = [];
  audience_submitted: boolean = false;
  identity_submitted: boolean = false;
  budgetschedule_submitted: boolean = false;
  objective_submitted: boolean = false;
  show_aud_loc_search: boolean = false;
  loading_compaign: boolean;
  constructor(public adsService: AdsService, public pageService: PageService, public utilitiesService: UtilitiesService, private formBuilder: FormBuilder, private datePipe: DatePipe, protected router: Router, protected route: ActivatedRoute) {
    var _this = this;
    this.getAges();
    this.adsService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) {
        if (_this.adsService.ad_account != null) {
          _this.money_placeholder = _this.adsService.ad_account.currency + 'xxx';
        }
      }
    });
    this.ad_model = new AdContentForm();
  }

  ngOnInit() {
    var _this = this;
    this.fillDefaultForm();
    this.setNextForm();

    this.frm_objectiveGroup = this.formBuilder.group(
      {
        objective: ['', Validators.required],
        compaign_name: ['', Validators.required]
      });

    this.frm_identityGroup = this.formBuilder.group(
      {
        page_id: ['', Validators.required]
      });

    this.frm_audienceGroup = this.formBuilder.group(
      {
        age_min: ['', Validators.required],
        age_max: ['', Validators.required],
        gender: ['', Validators.required],
        location_search_query: [],
        locations: this.formBuilder.array([], ArrayValidators.minLength(1))
      });

    this.frm_identityGroup = this.formBuilder.group(
      {
        page_id: ['', Validators.required]
      });

    this.frm_budgetscheduleGroup = this.formBuilder.group(
      {
        budget_type: ['', Validators.required],
        daily_budget: [''],
        total_budget: [''],
        start_date: ['', Validators.required],
        end_date: [''],
        date_schedule: ['', Validators.required],
      });

    this.frm_adformatGroup = this.formBuilder.group(
      {
        ad_format: ['', Validators.required],
      });

    this.handleFormChanges();
    /* Check for Ads Account and load if not loaded* */
    this.adsService.isAccountLoaded().subscribe((accountLoaded) => {
      if (accountLoaded) { } else {
        if (this.adsService.loading_ads_manager == false && this.adsService.ad_account == null) {
          this.adsService.loadAdsAccount({});
        }
      }
    });
    this.loadCompaign();
  }

  get obj() { return this.frm_objectiveGroup.controls; }

  get aud() { return this.frm_audienceGroup.controls; }

  get ident() { return this.frm_identityGroup.controls; }

  get budSche() { return this.frm_budgetscheduleGroup.controls; }

  get getFormLocations() {
    return this.frm_audienceGroup.get('locations') as FormArray;
  }
  get BudgetType() {
    return this.frm_budgetscheduleGroup.get('budget_type');
  }
  get DailyBudget() {
    return this.frm_budgetscheduleGroup.get('daily_budget');
  }
  get TotalBudget() {
    return this.frm_budgetscheduleGroup.get('total_budget');
  }
  get StartDate() {
    return this.frm_budgetscheduleGroup.get('start_date');
  }
  get EndDate() {
    return this.frm_budgetscheduleGroup.get('end_date');
  }
  get DateSchedule() {
    return this.frm_budgetscheduleGroup.get('date_schedule');
  }
  get isObjValid() {
    if (this.obj.objective.errors || this.obj.compaign_name.errors) {
      return false;
    }
    return true;
  }

  get isAudValid() {
    if (this.getFormLocations.errors || (this.compaign_model.aud_age_min > this.compaign_model.aud_age_max)) {
      return false;
    }
    return true;
  }

  get isBudScheValid() {
    var valid = true;
    if (this.BudgetType.errors || this.DailyBudget.errors || this.DateSchedule.errors || this.TotalBudget.errors || this.StartDate.errors || this.EndDate.errors || this.isStartEndDatesValid == false) {
      valid = false;
    }
    return valid;
  }

  get isStartEndDatesValid() {
    if (this.EndDate.value != '' && this.EndDate.value != undefined) {
      if (this.DateSchedule.value == 'start_end' && this.StartDate.value != '' && this.StartDate.value != undefined) {
        var Start_Date = this.datePipe.transform(SysFunctions.dateDMY_to_MDY(this.StartDate.value, "-"), "dd-MM-yyyy");
        var End_Date = this.datePipe.transform(SysFunctions.dateDMY_to_MDY(this.EndDate.value, "-"), "dd-MM-yyyy");
        if (Start_Date > End_Date) {
          return false;
        }
      }
    }
    return true;
  }

  handleFormChanges() {
    this.BudgetType.valueChanges.subscribe(
      budget_type => {
        if (budget_type === 'daily') {
          this.DailyBudget.setValidators([Validators.required]);
          this.TotalBudget.clearValidators();
        } else if (budget_type === 'total') {
          this.TotalBudget.setValidators([Validators.required]);
          this.DailyBudget.clearValidators();
        } else {
        }
        this.DailyBudget.updateValueAndValidity();
        this.TotalBudget.updateValueAndValidity();
      }
    );

    this.DateSchedule.valueChanges.subscribe(
      date_schedule => {
        if (date_schedule === 'continuous') {
          this.EndDate.clearValidators();
        } else if (date_schedule === 'start_end') {
          this.EndDate.setValidators([Validators.required]);
        } else {
        }
        this.EndDate.updateValueAndValidity();
      }
    );

  }

  createLocationGroup(key: any) {
    const loc = this.formBuilder.group({
      key: this.formBuilder.control(key),
    });
    this.getFormLocations.push(loc);
  }

  removeSelectedLocation(location: GeoLocationShort) {
    var index = this.compaign_model.aud_locations.findIndex((l: GeoLocationShort) => l.key == location.key);
    this.getFormLocations.removeAt(index);
    this.compaign_model.aud_locations = this.compaign_model.aud_locations.filter((loc: GeoLocationShort) => loc.key !== location.key);
    this.searchInSearchedLocations(location.key).subscribe(locn => {
      if (locn) {
        locn.selected = false;
      }
    });
  }

  countAdsInType(typeCode: string) {
    var items = this.adsService.filterObjectiveByType(typeCode);
    return items.length;
  }

  selectObjective(objective: AdObjective) {
    /* Set Default Compaign Name */
    if (this.compaign_model.id == null && (this.selectedObjective == null || (this.selectedObjective != null && objective.code != this.selectedObjective.code))) {
      this.compaign_model.compaign_name = objective.name;
    }
    this.adsService.unSelectAllObjectives();
    this.adsService.SelectObjective(objective.code);
    this.compaign_model.objective = objective.code;
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
        this.compaign_model.currentForm = 'AdIdentity';
      } else if (this.compaign_model.currentForm == 'AdIdentity') {
        this.compaign_model.currentForm = 'AdFormat';
      } else if (this.compaign_model.currentForm == 'AdFormat') {
        this.compaign_model.currentForm = 'AdContent';
      } else { }
    }
    this.adsService.setCompaingInEdit(this.compaign_model);
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
    this.compaign_model.date_schedule = 'continuous';
  }

  fillForm(compaign: AdCompaign) {
    this.compaign_model = this.adsService.setCompaignModelForm(compaign);
    this.selectObjective(compaign.objective);
    compaign.aud_locations.forEach((loc: GeoLocationShort) => {
      this.createLocationGroup(loc.key);
    });
    this.setNextForm();
    this.adsService.setCompaingInEdit(this.compaign_model);
  }

  setAdGender(gender: string) {
    this.compaign_model.gender = gender;
  }

  getAdFormats() {
    this.ad_formats = this.adsService.getAdFormats(this.selectedObjective);
    if (this.ad_formats.length > 0) {
      this.setAdFormat(this.ad_formats[0].id);
    }
  }

  setAdFormat(code: string) {
    if (code != null && code != '') {
      this.ad_formats.forEach((f: AdFormat) => {
        if (code == f.id) {
          f.selected = true;
        } else {
          f.selected = false;
        }
      });
    } else {
      code = this.ad_formats[0].id;
      this.setAdFormat(code);
    }
    this.ad_model.ad_format = code;
  }

  saveObjective() {
    this.objective_submitted = true;
    if (this.isObjValid == false) {
      return;
    }
    this.saveCompaign();
    this.setNextForm();
  }

  saveAudience() {
    this.audience_submitted = true;
    if (this.isAudValid == false) {
      return;
    }
    this.saveCompaign();
    this.setNextForm();
  }

  setSelectedPage(page: PageSummary) {
    this.ad_model.selected_page = page;
    this.ad_model.page_id = page.id;
  }

  ShowLocationSearch() {
    this.show_aud_loc_search = true;
  }

  clearLocationSearchBox() {
    this.location_search_query = '';
    this.searchLocation();
  }

  searchLocatoinFor(q: string) {
    this.location_search_query = q;
    this.searchLocation();
  }

  AgeRangeChanged() {

  }

  saveAdIdentity() {
    this.identity_submitted = true;
    if (this.ident.page_id.errors) {
      return;
    }
    this.setNextForm();
  }

  saveBudgetSchedule() {
    this.budgetschedule_submitted = true;
    if (this.isBudScheValid == false) {
      return;
    }
    this.saveCompaign();
    this.setNextForm();
  }

  saveAdFormat() {

  }

  addRemoveLocation(searchedLocation: GeoLocation) {
    var _this = this;
    this.searchInSelectedLocations(searchedLocation.key).subscribe((loc: GeoLocationShort) => {
      if (loc) {
        _this.removeSelectedLocation(loc);
      } else {
        searchedLocation.selected = true;
        _this.compaign_model.aud_locations.push({ key: searchedLocation.key, name: searchedLocation.name, type: searchedLocation.type });
        _this.createLocationGroup(searchedLocation.key);
      }
    });
  }

  searchInSelectedLocations(key: string): Observable<GeoLocationShort> {
    return of(this.compaign_model.aud_locations.find((loc: GeoLocationShort) => loc.key === key));
  }

  searchInSearchedLocations(key: string): Observable<GeoLocation> {
    return of(this.searchedLocationsList.find((loc: GeoLocation) => loc.key === key));
  }

  searchLocation(): any {
    var _this = this;
    if (this.location_search_query.trim().length > 2) {
      this.loading_location_search = true;
      this.utilitiesService.service.getProvider(this.utilitiesService.provider).crudconfig.route_url = 'utilities/locations/';
      return this.utilitiesService.service.getall(this.utilitiesService.provider, { q: this.location_search_query.trim() }).subscribe(results => {
        _this.loading_location_search = false;
        if (results.isSuccess()) {
          _this.searchedLocationsList = results.getResultData() as GeoLocation[];
          _this.autoCheckPreSelectedLocations();
        }
      });
    } else {
      _this.searchedLocationsList = [];
    }
  }

  autoCheckPreSelectedLocations() {
    var _this = this;
    if (this.compaign_model.aud_locations.length > 0) {
      this.compaign_model.aud_locations.forEach((s_loc: GeoLocation) => {
        _this.searchInSearchedLocations(s_loc.key).subscribe((loc: GeoLocation) => {
          if (loc) {
            loc.selected = true;
          }
        });
      });
    }
  }

  saveCompaign(): any {
    var _this = this;
    this.loading_compaign = true;
    /* Check for compaing-Account association,if not associated assign account to compaign */
    if (this.compaign_model.account_id == null) {
      this.compaign_model.account_id = this.adsService.ad_account.id;
    }

    const formData: any = new FormData();
    formData.append("account_id", _this.compaign_model.account_id);
    formData.append("aud_age_max", _this.compaign_model.aud_age_max);
    formData.append("aud_age_min", _this.compaign_model.aud_age_min);
    formData.append("compaign_name", _this.compaign_model.compaign_name);
    formData.append("objective", _this.compaign_model.objective);
    formData.append("aud_locations", JSON.stringify(_this.compaign_model.aud_locations));
    formData.append("aud_gender", _this.compaign_model.gender);
    formData.append("current_form", _this.compaign_model.currentForm);

    formData.append("budget_type", _this.compaign_model.budget_type);
    formData.append("daily_budget", _this.compaign_model.daily_budget);
    formData.append("total_budget", _this.compaign_model.total_budget);
    formData.append("start_date", _this.StartDate.value);
    formData.append("end_date", _this.EndDate.value);

    this.adsService.service.getProvider(this.adsService.provider).crudconfig.route_url = 'ads/compaign/';
    this.route.params.subscribe(params => {
      if (this.compaign_model.id > 0 && params.creation != undefined && params.creation > 0) {
        return this.adsService.service.update(this.adsService.provider, formData, { id: this.compaign_model.id }).subscribe(results => {
          _this.loading_compaign = false;
          if (results.isSuccess()) {
            var data = results.getResultData();
          }
        });
      } else {
        return this.adsService.service.create(this.adsService.provider, formData).subscribe(results => {
          _this.loading_compaign = false;
          if (results.isSuccess()) {
            var data = results.getResultData();
            if (data.done == true && data.compaign != null) {
              _this.router.navigateByUrl('adsmanager/compaigns/create/' + data.compaign.id);
            }
          }
        });
      }
    });
  }

  loadCompaign(): any {
    var _this = this;
    this.loading_compaign = true;
    this.adsService.service.getProvider(this.adsService.provider).crudconfig.route_url = 'ads/compaign/';
    this.route.params.subscribe(params => {
      if (params.creation != undefined && params.creation > 0) {
        return this.adsService.service.getone(this.adsService.provider, { id: params.creation }).subscribe(results => {
          _this.loading_compaign = false;
          if (results.isSuccess()) {
            var data = results.getResultData() as AdCompaign;
            if (data != null) {
              this.fillForm(data);
            }
          }
        });
      }
    });
  }


}
