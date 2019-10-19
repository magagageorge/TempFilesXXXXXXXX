import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import * as cloneDeep from 'lodash/cloneDeep';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { Observable, of } from 'rxjs';
import { Country } from '@app/models/country';
import { AccountSettings } from '@app/models/settings/account-settings';
import { UtilitiesService } from '@app/services/utilities.service';
import { ProfileService } from '@app/services/profile.service';
import { SettingsService } from '../services/settings.service';

export interface AccountForm {
  edit_username: boolean,
  edit_primary_email: boolean,
  edit_mobile_phone: boolean,
  edit_timezone: boolean,
  edit_language: boolean
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  title: string = "Account Settings";
  parent_route: string = "settings";
  missionModel: any = {};
  accountGroup: FormGroup;
  careerGroup: FormGroup;
  missionGroup: FormGroup;
  verifyGroup: FormGroup;
  protected service: CrudService;
  protected crudconfig: {};
  protected router: Router;
  showMessages: any;
  provider: string;
  errors: string[];
  messages: string[];
  submitted: boolean;
  countries: Country[] = [];
  curr_year: any;
  parameters: any = {};
  resultData: string[];
  str_success_code: string;
  str_invalid_code: string;
  code_resent: boolean = false;
  resending_code: boolean = false;
  utilitiesService: UtilitiesService;
  profileService: ProfileService;
  settingsService: SettingsService;
  accountForm: AccountForm = { edit_username: false, edit_primary_email: false, edit_mobile_phone: false, edit_timezone: false, edit_language: false };
  Local_Account_settings:any;
  acc_username:string='';
  acc_timezone:string='';
  acc_language:string='';
  acc_mobile:string='';
  acc_email:string='';

  constructor(settingsService: SettingsService, utilitiesService: UtilitiesService, profileService: ProfileService, private formBuilder: FormBuilder, service: CrudService, router: Router, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions) {
    this.service = service;
    this.utilitiesService = utilitiesService;
    this.profileService = profileService;
    this.crudconfig = CRUD_OPTIONS;
    this.settingsService = settingsService;
    this.router = router;
    this.showMessages = {};
    this.provider = '';
    this.errors = [];
    this.messages = [];
    this.submitted = false;
    this.provider = this.getConfigValue('forms.update.provider');
  }

  ngOnInit() {
    var __this = this;
    this.accountGroup = this.formBuilder.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      language: ['', [Validators.required]],
      timezone: ['', [Validators.required]],
      url: ['', [Validators.required]],
      account_email: ['', [Validators.email, Validators.required]]

    });
  }

  get f() { return this.accountGroup.controls; }

  save(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.accountGroup.invalid) {
      return;
    }
    var _this = this;
    this.errors = this.messages = [];
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/account/';
    this.service.update(this.provider, this.settingsService.account_settings, this.parameters).subscribe(function (result) {
      _this.submitted = false;
      if (result.isSuccess()) {
        _this.messages = result.getMessages();
        var res = result.getResultData();
        if (res.done) {
          _this.settingsService.account_settings = res.data as AccountSettings;
          _this.settingsService.SETTINGS.AccountSettings = res.data as AccountSettings;
          return;
        }
      }
      else {
        _this.errors = result.getErrors();
      }
    });
    return;
  }

  FormEditUsername(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_username = state;
  }

  FormEditPEmail(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_primary_email = state;
  }

  FormEditMobilePhone(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_mobile_phone = state;
  }

  FormEditTimezone(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_timezone = state;
  }

  FormEditLanguage(state:boolean) {
    this.PreserveSettigns();
    this.ResetEdits();
    this.accountForm.edit_language = state;
  }

  ResetEdits(){
    this.accountForm= { edit_username: false, edit_primary_email: false, edit_mobile_phone: false, edit_timezone: false, edit_language: false };
  }

  CanceEdit(){
    this.PreserveSettigns();
    this.ResetEdits();
  }

  PreserveSettigns(){ 
    if(this.accountForm.edit_username==true || this.accountForm.edit_primary_email==true || this.accountForm.edit_mobile_phone==true || this.accountForm.edit_timezone==true || this.accountForm.edit_language==true){
      this.settingsService.account_settings.url=this.acc_username;
      this.settingsService.account_settings.timezone=this.acc_timezone;
      this.settingsService.account_settings.language=this.acc_language;
      this.settingsService.account_settings.mobile=this.acc_mobile;
      this.settingsService.account_settings.account_email=this.acc_email;
    }else{
      this.acc_username=this.settingsService.account_settings.url;
      this.acc_timezone=this.settingsService.account_settings.timezone;
      this.acc_language=this.settingsService.account_settings.language;
      this.acc_mobile=this.settingsService.account_settings.mobile;
      this.acc_email=this.settingsService.account_settings.account_email;
    }
  }

  


  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
