import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { getDeepFromObject } from '@app/@crud/helpers';
import { CrudService } from '@app/@crud/services/crud.service';
import { cruddefaultSettings, CrudOptions, CRUD_OPTIONS, CRUD_USER_OPTIONS, CRUD_PROVIDERS, CRUD_INTERCEPTOR_HEADER } from '@app/@crud/crud.options';
import { CrudProvider } from '@app/@crud/providers/crud.provider';
import { SettingsModel } from '@app/models/settings/settings-model';
import { AccountSettings } from '@app/models/settings/account-settings';
import { UserPreferences } from '@app/models/settings/user-preference';
import { PrivacySettings } from '@app/models/settings/privacy-settings';
import { PersonalContactsInfo } from '@app/models/settings/personal-contacts-info';
import { NotificationSettings } from '@app/models/settings/notification-settings';

export interface SettingOption{
  key:string;
  value:string;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  service: CrudService;
  crudprovider: CrudProvider;
  protected crudconfig: {};
  protected router: Router;
  redirectDelay: number;
  showMessages: any;
  provider: string;
  submitted: boolean = false;
  loading_settings: boolean = false;
  errors: string[];
  modalRef: any;
  messages: string[];
  SETTINGS: SettingsModel = new SettingsModel();
  account_settings: AccountSettings = new AccountSettings();
  user_preferences: UserPreferences = new UserPreferences();
  privacy_settings: PrivacySettings = new PrivacySettings();
  personal_contacts: PersonalContactsInfo = new PersonalContactsInfo();
  notification_settings: NotificationSettings = new NotificationSettings();
  private_settings_options:SettingOption[]=[
    {key:'show_email_to',value:'Who can see my Email?'},
    {key:'show_posts_to',value:'Share my Posts with'},
    {key:'show_phone_to',value:'Who can see my Phone Number?'},
    {key:'show_online_status_to',value:'Show my Online Chat Status to'},
    {key:'show_birthdate_to',value:'Who can see my Birthday?'},
    {key:'who_send_request',value:'Who Can Send me  Requests?'},
    {key:'who_post_onwall',value:'Who can Post on Your Wall?'}
  ];

  constructor(service: CrudService, @Inject(CRUD_OPTIONS) CRUD_OPTIONS: CrudOptions, private _modalService: NgbModal, router: Router) {
    this.service = service;
    this.crudconfig = CRUD_OPTIONS;
    this.router = router;
    this.loadSettings();
  }

  loadSettings(params?: {}): any {
    this.loading_settings = true;
    this.provider = this.getConfigValue('forms.getall.provider');
    this.service.getProvider(this.provider).crudconfig.route_url = 'settings/default/';
    var _this = this;
    return this.service.getall(this.provider, params).subscribe(results => {
      _this.loading_settings = false;
      if (results.isSuccess()) {
        _this.SETTINGS = results.getResultData() as SettingsModel;
        _this.account_settings = _this.SETTINGS.AccountSettings;
        _this.notification_settings = _this.SETTINGS.NotificationSettings;
        _this.personal_contacts = _this.SETTINGS.PersonalContacts;
        _this.privacy_settings = _this.SETTINGS.PrivacySettings;
        _this.user_preferences = _this.SETTINGS.UserPreferences;
      }
    });
  }


  getConfigValue(key: string): any {
    return getDeepFromObject(this.crudconfig, key, null);
  }

}
